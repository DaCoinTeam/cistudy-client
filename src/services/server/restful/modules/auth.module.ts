import { SERVER_ENDPOINT } from "@config"
import axios from "axios"
import utils from "@utils"

export default class Auth {
    baseUri: string 
    constructor(){
        this.baseUri = `${SERVER_ENDPOINT}auth/`
    }

    async verifyGoogleAccessToken(token: string) {
        const uri = `${this.baseUri}/verify-google-access-token`
        return await axios.get(uri, utils.api.createHeadersWithBearerToken(token))
    }
}