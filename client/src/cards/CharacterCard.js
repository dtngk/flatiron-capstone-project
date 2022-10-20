// src/cards/CharacterCard.js
import React, { useState } from 'react';
import Main from '../components/Main';
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardActions } from '@mui/material/';
import { Collapse, IconButton, Typography, Grid } from '@mui/material/';
import { Stack, Button, TextField } from '@mui/material/';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

/** 
 * paramter character comes from /pages/Character.js
 */ 
function CharacterCard({character}) {

    const [expanded, setExpanded] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [newComment, setNewComment] = React.useState("");
    const [errors, setErrors] = useState([]);
    const user = React.useContext(Main)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleCloseEdit = () => {
        setEdit(false);
        setErrors([]);
    };

    function addCommentToDataBase(){
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.user.id,
                character_id: character.id,
                comment: newComment
            }),
            }).then((r) => {
                if (r.ok) {
                    r.json().then(() => handleCloseEdit());
                }  else {
                    r.json().then((err) => {
                        setErrors("Comment " + err.errors.comment);
                    })
                }
        });
    }

    const comments = character.comment.map(c =>{
        return (
            <li key={c.id}>
                {c.comment}
            </li>
        )
    });

    return (
        <Card sx={{minWidth: 200, maxWidth: 200, border: 3}} style={{backgroundColor: "white"}} align='center'>
            <CardContent>
                <Typography variant="h4" color="blue">
                    {character.name}<br/>
                </Typography>
                <Typography variant="h6" color="purple">
                   <br/> Health: {character.health} ❤️ <br/>
                    Attack: {character.attack} ⚔️ <br/>
                    Magic: {character.magic} 🧙 <br/>
                    Defense: {character.defense} 🛡️ <br/>
                    Speed: {character.speed} 👟 <br/>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {comments} 
            </Collapse>
                <Stack>
                    
                    <Button variant="contained" startIcon={<AddCircleIcon/>} onClick={handleClickEdit}>
                        Comment
                    </Button>
                    
                    <Dialog open={edit} onClose={handleClickEdit}>
                        <DialogTitle>Add Comment</DialogTitle>
                        <DialogContent>
                            <DialogContentText>

                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="add comment"
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
                                        Error trying to comment on a Character.
                                            <li>
                                                {errors}
                                            </li>
                                    </ul> 
                                    ) : (null)
                                }
                                <Button onClick={addCommentToDataBase}>Add</Button>
                                <Button onClick={handleCloseEdit}>Cancel</Button>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Stack>
        </Card>
    );
}

export default CharacterCard;
