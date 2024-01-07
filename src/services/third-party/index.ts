export * from "./ipfs"
export * from "./pinata"
export * from "./firebase"

import firebaseService from "./firebase"

export const thirdPartyService = {
    firebase: firebaseService
}