import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

type payment = {
  _id: string;
  amount: number;
  currency: string;
  customerEmail: string;
  parcelId: string;
  parcelName: string;
  transactionId: string;
  paymentStatus: string;
};

const PaymentHistory = () => {
  const axiosSecure = AxiosSecure();
  const { data: payments = [] } = useQuery<payment[]>({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      payment History:{payments.length}
    </div>
  );
};

export default PaymentHistory;
