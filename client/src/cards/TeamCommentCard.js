// src/cards/TeamCommentCard.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
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

const cardStyle = {
    display: 'block',
    //width: '35vw',
   // height: '26vw'
}

function TeamCommentCard({comment, deleteComment, editComment}) {

    const [edit, setEdit] = React.useState(false);
    const [removeComment, setRemoveComment] = React.useState(false);
    const [newComment, setNewComment] = React.useState("");

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleCloseEdit = () => {
        setEdit(false);
    };

    const handleClickRemove = () => {
        setRemoveComment(true);
    };

    const handleCloseRemove = () => {
        setRemoveComment(false);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        setRemoveComment(false);
        deleteComment(comment.id)
    };

    const handleEdit = () => {
        comment.comment = newComment;
        setEdit(false);
        editComment(comment);
    };

    console.log(comment.user)

    return (
        
        <Card style={cardStyle} sx={{border: 3}} align='center'>
            <CardHeader
        
                    title={comment.user.username +"'s comment on " + comment.team.team_name} 
               
            />
            <Stack direction="column" spacing={1} >
                <Typography variant="h6" align='center'>
                    {comment.comment}
                </Typography>
                <Button variant="contained" startIcon={<EditIcon/>} onClick={handleClickEdit}>
                    Edit
                </Button>
                <Dialog open={edit} onClose={handleClickEdit}>
                    <DialogTitle>Edit Comment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                                {comment.comment}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Edit comment"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {setNewComment(e.target.value)}}
                            type={newComment}
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
                <Dialog open={removeComment} onClose={handleCloseRemove}>
                    <DialogTitle>Delete</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                    Delete Comment?
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

export default TeamCommentCard;

/**
 * <Chip
        label="Delete"
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
    />
 */