import type { RootState } from "./store";


export const selectFavoriteIds = (state: RootState) => state.favorite.favoriteIds;

export const selectUser = (state: RootState) => state.auth.user;

export const selectToasts = (state: RootState) => state.toasts.toasts;