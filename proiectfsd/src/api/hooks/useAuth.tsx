import axios, { AxiosError } from "axios";
import axiosInstance from "../instance";

export default {
    async login(email: string, password: string): Promise<any> {
        try{
            const resp = await axiosInstance.post("/login", {email, password});
            return resp.data;
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
            }
            throw error;
        }
    },

    logout() {
        localStorage.removeItem("token");
    },

    async getUserInfo() {
        try {
            const resp = await axiosInstance.get("/users/info");
            return resp.data;
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status);
                console.log(err.response.data);
            }
            throw error;
        }
    }
}