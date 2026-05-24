import Loading from "@/components/Shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState } from "react";
import { toast } from "sonner";

type parcelType = {
  _id: string;
  parcelName: string;
  cost: number;
  createdAt: string;
  receiverDivision: string;
  senderDivision: string;
};
type riderType = {
  _id: string;
  name: string;
  number: string;
  license: string;
  email: string;
};

const Assignparcels = () => {
  const [selectedParcel, setParcel] = useState<parcelType | null>(null);
  const axiosSecure = AxiosSecure();
  const {
    data: parcels = [],
    isLoading,
    refetch: parcelRefetch,
  } = useQuery<parcelType[]>({
    queryKey: ["allParcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );
      return res.data;
    },
  });

  const { data: riders = [], isLoading: isRidersLoading,refetch:riderRefetch } = useQuery<
    riderType[]
  >({
    queryKey: ["riders", selectedParcel?.senderDivision, "available"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/ridersInfo?status=approved&division=${selectedParcel?.senderDivision}&workingStatus=available`,
      );
      return res.data;
    },
    enabled: !!selectedParcel?.senderDivision,
  });

  if (isLoading) return <Loading />;

  const handleAssignRider = (rider: riderType) => {
    const riderAssignInfo = {
      riderId: rider?._id,
      riderEmail: rider?.email,
      riderName: rider?.name,
    };
    axiosSecure
      .patch(`/parcels/details/${selectedParcel?._id}`, riderAssignInfo)
      .then((res) => {
        if (res?.data?.modifiedCount) {
          toast.success("Assigned Rider Successfully!");
        }
        parcelRefetch();
        riderRefetch();
      });
  };
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Assign parcels
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
              New parcel to assign will appear here. Once someone places order
              and pays fot it, you can review, and assign rider.
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
                    <Dialog>
                      <DialogTrigger
                        render={
                          <Button
                            onClick={() => setParcel(parcel)}
                            variant="secondary"
                          >
                            Assign
                          </Button>
                        }
                      />
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Available riders</DialogTitle>
                          <DialogDescription>
                            Please choose a rider to assign parcel.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center gap-2">
                          <div className="grid flex-1 gap-2">
                            {isRidersLoading ? (
                              <div className="rounded-2xl border border-dashed border-[#03373D]/20 bg-linear-to-br from-[#F4FBFB] via-white to-[#E8F6F6] px-6 py-10 text-center">
                                <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#03373D]/15 border-t-[#0EA5A4]" />
                                <h3 className="text-lg font-bold text-[#03373D]">
                                  Loading riders
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                  Fetching available riders for{" "}
                                  {selectedParcel?.senderDivision}.
                                </p>
                              </div>
                            ) : riders.length === 0 ? (
                              <div className="rounded-2xl border border-dashed border-[#03373D]/20 bg-linear-to-br from-[#F4FBFB] via-white to-[#E8F6F6] px-6 py-10 text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#03373D]/8">
                                  <div className="h-7 w-7 rounded-full border-2 border-[#0EA5A4]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#03373D]">
                                  No rider available
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                  No active rider found in{" "}
                                  {selectedParcel?.senderDivision}. Try again
                                  later or assign parcel from another zone.
                                </p>
                              </div>
                            ) : (
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>No.</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Action</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {riders.map((rider, i) => (
                                    <TableRow key={rider?._id}>
                                      <TableCell>{i + 1}</TableCell>
                                      <TableCell>{rider?.name}</TableCell>
                                      <TableCell>{rider?.email}</TableCell>
                                      <TableCell className="flex gap-5">
                                        <Button
                                          onClick={() =>
                                            handleAssignRider(rider)
                                          }
                                          variant="secondary"
                                        >
                                          Assign
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            )}
                          </div>
                        </div>
                        <DialogFooter className="sm:justify-start">
                          <DialogClose
                            render={<Button type="button">Close</Button>}
                          />
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
