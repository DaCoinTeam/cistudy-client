import { ErrorResponse } from "@utils"

export interface ExtensionsWithOriginalError {
  originalError: ErrorResponse;
  [key: string]: unknown;
}
