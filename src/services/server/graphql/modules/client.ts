import { ApolloClient, InMemoryCache } from "@apollo/client"
import { endpointConfig } from "@config"

export const client = new ApolloClient({
    uri: endpointConfig().graphql,
    cache: new InMemoryCache(),
})
