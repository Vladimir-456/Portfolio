import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavoriteState = {
    favoriteIds: string[]
}

const initialState: FavoriteState = {
    favoriteIds: [],
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleClickFavorite: (state, action: PayloadAction<string>) => {
            const id = action.payload
            if (state.favoriteIds.includes(id)) {
                state.favoriteIds = state.favoriteIds.filter(favoriteId => favoriteId !== id)
            }
            else {
                state.favoriteIds.push(id)
            }
        }
        
    }
})

export const favoriteReducer = favoriteSlice.reducer
export const { toggleClickFavorite } = favoriteSlice.actions

