import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client"
import { TokenizedResponse, UserDto, userKeys } from "../../shared"
import { ErrorResponse, format, storage } from "@utils"
import { client } from "./client"
import { ExtensionsWithOriginalError, Filter, FilterMode } from "../shared"
import { ApolloError } from "@apollo/client"

export default class AuthService {
    private client: ApolloClient<NormalizedCacheObject>

    constructor() {
        this.client = client
    }

    async signIn(
        params: {
      email: string;
      password: string;
    },
        filter?: Filter<UserDto>
    ): Promise<Partial<UserDto> | ErrorResponse> {
        try {
            const payload = format.createTokenizedPayloadString(
                userKeys,
                filter?.fields,
                filter?.filterMode == FilterMode.Include
            )

            const { data } = await this.client.query({
                query: gql`
          query SignIn($email: String!, $password: String!) {
            signIn(input: { email: $email, password: $password }) {
                ${payload}
            }
          }
        `,
                variables: {
                    email: params.email,
                    params: params.password,
                },
            })

            const response = data.signIn as TokenizedResponse<Partial<UserDto>>
            storage.saveTokens(response.tokens)
            return response.data
        } catch (ex) {
            const _ex = ex as ApolloError
            return (_ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError)
                .originalError
        }
    }

    async verifyGoogleAccessToken(
        params: {
      token: string;
    },
        filter?: Filter<UserDto>
    ): Promise<Partial<UserDto> | ErrorResponse> {
        try {
            const payload = format.createTokenizedPayloadString(
                userKeys,
                filter?.fields,
                filter?.filterMode == FilterMode.Include
            )

            console.log(payload)

            const { data } = await this.client.mutate({
                mutation: gql`
          mutation VerifyGoogleAccessToken($token: String!) {
            verifyGoogleAccessToken(input: $token) {
                    ${payload}
            }
          }
        `,
                variables: {
                    token: params.token,
                },
            })
            const response = data.verifyGoogleAccessToken as TokenizedResponse<
        Partial<UserDto>
      >
            storage.saveTokens(response.tokens)
            return response.data
        } catch (ex) {
            const _ex = ex as ApolloError
            return (_ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError)
                .originalError
        }
    }
}
