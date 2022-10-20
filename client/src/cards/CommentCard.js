// src/cards/CommentCard.js
import React from 'react';
import Main from '../components/Main';
import { Typography, Card, Stack, Button, TextField } from '@mui/material/';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

/**
 * Parameter comment comes from /pages/Comment.js
 * Parameter deleteComment is function deleteCommentFromDataBase in /pages/Comment.js
 * Paramter editComment is function in editCommentInDataBase /pages/Comment.js
 */
function CommentCard({comment, deleteComment, editComment}) {

    const [edit, setEdit] = React.useState(false);
    const [removeComment, setRemoveComment] = React.useState(false);
    const [newComment, setNewComment] = React.useState("");
    const user = React.useContext(Main);

    const cardStyle = {
        display: 'block',
        width: '20vw',
    };

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
        deleteComment(comment.id);
    };

    const handleEdit = () => {
        comment.comment = newComment;
        setEdit(false);
        editComment(comment);
    };

    return (
        <Card sx={{border: 3}} style={cardStyle} align='center'>
            <Typography variant="h5" color="purple">
                {comment.user.username +"'s comment on " + comment.character.name} 
            </Typography>
            <Stack direction="row" spacing={1}>
                <Typography variant="subtitle1">
                    {comment.comment}
                </Typography>
                
            </Stack>
            <Stack>
                {(user.user.id === comment.user_id) ? (
                    <Button variant="contained" startIcon={<EditIcon/>} onClick={handleClickEdit}>
                        Edit
                    </Button> ) : (null)
                }
                <Dialog open={edit} onClose={handleClickEdit} >
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
                
                {(user.user.id === comment.user_id) ? (                    
                <Button variant="contained" startIcon={<DeleteIcon/>} onClick={handleClickRemove}>
                    Delete
                </Button> ) : (null)
                }
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

export default CommentCard;
