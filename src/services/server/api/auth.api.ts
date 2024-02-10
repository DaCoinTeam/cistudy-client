import { endpointConfig } from "@config"
import { AuthTokenType, ErrorResponse, StatusCode, storage } from "@utils"
import { UserEntity, Response } from "../shared"
import axios, { AxiosError } from "axios"

const BASE_URL = `${endpointConfig().api}/auth`

export const init = async (
    authTokenType: AuthTokenType = AuthTokenType.Access
): Promise<UserEntity | ErrorResponse> => {
    try {
        let url = `${BASE_URL}/init`
        url = storage.appendClientIdToQuery(url)!

        const response = await axios.get(url, {
            headers: {
                Authorization: storage.buildBearerTokenHeader(authTokenType),
            },
        })

        const { data, tokens } = response.data as Response<UserEntity>

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

export const signIn = async (params: {
  email: string
  password: string
}): Promise<UserEntity | ErrorResponse> => {
    try {
        let url = `${BASE_URL}/sign-in`
        url = storage.appendClientIdToQuery(url)!
        const response = await axios.post(url, params)
        const { data, tokens } = response.data as Response<UserEntity>

        storage.saveTokens(tokens)

        return data
    } catch (ex) {
        return (ex as AxiosError).response?.data as ErrorResponse
    }
}

export const signUp = async (params: {
  email: string
  password: string
  firstName: string
  lastName: string
  birthdate: Date
}): Promise<string | ErrorResponse> => {
    try {
        let url = `${BASE_URL}/sign-up`
        url = storage.appendClientIdToQuery(url)!
        const response = await axios.post(url, params)
        return response.data as string
    } catch (ex) {
        return (ex as AxiosError).response?.data as ErrorResponse
    }
}

export const verifyGoogleAccessToken = async (params: {
  token: string
}): Promise<UserEntity | ErrorResponse> => {
    try {
        let url = `${BASE_URL}/verify-google-access-token`
        url = storage.appendClientIdToQuery(url)!
        const urlInstance = new URL(url)
        urlInstance.searchParams.append("token", params.token)
        url = urlInstance.toString()

        const response = await axios.get(url)
        const { data, tokens } = response.data as Response<UserEntity>

        storage.saveTokens(tokens)

        return data
    } catch (ex) {
        return (ex as AxiosError).response?.data as ErrorResponse
    }
}

export const auth = {
    init,
    signIn,
    signUp,
    verifyGoogleAccessToken
}