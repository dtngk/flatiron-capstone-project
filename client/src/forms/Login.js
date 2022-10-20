// src/forms/Login.js
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Grid, Stack, FormControl, Button } from "@mui/material/";

/**
 * Parameter onLogin comes from /components/Global.js
 */ 
function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? (
            <>
                <Grid>
                    <h1>&emsp;&emsp;&emsp;&emsp;&emsp;Sign In</h1>
                    <LoginForm onLogin={onLogin} />
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                              
                    <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
                        Create an Account!  
                        <Button variant="contained" onClick={() => setShowLogin(false)}>Register Now!</Button>
                    </FormControl>
                </Grid>
            </>
          ) : (
            <>
                <Grid>
                    <h1>&emsp;&emsp;&emsp;Create an Account</h1>
                    <Stack>
                        <SignUpForm onLogin={onLogin} />
                        <br/><br/><br/><br/><br/><br/><br/><br/>    
                        Already have an Account?
                        <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
                                <Button variant="contained" onClick={() => setShowLogin(true)}>Sign In</Button>
                        </FormControl>
                    </Stack>
                </Grid>
            </>
          )}
        </div>
    );
}

export default Login;