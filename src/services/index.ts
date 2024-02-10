export * from "./server"
export * from "./third-party"

import { server } from "./server"
import { thirdParty } from "./third-party"

const services = {
    server,
    thirdParty,
}

export default services
