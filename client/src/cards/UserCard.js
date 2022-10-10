// src/cards/UserCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { orange, red } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function UserCard({user}) {

    const handleDelete = () => {
        
    };

    const handleEdit = () => {
        
    };

    return (
        
        <Card sx={{ maxWidth: 150, border: 3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                        {user.username}
                        </Avatar>
                }
                title={user.username} 
            />

                <Stack direction="row" spacing={1}>
                    <Chip
                        label="Delete"
                        onClick={handleDelete}
                        variant="outlined"
                    />

                    <Chip
                        label="Edit"
                        onClick={handleEdit}
                        variant="outlined"
                    />
                </Stack>
        </Card>
          
  );
}

export default UserCard;