import Loading from "@/components/Shared/Loading";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

type orderType = {
  _id: string;
  docType: string;
  parcelName: string;
  parcelWeight: number;
  senderName: string;
  senderAddress: string;
  senderPhoneNo: string;
  senderDivision: string;
  senderInstruction: string;
  receiverName: string;
  receiverAddress: string;
  receiverPhoneNo: string;
  receiverDivision: string;
  receiverInstruction: string;
  cost: number;
};

const Payment = () => {
  const idOBJ = useParams();
  const axiosSecure = AxiosSecure();
  const id = idOBJ.id;
  const { data: details, isLoading } = useQuery<orderType>({
    queryKey: ["parcelDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/details/${id}`);
      return res.data;
    },
    enabled:!!id,
  });
  if(isLoading) return <Loading />;
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
        <h1>{details?.parcelName}</h1>
    </div>
  );
};

export default Payment;
