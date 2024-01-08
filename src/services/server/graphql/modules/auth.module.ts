import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    gql,
} from "@apollo/client"
import { endpointConfig } from "@config"
import { UserDto, UserDtoProperty } from "../../dto"
export default class Auth {
    private client: ApolloClient<NormalizedCacheObject>

    constructor() {
        this.client = new ApolloClient({
            uri: endpointConfig().graphQL,
            cache: new InMemoryCache(),
        })
    }

    async signIn(
        email: string,
        password: string,
        desired?: UserDtoProperty[]
    ): Promise<Partial<UserDto> | null> {
        try {
            const { data } = await this.client.query({
                query: gql`
          query SignIn($email: String!, $password: String!) {
            signIn(input: { email: $email, password: $password }) {
             ${desired}
            }
          }
        `,
                variables: {
                    email,
                    password,
                },
            })

            return data.signIn
        } catch (ex) {
            console.log(ex)
            return null
        }
    }

    async verifyGoogleAccessToken(
        token: string
    ): Promise<Partial<UserDto> | null> {
        try {
            const { data } = await this.client.mutate({
                mutation: gql`
          mutation VerifyGoogleAccessToken($token: String!) {
            verifyGoogleAccessToken(input: $token) {
              userId,
              firstName
              lastName
            }
          }
        `,
                variables: {
                    token,
                },
            })
            return data.verifyGoogleAccessToken as UserDto
        } catch (ex) {
            console.log(ex)
            return null
        }
    }
}
