import { AuthContext } from "@/Context/AuthContext";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const AxiosSecure = () => {
  const info = useContext(AuthContext);
  const user = info?.user;
  const logOut = info?.logOutUser;
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        const accessToken = await user?.getIdToken();
        console.log("accesstoken: ",accessToken);
        console.log("user: ",user);
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      },
    );

    const resInterceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log(error);
        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          logOut?.().then(() => {
            navigate("/auth/login");
          });
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logOut, navigate]);
  return axiosSecure;
};

export default AxiosSecure;
