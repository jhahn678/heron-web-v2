import { 
    ApolloLink,
    FetchResult, 
    NextLink, 
    Observable, 
    Observer, 
    Operation
} from "@apollo/client"
import axios from "../../config/axios"
import { Tokens } from "../../types/LocalStorage"
import { TokenResponse } from "../../types/User"
import { validateTokenExpiration } from "./validateTokenExpiration"


interface QueuedOperation {
    operation: Operation,
    forward: NextLink
    observer: Observer<FetchResult>
}

export class RefreshTokenLink extends ApolloLink {

    private isFetching: boolean = false;
    private operationQueue: QueuedOperation[] = [];
    private onReauthenticate: () => void;

    constructor(handleReauthenticate?: () => void){
        super()
        if(handleReauthenticate){
            this.onReauthenticate = handleReauthenticate;
        }
    }

    private enqueue(operation: QueuedOperation){
        this.operationQueue.push(operation)
    }

    private cancelOperation(entry: QueuedOperation){
        this.operationQueue = this.operationQueue.filter(op => op !== entry)
    }

    private executeQueue(token?: string){
        this.isFetching = false;
        this.operationQueue.forEach(({ operation, forward, observer }) => {
            this.setAuthorization(operation, token)
            forward(operation).subscribe(observer)
        })
    }

    private setAuthorization(operation: Operation, token?: string): void{
        const authorization = typeof token === 'string' ? `Bearer ${token}` : undefined
        operation.setContext(({ headers={}, ...context }) => ({
            ...context,
            headers: {
                ...headers,
                authorization
            }
        }))
    }

    private async getNewAccessToken(){
        return axios.post<TokenResponse>('/auth/token', {}, { withCredentials: true })
            .then(({ data }) => {
                localStorage.setItem(Tokens.accessToken, data.accessToken)
                return data.accessToken;
            })
    }


    public request(
        operation: Operation, 
        forward: NextLink
    ): Observable<FetchResult> | null{
        if(this.isFetching) return new Observable<FetchResult>((observer: Observer<FetchResult>) => {
            const entry = { operation, forward, observer }
            this.enqueue(entry)
            return () => this.cancelOperation(entry)
        })
        let token = localStorage.getItem(Tokens.accessToken)
        const valid = validateTokenExpiration(token)
        if(valid){
            return new Observable<FetchResult>((observer: Observer<FetchResult>) => {
                this.setAuthorization(operation, token)
                forward(operation).subscribe(observer)
                this.executeQueue(token)
            })
        }else if(token){
            this.isFetching = true;
            return new Observable<FetchResult>((observer: Observer<FetchResult>) => {
                localStorage.removeItem(Tokens.accessToken)
                this.getNewAccessToken()
                    .then(newToken => {
                        this.setAuthorization(operation, newToken)
                        forward(operation).subscribe(observer)
                        this.executeQueue(newToken)
                    })
                    .catch((err) => {
                        console.log(err)
                        if(err.status === 401){
                            //If refreshing token fails due to expired refresh token
                            //Redirect user to login page
                            //Reload should clear auth state
                            this.onReauthenticate()
                        }else{
                            this.setAuthorization(operation)
                            forward(operation).subscribe(observer)
                            this.executeQueue()
                        }
                    })
            })
        }else{
            return new Observable<FetchResult>((observer: Observer<FetchResult>) => {
                this.setAuthorization(operation)
                forward(operation).subscribe(observer)
                this.executeQueue()
            })
        }
    }
}