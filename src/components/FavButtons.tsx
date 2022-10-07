import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux";
import {userSlice} from "../redux/store/toolkitReducers";

export const FavButtons: React.FC = () => {

    const dispatch = useAppDispatch();
    const {deleteAll} = userSlice.actions

    return (
        <div>
            <NavLink to='/'>
                <button className='fav-button'>back</button>
            </NavLink>
            <button
                onClick={() => dispatch(deleteAll())}
                className='fav-button'>delete all jokes</button>
        </div>
    );
};
