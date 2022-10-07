import axios, {AxiosResponse} from "axios";
import {TestSagaArg} from "../../models/Types";
import {userSlice} from "../store/toolkitReducers";
import {put} from 'redux-saga/effects'

export function* fetchJokesSaga() {
    try {
        yield put(userSlice.actions.jokeFetching());
        const response: AxiosResponse = yield axios.get('https://api.chucknorris.io/jokes/random');
        yield put(userSlice.actions.jokeFetchingSuccess(response.data.value));
    } catch (e) {
        if (e instanceof Error) {
            const errorMessage = e.message;
           yield put(userSlice.actions.jokeFetchingError(errorMessage));
        }
    }
}

export function* testSaga({payload}: TestSagaArg) {
    yield put(userSlice.actions.testAction(payload))
}
