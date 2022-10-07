import React from 'react';
import './index.css';
import {JokeGenerator} from "./components/JokeGenerator";
import {Route, Routes} from "react-router";
import {FavoriteJokes} from "./components/FavoriteJokes";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<JokeGenerator/>}/>
                <Route path='/favorite' element={<FavoriteJokes/>}/>
            </Routes>
        </div>
    );
};

export default App;