export * from "./ipfs"
export * from "./pinata"
export * from "./firebase"

import firebaseService from "./firebase"

const thirdPartyService = {
    firebase: firebaseService
}

export default thirdPartyService