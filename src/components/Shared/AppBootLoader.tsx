const AppBootLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F7FBFB] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-[#E6EFEE] bg-white px-6 py-9 text-center shadow-[0_16px_36px_rgba(3,55,61,0.06)]">
        <div className="mx-auto loading-spin-subtle h-11 w-11 rounded-full border-2 border-[#D7E7E5] border-t-[#03373D]" />
        <h1 className="mt-4 text-xl font-bold text-[#03373D]">ZapShift</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Preparing delivery dashboard and routes.
        </p>
      </div>
    </div>
  );
};

export default AppBootLoader;
