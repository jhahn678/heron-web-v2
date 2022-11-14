import create from "zustand"
import axios from '../../config/axios'

export interface TokenResponse {
    accessToken: string,
    refreshToken: string, 
}

export interface AuthResponse extends TokenResponse{
    id: number,
    firstname: string,
    username: string, 
    avatar: string, 
}

export interface AuthStore {
    id: number | null
    firstname: string | null
    username: string | null
    avatar: string | null
    isAuthenticated: boolean,
    setUser: (data: AuthResponse, isAuthenticated?: boolean) => Promise<void>,
    setAuthenticated: (authenticated: boolean) => void
    signOut: () => Promise<void>,
    autoSignIn: (token: string) => Promise<void>,
    getAccessToken: () => Promise<string | null>,
    setDetails: (args: { firstname?: string, username?: string, avatar?: string }) => void
}


export const useAuth = create<AuthStore>((set) => ({
    id: null,
    firstname: null,
    username: null,
    avatar: null,
    isAuthenticated: false,
    setUser: async (data: AuthResponse, isAuthenticated=true) => {
        const { accessToken, refreshToken, ...user } = data;
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
            isAuthenticated: false
        })
    },
    autoSignIn: async () => {
        try{
            const { data } = await axios
                .post<AuthResponse>('/auth/token', { includeUser: true })
            const { accessToken, refreshToken, ...user } = data;
            set({ isAuthenticated: true, ...user })
        }catch(err){
            console.error('auto sign in failed', err);
        }
    },
    getAccessToken: async () => {
        try{
            const { data } = await axios.post<TokenResponse>('/auth/token')
            return data.accessToken
        }catch(err){
            console.error('error getting/refreshing access token', err)
            set({ isAuthenticated: false })
            return null;
        }
    }
}))