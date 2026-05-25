import bookingImg from "../../../../Resources/assets/bookingIcon.png"

const Works = () => {
    return (
        <div className="px-1 sm:px-0">
            <div className="mb-6 flex max-w-3xl flex-col gap-2.5 md:mb-8">
                <p className="section-eyebrow">Simple process</p>
                <h1 className="section-title">How it Works</h1>
                <p className="section-copy max-w-2xl">Clear flow, faster handoff, less confusion. Every step tuned for quick parcel movement from booking to delivery.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="feature-card">
                    <div className="mb-4 flex items-center justify-between">
                        <img src={bookingImg} alt="bookingImg" className="h-12 w-12 object-contain" />
                        <span className="rounded-full bg-[#F4FBFB] px-2.5 py-1 text-xs font-bold text-[#03373D]">01</span>
                    </div>
                    <h1 className="mb-2.5 text-base font-bold text-[#03373D] md:text-[19px]">Booking Pick & Drop</h1>
                    <p className="section-copy">Schedule pickup, enter delivery info, hand parcel off without extra calls or manual follow-up.</p>
                </div>
                <div className="feature-card">
                    <div className="mb-4 flex items-center justify-between">
                        <img src={bookingImg} alt="bookingImg" className="h-12 w-12 object-contain" />
                        <span className="rounded-full bg-[#F4FBFB] px-2.5 py-1 text-xs font-bold text-[#03373D]">02</span>
                    </div>
                    <h1 className="mb-2.5 text-base font-bold text-[#03373D] md:text-[19px]">Cash On Delivery</h1>
                    <p className="section-copy">Collect payment securely at doorstep while keeping sender, rider, customer status in sync.</p>
                </div>
                <div className="feature-card">
                    <div className="mb-4 flex items-center justify-between">
                        <img src={bookingImg} alt="bookingImg" className="h-12 w-12 object-contain" />
                        <span className="rounded-full bg-[#F4FBFB] px-2.5 py-1 text-xs font-bold text-[#03373D]">03</span>
                    </div>
                    <h1 className="mb-2.5 text-base font-bold text-[#03373D] md:text-[19px]">Delivery Hub</h1>
                    <p className="section-copy">Hub sorting keeps routes tight, reduces delay, helps parcels move toward final destination faster.</p>
                </div>
                <div className="feature-card">
                    <div className="mb-4 flex items-center justify-between">
                        <img src={bookingImg} alt="bookingImg" className="h-12 w-12 object-contain" />
                        <span className="rounded-full bg-[#F4FBFB] px-2.5 py-1 text-xs font-bold text-[#03373D]">04</span>
                    </div>
                    <h1 className="mb-2.5 text-base font-bold text-[#03373D] md:text-[19px]">Booking SME & Corporate</h1>
                    <p className="section-copy">High-volume businesses get repeatable logistics flow with scalable booking, pickup, delivery support.</p>
                </div>
            </div>
        </div>
    );
};

export default Works;
