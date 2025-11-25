import type { PayloadAction } from "@reduxjs/toolkit"
import { ADD_TO_FAVORITE } from "./actions"

type initialState = {
    favoriteIds: string[]
}

const initialState: initialState = {
    favoriteIds: []
}

const favoriteReducer = (state: initialState = initialState, action: PayloadAction<string>): initialState => {
    switch(action.type) {
        case ADD_TO_FAVORITE: {
            const id = action.payload
            console.log(id)
            return state
        }
        default: {
            return state
        }
    }
    
}

export default favoriteReducer