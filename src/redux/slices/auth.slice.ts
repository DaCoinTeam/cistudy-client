import { createSlice } from "@reduxjs/toolkit"
import { UserEntity } from "@services"


export interface AuthSlice {
    user: UserEntity | null
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
