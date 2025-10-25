import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

type FavoriteStore = {
    favoriteIds: string[],
    toggleClickFavorite: (id: string) => void
}

export const useFavoriteStore = create<FavoriteStore>()(
    persist(
       immer(
           (set) => ({
            favoriteIds: [],
            toggleClickFavorite: (id: string) => {
                set((state) => {
                    state.favoriteIds.includes(id) ? 
                    state.favoriteIds = state.favoriteIds.filter(favoriteId => favoriteId !== id) 
                    : state.favoriteIds.push(id);
                })
            }
           })
       ),
        {
            name: 'favorite-store',
        }
    )
)