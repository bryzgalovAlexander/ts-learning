import {combineReducers, configureStore,} from "@reduxjs/toolkit";
import userReducer from "./store/toolkitReducers";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./saga";

const saga = createSagaMiddleware()
const rootReducer = combineReducers({userReducer})

export const setupStore = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(saga)
    })

saga.run(rootSaga)


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<any>
export type AppDispatch = AppStore['dispatch']

