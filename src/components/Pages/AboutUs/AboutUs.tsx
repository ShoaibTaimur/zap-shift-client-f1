import Tab from "./tabs-advanced-2";

const AboutUs = () => {
    return (
        <div className="bg-white rounded-2xl py-16 px-8 md:px-24 my-10">
            <div>
                <h1 className="text-[#03373D] text-[30px] lg:text-[45px] font-extrabold">About Us</h1>
                <p className="w-[80%] lg:w-[60%] text-[12px] lg:text-[14px] text-[#606060] font-light">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="mt-10">
                <Tab />
            </div>
        </div>
    );
};

export default AboutUs;