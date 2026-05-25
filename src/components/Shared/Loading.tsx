const Loading = () => {
  return (
    <div className="page-shell my-10">
      <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-[#E6EFEE] bg-white px-6 py-8 text-center shadow-[0_10px_24px_rgba(3,55,61,0.04)]">
        <div className="loading-spin-subtle h-10 w-10 rounded-full border-2 border-[#D7E7E5] border-t-[#03373D]" />
        <h2 className="mt-4 text-lg font-bold text-[#03373D]">
          Loading content
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Preparing page. This should take moment.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="loading-dot-subtle h-2 w-2 rounded-full bg-[#B5E18B]" />
          <span className="loading-dot-subtle h-2 w-2 rounded-full bg-[#8DC63F] [animation-delay:150ms]" />
          <span className="loading-dot-subtle h-2 w-2 rounded-full bg-[#5C8F1C] [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
