import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {favoriteReducer} from './favorite/favoriteSlice';
import { authReducer } from './auth/userSlice';
import { githubApi } from '../services/api';
import { appReducer } from './app/app-slice';
import { rootSaga } from './sagas/rootSaga';

// Создаем saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        favorite: favoriteReducer,
        auth: authReducer,
        app: appReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(githubApi.middleware)
        .concat(sagaMiddleware),
});

// Запускаем root saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;