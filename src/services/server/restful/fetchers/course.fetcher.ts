import { environment } from "@config"
import axios from "axios"
import { ErrorResponse } from "@utils"

const baseUrl = `${environment.endpoint().graphql}/auth`

export const signUp = async (
    params: {
            email: string,
            password: string,
            firstName: string,
            lastName: string,
            birthdate: Date
        }): Promise<string | ErrorResponse> => {
    try {
        const url = `${baseUrl}/sign-up`
        const response = await axios.post(
            url, params
        )
        return response.data as string
    } catch (ex) {
        return ex as ErrorResponse
    }
}