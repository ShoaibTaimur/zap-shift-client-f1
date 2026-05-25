import Loading from "@/components/Shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AuthContext } from "@/Context/AuthContext";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { toast } from "sonner";

type parcelType = {
  _id: string;
  parcelName: string;
  receiverAddress: string;
  receiverDivision: string;
  senderName: string;
  receiverName: string;
  deliveryStatus: string;
};

const Deliveries = () => {
  const info = useContext(AuthContext);
  const axiosSecure = AxiosSecure();
  const riderEmail = info?.user?.email;
  const { data: parcels = [], isLoading ,refetch} = useQuery<parcelType[]>({
    queryKey: ["allParcels", riderEmail, "rider_arriving"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${riderEmail}&deliveryStatus=rider_arriving`,
      );
      return res.data;
    },
  });
  if (isLoading) return <Loading />;

  const handleDelivery=(parcel:parcelType)=>{
    const updateStatus={
        deliveryStatus:"delivered"
    }
    axiosSecure.patch(`/parcels/rider/${parcel?._id}`,updateStatus)
    .then(res=>{
        if(res?.data?.modifiedCount){
            toast.success("Parcel Delivered Successfully!");
        }
        refetch();
    })
  }
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        My Deliveries
      </h1>
      {parcels.length === 0 ? (
        <div className="mt-8 flex min-h-80 items-center justify-center rounded-3xl border border-dashed border-[#03373D]/20 bg-linear-to-br from-[#F4FBFB] via-white to-[#E8F6F6] px-4 py-10 sm:px-6">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03373D]/8 sm:h-24 sm:w-24">
              <div className="absolute h-14 w-14 rounded-full border border-[#03373D]/15 bg-white sm:h-16 sm:w-16" />
              <div className="relative h-4 w-4 rounded-full bg-[#0EA5A4] sm:h-5 sm:w-5" />
            </div>
            <h2 className="text-xl font-bold text-[#03373D] sm:text-2xl">
              No deliveries in progress
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
              Parcels ready for final delivery will appear here. After arrival,
              confirm handoff to mark parcel as delivered.
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
                  <Button
                    onClick={() => handleDelivery(parcel)}
                    variant="secondary"
                  >
                    Accept
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Deliveries;
