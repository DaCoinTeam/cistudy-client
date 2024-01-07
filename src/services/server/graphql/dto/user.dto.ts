export enum UserRole {
  User = "User",
  Moderator = "Moderator",
  Administrator = "Administrator",
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
  birthday?: Date;
  verified: boolean;
}

export type UserDtoProperty =
  | "userId"
  | "email"
  | "password"
  | "avatarUrl"
  | "phoneNumber"
  | "balance"
  | "role"
  | "walletId"
  | "firstName"
  | "lastName"
  | "birthday"
  | "verified";
