// src/pages/User.js
import React, {useState, useEffect} from "react";
import UserCard from "../cards/UserCard";
import { Grid, Stack } from '@mui/material';

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
    }, []);
    
    return (
        <Stack>
            <Grid container>
                <h1>&emsp;&emsp;&emsp;&emsp;List of all Active Users</h1>
            </Grid>
            <Grid container spacing={1}>
                {users.map(u => (
                    <React.Fragment key={u.id}>
                        <Grid item>
                            <UserCard user={u}/>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Stack>
    )
}

export default User;
