// src/pages/Character.js
import React from 'react';
import CharacterCard from '../cards/CharacterCard';
import { Grid, Stack } from '@mui/material/';

function Character() {

    const [characters, setCharacters] = React.useState([]);

    /**
     * runs when the project starts, fetches all the Characters and put them
     * into the characters useState
     */
    React.useEffect(() => {
        fetch("/characters")
          .then((r) => r.json())
          .then(setCharacters);
    }, [setCharacters]);
    

    return (
        <Stack spacing={1}>
            <Grid container spacing={1}>
                {characters.map(c => (
                    <React.Fragment key={c.id}>
                        <Grid item>
                            <CharacterCard character={c}/>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Stack>
    );
}

export default Character;