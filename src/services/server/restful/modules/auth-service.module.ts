import { environment } from "@config"
import axios from "axios"
import { ErrorResponse } from "@utils"

export default class AuthService {
    baseUrl: string
    constructor() {
        this.baseUrl = `${environment.endpoint().restful}/auth`
    }

    async signUp(
        params: {
            email: string,
            password: string,
            firstName: string,
            lastName: string,
            birthdate: Date
        }): Promise<string | ErrorResponse> {
        try {
            const url = `${this.baseUrl}/sign-up`
            const response = await axios.post(
                url, params
            )
            return response.data as string
        } catch (ex) {
            return ex as ErrorResponse
        }
    }
}
