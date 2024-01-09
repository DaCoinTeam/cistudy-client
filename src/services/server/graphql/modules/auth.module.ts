import {
    ApolloClient,
    NormalizedCacheObject,
    gql,
} from "@apollo/client"
import { TokenizedResponse, UserDto } from "../../dtos"
import { format, storage } from "@utils"
import { userKeys } from "../../dtos"
import { client } from "./client"
import { Filter, FilterMode } from "../shared"

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
                filter?.filterMode == FilterMode.Exclude
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
                filter?.filterMode == FilterMode.Exclude
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