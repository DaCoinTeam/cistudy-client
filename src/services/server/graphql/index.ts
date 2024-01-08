export * from "../dto"
export * from "./modules"

import { Auth } from "./modules"

const graphqlService = {
    auth : new Auth(),
}

export default graphqlService