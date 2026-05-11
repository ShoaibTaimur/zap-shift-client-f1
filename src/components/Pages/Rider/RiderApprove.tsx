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
import { toast } from "sonner";

type riderInfo = {
  _id: string;
  name: string;
  license: string;
  email: string;
  division: string;
  nid: string;
  number: string;
  modelYear: string;
  regNo: string;
  yourself: string;
  status: string;
  createdAt: string;
};

const RiderApprove = () => {
  const axiosSecure = AxiosSecure();
  const {
    data: riders = [],
    refetch,
    isLoading,
  } = useQuery<riderInfo[]>({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/ridersInfo");
      return res.data;
    },
  });
  const getStatus = (status: string) => {
    if (status === "approved") {
      return <span className="text-green-400">Approved</span>;
    }
    if (status === "pending") {
      return <span className="text-yellow-400">Pending</span>;
    }
    if (status === "rejected") {
      return <span className="text-red-400">Rejected</span>;
    }

    return <span>{status}</span>;
  };
  const handleAccept = async (rider: riderInfo) => {
    const id = rider?._id;
    await axiosSecure
      .patch(`/ridersInfo/${id}`, {
        status: "approved",
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Approved Successfully");
        }
      });
    refetch();
  };

  const handleReject = async (id: string) => {
    await axiosSecure
      .patch(`/ridersInfo/${id}`, {
        status: "rejected",
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Rejected Successfully");
        }
      });
    refetch();
  };
  const handleDelete = async (id: string) => {
    await axiosSecure.delete(`/ridersInfo/${id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Deleted Successfully");
      }
    });
    refetch();
  };

  if (isLoading) return <Loading />;
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Rider Approval
      </h1>
      {riders.length === 0 ? (
        <div className="mt-8 flex min-h-80 items-center justify-center rounded-3xl border border-dashed border-[#03373D]/20 bg-linear-to-br from-[#F4FBFB] via-white to-[#E8F6F6] px-4 py-10 sm:px-6">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03373D]/8 sm:h-24 sm:w-24">
              <div className="absolute h-14 w-14 rounded-full border border-[#03373D]/15 bg-white sm:h-16 sm:w-16" />
              <div className="relative h-4 w-4 rounded-full bg-[#0EA5A4] sm:h-5 sm:w-5" />
            </div>
            <h2 className="text-xl font-bold text-[#03373D] sm:text-2xl">
              No rider requests yet
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
              New rider approval requests will appear here. Once someone
              applies, you can review, accept, or reject from this table.
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
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>District</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {riders.map((rider, i) => (
                <TableRow key={rider._id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{rider?.name}</TableCell>
                  <TableCell>{rider?.email}</TableCell>
                  <TableCell>{getStatus(rider.status)}</TableCell>
                  <TableCell>{rider?.division}</TableCell>
                  <TableCell className="flex gap-5">
                    {rider.status === "pending" ? (
                      <div>
                        <Button onClick={() => handleAccept(rider)}>
                          Accept
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger
                            render={
                              <Button variant="destructive">Reject</Button>
                            }
                          />
                          <AlertDialogContent size="sm">
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Do you want to reject this rider? This action
                                can not be reverted.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleReject(rider._id)}
                                variant="destructive"
                              >
                                Reject
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    ) : (
                      <AlertDialog>
                        <AlertDialogTrigger
                          render={<Button variant="destructive">Delete</Button>}
                        />
                        <AlertDialogContent size="sm">
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Do you want to delete this rider? This action can
                              not be reverted.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(rider._id)}
                              variant="destructive"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
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

export default RiderApprove;
