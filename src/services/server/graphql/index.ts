export * from "./fetchers"
export * from "./shared"

import { findOne } from "./fetchers"

const graphql = {
    course: {
        findOne
    }
}

export default graphql
