import { takeEvery, put, delay, select } from 'redux-saga/effects';
import { toggleClickFavorite } from '../favorite/favoriteSlice';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Saga для обработки переключения избранного
function* toggleFavoriteAsync(action: PayloadAction<string>) {
  try {
    // Получаем текущее состояние избранных
    const favoriteIds: string[] = yield select((state: RootState) => state.favorite.favoriteIds);
    const projectId = action.payload;
    
    // Имитация задержки
    yield delay(300);
     
    // Диспатчим action для обновления состояния
    yield put(toggleClickFavorite(projectId));
    
  } catch (error) {
    console.error('Toggle favorite error:', error);
    // Можно диспатчить action для обработки ошибки
  }
}

// Главная saga для favorite
export function* favoriteSaga() {
  // Слушаем action toggleClickFavorite и вызываем toggleFavoriteAsync
  yield takeEvery(toggleClickFavorite.type, toggleFavoriteAsync);
}
