// src/components/NewTeam.js
import React from 'react';
import Main from '../components/Main';
import { Grid, InputLabel, MenuItem, FormControl, Select} from '@mui/material/';
import { Stack, TextField, Button } from '@mui/material/Stack';

function NewTeam({characters}) {
    const [one, setOne] = React.useState('');
    const [two, setTwo] = React.useState('');
    const [three, setThree] = React.useState('');
    const [teamName, setTeamName] = React.useState('');
    const user = React.useContext(Main)

    const charArray = characters.map(c => (
        <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
    ))

    function addTeamToDataBase(){
        fetch("/teams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                team_name: teamName,
                user_id: user.id,
                characters: team
            }),
        })

        setOne('');
        setTwo('');
        setThree('');
        setTeamName(null);
    }

    const team = [characters[one - 1], characters[two - 1], characters[three - 1]]

    return (
        <Stack sx={{ minWidth: 180 }} align='center' spacing={2}>
            <br/>
            <Grid>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Team Name"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {setTeamName(e.target.value)}}
                    type={teamName}
                />
            </Grid>
            <FormControl>
                <InputLabel>Character 1:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={one}
                        label="Age"
                        onChange={(e) => setOne(e.target.value)}
                    >
                        {charArray}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>Character 2:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={two}
                        label="Age"
                        onChange={(e) => setTwo(e.target.value)}
                    >
                        {charArray}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>Character 3:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={three}
                        label="Age"
                        onChange={(e) => setThree(e.target.value)}
                    >
                        {charArray}
                </Select>
            </FormControl>
            <Button variant="contained" onClick={addTeamToDataBase}>Create Team</Button>
        </Stack>
    );
}

export default NewTeam;