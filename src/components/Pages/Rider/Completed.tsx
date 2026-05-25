import Loading from "@/components/Shared/Loading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AuthContext } from "@/Context/AuthContext";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

type parcelType = {
  _id: string;
  parcelName: string;
  receiverAddress: string;
  receiverDivision: string;
  senderName: string;
  receiverName: string;
  deliveryStatus: string;
};

const Completed = () => {
  const info = useContext(AuthContext);
  const axiosSecure = AxiosSecure();
  const riderEmail = info?.user?.email;
  const { data: parcels = [], isLoading } = useQuery<parcelType[]>({
    queryKey: ["allParcels", riderEmail, "delivered"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${riderEmail}&deliveryStatus=delivered`,
      );
      return res.data;
    },
  });
  if (isLoading) return <Loading />;

  return (
    <div className="panel-card">
      <h1 className="panel-title">
        My Deliveries
      </h1>
      {parcels.length === 0 ? (
        <div className="empty-state-shell">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03373D]/8 sm:h-24 sm:w-24">
              <div className="absolute h-14 w-14 rounded-full border border-[#03373D]/15 bg-white sm:h-16 sm:w-16" />
              <div className="relative h-4 w-4 rounded-full bg-[#0EA5A4] sm:h-5 sm:w-5" />
            </div>
            <h2 className="text-xl font-bold text-[#03373D] sm:text-2xl">
              No completed parcels yet
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
              Delivered parcels will show here after handoff confirmation. Once
              delivery finished, you can review completed parcel records here.
            </p>
          </div>
        </div>
      ) : (
        <div className="data-table-shell">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Parcel Name</TableHead>
              <TableHead>Receiver Name</TableHead>
              <TableHead>Receiver Address</TableHead>
              <TableHead>Receiver Division</TableHead>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      )}
    </div>
  );
};

export default Completed;
