import $api from "../http";

export default class AccountInfo {
    static fetchInfoAccount() {
        return $api.get('/v1/account/info ')
    }
}
