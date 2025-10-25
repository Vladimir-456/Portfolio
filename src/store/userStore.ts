import { create } from "zustand"
import type { User } from "../types/user"
import { persist } from "zustand/middleware"

type UserStore = {
    user: User | null
    login: (email: string, password: string) => void
    logout: () => void
}
const defaultUser: User = { email: "guest@example.com", role: "guest" }

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: defaultUser,
      login: (email, password) => {
        let loggedUser: User
        if (email === "admin@admin" && password === "admin") {
          loggedUser = { email, role: "admin" }
        } else {
          loggedUser = { email, role: "guest" }
        }
        set({ user: loggedUser })
      },
      logout: () => {
        set({ user: null })
      }
    }),
    {
      name: "user-store",
    }
  )
)