import $api from "../http";

export default class AuthService {
    static async login(login, password) {
        return $api.post('v1/account/login', {login, password})
    }

    static async logout() {
        return $api.post('/logout')
    }

}
