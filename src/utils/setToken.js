// Token 封装
export function setToKen(tokenKey,toKen){
    return localStorage.setItem(tokenKey,toKen)
}
export function getToken(tokenKey){
    return localStorage.getItem(tokenKey)
}
export function removeToken(tokenKey){
    return localStorage.removeItem(tokenKey)
}