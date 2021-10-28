import { createContext } from "react";

type AuthContent = {
    isAuth: boolean
    setAuth:(isAuth:boolean) => void
}

const AuthentificationContext = createContext<AuthContent | null>(null);

export default AuthentificationContext;