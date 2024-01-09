export * from "./modules"
export * from "./shared"

import { AuthService } from "./modules"

const graphql = {
    auth : new AuthService(),
}

export default graphql