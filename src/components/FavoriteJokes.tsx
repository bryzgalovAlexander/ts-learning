import React from 'react';
import {FavButtons} from "./FavButtons";
import {Fav} from "./Fav";

export const FavoriteJokes: React.FC = () => {
    return (
        <div>
            <FavButtons/>
            <div className='fav-container'>
                <Fav/>
            </div>
        </div>
    );
};

