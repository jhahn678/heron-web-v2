export const nameToInitials = (
    first: string | null | undefined, 
    last: string | null | undefined
): string | undefined => {
    if(first && last) return `${first.charAt(0)}${last.charAt(0)}`
    if(first) return first.charAt(0)
    if(last) return last.charAt(0)
    return undefined;
}