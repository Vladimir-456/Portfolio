import type { Toast } from "../../components/toast-list/toast-list"
import { ADD_TOAST, REMOVE_TOAST, type ToastActionTypes } from "./actions";

type ToastsState = {
  toasts: Toast[];
};

const initialState: ToastsState = {
  toasts: [],
};
export const toastsReducer = (
  state: ToastsState = initialState,
  action: ToastActionTypes
): ToastsState => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload),
      };
    default:
      return state;
  }
};