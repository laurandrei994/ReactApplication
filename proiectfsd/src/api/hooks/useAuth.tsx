import axios, { AxiosError } from "axios";
import axiosInstance from "../instance";

export default {
    async login(email: string, password: string): Promise<any> {
        try{
            const resp = await axiosInstance.post("/login", {email, password});
            if (resp.data.token) {
                localStorage.setItem("token", resp.data.token);
            }
            return resp.data;
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
            }
            return null;
        }
    },
    logout() {
        localStorage.removeItem("token");
    }
}