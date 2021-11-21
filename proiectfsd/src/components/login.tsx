import {Avatar, Button, Grid, Link, Paper, TextField, Typography, Box } from '@material-ui/core';
import FaceIcon from '@mui/icons-material/Face';
import AuthentificationContext from '../dataContexts/AuthentificationContext';
import React, { Component, useContext } from 'react';
import useAuth from '../api/hooks/useAuth';

export default function Login(props: any) {
    const authContext = useContext(AuthentificationContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail((event.target as any).value)
    }

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword((event.target as any).value)
    }

    const buttonClicked = async () => {
        useAuth.login(email, password).then(response => {
            if (response.token) {
                console.log(response.token);
                localStorage.setItem("token", response.token);
                props.history.push("/TablePage");
                props.setAuth(true);
            }
        }).catch (error => {
            //alert("Error!!");
        })
    }

    const paperStyle={padding: 20, height: '40vh', width: 600, margin: '50px auto'}
    const btstyle={margin: '10px auto'}

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width={800} height={500} margin='50px auto' bgcolor="primary.main">
            <Paper elevation={10} style={paperStyle}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Avatar style={{ height: '150px', width:'150px', margin: '85px auto'}}> <FaceIcon/> </Avatar>
                    <Grid item xs={7} spacing={5}>
                        <h2>User Login</h2>
                        <TextField id="input" label='Email' type="text" placeholder='Enter email' variant="outlined" fullWidth required margin="dense" value={email} onChange={onEmailChange} />
                        <TextField id="password-input" label='Password' type='password' placeholder='Enter password' variant="outlined" fullWidth required margin="dense" value={password} onChange={onPasswordChange} />

                        <Button type='submit' color='primary' variant='contained' style={btstyle} fullWidth onClick={buttonClicked}>Login </Button>
                                
                        <Typography>
                            <Link href="#">
                                Forgot Username / Password?
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
