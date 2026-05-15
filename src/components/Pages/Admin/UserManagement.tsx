import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

type userList={
    _id:string,
    displayName:string,
    email:string,
    photoURL:string,
    role:string,
}

const UserManagement = () => {
  const axiosSecure = AxiosSecure();
  const { data: userList = [] ,isLoading} = useQuery<userList[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(userList);

  if(isLoading)return <UserManagement></UserManagement>
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">user manage {userList.length}</div>
  );
};

export default UserManagement;
