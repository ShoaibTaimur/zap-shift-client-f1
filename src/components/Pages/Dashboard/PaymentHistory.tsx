import Loading from "@/components/Shared/Loading";
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

type payment = {
  _id: string;
  amount: number;
  currency: string;
  customerEmail: string;
  paymentId: string;
  parcelName: string;
  transactionId: string;
  paymentStatus: string;
};

const PaymentHistory = () => {
  const axiosSecure = AxiosSecure();
  const info=useContext(AuthContext);
  const email=info?.user?.email;
  const { data: payments = [], isLoading } = useQuery<payment[]>({
    queryKey: ["paymentHistory",email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${email}`);
      return res.data;
    },
    enabled:!!email
  });
  if (isLoading) return <Loading />;

  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Payment History
      </h1>
      {payments.length === 0 ? (
        <div className="mt-8 flex min-h-80 items-center justify-center rounded-3xl border border-dashed border-[#03373D]/20 bg-linear-to-br from-[#F4FBFB] via-white to-[#E8F6F6] px-4 py-10 sm:px-6">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03373D]/8 sm:h-24 sm:w-24">
              <div className="absolute h-14 w-14 rounded-full border border-[#03373D]/15 bg-white sm:h-16 sm:w-16" />
              <div className="relative h-4 w-4 rounded-full bg-[#0EA5A4] sm:h-5 sm:w-5" />
            </div>
            <h2 className="text-xl font-bold text-[#03373D] sm:text-2xl">
              No payment history yet
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
              Completed payments will appear here with amount, status, and
              transaction details.
            </p>
          </div>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Parcel Name</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Transaction ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment, i) => (
              <TableRow key={payment._id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{payment?.parcelName}</TableCell>
                <TableCell>{payment?.amount}</TableCell>
                <TableCell>{payment?.paymentStatus}</TableCell>
                <TableCell>{payment?.transactionId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default PaymentHistory;
