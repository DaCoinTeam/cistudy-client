export * from "./server"
export * from "./third-party"
export * from "./next"

export * from "./next"
export * from "./server"
export * from "./third-party"

import { nextServices } from "./next"
import serverService from "./server"
import thirdPartyService from "./third-party"

const services = {
    next: nextServices,
    server: serverService,
    thirdParty: thirdPartyService
}

export default services

