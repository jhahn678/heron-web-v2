export const getFromLocalStorage = (key: string): string | undefined => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem(key);
    }
}