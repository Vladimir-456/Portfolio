import { takeEvery, put, delay } from 'redux-saga/effects';
import { setCurrentFilter, setCurrentProject } from '../app/app-slice';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Project } from '../../types/project';

// Saga для обработки изменения фильтра
function* setFilterAsync(action: PayloadAction<string>) {
  try {
    const filter = action.payload;
    
    // Имитация задержки (например, для фильтрации данных)
    yield delay(200);
    
    // Диспатчим action для обновления текущего фильтра
    yield put(setCurrentFilter(filter));
    
  } catch (error) {
    console.error('Set filter error:', error);
  }
}

// Saga для обработки выбора проекта
function* setProjectAsync(action: PayloadAction<Project>) {
  try {
    const project = action.payload;
    
    // Имитация задержки (например, для загрузки дополнительных данных проекта)
    yield delay(150);
    
    // Диспатчим action для обновления текущего проекта
    yield put(setCurrentProject(project));
    
  } catch (error) {
    console.error('Set project error:', error);
  }
}

// Главная saga для app
export function* appSaga() {
  // Слушаем actions и вызываем соответствующие функции
  yield takeEvery(setCurrentFilter.type, setFilterAsync);
  yield takeEvery(setCurrentProject.type, setProjectAsync);
}
