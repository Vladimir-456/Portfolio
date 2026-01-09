import type { PayloadAction } from "@reduxjs/toolkit"
import { ADD_TO_FAVORITE } from "./actions"

export type FavoriteState = {
    favoriteIds: string[]
}

const initialState: FavoriteState = {
    favoriteIds: []
}

const favoriteReducer = (state: FavoriteState = initialState, action: PayloadAction<string>): FavoriteState => {
    switch(action.type) {
        case ADD_TO_FAVORITE: {
            const id = action.payload
            if (state.favoriteIds.includes(id)) {
                return { ...state, favoriteIds: state.favoriteIds.filter(favoriteId => favoriteId !== id) }
            }
            else {
                return { ...state, favoriteIds: [...state.favoriteIds, id] }
            }
        }
        default: {
            return state
        }
    }
    
}

export default favoriteReducer