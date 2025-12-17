import { all, fork } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { favoriteSaga } from './favoriteSaga';
import { appSaga } from './appSaga';


export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(favoriteSaga),
    fork(appSaga),
  ]);
}
