import { ExtensionsWithOriginalError, PostEntity, Structure } from "../shared"
import { ErrorResponse, format } from "@utils"
import { client } from "./client"
import { ApolloError, gql } from "@apollo/client"
import { DeepPartial } from "@apollo/client/utilities"

export const findManyPosts = async (
    params: {
    courseId: string
    take: number
    skip: number
  },
    structure?: Structure<DeepPartial<PostEntity>>
): Promise<Partial<PostEntity[]> | ErrorResponse> => {
    try {
        const payload = format.buildPayloadString(structure)
        const { data } = await client().query({
            query: gql`
            query FindManyPosts($courseId: String!,$take: Int!,  $skip: Int!) {
    findManyPosts(input: { courseId: $courseId, take: $take, skip: $skip}) {
      ${payload}
    }
  }
          `,
            variables: {
                courseId: params.courseId,
                take: params.take,
                skip: params.skip,
            },
        })

        return data.findManyPosts as Partial<PostEntity[]>
    } catch (ex) {
        console.log(ex)
        const _ex = ex as ApolloError
        const error = (
      _ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError
        ).originalError

        return error
    }
}

export const findOnePost = async (
    params: {
    postId: string
  },
    structure?: Structure<DeepPartial<PostEntity>>
): Promise<Partial<PostEntity> | ErrorResponse> => {
    try {
        const payload = format.buildPayloadString(structure)
        const { data } = await client().query({
            query: gql`
            query FindOnePost($postId: ID!) {
    findOnePost(input: { postId: $postId }) {
      ${payload}
    }
  }
          `,
            variables: {
                postId: params.postId,
            },
        })

        return data.findOnePost as Partial<PostEntity>
    } catch (ex) {
        console.log(ex)
        const _ex = ex as ApolloError
        const error = (
      _ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError
        ).originalError

        return error
    }
}

export const post = {
    findOnePost,
    findManyPosts,
}
