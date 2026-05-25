import Loading from "@/components/Shared/Loading";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AuthContext } from "@/Context/AuthContext";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { toast } from "sonner";

type parcelType = {
  _id: string;
  parcelName:string;
  receiverName:string;
  receiverAddress:string;
  receiverDivision:string
};

const AssignedDeliveries = () => {
  const axiosSecure = AxiosSecure();
  const info = useContext(AuthContext);
  const user = info?.user;
  const { data: parcels = [] ,isLoading,refetch} = useQuery<parcelType[]>({
    queryKey: ["allParcels", user?.email, "in_delivery"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=in_delivery`);
      return res.data;
    },
  });

  if(isLoading) return <Loading />;

  const handleAccept=(parcel:parcelType)=>{
    const statusInfo={deliveryStatus:"rider_arriving"};
    axiosSecure.patch(`/parcels/details/${parcel?._id}/status`,statusInfo)
    .then(res=>{
        if(res.data.modifiedCount){
            toast.success("Accepted Delivery!");
        }
        refetch();
    })
  }

  const handleReject=(parcel:parcelType)=>{
    const statusInfo={deliveryStatus:"pending-pickup"};
    axiosSecure.patch(`/parcels/details/${parcel?._id}/status`,statusInfo)
    .then(res=>{
        if(res.data.modifiedCount){
            toast.warning("Rejected Delivery!");
        }
        refetch();
    });
  }
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Assigned Deliveries
      </h1>
      {parcels.length === 0 ? (
        <div className="mt-8 flex min-h-80 items-center justify-center rounded-3xl border border-dashed border-[#03373D]/20 bg-linear-to-br from-[#F4FBFB] via-white to-[#E8F6F6] px-4 py-10 sm:px-6">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03373D]/8 sm:h-24 sm:w-24">
              <div className="absolute h-14 w-14 rounded-full border border-[#03373D]/15 bg-white sm:h-16 sm:w-16" />
              <div className="relative h-4 w-4 rounded-full bg-[#0EA5A4] sm:h-5 sm:w-5" />
            </div>
            <h2 className="text-xl font-bold text-[#03373D] sm:text-2xl">
              No assigned parcel yet
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
              New delivery assignments will appear here. Once admin assigns a
              parcel, you can review receiver details and confirm pickup.
            </p>
          </div>
        </div>
      ) : (
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Parcel Name</TableHead>
              <TableHead>Receiver Name</TableHead>
              <TableHead>Receiver Address</TableHead>
              <TableHead>Receiver Division</TableHead>
              <TableHead>Confirm</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parcels.map((parcel, i) => (
              <TableRow key={parcel._id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{parcel?.parcelName}</TableCell>
                <TableCell>{parcel?.receiverName}</TableCell>
                <TableCell>{parcel?.receiverAddress}</TableCell>
                <TableCell>{parcel?.receiverDivision}</TableCell>
                <TableCell>
                    <Button onClick={()=>handleAccept(parcel)} variant="secondary">Accept</Button>
                    <Button onClick={()=>handleReject(parcel)} variant="destructive">Reject</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AssignedDeliveries;
