// src/pages/Comment.js
import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import CommentCard from "../cards/CommentCard";

function Comment() {
    /**
     * useState to hold all the stores
     */
    const [comments, setComments] = useState([]);

    /**
     * runs when the project starts, fetches all the comments and put them
     * into the comments useState
     */
    useEffect(() =>{
        fetch("/comments")
        .then ((result) => result.json())
        .then ((data) => {
            const comment = data.map((char) => (char));
            setComments(comment);
        });
    }, [setComments]);
    
    /**
     * Deletes a comment from the database
     */
    function deleteCommentFromDataBase(id){
        fetch("/comments/" + id, {
            method: "DELETE",
            })
            .then((reponse) => console.log(reponse.json()))
            .then(() => {
            setComments(comments.filter((comment) => comment.id !== id))
        }); 
    } 

     /**
     * Adds a edit comment from the database
     */
    function editCommentInDataBase(comment){
        fetch("/comments/" + comment.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: comment.user_id,
                character_id: comment.character_id,
                comment: comment.comment
            }),
        })
    }

    return (
        <Grid container spacing={1}>
            {comments.map(c => (
                <React.Fragment key={c.id}>
                    <Grid item>
                        <CommentCard 
                            comment={c} 
                            deleteComment={deleteCommentFromDataBase} 
                            editComment={editCommentInDataBase}
                        />
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    );
}

export default Comment;