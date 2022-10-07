import { takeEvery } from 'redux-saga/effects'
import {fetchJokesSaga, testSaga} from "./saga";
import {sagaActions} from "./action";

export function* watchSaga() {
    yield takeEvery(sagaActions.FETCH_JOKES, fetchJokesSaga)
    yield takeEvery(sagaActions.TEST, testSaga)
}

export function* rootSaga() {
    yield watchSaga()
}