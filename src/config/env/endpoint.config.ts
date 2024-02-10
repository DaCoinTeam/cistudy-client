export default () => {
    return {
        api: process.env.NEXT_PUBLIC_SERVER_ENDPOINT_API,
        graphql: process.env.NEXT_PUBLIC_SERVER_ENDPOINT_GRAPHQL,
    }
}
