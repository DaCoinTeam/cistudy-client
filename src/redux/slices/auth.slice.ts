import { createSlice } from "@reduxjs/toolkit"

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

export interface User {
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
  kind: UserKind;
  externalUrl: string;
}


export interface AuthSlice {
    user: User | null;
  }

const initialState: AuthSlice = {
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setUserSignOut(state) {
            state.user = null
        }
    }
})

export const { setUser,  setUserSignOut } = authSlice.actions

export const authReducer = authSlice.reducer
