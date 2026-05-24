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
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

type parcelType = {
  _id: string;
  parcelName: string;
  cost: number;
  createdAt: string;
  receiverDivision: string;
};

const Assignparcels = () => {
  const axiosSecure = AxiosSecure();
  const { data: parcels = [], isLoading } = useQuery<parcelType[]>({
    queryKey: ["allParcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Assign parcels :{parcels.length}
      </h1>
      {parcels.length === 0 ? (
        <div className="mt-8 flex min-h-80 items-center justify-center rounded-3xl border border-dashed border-[#03373D]/20 bg-linear-to-br from-[#F4FBFB] via-white to-[#E8F6F6] px-4 py-10 sm:px-6">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03373D]/8 sm:h-24 sm:w-24">
              <div className="absolute h-14 w-14 rounded-full border border-[#03373D]/15 bg-white sm:h-16 sm:w-16" />
              <div className="relative h-4 w-4 rounded-full bg-[#0EA5A4] sm:h-5 sm:w-5" />
            </div>
            <h2 className="text-xl font-bold text-[#03373D] sm:text-2xl">
              No parcel to assign yet
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
              New parcel to assign will appear here. Once someone
              places order and pays fot it, you can review, and assign rider.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Pickup District</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parcels.map((parcel, i) => (
                <TableRow key={parcel._id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{parcel?.parcelName}</TableCell>
                  <TableCell>{parcel?.cost}</TableCell>
                  <TableCell>{parcel?.createdAt}</TableCell>
                  <TableCell>{parcel?.receiverDivision}</TableCell>
                  <TableCell className="flex gap-5">
                    <Button variant="secondary">Assign</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Assignparcels;
