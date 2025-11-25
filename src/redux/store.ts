import { applyMiddleware, combineReducers, createStore, type Action } from 'redux';
import favoriteReducer from './favorite/reducer'
import { composeWithDevTools } from '@redux-devtools/extension';
import authReducer from './auth/reducer';
import { toastsReducer } from './toasts/reducer';
import { thunk, type ThunkAction } from 'redux-thunk';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
    favorite: favoriteReducer,
    auth: authReducer,
    toasts: toastsReducer
})

export const store = createStore(rootReducer, undefined, enhancer);
export type RootState = ReturnType<typeof store.getState>

export type useAppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;