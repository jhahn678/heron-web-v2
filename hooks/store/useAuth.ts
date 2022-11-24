import create from "zustand"
import axios from '../../config/axios'
import { Tokens } from "../../types/LocalStorage"

export interface TokenResponse {
    accessToken: string,
    refreshToken: string, 
}

export interface AuthResponse extends TokenResponse{
    id: number,
    firstname: string,
    lastname: string,
    username: string, 
    avatar: string, 
}

export interface AuthStore {
    id: number | null
    firstname: string | null
    lastname: string | null
    username: string | null
    avatar: string | null
    isAuthenticated: boolean,
    setUser: (data: AuthResponse, isAuthenticated?: boolean) => Promise<void>,
    setAuthenticated: (authenticated: boolean) => void
    signOut: () => Promise<void>,
    autoSignIn: () => Promise<void>,
    getAccessToken: () => Promise<string | null>,
    setDetails: (args: { firstname?: string, username?: string, avatar?: string }) => void
}


export const useAuth = create<AuthStore>((set) => ({
    id: null,
    firstname: null,
    lastname: null,
    username: null,
    avatar: null,
    isAuthenticated: false,
    setUser: async (data: AuthResponse, isAuthenticated=true) => {
        const { accessToken, refreshToken, ...user } = data;
        localStorage.setItem(Tokens.accessToken, accessToken)
        set({ isAuthenticated, ...user })
    },
    setAuthenticated: isAuthenticated => set({ isAuthenticated }),
    setDetails: details => set({ ...details }),
    signOut: async () => {
        set({
            id: null,
            avatar: null,
            username: null,
            firstname: null,
            lastname: null,
            isAuthenticated: false,
        })
        localStorage.removeItem(Tokens.accessToken);
        axios.post('/auth/logout', {}, { withCredentials: true })
            .catch(err => console.error(err))
    },
    autoSignIn: async () => {
        try{
            const { data } = await axios.post<AuthResponse>(
                '/auth/token', 
                { includeUser: true }, 
                { withCredentials: true })
            const { accessToken, refreshToken, ...user } = data;
            localStorage.setItem(Tokens.accessToken, accessToken)
            set({ isAuthenticated: true, ...user })
        }catch(err){
            console.error('auto sign in failed', err);
        }
    },
    getAccessToken: async () => {
        try{
            const { data } = await axios.post<TokenResponse>('/auth/token', {}, { withCredentials: true })
            localStorage.setItem(Tokens.accessToken, data.accessToken)
            return data.accessToken;
        }catch(err){
            console.error('error getting/refreshing access token', err)
            set({ isAuthenticated: false })
            return null;
        }
    }
}))