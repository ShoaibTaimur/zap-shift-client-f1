import { AuthContext } from "@/Context/AuthContext";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

const Order = () => {
    const info=useContext(AuthContext);
    const user=info?.user;

    const axiosSecure=AxiosSecure();

    const {data:parcels=[]}=useQuery({
        queryKey:["allParcels",user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get("/parcels");
            return res.data;
        }
    })
    return (
        <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
            order {parcels.length}
        </div>
    );
};

export default Order;