import graphQLService from "./graphql"
import restfulService from "./restful"

export * from "./graphql"
export * from "./restful"

const serverService = {
    graphQL: graphQLService,
    restful: restfulService
}

export default serverService