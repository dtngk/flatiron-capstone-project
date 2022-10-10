// src/components/Character.js
import React, {useState, useEffect} from 'react';
import CharacterCard from '../cards/CharacterCard';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
//import { gsap } from "gsap";

function Character() {
    /**
     * useState to hold all the characters
     */
    
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
    
    /**
     * Adds a new Character to the database
     */
    function addCharacterToDataBase(character){
        fetch("/characters", {
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
    
    return (
        <Stack spacing={1}>
            <br/>
           
            <Grid container spacing={1}>
                {characters.map(c => (
                <Grid item>
                    <CharacterCard key={c.id} character={c} deleteCharacter={deleteCharacterFromDataBase} />
                </Grid>
            ))}
            </Grid>
        </Stack>
       
    )
}

export default Character;