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

export const client = (type: AuthTokenType | null = null) =>
    new ApolloClient({
        link: type
            ? linkWithAuthorization(type).concat(httpLink)
            : linkWithoutAuthorization.concat(httpLink),
        cache: new InMemoryCache(),
    })
