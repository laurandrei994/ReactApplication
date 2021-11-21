import React from "react";
import { ChangeEvent, Component, useEffect, useState} from "react";
import Button from "@mui/material";
import useAuth from "../api/hooks/useAuth";

export default function FirstPage() {
    const [userInfo, setUserInfo] = useState({name: "NULL"});
    useEffect( () => {
        useAuth.getUserInfo().then(response => {
            setUserInfo(response.user);
        }).catch (err => {
            console.log("No token!!");
        });
    });

    return (
        <div>
            Hello from the first page, {userInfo.name}
        </div>
    );
}