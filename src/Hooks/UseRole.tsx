import { AuthContext } from "@/Context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AxiosSecure from "./AxiosSecure";

const UseRole = () => {
  const info = useContext(AuthContext);
  const email = info?.user?.email;
  const axiosSecure = AxiosSecure();

  const { data: role = "user", isLoading } = useQuery({
    queryKey: ["user-role", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${email}/role`);
      return res.data;
    },
  });
  return { role, isLoading };
};

export default UseRole;
