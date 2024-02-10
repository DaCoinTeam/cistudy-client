export * from "./math"
export * from "./api.utils"
export * from "./format"
export * from "./storage.utils"
export * from "./image"
export * from "./array"
export * from "./web3"
export * from "./time"

export * from "./api.utils"
export * from "./storage.utils"

import arrayUtils from "./array"
import format from "./format"
import mathUtils from "./math"
import timeUtils from "./time"
import web3Utils from "./web3"

export { format }

const utils = {
    web3: web3Utils,
    math: mathUtils,
    array: arrayUtils,
    format,
    time: timeUtils,
}

export default utils
