// src/cards/UserCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

/**
 * Parameter user comes from /pages/User.js
 */
function UserCard({user}) {
    return (
        
        <Card sx={{ maxWidth: 150, border: 3 }}>
            <CardHeader
                title={user.username} 
            />
        </Card>
    
    );
}

export default UserCard;