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
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
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
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate();

  const {
    data: parcels = [],
    isLoading,
    refetch,
  } = useQuery<parcelType[]>({
    queryKey: ["allParcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels");
      return res.data;
    },
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
                {parcel.paymentStatus === "paid" ? (
                  <span className="text-green-400">Paid</span>
                ) : (
                  <Button
                    onClick={() => navigate(`/dashboard/payment/${parcel._id}`)}
                    variant="secondary"
                  >
                    Pay now
                  </Button>
                )}
              </TableCell>
              <TableCell>{parcel?.deliveryStatus}</TableCell>
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
    </div>
  );
};

export default Order;
