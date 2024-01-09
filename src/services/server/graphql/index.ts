export * from "../dtos"
export * from "./modules"

import { Auth } from "./modules"

const graphqlService = {
    auth : new Auth(),
}

export default graphqlService