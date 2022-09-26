// src/components/Character.js
import React, {useState, useEffect} from "react";

function Character() {

    /**
     * Localhost location for the database, where all the Characters are stored
     
    const host = "http://localhost:3000/characters";

    /**
     * useState to hold all the characters
     */
    //const [characters, setCharacters] = useState([]);

    /**
     * runs when the project starts, fetches all the Characters and put them
     * into the characters useState
     */
    /*
    useEffect(() =>{
        fetch(`${host}`)
        .then ((result) => result.json())
        .then ((data) => {
            const store = data.map((char) => (char));
            setCharacters(store);
        });
    }, [setCharacters]);
    */
    /**
     * Deletes a character from the database
     */
    /*
    function deleteCharacterFromDataBase(id){
        fetch(`${host}/${id}`, {
        method: "DELETE",
        })
        .then((reponse) => reponse.json())
        .then(() => {
        setCharacters(characters.filter((character) => character.id !== id))
        }); 
    } 
    */
    /**
     * Adds a new Character to the database
     */
    
    /*
    function addCharacterToDataBase(character){
        fetch(`${host}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: character.name,
                photo: character.photo,
                attack: character.attack,
                defense: character.defense,
                magic: character.magic,
                speed: character.speed,
                health: character.health
            }),
        })
    }
    */
    /*
    const mall = stores.map(s => (
        <StoreCard key={s.id} store={s} deleteStoreFromDataBase={deleteStoreFromDataBase}/>
    ))
    */
    return (
        <div>
            <p>
            In Character
            </p>
        </div>

    )
}

export default Character;