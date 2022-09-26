// src/components/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
//import Main from "./Main";
import Character from "./Character";
import Comment from "./Comment";
import Team from "./Team";
import NavBar from "./NavBar.js";

function App() {
  
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/Character" element={<Character/>}/>
                <Route path="/Comment" element={<Comment/>}/>
                <Route path="/Team" element={<Team/>}/>
            </Routes>
        </div>
    );
}

export default App;