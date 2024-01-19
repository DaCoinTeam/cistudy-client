import { ExtensionsWithOriginalError } from "../shared"
import { CourseDto, Structure } from "../../shared"
import { ErrorResponse, format } from "@utils"
import client from "../shared/client"
import { ApolloError, gql } from "@apollo/client"
import { DeepPartial } from "@apollo/client/utilities"

const findOne = async (
    params: {
        courseId: string
      },
    structure?: Structure<DeepPartial<CourseDto>>,
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

        return data.findOne as Partial<CourseDto>
    } catch (ex) {
        console.log(ex)
        const _ex = ex as ApolloError
        const error = (
        _ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError
        ).originalError

        return error
    }
}

const course = {
    findOne
}

export default course