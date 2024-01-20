import { ExtensionsWithOriginalError } from "../shared"
import { CourseDto, Structure } from "../../shared"
import { ErrorResponse, format } from "@utils"
import client from "../shared/client"
import { ApolloError, gql } from "@apollo/client"
import { DeepPartial } from "@apollo/client/utilities"

const findOneCourse = async (
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
            query FindOneCourse($courseId: ID!) {
    findOneCourse(input: { courseId: $courseId }) {
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

const findManyCourses = async (
    structure?: Structure<DeepPartial<CourseDto>>
): Promise<Partial<CourseDto[]> | ErrorResponse> => {
    try {
        const payload = format.buildPayloadString(structure)
        const { data } = await client().query({
            query: gql`
            query FindManyCourses() {
    findManyCourses {
      ${payload}
    }
  }
          `
        })
        return data.findManyCourses as Partial<CourseDto[]>
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
    findOneCourse,
    findManyCourses
}

export default course