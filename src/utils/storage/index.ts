export interface Tokens {
    accessToken: string,
    refreshToken: string
}

const saveTokens =(
    tokens: Tokens
) => {
    localStorage.setItem("accessToken", tokens.accessToken)
    localStorage.setItem("refreshToken", tokens.refreshToken)
}

export enum AuthTokenType {
    Access,
    Refresh,
  }
  
const getAuthToken = (type: AuthTokenType): string | null =>
    localStorage.getItem(
        type == AuthTokenType.Access ? "accessToken" : "refreshToken"
    )


const storage = {
    saveTokens,
    getAuthToken
}

export default storage