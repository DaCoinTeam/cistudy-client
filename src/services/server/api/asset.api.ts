import { endpointConfig } from "@config"
import { join } from "path"

const BASE_URL = join(endpointConfig().api, "assets")

export const getAssetUrl = (assetIdOrPath: string) => join(BASE_URL, "get", assetIdOrPath)

export const assets = {
    getAssetUrl
}