import {storage} from "../storage"

const tokenKey = 'token'

export const sessionHelper = {
    setToken(val) {
        storage.set(tokenKey, val)
        return true
    },
    getToken() {
        const token = storage.get(tokenKey)
        if (token) {
            return token
        }
        return null
    }
}
