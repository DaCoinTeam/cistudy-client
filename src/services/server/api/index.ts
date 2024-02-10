export * from "./auth.api"
export * from "./asset.api"
import { assets } from "./asset.api"
import { auth } from "./auth.api"

export const api = {
    auth,
    assets
}
