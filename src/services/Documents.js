import $api from "../http";

export default class Documents {
    static async fetchDocuments(arr) {
        return $api.post('v1/documents', {
          "ids": [
            ...arr
          ]
        })
    }
}