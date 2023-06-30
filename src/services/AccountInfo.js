import $api from "../http";

export default class AccountInfo {
    static fetchInfoAccount() {
        return $api.get('/info ')
    }
}
