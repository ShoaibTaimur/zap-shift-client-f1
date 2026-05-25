import Loading from "@/components/Shared/Loading";
import { Button } from "@/components/ui/button";
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
  senderEmail:string;
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
    enabled: !!id,
  });
  if (isLoading) return <Loading />;
  if (!details) return null;

  const handlePayment=async()=>{
    const paymentInfo={
      cost: details.cost,
      parcelId:details._id,
      senderEmail:details.senderEmail,
      parcelName:details.parcelName
    };
    const res= await axiosSecure.post("/create-checkout",paymentInfo);
    console.log(res.data);
    window.location.href=res.data.url;
  }
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Payment:
      </h1>
      <div className="bg-[#ffffff] p-6 rounded-2xl">
        <h1 className="text-[#03373D] text-[16px] md:text-[24px] font-extrabold">
          Parcel Details
        </h1>
        <p className="text-[12px] md:text-[14px] font-medium">
          <span className="text-[#374151] opacity-60">Parcel Type: </span>
          {details?.docType}
        </p>
        <p className="text-[12px] md:text-[14px] font-medium">
          <span className="text-[#374151] opacity-60">Parcel Name: </span>
          {details?.parcelName}
        </p>
        <p className="text-[12px] md:text-[14px] font-medium">
          <span className="text-[#374151] opacity-60">Parcel Weight: </span>
          {details?.parcelWeight}
        </p>
        <p className="text-[12px] md:text-[14px] font-medium">
          <span className="text-[#374151] opacity-60">Cost: </span>
          {details?.cost}
        </p>
      </div>
      <Button onClick={()=>handlePayment()} variant="secondary">Pay now</Button>
    </div>
  );
};

export default Payment;
