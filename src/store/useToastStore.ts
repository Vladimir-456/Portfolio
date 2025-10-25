import { create } from "zustand"
import type { Toast } from "../components/toast-list/toast-list"
import { persist } from "zustand/middleware"
import { v4 as uuidv4 } from 'uuid'
import { immer } from "zustand/middleware/immer"

type ToastStore = {
    toasts: Toast[]
}

type Actions = {
    addToast: (message: string) => void
}

export const useToastStore = create<ToastStore & Actions>()(
    persist(
        immer(
            (set) => ({
                toasts: [],
                addToast: (message: string) => {
                    set((state) => {
                        state.toasts.push({ id: uuidv4(), message, type: 'info' });
                    });
                }
            }),
        ),
        {
            name: 'toast-store',
        }
    )
)