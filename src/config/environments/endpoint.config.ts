export default () => {
    return {
        graphql: process.env.NEXT_PUBLIC_SERVER_ENDPOINT_GRAPHQL,
        restful: process.env.NEXT_PUBLIC_SERVER_ENDPOINT_RESTFUL,
    }
}
