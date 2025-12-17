import { takeEvery, put, delay } from 'redux-saga/effects';
import { login, logout } from '../auth/userSlice';
import type { PayloadAction } from '@reduxjs/toolkit';

type UserData = {
  email: string;
  password: string;
};

function* loginAsync(action: PayloadAction<UserData>) {
  try {
    yield delay(1000); // delay 1 second
    
    yield put(login(action.payload)); //dispatch Redux action
    
  } catch (error) {
    console.error('Login error:', error); // log error
  }
}

function* logoutAsync() {
  try {
    yield put(logout());
  } catch (error) {
    console.error('Logout error:', error);
  }
}

// Главная saga для auth
export function* authSaga() {
  // Слушаем action login и вызываем loginAsync
  yield takeEvery(login.type, loginAsync); // запускает saga каждый раз, когда диспатчится соответствующий action.
  yield takeEvery(logout.type, logoutAsync);
}
