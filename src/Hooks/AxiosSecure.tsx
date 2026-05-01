import axios from "axios";

const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
})
const AxiosSecure = () => {
    return axiosSecure;
};

export default AxiosSecure;