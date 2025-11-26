import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../../types/user"

type UserState = {
    user: User | null
}

export type UserData = {
    email: string
    password: string
}

const defaultUserState: UserState = {
    user: { email: "guest@example.com", role: "guest" }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultUserState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload
    },

    logout(state) {
      state.user = null
    }
  }
})


export const authReducer = authSlice.reducer
export const {login, logout} = authSlice.actions
