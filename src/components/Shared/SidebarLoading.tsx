const SidebarLoading = () => {
  return (
    <div className="flex min-h-screen w-full max-w-64 flex-col border-r border-[#e5efe0] bg-white px-4 py-4">
      <div className="border-b border-[#eef4e4] pb-4">
        <div className="h-8 w-28 rounded-full bg-[#f4f9ec]" />
      </div>

      <div className="pt-6">
        <div className="mb-4 h-3 w-20 rounded-full bg-[#eef4e4]" />
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl bg-[#f8fbf4] px-3 py-3">
            <div className="loading-dot-subtle h-2.5 w-2.5 rounded-full bg-[#8dc63f]" />
            <div className="h-3 w-24 rounded-full bg-[#e7f1d8]" />
          </div>
          <div className="flex items-center gap-3 rounded-xl px-3 py-3">
            <div className="loading-dot-subtle h-2.5 w-2.5 rounded-full bg-[#b5e18b] [animation-delay:140ms]" />
            <div className="h-3 w-20 rounded-full bg-[#eef4e4]" />
          </div>
          <div className="flex items-center gap-3 rounded-xl px-3 py-3">
            <div className="loading-dot-subtle h-2.5 w-2.5 rounded-full bg-[#5c8f1c] [animation-delay:280ms]" />
            <div className="h-3 w-28 rounded-full bg-[#eef4e4]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLoading;
