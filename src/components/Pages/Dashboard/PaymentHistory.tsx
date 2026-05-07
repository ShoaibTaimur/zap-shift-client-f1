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
  });
  if (isLoading) return <Loading />;

  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Payment History
      </h1>
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
    </div>
  );
};

export default PaymentHistory;
