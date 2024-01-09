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


const storage = {
    saveTokens
}

export default storage