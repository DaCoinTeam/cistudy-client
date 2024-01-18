export enum UserRole {
  User = "User",
  Moderator = "Moderator",
  Administrator = "Administrator",
}

export enum UserKind {
  Local = "Local",
  Google = "Google",
  Facebook = "Facebook",
}

export interface UserDto {
  userId: string;
  email?: string;
  password?: string;
  avatarUrl?: string;
  phoneNumber?: string;
  balance: number;
  role: UserRole;
  walletId?: string;
  firstName?: string;
  lastName?: string;
  birthdate?: Date;
  verified: boolean;
  kind: UserKind;
  externalId: string;
}

<<<<<<< HEAD
export interface TokenizedResponse<T extends object> {
  data: T;
  tokens: Tokens
}

export const userKeys : (keyof UserDto)[] = [
    "avatarUrl",
    "balance",
    "birthdate",
    "email",
    "externalId",
    "firstName",
    "lastName",
    "password",
    "phoneNumber",
    "role",
    "userId",
    "verified",
    "kind",
    "walletId",
]
=======
>>>>>>> f339dc65e04653780a29596b2f8d3be10ec66bc1
