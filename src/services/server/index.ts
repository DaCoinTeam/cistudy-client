export * from "./api"
export * from "./graphql"
export * from "./shared"

import { api } from "./api"
import { graphql } from "./graphql"

export const server = {
    api,
    graphql,
}
