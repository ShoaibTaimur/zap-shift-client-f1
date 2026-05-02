import { buttonVariants } from "@/components/ui/button";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2, PackageCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
type paymentType = {
  transactionId: string;
  trackingId: string;
};

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState<paymentType | null>(null);
  const sessionId = searchParams.get("session_id");
  const axiosSecure = AxiosSecure();
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 via-white to-teal-50 shadow-sm">
      <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100/80 px-4 py-2 text-sm font-semibold text-emerald-700">
            <CheckCircle2 className="size-4" />
            Payment completed
          </div>

          <div className="space-y-3">
            <h1 className="max-w-xl text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Payment successful. Parcel now ready for next move.
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Stripe confirmed transaction. Team can now continue parcel
              processing, tracking, dispatch flow without payment block.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/dashboard"
              className={cn(
                buttonVariants({
                  className:
                    "rounded-full bg-[#03373D] px-6 hover:bg-[#02262B]",
                }),
              )}
            >
              Back to orders
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/dashboard/sendParcel"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className: "rounded-full border-slate-200 px-6",
                }),
              )}
            >
              Create new parcel
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-[#03373D] p-6 text-white shadow-xl shadow-emerald-100">
          <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-white/10">
            <PackageCheck className="size-8" />
          </div>

          <h2 className="text-2xl font-bold">What happens now</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-200">
            <p>Payment locked in.</p>
            <p>Parcel order stays active in dashboard.</p>
            <p>Next updates come from shipment progress.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
