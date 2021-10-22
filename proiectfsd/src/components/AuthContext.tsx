import React from "react";
import { Component } from "react";
import Login from "./login";
import Table from "./table";
import Image from "./image";

const AuthContext = React.createContext<any>({} as any)

class AuthProvider extends Component {
    state = {
        isAuth: false,
    }

    setAuth = (auth: any) => {
        this.setState({isAuth: auth});
    }

    render() {
        const {isAuth} = this.state;
        const {setAuth} = this;

        return (
            <AuthContext.Provider value={{ isAuth, setAuth}}>
                <Login />
                <Table />
                <Image />
            </AuthContext.Provider>
        )
    }
}

export default AuthContext
export { AuthProvider}