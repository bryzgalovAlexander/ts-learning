import {AppDispatch} from "../index";
import axios from "axios";
import {IFavorite} from "../../models/Types";
import {userSlice} from "./toolkitReducers";

export const fetchJokes = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.jokeFetching())
        const response = await axios.get<IFavorite>('https://api.chucknorris.io/jokes/random');
        dispatch(userSlice.actions.jokeFetchingSuccess(response.data.value))
    } catch (e) {
        if (e instanceof Error) {
          const errorMessage = e.message
            dispatch(userSlice.actions.jokeFetchingError(errorMessage))
        }
    }
}
