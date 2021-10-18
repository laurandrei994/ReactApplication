import { Avatar, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react'

const Login = () => {
    const paperStyle={padding: 20, height: '50vh', width: 350, margin: '20px auto'}
    const avatarStyle={backgroundColor: 'green', margin: '5px auto'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}> H </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' fullWidth required/>
            </Paper>
        </Grid>
    )
};

export default Login