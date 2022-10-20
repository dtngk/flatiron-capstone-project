// src/forms/SignUpForm.js
import React from 'react';
import { Box, IconButton, OutlinedInput, InputLabel, InputAdornment } from '@mui/material/';
import { FormControl, TextField, Button, Stack, Grid } from '@mui/material/';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

/**
 * Parameter onLogin comes from /components/Global.js
 */ 
function SignUpForm({onLogin}) {

    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = React.useState(false);
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [errors, setErrors] = React.useState([]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowPasswordConfirmation = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
            email,
        }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }   

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Stack>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField
                        id="outlined-required"
                        label="Username"
                        onChange={(e) => setUserName(e.target.value)}
                        type={username}
                    />
                </FormControl>
                <Grid>
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

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Re-enter Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPasswordConfirmation ? 'text' : 'password'}
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPasswordConfirmation}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Grid>
                <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
                    <TextField
                        id="outlined-required"
                        label="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        type={email}
                    />
                </FormControl>            

                <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined" onClick={handleSubmit}>
                    <Button variant="contained">Create Account</Button>
                </FormControl>

                {(errors.length !== 0) ? ( 
                        <ul>
                            Error(s) were found when trying to create Account.
                            {errors.map((err) => 
                                <li>
                                    {err}
                                </li>
                            )}
                        </ul> 
                    ) : (null)
                }
            </Stack>
        </Box>
  );
}

export default SignUpForm;