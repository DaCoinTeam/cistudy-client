import { v4 as uuidv4 } from "uuid"

const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"
const CLIENT_ID = "clientId"

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

const saveTokens = (tokens: Tokens) => {
    localStorage.setItem("accessToken", tokens.accessToken)
    localStorage.setItem("refreshToken", tokens.refreshToken)
}

export enum AuthTokenType {
  Access = "Access",
  Refresh = "Refresh",
}

const getAuthToken = (type: AuthTokenType): string | null =>
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

const storage = {
    saveTokens,
    getAuthToken,
    generateClientId,
    getClientId
}

export default storage
