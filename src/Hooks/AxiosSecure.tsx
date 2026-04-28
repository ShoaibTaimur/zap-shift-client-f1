import axios from "axios";

const axiosSecure=axios.create({
    baseURL:"http://localhost:5001"
})
const AxiosSecure = () => {
    return axiosSecure;
};

export default AxiosSecure;