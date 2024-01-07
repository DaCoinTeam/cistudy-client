export * from "./dto"
export * from "./modules"

import { AuthGraphQL } from "./modules"

const graphQLService = {
    auth : new AuthGraphQL(),
}

export default graphQLService