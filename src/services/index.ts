export * from "./server"
export * from "./third-party"
export * from "./next"

export * from "./graphql"

import graphQLService from "./graphql"
import { nextServices } from "./next"
import { thirdPartyService } from "./third-party"

const services = {
    next: nextServices,
    graphQL: graphQLService,
    thirdParty: thirdPartyService
}

export default services

