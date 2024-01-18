import { environment } from "@config"
import axios, { AxiosError } from "axios"
import {
    AuthTokenType,
    ErrorResponse,
    StatusCode,
    storage,
} from "@utils"
import { Response, UserDto } from "../../../shared"

const BASE_URL = `${environment.endpoint().restful}/auth/init`

const init = async (
    authTokenType: AuthTokenType = AuthTokenType.Access
): Promise<UserDto | ErrorResponse> => {
    try {
        const url = storage.appendClientIdToQuery(BASE_URL)!

        const response = await axios.get(url, {
            headers: {
                Authorization: storage.buildBearerTokenHeader(authTokenType),
            },
        })

        const { data , tokens } = response.data as Response<UserDto>

        if (authTokenType === AuthTokenType.Refresh) storage.saveTokens(tokens)

        return data
    } catch (ex) {
        const _ex = (ex as AxiosError).response?.data as ErrorResponse
        const { statusCode } = _ex
        console.log(statusCode)
        if (
            statusCode === StatusCode.Unauthorized &&
      authTokenType === AuthTokenType.Access
        ) {
            return await init(AuthTokenType.Refresh)
        }
        return _ex
    }
}

export default init