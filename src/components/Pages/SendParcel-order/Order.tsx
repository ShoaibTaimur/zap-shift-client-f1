import Loading from "@/components/Shared/Loading";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { useNavigate } from "react-router";
import { toast } from "sonner";

type parcelType = {
  _id: string;
  parcelName: string;
  cost: number;
  deliveryStatus: string;
  paymentStatus: string;
};

const Order = () => {
  const info = useContext(AuthContext);
  const user = info?.user;
  const email = typeof user?.email === "string" ? user?.email : "";
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate();

  const {
    data: parcels = [],
    isLoading,
    refetch,
  } = useQuery<parcelType[]>({
    queryKey: ["allParcels", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${email}`);
      return res.data;
    },
    enabled: !!email,
  });
  if (isLoading) return <Loading />;

  const handleView = (id: string) => {
    navigate(`/dashboard/parcelDetail/${id}`);
  };

  const handleDelete = (id: string) => {
    axiosSecure.delete(`/parcels/details/${id}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        toast.success("Deleted Successfully");
      }
    });
  };
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        My Orders
      </h1>
      {parcels.length === 0 ? (
        <div className="mt-8 flex min-h-80 items-center justify-center rounded-3xl border border-dashed border-[#03373D]/20 bg-linear-to-br from-[#F4FBFB] via-white to-[#E8F6F6] px-4 py-10 sm:px-6">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03373D]/8 sm:h-24 sm:w-24">
              <div className="absolute h-14 w-14 rounded-full border border-[#03373D]/15 bg-white sm:h-16 sm:w-16" />
              <div className="relative h-4 w-4 rounded-full bg-[#0EA5A4] sm:h-5 sm:w-5" />
            </div>
            <h2 className="text-xl font-bold text-[#03373D] sm:text-2xl">
              No orders available
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
              Your parcel orders will show here after booking. Then you can
              track status, pay, or manage each order.
            </p>
          </div>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Parcel Name</TableHead>
              <TableHead>Parcel Cost</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Delivery Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parcels.map((parcel, i) => (
              <TableRow key={parcel._id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{parcel?.parcelName}</TableCell>
                <TableCell>{parcel?.cost}</TableCell>
                <TableCell>
                  {parcel?.paymentStatus === "paid" ? (
                    <span className="text-green-400">Paid</span>
                  ) : (
                    <Button
                      onClick={() =>
                        navigate(`/dashboard/payment/${parcel._id}`)
                      }
                      variant="secondary"
                    >
                      Pay now
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {parcel?.deliveryStatus === "pending-pickup" ? (
                    <span className="text-red-400">Pending Pickup</span>
                  ) : parcel?.deliveryStatus === "assigned" ? (
                    <span className="text-yellow-400">Assigned</span>
                  ) : parcel?.deliveryStatus === "delivered" ? (
                    <span className="text-green-400">Delivered</span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell className="flex gap-5">
                  <Button onClick={() => handleView(parcel._id)}>View</Button>
                  <Button variant="outline">Edit</Button>
                  <AlertDialog>
                    <AlertDialogTrigger
                      render={<Button variant="destructive">Delete</Button>}
                    />
                    <AlertDialogContent size="sm">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Do you want to delete this parcel? This action can not
                          be reverted.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(parcel._id)}
                          variant="destructive"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Order;
