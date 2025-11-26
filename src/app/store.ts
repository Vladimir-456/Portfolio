import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {favoriteReducer} from './favorite/favoriteSlice';
import { authReducer } from './auth/userSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga.ts'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    favorite: favoriteReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware ),
});

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>;