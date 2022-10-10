// src/components/Homepage.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";

const styles = {
    textDecoration: 'none',
    color: 'purple',
    fontSize: '20px',
};

function HomePage() {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
                    <MenuItem key={"new-team"} >
                        <nav className="navbar">
                            <NavLink to="/newteam" style={styles}>New Team</NavLink>
                        </nav>
                    </MenuItem>
                        
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title= "User">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="user icon" src="" />
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

                            <MenuItem key={"logout"} onClick={handleCloseUserMenu}>
                                <nav className="navbar">
                                    <NavLink to="/account" style={styles}>Log Out</NavLink>
                                </nav>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default HomePage;
