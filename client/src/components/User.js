// src/components/User.js
import React, {useState, useEffect} from "react";
import UserCard from "../cards/UserCard";
//import { gsap } from "gsap";
import Grid from '@mui/material/Grid';

function User() {

    /**
     * useState to hold all the users
     */
    const [users, setUsers] = useState([]);

    /**
     * runs when the project starts, fetches all the users and put them
     * into the users useState
     */
    useEffect(() =>{
        fetch("/users")
        .then ((result) => result.json())
        .then ((data) => {
            const user = data.map((char) => (char));
            setUsers(user);
        });
    }, [setUsers]);
    
    /**
     * Deletes a user from the database
     */
    function deleteUserFromDataBase(id){
        fetch("/users/${id}", {
        method: "DELETE",
        })
        .then((reponse) => console.log(reponse.json()))
        .then(() => {
            setUsers(users.filter((user) => user.id !== id))
        }); 
    } 
    
    /**
     * Adds a new user to the database
     */
    
    function addUserToDataBase(user){
        fetch("/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        }),
        })
    }
   
    return (
        <Grid container spacing={1}>
            {users.map(u => (
                <Grid item>
                    <UserCard key={u.id} user={u} />
                </Grid>
            ))}
        </Grid>
    )
}

export default User;