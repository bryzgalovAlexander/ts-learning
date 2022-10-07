import {getJokeAction, IFavorite, Test,} from "../../models/Types";


export const sagaActions = {
    FETCH_JOKES: "FETCH_JOKES",
    TEST: "TEST",
    ADD_FAVORITE: "ADD_FAVORITE"

}

export const fetchJokesAction = (payload: getJokeAction) => ({
    type: sagaActions.FETCH_JOKES,
    payload
})

export const fetchTestAction = (payload: Test) => ({
    type: sagaActions.TEST,
    payload
})

export const addToFavoriteAction = (payload: IFavorite) => ({
    type: sagaActions.ADD_FAVORITE,
    payload
})