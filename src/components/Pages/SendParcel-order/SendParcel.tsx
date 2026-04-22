import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

type Inputs = {
  docType: string;
  parcelName: string;
  parcelWeight: number;
  senderName: string;
  senderAddress: string;
  senderPhoneNo: number;
  senderDivision: string;
  senderInstruction: string;
  receiverName: string;
  receiverAddress: string;
  receiverPhoneNo: number;
  receiverDivision: string;
  receiverInstruction: string;
};

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();

  const calculateCost = (data: Inputs) => {
    const isDocument = data?.docType === "Document";
    const isSameDivision = data?.senderDivision === data?.receiverDivision;
    const parcelWeight = data?.parcelWeight;
    let cost: number = 0;

    if (isDocument) {
      cost = isSameDivision ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDivision ? 110 : 150;
      } else {
        cost = isSameDivision
          ? (parcelWeight - 3) * 40 + 110
          : (parcelWeight - 3) * 40 + 150;
      }
    }
    return cost;
  };

  const handleConfirm = async () => {
    const isValid = await trigger();

    if (!isValid) return;

    const formData = getValues();
    const cost = calculateCost(formData);
    Swal.fire({
      title: "Are you sure?",
      text: `Parcel cost is ${cost} Tk`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Done!",
          text: "Your request is submitted.",
          icon: "success",
        });
        handleSubmit(onSubmit)();
      }
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cost = calculateCost(data);
    console.log({ ...data, cost });
  };

  const [divisions, setDivisions] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/division.json");
      const data = await res.json();
      setDivisions(data);
    };
    loadData();
  }, []);

  return (
    <div className="bg-white rounded-2xl py-16 px-8 md:px-24 my-10">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Send a Parcel
      </h1>
      <h1 className="text-[#03373D] text-[16px] md:text-[24px] font-extrabold my-5">
        Enter your parcel details
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <NativeSelect {...register("docType", { required: true })}>
            <NativeSelectOption value="">
              Select Document Type
            </NativeSelectOption>
            <NativeSelectOption value="Document">Document</NativeSelectOption>
            <NativeSelectOption value="Non-Document">
              Non-Document
            </NativeSelectOption>
          </NativeSelect>
          {errors.docType && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          <div>
            <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
              Parcel Name
            </Label>
            <Input
              type="text"
              placeholder="Parcel Name"
              className="text-[10px] md:text-sm"
              {...register("parcelName", { required: true })}
            />
            {errors.parcelName && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
              Parcel Weight (KG)
            </Label>
            <Input
              type="number"
              placeholder="Parcel Weight (KG)"
              className="text-[10px] md:text-sm"
              {...register("parcelWeight", {
                required: true,
                valueAsNumber: true,
              })}
            />
            {errors.parcelWeight && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          <div className="space-y-5">
            <h1 className="text-[#03373D] text-[10px] md:text-[18px] font-extrabold my-5">
              Sender Details
            </h1>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Sender Name
              </Label>
              <Input
                type="text"
                placeholder="Sender Name"
                className="text-[10px] md:text-sm"
                {...register("senderName", { required: true })}
              />
              {errors.senderName && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Address
              </Label>
              <Input
                type="text"
                placeholder="Address"
                className="text-[10px] md:text-sm"
                {...register("senderAddress", { required: true })}
              />
              {errors.senderAddress && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Sender Phone No
              </Label>
              <Input
                type="number"
                placeholder="Sender Phone No"
                className="text-[10px] md:text-sm"
                {...register("senderPhoneNo", { required: true })}
              />
              {errors.senderPhoneNo && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Your Division
              </Label>
              <NativeSelect
                className="w-full"
                {...register("senderDivision", { required: true })}
              >
                <NativeSelectOption value="">
                  Select division
                </NativeSelectOption>
                {divisions.map((division, i) => (
                  <NativeSelectOption key={i} value={division}>
                    {division}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
              {errors.senderDivision && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Pickup Instruction
              </Label>
              <Textarea
                placeholder="Pickup Instruction"
                className="text-[10px] md:text-sm"
                {...register("senderInstruction", { required: true })}
              />
              {errors.senderInstruction && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-[#03373D] text-[10px] md:text-[18px] font-extrabold my-5">
              Receiver Details
            </h1>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Receiver Name
              </Label>
              <Input
                type="text"
                placeholder="Receiver Name"
                className="text-[10px] md:text-sm"
                {...register("receiverName", { required: true })}
              />
              {errors.receiverName && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Receiver Address
              </Label>
              <Input
                type="text"
                placeholder="Receiver Address"
                className="text-[10px] md:text-sm"
                {...register("receiverAddress", { required: true })}
              />
              {errors.receiverAddress && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Receiver Phone No
              </Label>
              <Input
                type="number"
                placeholder="Receiver Phone No"
                className="text-[10px] md:text-sm"
                {...register("receiverPhoneNo", { required: true })}
              />
              {errors.receiverPhoneNo && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Receiver Division
              </Label>
              <NativeSelect
                className="w-full"
                {...register("receiverDivision", { required: true })}
              >
                <NativeSelectOption value="">
                  Select division
                </NativeSelectOption>
                {divisions.map((division, i) => (
                  <NativeSelectOption key={i} value={division}>
                    {division}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
              {errors.receiverDivision && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Delivery Instruction
              </Label>
              <Textarea
                placeholder="Delivery Instruction"
                className="text-[10px] md:text-sm"
                {...register("receiverInstruction", { required: true })}
              />
              {errors.receiverInstruction && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>
        <Button
          type="button"
          onClick={handleConfirm}
          className="w-full"
          variant="signUp"
        >
          Proceed to Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default SendParcel;
