// src/cards/TeamCard.js
import React, {useState, useEffect} from 'react';
import Main from '../components/Main';
import { Typography, Card, CardHeader, CardContent, Stack, Grid } from '@mui/material/';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material/';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

/**
 * Parameter team comes from /pages/Team.js
 * Parameter deleteTeam comes is fucntion deleteTeamFromDataBase in /pages/Team.js
 */
function TeamCard({team, deleteTeam}) {

    const [characters, setCharacters] = useState([]);
    const user = React.useContext(Main);
  
    /**
     * runs when the project starts, fetches all the Characters and put them
     * into the characters useState
     */
    useEffect(() => {
        fetch("/characters")
          .then((r) => r.json())
          .then(setCharacters);
    }, []);

    const [edit, setEdit] = React.useState(false);
    const [editComment, setEditComment] = React.useState(false);
    const [removeTeam, setRemoveTeam] = React.useState(false);
    const [newTeam, setNewTeam] = React.useState("");
    const [newComment, setNewComment] = React.useState("");
    const [errors, setErrors] = React.useState([]);
    const [one, setOne] = React.useState('');
    const [two, setTwo] = React.useState('');
    const [three, setThree] = React.useState('');

    const handleClose = () => {
        setEdit(false);
        setEditComment(false);
        setErrors([]);
        setOne('');
        setTwo('');
        setThree('');
        setNewTeam('');
    };

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleClickAdd = () => {
        setEditComment(true);
    }
    
    const handleCloseAdd = () => {
        setEditComment(false);
        setEdit(false);
    }

    const handleClickRemove = () => {
        setRemoveTeam(true);
    };

    const handleCloseRemove = () => {
        setRemoveTeam(false);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        setRemoveTeam(false);
        deleteTeam(team.id)
    };

    function handleAddTeamComment(){
        fetch("/team_comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.user.id,
                team_id: team.id,
                comment: newComment,
            }),
            }).then((r) => {
            if (r.ok) {
                r.json().then(() => handleClose());
            }  else {
                r.json().then((err) => {
                    setErrors(err.errors)});
            }
        });     
    }

    function handleEditTeam(){
        fetch("/teams/" + team.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: team.user.id,
                team_id: team.id,
                characters: teamArray,
                team_name: newTeam
            }), 
        });
    }

    const char1 = (team.characters[0]) ? (team.characters[0].split(',')) : null
    const char2 = (team.characters[1]) ? (team.characters[1].split(',')) : null
    const char3 = (team.characters[2]) ? (team.characters[2].split(',')) : null

    const hero1 = (char1) ? ([char1[0].substring(char1[0].indexOf(">")+1, char1[0].length),
                    char1[1].substring(char1[1].indexOf(">")+2, char1[1].length-1),
                    char1[2].substring(char1[2].indexOf(">")+1, char1[2].length),
                    char1[3].substring(char1[3].indexOf(">")+1, char1[3].length),
                    char1[4].substring(char1[4].indexOf(">")+1, char1[4].length),
                    char1[5].substring(char1[5].indexOf(">")+1, char1[5].length),
                    char1[6].substring(char1[6].indexOf(">")+1, char1[6].length-1)]) : null;

    const hero2 = (char2) ? ([char2[0].substring(char2[0].indexOf(">")+1, char2[0].length),
                    char2[1].substring(char2[1].indexOf(">")+2, char2[1].length-1),
                    char2[2].substring(char2[2].indexOf(">")+1, char2[2].length),
                    char2[3].substring(char2[3].indexOf(">")+1, char2[3].length),
                    char2[4].substring(char2[4].indexOf(">")+1, char2[4].length),
                    char2[5].substring(char2[5].indexOf(">")+1, char2[5].length),
                    char2[6].substring(char2[6].indexOf(">")+1, char2[6].length-1)]) : null;
                    
    const hero3 = (char3) ? ([char3[0].substring(char3[0].indexOf(">")+1, char3[0].length),
                    char3[1].substring(char3[1].indexOf(">")+2, char3[1].length-1),
                    char3[2].substring(char3[2].indexOf(">")+1, char3[2].length),
                    char3[3].substring(char3[3].indexOf(">")+1, char3[3].length),
                    char3[4].substring(char3[4].indexOf(">")+1, char3[4].length),
                    char3[5].substring(char3[5].indexOf(">")+1, char3[5].length),
                    char3[6].substring(char3[6].indexOf(">")+1, char3[6].length-1)]) : null;
    
    const teamArray = [characters[one - 1], characters[two - 1], characters[three - 1]];

    const charArray = characters.map(c => (
        <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
    ))

    return (
        <Card sx={{minWidth: 400, maxWidth: 400, border: 2}} align='center'>
            <CardHeader 
                title={team.user.username + "'s Team"} 
            />
            <CardContent>
                <Typography>
                    <Typography variant="h3" color="purple">
                        {team.team_name}
                    </Typography> 
                    <Stack spacing={0.5} direction="row">  
                        {hero1 ? (
                        <Typography color="purple" sx={{border: 3}}>
                            {hero1[1]} <br/>
                            Health: {hero1[6]} ❤️ <br/>
                            Attack: {hero1[2]} ⚔️ <br/>
                            Magic: {hero1[4]} 🧙 <br/>
                            Defense: {hero1[3]} 🛡️ <br/>
                            Speed: {hero1[5]} 👟
                        </Typography> ) : (null)}
                        {hero2 ? (
                        <Typography color="purple" sx={{border: 3}}>
                            {hero2[1]} <br/>
                            Health: {hero2[6]} ❤️ <br/>
                            Attack: {hero2[2]} ⚔️ <br/>
                            Magic: {hero2[4]} 🧙 <br/>
                            Defense: {hero2[3]} 🛡️ <br/>
                            Speed: {hero2[5]} 👟
                        </Typography> ) : (null)}
                        {hero3 ? ( 
                        <Typography color="purple" sx={{border: 3}}>
                            {hero3[1]} <br/>
                            Health: {hero3[6]} ❤️ <br/>
                            Attack: {hero3[2]} ⚔️ <br/>
                            Magic: {hero3[4]} 🧙 <br/>
                            Defense: {hero3[3]} 🛡️ <br/>
                            Speed: {hero3[5]} 👟
                        </Typography> ) : (null)}
                    </Stack> 
                </Typography> 
            </CardContent>

            <Stack direction="row" spacing={2}>
                
                {(user.user.id !== team.user_id) ? (
                    <Button variant="contained" startIcon={<AddCircleIcon/>} onClick={handleClickAdd}>
                        Comment
                    </Button>) : (null)
                }

                <Dialog open={editComment} onClose={handleClickAdd}>
                    <DialogTitle>Add Comment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Add Comment"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {setNewComment(e.target.value)}}
                            type={newComment}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Grid>
                            {(errors.length !== 0) ? ( 
                                <ul>
                                    Error trying to comment a Team.
                                        <li>
                                            {errors}
                                        </li>
                                </ul> 
                                ) : (null)
                            }
                            <Button onClick={handleAddTeamComment}>Add Comment</Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </Grid>
                    </DialogActions>
                </Dialog>
                
                {(user.user.id === team.user_id) ? (
                    <Button variant="contained" startIcon={<EditIcon/>} onClick={handleClickEdit}>
                        Edit
                    </Button> ) : (null)
                }
                <Dialog open={edit}  onClose={handleClickEdit}>
                    <DialogTitle>Edit Team</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        <Stack sx={{ minWidth: 180 }} align='center' spacing={2}>
                            <br/>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Edit Team Name"
                                fullWidth
                                variant="standard"
                                onChange={(e) => {setNewTeam(e.target.value)}}
                                type={newTeam}
                            />
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
                        <Button onClick={handleEditTeam}>Edit</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
                
                {(user.user.id === team.user_id) ? (
                    <Button variant="contained" startIcon={<DeleteIcon/>} onClick={handleClickRemove}>
                        Delete
                    </Button> ) : (null)
                }
                <Dialog open={removeTeam} onClose={handleCloseRemove}>
                    <DialogTitle>Delete</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                    Delete Team
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDelete}>Yes</Button>
                            <Button onClick={handleCloseRemove}>No</Button>
                        </DialogActions>
                </Dialog>
                
            </Stack>
        </Card>    
    );
}

export default TeamCard;
