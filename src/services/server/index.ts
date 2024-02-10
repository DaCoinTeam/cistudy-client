export * from "./api"
export * from "./graphql"

import { api } from "./api"
import { graphql } from "./graphql"

export const server = {
    api,
    graphql,
}
