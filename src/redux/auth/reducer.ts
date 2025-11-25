import type { PayloadAction } from "@reduxjs/toolkit"
import { AUTH_LOGIN, AUTH_LOGOUT } from "./actions"
import type { User } from "../../types/user"

export type UserState = {
    user: User | null
}

type UserData = {
    email: string
    password: string
}

const defaultUserState: UserState = {
    user: { email: "guest@example.com", role: "guest" }
}


const authReducer = (state = defaultUserState, action: PayloadAction<UserData>): UserState => {
    switch (action.type) {
        case AUTH_LOGIN: {
           const userData = { ...action.payload }
            let loggedUser: User
            if(userData.email === 'admin@admin' && userData.password === 'admin') {
                loggedUser = { email: userData.email, role: 'admin' }
            } else {
                loggedUser = { email: userData.email, role: 'guest' }
            }
            console.log(state.user)
            return { ...state, user: loggedUser }
        }

        case AUTH_LOGOUT: {
            console.log(state.user)
            return {...state, user: null}
        }

        default: {
            return state
        }
    }
}

export default authReducer