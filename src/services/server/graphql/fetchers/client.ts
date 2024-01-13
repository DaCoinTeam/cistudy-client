import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { environment } from "@config"
import { AuthTokenType, storage } from "@utils"

const httpLink = createHttpLink({
    uri: environment.endpoint().graphql,
})

const link = (type: AuthTokenType | null = null) =>
    setContext((_, { headers }) => {
        if (!type) return headers
        
        const token = storage.getAuthToken(type)
        return {
            headers: {
                ...headers,
                Authorization: token ? `Bearer ${token}` : "",
            },
        }
    })

export const client = (type: AuthTokenType | null = null) =>
    new ApolloClient({
        link: link(type).concat(httpLink),
        cache: new InMemoryCache(),
    })
