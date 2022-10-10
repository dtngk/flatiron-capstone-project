// src/components/Team.js
import React, {useState, useEffect} from "react";
import TeamCard from "../cards/TeamCard";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
//import { gsap } from "gsap";

function Team() {

    /**
     * useState to hold all the teams
     */
    const [teams, setTeams] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [one, setOne] = React.useState('');
    const [two, setTwo] = React.useState('');
    const [three, setThree] = React.useState('');
    const [teamName, setTeamName] = React.useState('');

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleCloseEdit = () => {
        setEdit(false);
        setOne('');
        setTwo('');
        setThree('');
        setTeamName('');
    };

    /**
     * runs when the project starts, fetches all the Teams and put them
     * into the teams useState
     */
    useEffect(() =>{
        fetch("/teams")
        .then ((result) => result.json())
        .then ((data) => {
            const team = data.map((char) => (char));
            setTeams(team);
        });
    }, [setTeams]);
    
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
     * Deletes a team from the database
     */
    
    function deleteTeamFromDataBase(id){
        fetch("/teams/" + id, {
        method: "DELETE",
        })
        .then((reponse) => console.log(reponse.json()))
        .then(() => {
        setTeams(teams.filter((team) => team.id !== id))
        }); 
    } 
    
    /**
     * Adds a new team to the database
     */
    
    function addTeamToDataBase(){
            fetch("/teams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                team_name: teamName,
                user_id: 3,
                characters: team
            }),
            })

            setEdit(false);
            setOne('');
            setTwo('');
            setThree('');
            setTeamName('');
            window.location.reload(false);
    }

    const team = [characters[one - 1], characters[two - 1], characters[three - 1]];

    const charArray = characters.map(c => (
        <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
    ))

    return (
        <Stack container spacing={1}>
            <Button variant="contained" startIcon={<AddCircleIcon/>} onClick={handleClickEdit}>
                Add Team
            </Button>
            <Dialog open={edit} onClose={handleClickEdit}>
                <DialogTitle>Add Team</DialogTitle>
                <DialogContent>
                    <DialogContentText>
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
                                    value={one}
                                    label="character1"
                                    onChange={(e) => setOne(e.target.value)}
                                >
                                    {charArray}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel>Character 2:</InputLabel>
                                <Select
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

                                    value={three}
                                    label="Age"
                                    onChange={(e) => setThree(e.target.value)}
                                >
                                    {charArray}
                                </Select>
                            </FormControl>
                        </Stack>        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={addTeamToDataBase}>Add</Button>
                    <Button onClick={handleCloseEdit}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Grid container spacing={1}>
                {teams.map(team => (
                    <Grid item>
                        <TeamCard key={team.id} team={team} deleteTeam={deleteTeamFromDataBase} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}

export default Team;