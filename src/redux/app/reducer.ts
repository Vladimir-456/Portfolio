import type { PayloadAction } from "@reduxjs/toolkit";
import type { Project } from "../../types/project";
import { LOAD_PROJECT, SET_FILTER, TOGGLE_THEME } from "./selectors";

type Theme = "light" | "dark";

type LoadProjectsAction = {
  type: typeof LOAD_PROJECT;
  payload: Project[];
};

type ToggleThemeAction = {
  type: typeof TOGGLE_THEME;
};

type SetFilterAction = {
  type: typeof SET_FILTER;
  payload: string;
};

export type AppState = {
  projects: Project[];
  theme: Theme;
  currentFilter: string;
};

const initialState: AppState = {
  projects: [],
  theme: "light",
  currentFilter: "all",
};

type AppActions = LoadProjectsAction | ToggleThemeAction | SetFilterAction;

const appReducer = (
  state: AppState = initialState,
  action: AppActions
): AppState => {
  switch (action.type) {
    case LOAD_PROJECT: {
      return { ...state, projects: action.payload };
    }
    case TOGGLE_THEME: {
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    }
    case SET_FILTER: {
      return { ...state, currentFilter: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
