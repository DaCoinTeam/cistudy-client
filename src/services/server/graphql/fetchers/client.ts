import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { environment } from "@config"
import { AuthTokenType, storage } from "@utils"

const httpLink = createHttpLink({
    uri: environment.endpoint().graphql,
})

const withAuthorizationLink = (type: AuthTokenType) =>
    setContext((_, { headers }) => {
        const token = storage.getAuthToken(type)
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            },
        }
    })

const withoutAuthorizationLink = setContext((_, { headers }) => {
    return {
        headers,
    }
})

export const withAuthorizationClient = (type: AuthTokenType) =>
    new ApolloClient({
        link: withAuthorizationLink(type).concat(httpLink),
        cache: new InMemoryCache(),
    })

export const withoutAuthorizationClient = new ApolloClient({
    link: withoutAuthorizationLink.concat(httpLink),
    cache: new InMemoryCache(),
})
