import { gql } from "@apollo/client"
import { TokenizedResponse, UserDto, userKeys } from "../../shared"
import {
    AuthTokenType,
    ErrorResponse,
    StatusCode,
    format,
    storage,
} from "@utils"
import { withAuthorizationClient, withoutAuthorizationClient } from "./client"
import { ExtensionsWithOriginalError, Filter, FilterMode } from "../shared"
import { ApolloError } from "@apollo/client"

export const init = async (
    filter?: Filter<UserDto>,
    type: AuthTokenType = AuthTokenType.Access
): Promise<Partial<UserDto> | ErrorResponse> => {
    try {
        const payload = format.createTokenizedPayloadString(
            userKeys,
            filter?.fields,
            filter?.filterMode == FilterMode.Include
        )
        const { data } = await withAuthorizationClient(type).query({
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
            return await init(filter, AuthTokenType.Refresh)
        }

        return error
    }
}

export const signIn = async (
    params: {
      email: string;
      password: string;
    },
    filter?: Filter<UserDto>
): Promise<Partial<UserDto> | ErrorResponse> => {
    try {
        const payload = format.createTokenizedPayloadString(
            userKeys,
            filter?.fields,
            filter?.filterMode == FilterMode.Include
        )

        const { data } = await withoutAuthorizationClient.query({
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

export const verifyGoogleAccessToken = async (
    params: {
      token: string;
    },
    filter?: Filter<UserDto>
): Promise<Partial<UserDto> | ErrorResponse> => {
    try {
        const payload = format.createTokenizedPayloadString(
            userKeys,
            filter?.fields,
            filter?.filterMode == FilterMode.Include
        )

        console.log(payload)

        const { data } = await withoutAuthorizationClient.mutate({
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

