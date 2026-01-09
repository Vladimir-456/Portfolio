import type { Project } from "../../types/project";
import type { RootState } from "../store";

export const LOAD_PROJECT = "LOAD_PROJECT";

export const TOGGLE_THEME = "TOGGLE_THEME";

export const SET_FILTER = "SET_FILTER";

export const loadProjects = (items: Project[]) => {
  return {
    type: LOAD_PROJECT,
    payload: items,
  };
};

export const setCurrentFilter = (filter: string) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const selectAppProjects = (state: RootState) => state.app.projects;
