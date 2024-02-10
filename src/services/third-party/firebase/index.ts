export * from "./auth.firebase"

import { firebaseAuth } from "./auth.firebase"

export const firebase = {
    auth: firebaseAuth,
}