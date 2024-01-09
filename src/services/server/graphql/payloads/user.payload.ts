import { UserDto } from "../../dto"

export const userPayload: (keyof UserDto)[] = [
    "avatarUrl",
    "balance",
    "birthday",
    "email",
    "externalId",
    "firstName",
    "lastName",
    "password",
    "phoneNumber",
    "role",
    "userId",
    "verified",
    "walletId",
]