import { signUp, init, signIn, verifyGoogleAccessToken } from "./fetchers"

const restful = {
    auth : { signUp, init, signIn, verifyGoogleAccessToken },
}

export default restful