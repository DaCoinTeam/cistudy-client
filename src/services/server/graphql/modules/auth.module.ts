import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    gql,
} from "@apollo/client"
import { endpointConfig } from "@config"
import { TokenizedResponse, UserDto } from "../../dto"
import { FieldSelectionMode, format, storage } from "@utils"
import { userPayload } from "../payloads"

export default class Auth {
    private client: ApolloClient<NormalizedCacheObject>

    constructor() {
        this.client = new ApolloClient({
            uri: endpointConfig().graphql,
            cache: new InMemoryCache(),
        })
    }

    async signIn(
        email: string,
        password: string,
        mode: FieldSelectionMode = FieldSelectionMode.Skip,
        fields: (keyof UserDto)[] = []
    ): Promise<Partial<UserDto> | null> {
        try {
            const payload = format.createTokenizedPayloadString(
                userPayload,
                fields,
                mode
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
                    email,
                    password,
                },
            })

            const response = data.signIn as TokenizedResponse<Partial<UserDto>>
            storage.saveTokens(response.tokens)
            return response.data
        } catch (ex) {
            console.log(ex)
            return null
        }
    }

    async verifyGoogleAccessToken(
        token: string,
        fields: (keyof UserDto)[] = [],
        mode: FieldSelectionMode = FieldSelectionMode.Skip
    ): Promise<Partial<UserDto> | null> {
        try {
            const payload = format.createTokenizedPayloadString(
                userPayload,
                fields,
                mode
            )
            const { data } = await this.client.mutate({
                mutation: gql`
          mutation VerifyGoogleAccessToken($token: String!) {
            verifyGoogleAccessToken(input: $token) {
                    ${payload}
            }
          }
        `,
                variables: {
                    token,
                },
            })
            const response = data.verifyGoogleAccessToken as TokenizedResponse<
        Partial<UserDto>
      >
            storage.saveTokens(response.tokens)
            return response.data
        } catch (ex) {
            console.log(ex)
            return null
        }
    }
}
