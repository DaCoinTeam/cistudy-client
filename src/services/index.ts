export * from "./server"
export * from "./3rd"
export * from "./next"

export * from "./graphql"

import graphQLService from "./graphql"
import { nextServices } from "./next"

const services = {
    next: nextServices,
    graphQL: graphQLService
}

export default services

