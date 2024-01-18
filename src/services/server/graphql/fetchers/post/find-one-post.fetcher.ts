import { ExtensionsWithOriginalError } from "../../shared"
import { Post, Structure } from "../../../shared"
import { ErrorResponse, format } from "@utils"
import client from "../client"
import { ApolloError, gql } from "@apollo/client"

const findOnePost = async (
    params: {
        postId: string
      },
    structure?: Structure<Post>,
): Promise<Partial<Post> | ErrorResponse> => {
    try {
        const payload = format.buildPayloadString(
            structure
        )
        const { data } = await client().query({
            query: gql`
            query FindOnePost($postId: ID!) {
    findOnePost(input: { postId: $postId }) {
      ${payload}
    }
  }
          `,
            variables : {
                postId : params.postId
            }
        })

        return data.findOnePost as Partial<Post>
    } catch (ex) {
        console.log(ex)
        const _ex = ex as ApolloError
        const error = (
        _ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError
        ).originalError

        return error
    }
}

export default findOnePost
