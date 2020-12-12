import request from "@u/axios"
class UserApi { 
    async getUserInfo(parmas) { 
        try {
            return request("/api/userInfo","GET",parmas) 
        } catch (err) { 
            throw new Error(err)
        }
    }
}
export default new UserApi