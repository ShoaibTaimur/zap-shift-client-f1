
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw, WalletCards } from "lucide-react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-amber-100 bg-linear-to-br from-amber-50 via-white to-rose-50 shadow-sm">
      <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100/80 px-4 py-2 text-sm font-semibold text-amber-700">
            <AlertTriangle className="size-4" />
            Payment cancelled
          </div>

          <div className="space-y-3">
            <h1 className="max-w-xl text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Payment not finished. Parcel still waiting.
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              No charge completed. Parcel order remains unpaid until you retry
              checkout and finish transaction.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/dashboard"
              className={cn(
                buttonVariants({ className: "rounded-full bg-[#03373D] px-6 hover:bg-[#02262B]" })
              )}
            >
              Retry from dashboard
              <RotateCcw className="size-4" />
            </Link>
            <Link
              to="/dashboard/sendParcel"
              className={cn(
                buttonVariants({ variant: "outline", className: "rounded-full border-slate-200 px-6" })
              )}
            >
              Edit shipment details
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl shadow-amber-100">
          <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-white/10">
            <WalletCards className="size-8" />
          </div>

          <h2 className="text-2xl font-bold">Before retry</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p>Check card or wallet balance.</p>
            <p>Confirm payment window not closed.</p>
            <p>Retry checkout from parcel order list.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
