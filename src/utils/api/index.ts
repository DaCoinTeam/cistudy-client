import axios from "axios"

export const fetchAndCreateSvgBlobUrl = async (url: string) => {
    try {
        const response = await axios.get(url, {
            responseType: "text",
        })
        const blob = new Blob([response.data], { type: "image/svg+xml" })
        return URL.createObjectURL(blob)
    } catch (ex) {
        console.log(ex)
        return null
    }
}

export const convertBigIntsToStringsForResponse = <T>(param: T): T => {
    return JSON.parse(
        JSON.stringify(
            param,
            (_, value) => (typeof value === "bigint" ? value.toString() : value),
            2
        )
    )
}

export interface ErrorResponse {
  message: string | string[];
  statusCode: StatusCode;
  error: string;
}

const parseErrorResponse = (response: unknown): null | ErrorResponse => {
    const _response = response as {
    statusCode: number;
  }

    if (_response.statusCode >= 400) return _response as ErrorResponse
    return null
}

export enum StatusCode {
  OK = 200,
  Created = 201,

  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  RequestTimeout = 408,
  Conflict = 409,

  InternalServerError = 500,
}

const api = {
    parseErrorResponse,
}

export default api
