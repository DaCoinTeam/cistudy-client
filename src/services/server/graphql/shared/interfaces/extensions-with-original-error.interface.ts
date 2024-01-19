import { ErrorResponse } from "@utils"

export default interface ExtensionsWithOriginalError {
  originalError: ErrorResponse;
  [key: string]: unknown;
}