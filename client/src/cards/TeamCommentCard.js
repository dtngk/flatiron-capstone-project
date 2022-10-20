// src/cards/TeamCommentCard.js
import React from 'react';
import Main from '../components/Main';
import { Typography, Card, CardHeader, Stack, Button, TextField } from '@mui/material/';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const cardStyle = {
    display: 'block',
    width: '20vw',
};

/**
 * Parameter comment comes from /pages/TeamComment.js
 * Parameter deleteComment is function deleteCommentFromDataBase /pages/TeamComment.js
 * Parameter editComment is function editCommentInDataBase in /pages/TeamComment.js
 */
function TeamCommentCard({comment, deleteComment, editComment}) {

    const [edit, setEdit] = React.useState(false);
    const [removeComment, setRemoveComment] = React.useState(false);
    const [newComment, setNewComment] = React.useState("");
    const user = React.useContext(Main)

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

    return (
        
        <Card style={cardStyle} sx={{minHeight: 216, border: 3}} align='center'>
            <CardHeader
                title={comment.user.username +"'s comment on " + comment.team.team_name} 
            />
            <Stack direction="column" spacing={1} >
                <Typography variant="h6" align='center' noWrap>
                    {comment.comment}
                </Typography>
                {(user.user.id === comment.user_id) ? (
                    <Button variant="contained" startIcon={<EditIcon/>} onClick={handleClickEdit}>
                        Edit
                    </Button> ) : (null)
                }
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

export default TeamCommentCard;
