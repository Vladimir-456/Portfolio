import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../../types/user"

type UserState = {
    user: User | null
}

type UserData = {
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
    login(state, action: PayloadAction<UserData>) {
      const userData = { ...action.payload }
      let loggedUser: User
      if(userData.email === 'admin@admin' && userData.password === 'admin') {
        loggedUser = { email: userData.email, role: 'admin' }
      } else {
        loggedUser = { email: userData.email, role: 'guest' }
      }
      state.user = loggedUser
    },

    logout(state) {
      state.user = null
    }
  }
})


export const authReducer = authSlice.reducer
export const {login, logout} = authSlice.actions
