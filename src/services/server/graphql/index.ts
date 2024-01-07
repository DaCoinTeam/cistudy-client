export * from "./dto"
export * from "./modules"

import { Auth } from "./modules"

const graphQLService = {
    auth : new Auth(),
}

export default graphQLService