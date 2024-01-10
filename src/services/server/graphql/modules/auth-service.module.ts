import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client"
import { TokenizedResponse, UserDto, userKeys } from "../../shared"
import {
    AuthTokenType,
    ErrorResponse,
    StatusCode,
    format,
    storage,
} from "@utils"
import { authorizedClient, unauthorizedClient } from "./client"
import { ExtensionsWithOriginalError, Filter, FilterMode } from "../shared"
import { ApolloError } from "@apollo/client"

export default class AuthService {
    private unauthorizedClient: ApolloClient<NormalizedCacheObject>
    private authorizedClient: (
    type: AuthTokenType
  ) => ApolloClient<NormalizedCacheObject>

    constructor() {
        this.unauthorizedClient = unauthorizedClient
        this.authorizedClient = authorizedClient
    }

    async init(
        filter?: Filter<UserDto>,
        type: AuthTokenType = AuthTokenType.Access
    ): Promise<Partial<UserDto> | ErrorResponse> {
        try {
            const payload = format.createTokenizedPayloadString(
                userKeys,
                filter?.fields,
                filter?.filterMode == FilterMode.Include
            )
            const { data } = await this.authorizedClient(type).query({
                query: gql`
            query Init {
              init {
                  ${payload}
              }
            }
          `,
            })

            const response = data.init as TokenizedResponse<Partial<UserDto>>
            storage.saveTokens(response.tokens)
            return response.data
        } catch (ex) {
            console.log(ex)
            const _ex = ex as ApolloError
            const error = (
        _ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError
            ).originalError

            if (
                error.statusCode === StatusCode.Unauthorized &&
        type === AuthTokenType.Access
            ) {
                return await this.init(filter, AuthTokenType.Refresh)
            }

            return error
        }
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

            const { data } = await this.unauthorizedClient.query({
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

            const { data } = await this.unauthorizedClient.mutate({
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
