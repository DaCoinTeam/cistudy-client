import { ErrorResponse } from "@utils"

interface ExtensionsWithOriginalError {
  originalError: ErrorResponse;
  [key: string]: unknown;
}

export default ExtensionsWithOriginalError
