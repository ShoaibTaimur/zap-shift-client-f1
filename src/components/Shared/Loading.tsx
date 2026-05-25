const Loading = () => {
  return (
    <div className="page-shell my-10 rounded-[1.75rem] border border-[#deebcb] bg-white/95 shadow-[0_18px_45px_-34px_rgba(3,55,61,0.28)]">
      <div className="relative overflow-hidden px-6 py-10 sm:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(247,253,233,0.9)_0%,_rgba(255,255,255,0.96)_52%,_rgba(248,252,250,0.94)_100%)]" />
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <div className="loading-spin-subtle grid h-14 w-14 place-items-center rounded-full border-2 border-[#dcecc4] border-t-[#5c8f1c] bg-white">
            <div className="h-6 w-6 rounded-full bg-[#b5e18b]/70" />
          </div>

          <h2 className="mt-5 text-2xl font-black tracking-tight text-[#03373D] sm:text-3xl">
            Loading
          </h2>

          <p className="mt-2 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            Fetching data, checking access, preparing view.
          </p>

          <div className="mt-6 w-full max-w-sm">
            <div className="h-2 overflow-hidden rounded-full bg-[#eef4e4]">
              <div className="loading-track-subtle h-full w-24 rounded-full bg-[linear-gradient(90deg,#b5e18b_0%,#5c8f1c_100%)]" />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="loading-dot-subtle h-2.5 w-2.5 rounded-full bg-[#b5e18b]" />
            <span className="loading-dot-subtle h-2.5 w-2.5 rounded-full bg-[#8dc63f] [animation-delay:150ms]" />
            <span className="loading-dot-subtle h-2.5 w-2.5 rounded-full bg-[#5c8f1c] [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
