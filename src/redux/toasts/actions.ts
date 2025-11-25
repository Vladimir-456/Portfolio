export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

interface AddToastAction {
  type: typeof ADD_TOAST;
  payload: Toast;
}

interface RemoveToastAction {
  type: typeof REMOVE_TOAST;
  payload: string;
}

export type ToastActionTypes = AddToastAction | RemoveToastAction;

import { v4 as uuidv4 } from 'uuid';
import type { Toast } from '../../components/toast-list/toast-list';
import type { AppThunk } from '../store';

export const addToast = (message: string): AppThunk => (dispatch) => {
const id = uuidv4();

  dispatch({
    type: ADD_TOAST,
    payload: { id, message },
  });

  setTimeout(() => {
    dispatch(removeToast(id));
  }, 3000);
};

export const removeToast = (id: string): RemoveToastAction => ({
  type: REMOVE_TOAST,
  payload: id,
});