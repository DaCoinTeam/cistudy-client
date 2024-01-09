export * from "./math"
export * from "./api"
export * from "./format"
export * from "./storage"
export * from "./image"
export * from "./array"
export * from "./web3"
export * from "./time"

import apiUtils from "./api"
import arrayUtils from "./array"
import format from "./format"
import storage from "./storage"
import mathUtils from "./math"
import timeUtils from "./time"
import web3Utils from "./web3"

export { format, storage }

const utils = {
    web3: web3Utils,
    math: mathUtils,
    array: arrayUtils,
    format,
    storage,
    time: timeUtils,
    api: apiUtils
}

export default utils
