// src/components/Homepage.js
import React from 'react';
import Main from './Main';
import { AppBar, Box, Toolbar, IconButton, Menu } from '@mui/material/';
import { Container, Avatar, Tooltip, MenuItem } from '@mui/material/';
import { NavLink } from "react-router-dom";

const styles = {
    textDecoration: 'none',
    color: 'purple',
    fontSize: '20px',
};

function HomePage() {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const user = React.useContext(Main)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MenuItem key={"character"} >
                        <nav className="navbar">
                            <NavLink to="/character" style={styles}>Character</NavLink>
                        </nav>
                    </MenuItem>
                    <MenuItem key={"comment"} >
                        <nav className="navbar">
                            <NavLink to="/comment" style={styles}>Comment</NavLink>
                        </nav>
                    </MenuItem>
                    <MenuItem key={"team"} >
                        <nav className="navbar">
                            <NavLink to="/team" style={styles}>Team</NavLink>
                        </nav>
                    </MenuItem>
                    <MenuItem key={"team_comment"} >
                        <nav className="navbar">
                            <NavLink to="/teamcomment" style={styles}>Team Comments</NavLink>
                        </nav>
                    </MenuItem>
                    <MenuItem key={"user"} >
                        <nav className="navbar">
                            <NavLink to="/user" style={styles}>User</NavLink>
                        </nav>
                    </MenuItem>
                        
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title= {user.user.username}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="user icon" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key={"account"} onClick={handleCloseUserMenu}>
                                <nav className="navbar">
                                    <NavLink to="/account" style={styles}>Account</NavLink>
                                </nav>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default HomePage;
