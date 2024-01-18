import { v4 as uuidv4 } from "uuid"

const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"
const CLIENT_ID = "clientId"

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

const saveTokens = (tokens: AuthTokens) => {
    localStorage.setItem("accessToken", tokens.accessToken)
    localStorage.setItem("refreshToken", tokens.refreshToken)
}

export enum AuthTokenType {
  Access = "Access",
  Refresh = "Refresh",
}

const getAuthToken = (type: AuthTokenType = AuthTokenType.Access): string | null =>
    localStorage.getItem(
        type == AuthTokenType.Access ? ACCESS_TOKEN : REFRESH_TOKEN
    )

const generateClientId = () => {
    const clientId = localStorage.getItem(CLIENT_ID)
    if (clientId) return
    localStorage.setItem(CLIENT_ID, uuidv4())
}

const getClientId = () : string | null => {
    return localStorage.getItem(CLIENT_ID)
}

const buildBearerTokenHeader  = (type: AuthTokenType = AuthTokenType.Access) => `Bearer ${getAuthToken(type)}`

const appendClientIdToQuery = (url: string) : string | null => {
    const clientId = getClientId()
    if (!clientId) return null
    const urlInstance = new URL(url)
    urlInstance.searchParams.append("clientId", clientId)
    console.log(urlInstance.toString())
    return urlInstance.toString()
}

const storage = {
    saveTokens,
    getAuthToken,
    generateClientId,
    getClientId,
    buildBearerTokenHeader,
    appendClientIdToQuery
}

export default storage
