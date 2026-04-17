import bookingImg from "../../../../Resources/assets/bookingIcon.png"

const Works = () => {
    return (
        <div className="my-12 md:my-25 mx-8 md:mx-15">
            <h1 className="text-[#03373D] font-bold text-[25px] md:text-[32px] mb-6">How it Works</h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="bg-white p-7 rounded-3xl">
                    <img src={bookingImg} alt="bookingImg" />
                    <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px]">Booking Pick & Drop</h1>
                    <p className="text-[14px] md:text-[16px] text-[#606060]">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="bg-white p-7 rounded-3xl">
                    <img src={bookingImg} alt="bookingImg" />
                    <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px]">Cash On Delivery</h1>
                    <p className="text-[14px] md:text-[16px] text-[#606060]">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="bg-white p-7 rounded-3xl">
                    <img src={bookingImg} alt="bookingImg" />
                    <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px]">Delivery Hub</h1>
                    <p className="text-[14px] md:text-[16px] text-[#606060]">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="bg-white p-7 rounded-3xl">
                    <img src={bookingImg} alt="bookingImg" />
                    <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px]">Booking SME & Corporate</h1>
                    <p className="text-[14px] md:text-[16px] text-[#606060]">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Works;