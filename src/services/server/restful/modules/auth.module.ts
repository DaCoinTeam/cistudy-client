import { SERVER_ENDPOINT } from "@config"
import axios from "axios"
import utils from "@utils"
import { UserDto } from "../../dto"

export default class Auth {
    baseUri: string
    constructor() {
        this.baseUri = `${SERVER_ENDPOINT}auth/`
    }

    async verifyGoogleAccessToken(token: string): Promise<UserDto | null> {
        try {
            const uri = `${this.baseUri}/verify-google-access-token`
            const response = await axios.get(
                uri,
                utils.api.createHeadersWithBearerToken(token)
            )
            return response.data as UserDto
        } catch (ex) {
            console.log(ex)
            return null
        }
    }
}
