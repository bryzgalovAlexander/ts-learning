import {Action, IFavorite, UserState} from "../../models/Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: UserState = {
    favoriteJokes: [],
    isLoading: false,
    error: '',
    joke: '',
    everyThreeSeconds: false,
    test: {
        name: '',
        hours: null
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        jokeFetching(state) {
            state.isLoading = true
        },
        jokeFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = ''
            state.joke = action.payload
        },
        jokeFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
            state.joke = ''
        },
        addJokeToFavorite(state, action: PayloadAction<IFavorite>) {
            state.favoriteJokes.push(action.payload)
        },
        deleteFavoriteJoke(state, action: PayloadAction<number>) {
           state.favoriteJokes = state.favoriteJokes.filter(item => item.id !== action.payload)
        },
        deleteAll(state) {
            state.favoriteJokes = []
        },
        takeEveryThreeSeconds(state) {
            state.everyThreeSeconds = !state.everyThreeSeconds
        },
        testAction(state, action: Action) {
            state.test = action.payload
        }
    }
})

export default userSlice.reducer;