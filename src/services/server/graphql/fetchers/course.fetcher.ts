import { ExtensionsWithOriginalError, Filter, FilterMode } from "../shared"
import { CourseDto, courseKeys } from "../../shared"
import { ErrorResponse, format } from "@utils"
import { client } from "./client"
import { ApolloError, gql } from "@apollo/client"

export const findById = async (
    filter?: Filter<CourseDto>,
): Promise<Partial<CourseDto> | ErrorResponse> => {
    try {
        const payload = format.createPayloadString(
            courseKeys,
            filter?.fields,
            filter?.filterMode == FilterMode.Include
        )
        const { data } = await client().query({
            query: gql`
            query FindById {
              findById($courseId: String!) {
                  ${payload}
              }
            }
          `,
        })

        return data.findById as Partial<CourseDto>
    } catch (ex) {
        console.log(ex)
        const _ex = ex as ApolloError
        const error = (
        _ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError
        ).originalError

        return error
    }
}
