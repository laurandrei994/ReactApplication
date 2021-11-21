import axiosInstance from "./instance";

const interceptors = {
    setupInterceptors: (history: any) => {
        console.log(history);
        axiosInstance.interceptors.request.use(
            async (config) => {
                const token = localStorage.getItem("token");
                if (!(config.url?.includes("login") || config.url?.includes("register"))) {
                    if (token) {
                        config.headers = {
                            authorization: `Bearer ${token}`
                        };
                    }
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        axiosInstance.interceptors.response.use(
            (response) => response, 
            async (error) => {
                const config = error.config;
                history.push("/");
                return Promise.reject(error);
            }
        );
    }
}
export default interceptors;