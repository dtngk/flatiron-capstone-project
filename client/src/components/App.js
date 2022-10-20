// src/components/App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Character from "../pages/Character";
import Comment from "../pages/Comment";
import Team from "../pages/Team";
import User from "../pages/User.js";
import HomePage from "./HomePage";
import Account from "../pages/Account"
import TeamComment from '../pages/TeamComment';

function App() {
   
    return (
        <div>
            <HomePage/>
            <Routes>
                <Route path="/" element={<Account/>}/>
                <Route path="/Character" element={<Character/>}/>
                <Route path="/Comment" element={<Comment/>}/>
                <Route path="/Team" element={<Team/>}/>
                <Route path="/User" element={<User/>}/>
                <Route path="/Account" element={<Account/>}/>
                <Route path="/TeamComment" element={<TeamComment/>}/>
            </Routes>  
        </div>
    );
}

export default App;
