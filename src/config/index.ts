export * from "./blockchain.config"
export * from "./app.config"
export * from "./environment"

import environment from "./environment"

export { environment }

const config = {
    environment
}

export default config