import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { environment } from "@config"
import { AuthTokenType, storage } from "@utils"

const httpLink = createHttpLink({
    uri: environment.endpoint().graphql,
})

const authorizedLink = (type: AuthTokenType) =>
    setContext((_, { headers }) => {
        const token = storage.getAuthToken(type)
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            },
        }
    })

const unauthorizedLink = setContext((_, { headers }) => {
    return {
        headers,
    }
})

export const unauthorizedClient = new ApolloClient({
    link: unauthorizedLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export const authorizedClient = (type: AuthTokenType) =>
    new ApolloClient({
        link: authorizedLink(type).concat(httpLink),
        cache: new InMemoryCache(),
    })
