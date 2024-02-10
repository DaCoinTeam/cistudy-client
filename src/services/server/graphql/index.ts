export * from "./course.graphql"
export * from "./post.graphql"

import { post } from "./post.graphql"
import { course } from "./course.graphql"

export const graphql = {
    post,
    course,
}
