import { Label } from "@/components/ui/label";
import agentPending from "../../../../Resources/assets/agent-pending.png";
import { Input } from "@/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useEffect, useState } from "react";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { toast } from "sonner";
type Inputs = {
  name: string;
  email: string;
  license: string;
  nid: number;
  number: number;
  modelYear: string;
  regNo: string;
  yourself: string;
  division: string;
};

const Rider = () => {
  const axiosSecure = AxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axiosSecure
      .post("/ridersInfo", data)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Successfully submitted RIDER REQUEST.");
        }
      })
      .catch((error) => {
        if (error?.response?.status === 409) {
          toast.error("Rider request already exists.");
        }
      });
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
    <div className="bg-white rounded-2xl py-16 px-8 md:px-18 lg:px-24 my-10">
      <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">
        Be a Rider
      </h1>
      <p className="w-[80%] lg:w-[60%] text-[12px] lg:text-[14px] text-[#606060] font-light">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
        <div>
          <h1 className="text-[#03373D] text-[16px] md:text-[24px] font-extrabold mb-5">
            Tell us about yourself
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Your Name
              </Label>
              <Input
                type="text"
                placeholder="Your Name"
                className="text-[10px] md:text-sm"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Driving License Number
              </Label>
              <Input
                type="text"
                placeholder="Driving License Number"
                className="text-[10px] md:text-sm"
                {...register("license", { required: true })}
              />
              {errors.license && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Your Email
              </Label>
              <Input
                type="email"
                placeholder="Your Email"
                className="text-[10px] md:text-sm"
                {...register("email", { required: true })}
              />
              {errors.email && (
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
                {...register("division", { required: true })}
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
              {errors.division && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                NID No
              </Label>
              <Input
                type="number"
                placeholder="NID"
                className="text-[10px] md:text-sm"
                {...register("nid", { required: true })}
              />
              {errors.nid && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Phone Number
              </Label>
              <Input
                type="number"
                placeholder="Phone Number"
                className="text-[10px] md:text-sm"
                {...register("number", { required: true })}
              />
              {errors.number && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Bike Brand Model and Year
              </Label>
              <Input
                type="text"
                placeholder="Bike Brand Model and Year"
                className="text-[10px] md:text-sm"
                {...register("modelYear", { required: true })}
              />
              {errors.modelYear && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Bike Registration Number
              </Label>
              <Input
                type="text"
                placeholder="Bike Registration Number"
                className="text-[10px] md:text-sm"
                {...register("regNo", { required: true })}
              />
              {errors.regNo && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[#03373D] text-[12px] md:text-[14px] font-medium">
                Tell Us About Yourself
              </Label>
              <Input
                type="text"
                placeholder="Tell Us About Yourself"
                className="text-[10px] md:text-sm"
                {...register("yourself", { required: true })}
              />
              {errors.yourself && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <Button type="submit" className="w-full" variant="signUp">
              Submit
            </Button>
          </form>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img src={agentPending} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Rider;
