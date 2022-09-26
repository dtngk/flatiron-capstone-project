// src/components/Comment.js
import React, {useState, useEffect} from "react";

function Comment() {

    /**
     * Localhost location for the database, where all the Comments are stored
     
    const host = "http://localhost:3000/comments";

    /**
     * useState to hold all the stores
     */
    //const [comments, setComments] = useState([]);

    /**
     * runs when the project starts, fetches all the Stores and put them
     * into the stores useState
     */
    /*
    useEffect(() =>{
        fetch(`${host}`)
        .then ((result) => result.json())
        .then ((data) => {
            const comment = data.map((char) => (char));
            setSComments(comment);
        });
    }, [setComments]);
    */
    /**
     * Deletes a comment from the database
     */
    /*
    function deleteCommentFromDataBase(id){
        fetch(`${host}/${id}`, {
        method: "DELETE",
        })
        .then((reponse) => reponse.json())
        .then(() => {
        setComments(comments.filter((comment) => comment.id !== id))
        }); 
    } 
    */
    /**
     * Adds a new comment to the database
     */
    /*
    function addCommentToDataBase(comment){
        fetch(`${host}`, {
        method: "POST",
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
    */

    return (
        <div>
            <p>
            In Comment
            </p>
        </div>
    )
}

export default Comment;