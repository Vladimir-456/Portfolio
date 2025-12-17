import type { RootState } from "../store";

export const selectCurrentFilter = (state: RootState) => state.app.currentFilter

export const selectCurrentProject = (state: RootState) => state.app.currentProject

export const selectItems = (state: RootState) => state.app.items