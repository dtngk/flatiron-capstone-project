// src/cards/TeamCard.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function TeamCard({team, deleteTeam}) {

    const [edit, setEdit] = React.useState(false);
    const [removeTeam, setRemoveTeam] = React.useState(false);
    const [newTeam, setNewTeam] = React.useState("");
    const [newComment, setNewComment] = React.useState("");

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleCloseEdit = () => {
        setEdit(false);
    };

    const handleClickAdd = () => {
        setNewComment(true);
    }
    
    const handleCloseAdd = () => {
        setNewComment(false);
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

    const handleEdit = () => {
        setEdit(false);
    };

    function handleAddTeamComment(){
        setNewComment(false);
        fetch("/team_comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: 3,
                team_id: team.id,
                comment: newComment
            }),
        })
    }

    console.log(team)

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
    
   

    return (
        <Card sx={{minWidth: 300, border: 2}} align='center'>
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
                        </Typography> ) : (<br></br>)}
                        {hero2 ? (
                        <Typography color="purple" sx={{border: 3}}>
                            {hero2[1]} <br/>
                            Health: {hero2[6]} ❤️ <br/>
                            Attack: {hero2[2]} ⚔️ <br/>
                            Magic: {hero2[4]} 🧙 <br/>
                            Defense: {hero2[3]} 🛡️ <br/>
                            Speed: {hero2[5]} 👟
                        </Typography> ) : (<br></br>)}
                        {hero3 ? ( 
                        <Typography color="purple" sx={{border: 3}}>
                            {hero3[1]} <br/>
                            Health: {hero3[6]} ❤️ <br/>
                            Attack: {hero3[2]} ⚔️ <br/>
                            Magic: {hero3[4]} 🧙 <br/>
                            Defense: {hero3[3]} 🛡️ <br/>
                            Speed: {hero3[5]} 👟
                        </Typography> ) : (<br></br>)}
                    </Stack> 
                </Typography> 
            </CardContent>

            <Stack direction="row" spacing={2}>
                <Button variant="contained" startIcon={<AddCircleIcon/>} onClick={handleClickAdd}>
                    Comment
                </Button>
                <Dialog open={Boolean(newComment)} onClose={handleClickAdd}>
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
                        <Button onClick={handleAddTeamComment}>Add Comment</Button>
                        <Button onClick={handleCloseAdd}>Cancel</Button>
                    </DialogActions>
                </Dialog>
                
                <Button variant="contained" startIcon={<EditIcon/>} onClick={handleClickEdit}>
                    Edit
                </Button>
                <Dialog open={edit}  onClose={handleClickEdit}>
                    <DialogTitle>Edit Team</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Edit Team"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {setNewTeam(e.target.value)}}
                            type={newTeam}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleEdit}>Edit</Button>
                        <Button onClick={handleCloseEdit}>Cancel</Button>
                    </DialogActions>
                </Dialog>

                <Button variant="contained" startIcon={<DeleteIcon/>} onClick={handleClickRemove}>
                    Delete
                </Button>
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

/**
 * <Chip
        label="Delete"
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
    />
 */