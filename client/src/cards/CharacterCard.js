// src/cards/CharacterCard.js
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Grid } from '@mui/material';

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

function CharacterCard({character, deleteCharacter}) {
    const [expanded, setExpanded] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [newComment, setNewComment] = React.useState("");

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDelete = () => {
        deleteCharacter(character.id)
    };

    const handleEdit = () => {
        
    };

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleCloseEdit = () => {
        setEdit(false);
    };

    

    function addCommentToDataBase(e){
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: 1,
                character_id: character.id,
                comment: newComment
            }),
        })
        setEdit(false);
    }

    const comments = character.comment.map(c => (c.comment))

    return (
        <Card sx={{minWidth: 400, border: 3}} style={{backgroundColor: "white"}} align='center'>
            <CardContent>
                <Typography variant="h2" color="blue">
                    {character.name}<br/>
                </Typography>
                <Typography variant="h5" color="purple">
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
             
                    <Grid>{comments}</Grid>
            
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
                            <Button onClick={addCommentToDataBase}>Add</Button>
                            <Button onClick={handleCloseEdit}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                    
                </Stack>
        </Card>
    );
}

export default CharacterCard;