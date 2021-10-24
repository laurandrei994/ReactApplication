import {Avatar, Button, Grid, Link, Paper, TextField, Typography, Box } from '@material-ui/core';
import FaceIcon from '@mui/icons-material/Face';
import React, { Component } from 'react'

class Login extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };

        this.buttonClicked = this.buttonClicked.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmailChange(event: any) {
        this.setState({email: event.target.value})
    }

    onPasswordChange(event: any) {
        this.setState({password: event.target.value})
    }

    buttonClicked = () => {
        if (this.state.email != null && this.state.password != null) {
            this.props.history.push('/table');
        }
        else {
            alert("Please enter the correct email or the correct password!");
            console.log("Please enter the email and the password");
        }
    }

    render() {   
        const paperStyle={padding: 20, height: '40vh', width: 600, margin: '50px auto'}
        const btstyle={margin: '10px auto'}

        return (
            <Box display="flex" justifyContent="center" alignItems="center" width={800} height={500} margin='50px auto' bgcolor="primary.main">
            <Paper elevation={10} style={paperStyle}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Avatar style={{ height: '150px', width:'150px', margin: '85px auto'}}> <FaceIcon/> </Avatar>
                    <Grid item xs={7} spacing={5}>
                        <h2>User Login</h2>
                        <TextField id="input" label='Email' type="text" placeholder='Enter email' variant="outlined" fullWidth required margin="dense" value={this.state.email} onChange={this.onEmailChange} />
                        <TextField id="password-input" label='Password' type='password' placeholder='Enter password' variant="outlined" fullWidth required margin="dense" value={this.state.password} onChange={this.onPasswordChange} />

                        <Button type='submit' color='primary' variant='contained' style={btstyle} fullWidth onClick={this.buttonClicked}>Login </Button>
                                
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
}

export default Login;