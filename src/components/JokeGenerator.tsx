import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {userSlice} from "../redux/store/toolkitReducers";
import {NavLink} from "react-router-dom";
import { fetchJokesAction } from "../redux/saga/action";

export const JokeGenerator: React.FC = () => {

    const { joke, isLoading, error, favoriteJokes, everyThreeSeconds } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const {addJokeToFavorite, takeEveryThreeSeconds} = userSlice.actions

    function getJokes() {
        dispatch(fetchJokesAction({joke: joke, isLoading: isLoading}))
    }

    useEffect(() => {
        let intervalId: NodeJS.Timer | number = 0;
        if (everyThreeSeconds) {
            intervalId = setInterval(getJokes, 3000)
        } else {
            clearInterval(intervalId)
        }
        return () => clearInterval(intervalId)
    })

    return (
        <div>
            <div className='empty'/>
            <div className='button-container'>
                <button
                    onClick={() => getJokes()}
                    className={ isLoading || everyThreeSeconds ? 'button-inactive' : 'button'}
                >random joke</button>
                {everyThreeSeconds ?
                    <button
                        className={isLoading ? 'button-inactive' : 'button'}
                        onClick={() => ( dispatch(takeEveryThreeSeconds()) )}
                    >stop joking
                    </button> :
                    <button
                    onClick={() => ( dispatch(takeEveryThreeSeconds()) )}
                    className={ isLoading ? 'button-inactive' : 'button'}
                >get jokes every 3 seconds
                </button>
                }
            </div>
            <div className='container'>
                { isLoading && <h1>Loading...</h1> }
                { !isLoading && error && <h1>{error}</h1> }
                { !isLoading && joke }
            </div>
            <div className='button-container'>
                <button
                    onClick={() => dispatch(addJokeToFavorite({id: favoriteJokes.length, value: joke}))}
                    className={ isLoading ? 'button-inactive' : 'button'}
                >Add to favorites
                </button>
                <NavLink to='/favorite'>
                    <button
                        className={ isLoading ? 'button-inactive' : 'button'}
                    >Check favorite jokes
                    </button>
                </NavLink>
            </div>
        </div>
    );
};
