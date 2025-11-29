import {configureStore} from '@reduxjs/toolkit';
import {favoriteReducer} from './favorite/favoriteSlice';
import { authReducer } from './auth/userSlice';
import { githubApi } from '../services/api';


export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        favorite: favoriteReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;