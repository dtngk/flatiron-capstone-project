// src/components/App.js
import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Character from "./Character";
import Comment from "./Comment";
import Team from "./Team";
import User from "./User.js";
import HomePage from "./HomePage";
import Account from "./Account"
import TeamComment from './TeamComment';
import NewTeam from './NewTeam';

function App() {

    const [characters, setCharacters] = useState([]);

    /**
     * runs when the project starts, fetches all the Characters and put them
     * into the characters useState
     */
    useEffect(() => {
        fetch("/characters")
          .then((r) => r.json())
          .then(setCharacters);
    }, [setCharacters]);
    
    /**
     * Deletes a character from the database
     */
    function deleteCharacterFromDataBase(id){
        fetch("/characters/" + id, {
        method: "DELETE",
        })
        .then((reponse) => console.log(reponse.json()))
        .then(() => {
            setCharacters(characters.filter((character) => character.id !== id))
        }); 
    } 

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
                <Route path="/NewTeam" element={<NewTeam characters={characters}/>}/>
            </Routes>
        </div>
    );
}

export default App;


/*
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
//import RecipeList from "RecipeList";
//import NewRecipe from "NewRecipe";

function App() {
    const [user, setUser] = useState(null);
    //const user = null;

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
        });
    }, []);

    if (!user) return <Login onLogin={setUser} />;

    return (
        <>
        <NavBar user={user} setUser={setUser} />
        <main>
            <Routes>
            <Route path="/new">
                
            </Route>
            <Route path="/">
                
            </Route>
            </Routes>
        </main>
        </>
    );
}
export default App;
*/