export * from "./server"
export * from "./third-party"
export * from "./next"

export * from "./next"
export * from "./server"
export * from "./third-party"

import server from "./server"
import thirdParty from "./third-party"

export { server, thirdParty }

const services = {
    server,
    thirdParty
}

export default services

