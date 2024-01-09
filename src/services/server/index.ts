import graphql from "./graphql"
import restful from "./restful"

export * from "./graphql"
export * from "./restful"
export * from "./dtos"

const server = {
    graphql,
    restful
}

export default server