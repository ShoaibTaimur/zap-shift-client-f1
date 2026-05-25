import { Button } from "@/components/ui/button";
import { Ban, Home, ShieldAlert } from "lucide-react";
import { Link, useLocation } from "react-router";

type ForbiddenState = {
  title?: string;
  message?: string;
  from?: string;
};

const Forbidden = () => {
  const location = useLocation();
  const state = (location.state as ForbiddenState | null) ?? null;

  const title = state?.title ?? "403. Tiny gate. Big no.";
  const message =
    state?.message ?? "Wrong badge for this area. Turn around. Try different door.";
  const from = state?.from ?? "Unknown route";

  return (
    <div className="my-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="relative isolate px-6 py-16 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(181,225,139,0.38),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(3,55,61,0.12),_transparent_30%),linear-gradient(135deg,_#f8fff2_0%,_#ffffff_45%,_#eefbf5_100%)]" />
        <div className="mx-auto flex max-w-4xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#03373D] px-4 py-2 text-sm font-semibold text-white">
              <ShieldAlert className="size-4" />
              Forbidden zone
            </div>
            <h1 className="text-4xl font-black tracking-tight text-[#03373D] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {message}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-[#b5e18b] bg-[#f7fde9] px-4 py-3 text-sm text-slate-700">
              <Ban className="size-4 text-[#5c8f1c]" />
              Blocked path: <span className="font-semibold text-[#03373D]">{from}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={
                  <Link to="/dashboard">
                    Back dashboard
                  </Link>
                }
              >
                <Home />
                Back dashboard
              </Button>
              <Button
                variant="outline"
                render={
                  <Link to="/">
                    Escape home
                  </Link>
                }
              >
                Escape home
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 w-full max-w-sm items-center justify-center">
            <div className="absolute left-6 top-6 rotate-[-12deg] rounded-3xl border-2 border-dashed border-[#03373D]/20 bg-white/80 px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                Access card
              </p>
              <p className="mt-3 text-5xl font-black text-[#03373D]">403</p>
              <p className="mt-2 text-sm text-slate-500">Permission says nope.</p>
            </div>
            <div className="absolute bottom-4 right-5 rotate-[10deg] rounded-[2rem] bg-[#03373D] px-6 py-5 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b5e18b]">
                Fun police
              </p>
              <p className="mt-2 text-2xl font-black">Bonk.</p>
              <p className="mt-1 text-sm text-white/75">Role mismatch detected.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
