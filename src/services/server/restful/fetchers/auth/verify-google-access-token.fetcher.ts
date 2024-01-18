import { environment } from "@config"
import axios, { AxiosError } from "axios"
import {
    ErrorResponse,
    storage,
} from "@utils"
import { Response, User } from "../../../shared"

const BASE_URL = `${environment.endpoint().restful}/auth/verify-google-access-token`

const verifyGoogleAccessToken = async (
    params: {
        token: string
    }
): Promise<User | ErrorResponse> => {
    try {
        let url = storage.appendClientIdToQuery(BASE_URL)!
        const urlInstance = new URL(url)
        urlInstance.searchParams.append("token", params.token)
        url = urlInstance.toString()

        const response = await axios.get(url)
        const { data , tokens } = response.data as Response<User>
        
        storage.saveTokens(tokens)

        return data
    } catch (ex) {
        return (ex as AxiosError).response?.data as ErrorResponse
    }
}

export default verifyGoogleAccessToken