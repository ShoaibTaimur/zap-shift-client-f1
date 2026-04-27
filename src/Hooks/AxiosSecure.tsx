import axios from "axios";

const axiosSecure=axios.create({
    baseURL:"https://zap-shift-server-f1.vercel.app/"
})
const AxiosSecure = () => {
    return axiosSecure;
};

export default AxiosSecure;