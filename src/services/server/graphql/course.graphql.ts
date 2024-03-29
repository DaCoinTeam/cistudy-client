import {
    ExtensionsWithOriginalError,
    Structure,
    CourseEntity,
} from "../shared"
import { ErrorResponse, format } from "@utils"
import { client } from "./client"
import { ApolloError, gql } from "@apollo/client"
import { DeepPartial } from "@apollo/client/utilities"

export const findOneCourse = async (
    params: {
    courseId: string
  },
    structure?: Structure<DeepPartial<CourseEntity>>
): Promise<Partial<CourseEntity> | ErrorResponse> => {
    try {
        const payload = format.buildPayloadString(structure)
        const { data } = await client().query({
            query: gql`
            query FindOneCourse($courseId: ID!) {
    findOneCourse(input: { courseId: $courseId }) {
      ${payload}
    }
  }
          `,
            variables: {
                courseId: params.courseId,
            },
        })

        return data.findOne as Partial<CourseEntity>
    } catch (ex) {
        console.log(ex)
        const _ex = ex as ApolloError
        const error = (
      _ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError
        ).originalError

        return error
    }
}

export const findManyCourses = async (
    structure?: Structure<DeepPartial<CourseEntity>>
): Promise<Partial<CourseEntity[]> | ErrorResponse> => {
    try {
        const payload = format.buildPayloadString(structure)
        const { data } = await client().query({
            query: gql`
            query FindManyCourses() {
    findManyCourses {
      ${payload}
    }
  }
          `,
        })
        return data.findManyCourses as Partial<CourseEntity[]>
    } catch (ex) {
        console.log(ex)
        const _ex = ex as ApolloError
        const error = (
      _ex.graphQLErrors[0].extensions as ExtensionsWithOriginalError
        ).originalError

        return error
    }
}

export const course = {
    findOneCourse,
    findManyCourses
}