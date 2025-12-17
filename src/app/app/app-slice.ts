import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import sampleProjects from "../../data/data"
import type { Project } from "../../types/project"


type AppSliceState = {
    items: Project[],
    currentFilter: string,
    currentProject: Project
}

const initialState : AppSliceState = {
    items: sampleProjects,
    currentFilter: 'all',
    currentProject: sampleProjects[0]
}
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrentFilter: (state, action: PayloadAction<string>) => {
            state.currentFilter = action.payload
        },

        setCurrentProject: (state, action: PayloadAction<Project>) => {
            state.currentProject = action.payload
        }
    }
})


export const { setCurrentFilter, setCurrentProject } = appSlice.actions

export const appReducer = appSlice.reducer