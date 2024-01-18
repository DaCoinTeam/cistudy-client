import { Structure } from "@services"
import { Address } from "web3"

const sanitizeNumericInput = (input: string): string | null => {
    const regex = /^[0-9]*[.,]?[0-9]*$/
    if (!regex.test(input)) {
        return null
    }
    const sanitizedValue = input.replace(/,/g, ".")
    return sanitizedValue
}

const shortenAddress = (account: Address) =>
    `${account.slice(0, 4)}...${account.slice(-2)}`

const parseStringToNumber = (string: string, defaultValue?: number): number => {
    const parseValue = Number.parseFloat(string)
    if (Number.isNaN(parseValue) || !Number.isFinite(parseValue)) {
        return defaultValue ?? 0
    }
    return parseValue
}

const parseNumberToString = (number: number): string =>
    number !== 0 ? number.toString() : ""

const parseStringToNumberMultiply = (
    string: string,
    multiply: number,
    defaultValue?: number
): string => {
    let parsedNumber = parseStringToNumber(string, defaultValue)
    parsedNumber *= multiply
    return parseNumberToString(parsedNumber)
}

const buildPayloadString = <T extends object>(
    structure?: Structure<T>,
    currentPath: string[] = []
): string => {
    if (!structure) {
        return ""
    }
    const keys = Object.keys(structure)
    const trueKeys = keys.filter((key, index) => {
        const value = structure[key]
        if (typeof value === "boolean") {
            if (structure[key]) {
                currentPath.push(key)
                if (index !== keys.length - 1) {
                    currentPath.push(",")
                }
            }
        } else {
            currentPath.push(key)
            currentPath.push("{")
            buildPayloadString(value, currentPath)
            currentPath.push("}")
        }
    })

    if (trueKeys.length) {
        for (let i = 0; i < trueKeys.length; i++) {
            currentPath.push(trueKeys[i])
            if (i !== trueKeys.length - 1) currentPath.push(",")
        }
    }

    return currentPath.join(" ")
}

const buildTokenizedPayloadString = <T extends object>(
    structure?: Structure<T>,
) => {
    const data = buildPayloadString(structure)
    return `data { ${data} } tokens { accessToken, refreshToken }`
}

const format = {
    sanitizeNumericInput,
    shortenAddress,
    parseStringToNumber,
    parseNumberToString,
    parseStringToNumberMultiply,
    buildPayloadString,
    buildTokenizedPayloadString,
}

export default format
