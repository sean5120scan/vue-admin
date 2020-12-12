import request from "@u/axios"
class AuthApi { 
    async login(parmas) { 
        try {
            return request("/api/login","POST",parmas,true) 
        } catch (err) { 
            throw new Error(err)
        }
    }
}
export default new AuthApi