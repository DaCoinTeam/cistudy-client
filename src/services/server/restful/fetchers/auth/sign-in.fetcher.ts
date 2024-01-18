import { environment } from "@config"
import axios, { AxiosError } from "axios"
import {
    ErrorResponse,
    storage,
} from "@utils"
import { Response, User } from "../../../shared"

const BASE_URL = `${environment.endpoint().restful}/auth/sign-in`

const signIn = async (
    params: {
        email: string,
        password: string
    }
): Promise<User | ErrorResponse> => {
    try {
        const url = storage.appendClientIdToQuery(BASE_URL)!
        const response = await axios.post(url, params)
        const { data , tokens } = response.data as Response<User>
        
        storage.saveTokens(tokens)

        return data
    } catch (ex) {
        return (ex as AxiosError).response?.data as ErrorResponse
    }
}

export default signIn