import { ApolloClient, InMemoryCache } from "@apollo/client"
import { environment } from "@config"

export const client = new ApolloClient({
    uri: environment.endpoint().graphql,
    cache: new InMemoryCache(),
})
