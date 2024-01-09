export * from "./modules"
export * from "./shared"

import { Auth } from "./modules"

const graphqlService = {
    auth : new Auth(),
}

export default graphqlService