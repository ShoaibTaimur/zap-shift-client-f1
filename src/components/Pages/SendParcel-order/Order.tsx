import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

type parcelType = {
  _id: string;
  parcelName: string;
  cost: number;
};

const Order = () => {
  const axiosSecure = AxiosSecure();
  const navigate=useNavigate();

  const { data: parcels = [] } = useQuery<parcelType[]>({
    queryKey: ["allParcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels");
      return res.data;
    },
  });

  const handleView=(id:string)=>{
    navigate(`/dashboard/parcelDetail/${id}`)
  }
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        My Orders
      </h1>
      <Table>
        <TableHeader>
            <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Parcel Name</TableHead>
                <TableHead>Parcel Cost</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
      {parcels.map((parcel, i) => (
            <TableRow key={parcel._id}>
                <TableCell>{i+1}</TableCell>
                <TableCell>{parcel?.parcelName}</TableCell>
                <TableCell>{parcel.cost}</TableCell>
                <TableCell>NULL</TableCell>
                <TableCell className="flex gap-5">
                    <Button onClick={()=>handleView(parcel._id)}>View</Button>
                    <Button variant="outline">Edit</Button>
                    <Button variant="destructive">Delete</Button>
                </TableCell>
            </TableRow>
      ))}
      </TableBody>
      </Table>
    </div>
  );
};

export default Order;
