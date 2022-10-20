// src/forms/LoginForm.js
import React, { useState } from 'react';
import { Box, IconButton, OutlinedInput, InputLabel, InputAdornment } from '@mui/material/';
import { FormControl, TextField, Button, Stack, Grid } from '@mui/material/';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

/**
 * Parameter onLogin comes from /components/Global.js
 */ 
function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
      
        if (r.ok) {
            r.json().then((user) => onLogin(user));
        }  else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
  }

  return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Stack>
                <Grid>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <TextField
                            id="outlined-required"
                            label="Username"
                            onChange={(e) => {setUsername(e.target.value)}}
                            type={username}
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                    </FormControl>
                </Grid>

                <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
                    <Button  startIcon={<LoginIcon/>} variant="contained" onClick={handleSubmit}>Log In</Button>
                </FormControl>

                {(errors.length !== 0) ? ( 
                    <ul>
                        Error(s) were found when trying to log in.
                        {errors.map((err) => 
                            <li>
                                {err}
                            </li>
                        )}
                    </ul> 
                ) : (null)}
            </Stack>
        </Box>
  );
}

export default LoginForm;