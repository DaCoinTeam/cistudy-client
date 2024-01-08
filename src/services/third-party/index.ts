export * from "./ipfs"
export * from "./pinata"
export * from "./firebase"

import firebase from "./firebase"

export { firebase }

const thirdParty = {
    firebase
}

export default thirdParty