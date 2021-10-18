import {Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import FaceIcon from '@mui/icons-material/Face';
import React from 'react'

const Login = () => {
    const paperStyle={padding: 20, height: '50vh', width: 350, margin: '20px auto'}
    const btstyle={margin: '8px 0'}

    return (
        <Paper elevation={10} style={paperStyle}>
            <Grid>
                {/*<Avatar alt="Login" src="/static/images/avatar/image.png"/>*/}
                <Avatar> <FaceIcon/> </Avatar>
                {/* <Grid> */}
                    <Grid>
                        <h2>User Login</h2>
                        <TextField label='Username' placeholder='Enter username' fullWidth required/>
                        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />

                        <Button type='submit' color='primary' variant='contained' style={btstyle} fullWidth>Login</Button>
                            
                        <Typography>
                            <Link href="#">
                                Forgot Username / Password?
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            {/* </Grid> */}
        </Paper>
    )
};

export default Login