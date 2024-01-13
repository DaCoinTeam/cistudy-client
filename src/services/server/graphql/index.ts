export * from "./fetchers"
export * from "./shared"

import { findById, init, signIn, verifyGoogleAccessToken } from "./fetchers"

const graphql = {
    auth: {
        init,
        signIn,
        verifyGoogleAccessToken,
    },
    course: {
        findById
    }
}

export default graphql
