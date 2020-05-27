import React from "react";
import { takeEvery, put, call, spawn } from 'redux-saga/effects';
import { Alert } from 'react-native';

import actions from './actions';
import * as service from './serviceApi';

export function* fetchSagas({latitude, longitude}) {
  try {
    const { data } = yield call(service.fetch, latitude, longitude);
    console.log(data);
    yield put(actions.fetchSuccess(data));
    yield put(actions.changeLoading(false));

  } catch(error) {
    return <Alert>{error}</Alert>;
  }
}

export function* watchSaga() {
  yield takeEvery(actions.FETCH, fetchSagas);
}

export default function* rootSaga() {
  yield spawn(watchSaga);
}
