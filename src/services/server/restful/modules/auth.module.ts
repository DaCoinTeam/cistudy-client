import { endpointConfig } from "@config"
import axios from "axios"
import utils from "@utils"
import { UserDto } from "../../dtos"

export default class Auth {
    baseUrl: string
    constructor() {
        this.baseUrl = `${endpointConfig().restful}/auth`
    }

    async signUp(token: string): Promise<UserDto | null> {
        try {
            const url = `${this.baseUrl}/verify-google-access-token`
            const response = await axios.get(
                url,
                utils.api.createHeadersWithBearerToken(token)
            )
            return response.data as UserDto
        } catch (ex) {
            console.log(ex)
            return null
        }
    }
}
