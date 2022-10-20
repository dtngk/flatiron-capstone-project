// src/pages/Account.js
import React from "react";
import Ranking from "./Ranking";
import Main from "../components/Main";
import { Button, Stack, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material/";

function Account() {

    const user = React.useContext(Main);
    const [account, setAccount] = React.useState(false);
    const [signOut, setSignOut] = React.useState(false);

    const handleDelete = () => { 
        fetch("/users/" + user.user.id, {
        method: "DELETE",
        })
        .then((reponse) => console.log(reponse.json()))
        .then(() => {
           
        }); 

        user.logout();
    }

    const handleLogOut = () => {
        user.logout();
    }

    const handleCloseRemove = () => {

        setSignOut(false);
        setAccount(false);
    }

    const handleClickRemove = () => {
        setAccount(true);
    };

    const handleShowLogOut = () => {
        setSignOut(true)
    }

    return (
        <Stack>
            <Grid container>
                <Grid item xs={4}>
                    <Ranking rank={user.user.ranking} user={user.user.id}/>
                </Grid>
                <Grid item>
                    <br/><br/><br/><br/>
                <Button 
                    variant="contained" 
                    startIcon={<LogoutIcon/>} 
                    onClick={handleShowLogOut}
                    style={{minWidth: '100px', maxHeight: '100px'}}
                >
                    Log Out
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Dialog open={signOut} onClose={handleCloseRemove}>
                    <DialogTitle>Logout</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                    Log Out?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleLogOut}>Yes</Button>
                            <Button onClick={handleCloseRemove}>No</Button>
                        </DialogActions>
                </Dialog>
                <Button 
                    variant="contained" 
                    startIcon={<DeleteIcon/>}
                    onClick={handleClickRemove}
                    style={{maxWidth: '100px', maxHeight: '100px'}}
                >
                    Delete
                </Button>

                <Dialog open={account} onClose={handleCloseRemove}>
                    <DialogTitle>Delete Account</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Delete Account?
                            </DialogContentText>
                        </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDelete}>Yes</Button>
                        <Button onClick={handleCloseRemove}>No</Button>
                    </DialogActions>
                </Dialog>
                </Grid>
            </Grid>
        </Stack>  
    );
}

export default Account;
