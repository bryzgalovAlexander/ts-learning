import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {userSlice} from "../redux/store/toolkitReducers";

export const Fav: any = () => {

    const {favoriteJokes} = useAppSelector(state => state.userReducer)
    const { deleteFavoriteJoke } = userSlice.actions
    const dispatch = useAppDispatch()

    return (
        favoriteJokes.map( item =>
            <div
                key={item.id}
                className='fav-container'>
                <div>
                    <div className='fav-box'>{item.value}</div>
                    <button
                        onClick={() => dispatch(deleteFavoriteJoke(item.id))}
                        className='button' >delete</button>
                </div>
            </div>
        )
    );
};
