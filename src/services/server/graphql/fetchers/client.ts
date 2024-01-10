import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { environment } from "@config"
import { AuthTokenType, storage } from "@utils"

const httpLink = createHttpLink({
    uri: environment.endpoint().graphql,
})

const linkWithAuthorization = (type: AuthTokenType) =>
    setContext((_, { headers }) => {
        const token = storage.getAuthToken(type)
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            },
        }
    })

const linkWithoutAuthorization = setContext((_, { headers }) => {
    return {
        headers,
    }
})

export const clientWithAuthorization = (type: AuthTokenType) =>
    new ApolloClient({
        link: linkWithAuthorization(type).concat(httpLink),
        cache: new InMemoryCache(),
    })

export const clientWithoutAuthorization = new ApolloClient({
    link: linkWithoutAuthorization.concat(httpLink),
    cache: new InMemoryCache(),
})
