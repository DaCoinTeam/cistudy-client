import { environment } from "@config"
import axios from "axios"
import { ErrorResponse, api } from "@utils"

export default class AuthService {
    baseUrl: string
    constructor() {
        this.baseUrl = `${environment.endpoint().restful}/auth`
    }

    async signUp(token: string): Promise<string | ErrorResponse> {
        try {
            const url = `${this.baseUrl}/verify-google-access-token`
            const response = await axios.get(
                url,
                api.createHeadersWithBearerToken(token)
            )
            return response.data as string
        } catch (ex) {
            return ex as ErrorResponse
        }
    }
}
