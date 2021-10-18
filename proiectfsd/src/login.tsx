import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "./hooks/useForm";

function Login() {
    // defining the initial state for the form
    const initialState = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
    }

    return (
        // don't mind this ugly form :P
        <form onSubmit={onSubmit}>
        <div>
            <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                />

        <br></br>

            <input
                name='password'
                id='password'
                type='password'
                placeholder='Password'
                onChange={onChange}
                required
                />

                <br></br>

            <button type='submit'>Login</button>
            <Button variant="contained">Hello World</Button>
        </div>
        </form>
    );
}

export default Login;