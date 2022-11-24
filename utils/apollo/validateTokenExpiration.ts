import jwtDecode, { JwtPayload } from "jwt-decode";

const ACCESS_TOKEN_BUFFER = 1000 * 60 // 1 minute

export const validateTokenExpiration = (token: string): boolean => {
    if(!token) return false
    const { exp } = jwtDecode<JwtPayload>(token)
    if(typeof exp !== 'number') return false;
    const buffer = Date.now() + ACCESS_TOKEN_BUFFER
    const expiration = exp * 1000
    if(buffer > expiration) return false;
    return true;
}