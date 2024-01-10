export * from "./fetchers"
export * from "./shared"

import { init, signIn, verifyGoogleAccessToken } from "./fetchers"

const graphql = {
    auth: {
        init,
        signIn,
        verifyGoogleAccessToken,
    },
}

export default graphql
