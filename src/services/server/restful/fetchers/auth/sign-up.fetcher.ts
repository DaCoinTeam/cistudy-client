import { environment } from "@config"
import axios, { AxiosError } from "axios"
import {
    ErrorResponse,
    storage,
} from "@utils"

const BASE_URL = `${environment.endpoint().restful}/auth/sign-up`

const signUp = async (params: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
}): Promise<string | ErrorResponse> => {
    try {
        const url = storage.appendClientIdToQuery(BASE_URL)!
        const response = await axios.post(url, params)
        return response.data as string
    } catch (ex) {
        return (ex as AxiosError).response?.data as ErrorResponse
    }
}

export default signUp