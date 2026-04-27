import AxiosSecure from "@/Hooks/AxiosSecure";
import { useEffect, useState } from "react";
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

const ParcelDetails = () => {
  const idOBJ = useParams();
  const axiosSecure = AxiosSecure();
  const id: string = idOBJ.id;
  const [details, setDetails] = useState<orderType | null>(null);
  useEffect(() => {
    const loadData = async () => {
      const res = await axiosSecure.get<orderType>(`/parcels/details/${id}`);
      setDetails(res.data);
    };
    loadData();
  }, [axiosSecure, id]);
  return (
    <div>
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">Parcel Details</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mb-8">
        <div className="bg-[#ffffff] p-6 rounded-2xl">
          <h1 className="text-[#03373D] text-[16px] md:text-[24px] font-extrabold">
            Sender Info
          </h1>
          <p className="text-[12px] md:text-[14px] font-medium">
            <span className="text-[#374151] opacity-60">Name: </span>
            {details?.senderName}
          </p>
          <p className="text-[12px] md:text-[14px] font-medium">
            <span className="text-[#374151] opacity-60">Phone: </span>
            {details?.senderPhoneNo}
          </p>
          <p className="text-[12px] md:text-[14px] font-medium">
            <span className="text-[#374151] opacity-60">Address: </span>
            {details?.senderAddress}
          </p>
          <p className="text-[12px] md:text-[14px] font-medium">
            <span className="text-[#374151] opacity-60">Division: </span>
            {details?.senderDivision}
          </p>
        </div>
        <div className="bg-[#ffffff] p-6 rounded-2xl">
          <h1 className="text-[#03373D] text-[16px] md:text-[24px] font-extrabold">
            Receiver Info
          </h1>
          <p className="text-[12px] md:text-[14px] font-medium">
            <span className="text-[#374151] opacity-60">Name: </span>
            {details?.receiverName}
          </p>
          <p className="text-[12px] md:text-[14px] font-medium">
            <span className="text-[#374151] opacity-60">Phone: </span>
            {details?.receiverPhoneNo}
          </p>
          <p className="text-[12px] md:text-[14px] font-medium">
            <span className="text-[#374151] opacity-60">Address: </span>
            {details?.receiverAddress}
          </p>
          <p className="text-[12px] md:text-[14px] font-medium">
            <span className="text-[#374151] opacity-60">Division: </span>
            {details?.receiverDivision}
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default ParcelDetails;
