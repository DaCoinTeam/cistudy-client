import axios, { AxiosRequestConfig } from "axios"

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

const createHeadersWithBearerToken = (token: string): AxiosRequestConfig => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
}

export interface ErrorResponse {
    message: string | string[];
    statusCode: number;
    error: string;
  }

const parseErrorResponse = (response: unknown): null | ErrorResponse => {
    const _response = response as {
    statusCode: number;
  }
  
    if (_response.statusCode >=  400) return _response as ErrorResponse
    return null
}

const api = {
    parseErrorResponse,
    createHeadersWithBearerToken,
}

export default api
