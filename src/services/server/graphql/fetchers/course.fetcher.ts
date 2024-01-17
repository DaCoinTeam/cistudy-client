import { ExtensionsWithOriginalError } from "../shared"
import { CourseDto, Transform } from "../../shared"
import { ErrorResponse, format } from "@utils"
import { client } from "./client"
import { ApolloError, gql } from "@apollo/client"

export const findOne = async (
    params: {
        courseId: string
      },
    structure?: Transform<CourseDto>,
): Promise<Partial<CourseDto> | ErrorResponse> => {
    try {
        const payload = format.buildPayloadString(
            structure
        )
        const { data } = await client().query({
            query: gql`
            query findOne($courseId: ID!) {
    findOne(input: { courseId: $courseId }) {
      ${payload}
    }
  }
          `,
            variables : {
                courseId : params.courseId
            }
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
