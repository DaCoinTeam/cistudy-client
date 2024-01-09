import {
    ApolloClient,
    NormalizedCacheObject,
    gql,
} from "@apollo/client"
import { TokenizedResponse, UserDto } from "../../dto"
import { format, storage } from "@utils"
import { userKeys } from "../../dto"
import { client } from "./client"
import { Filter } from "../shared"

export default class Auth {
    private client: ApolloClient<NormalizedCacheObject>

    constructor() {
        this.client = client
    }

    async signIn(
        email: string,
        password: string,
        filter? : Filter<UserDto>
    ): Promise<Partial<UserDto> | null> {
        try { 
            const payload = format.createTokenizedPayloadString(
                userKeys,
                filter?.fields, 
                !!filter?.filterMode
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
        filter? : Filter<UserDto>,
    ): Promise<Partial<UserDto> | null> {
        try {
            const payload = format.createTokenizedPayloadString(
                userKeys,
                filter?.fields, 
                !!filter?.filterMode
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