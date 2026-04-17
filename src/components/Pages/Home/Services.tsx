import serviceImg from "../../../../Resources/assets/service.png";

const Services = () => {
  return (
    <div className="bg-[#03373D] text-white py-15 md:py-23 px-6 sm:px-18 lg:px-27.5 rounded-2xl">
      <div className="flex items-center flex-col">
        <h1 className="text-[25px] md:text-[32px] font-bold">Our Services</h1>
        <p className="text-[14px] md:text-[16px] w-[90%] md:w-[70%] text-center font-medium">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
        <div className="bg-white p-7 rounded-3xl flex flex-col items-center">
          <div className="rounded-full p-6 bg-linear-to-b from-[#EEEDFC] to-white">
            <img src={serviceImg} alt="serviceImg" />
          </div>
          <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px] text-center">
            Express & Standard Delivery
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#606060] text-center">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-[#CAEB66] p-7 rounded-3xl flex flex-col items-center">
          <div className="rounded-full p-6 bg-linear-to-b from-[#EEEDFC] to-white">
            <img src={serviceImg} alt="serviceImg" />
          </div>
          <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px] text-center">
            Nationwide Delivery
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#606060] text-center">
            We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.
          </p>
        </div>
        <div className="bg-white p-7 rounded-3xl flex flex-col items-center">
          <div className="rounded-full p-6 bg-linear-to-b from-[#EEEDFC] to-white">
            <img src={serviceImg} alt="serviceImg" />
          </div>
          <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px] text-center">
            Fulfillment Solution
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#606060] text-center">
            We also offer customized service with inventory management support, online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="bg-white p-7 rounded-3xl flex flex-col items-center">
          <div className="rounded-full p-6 bg-linear-to-b from-[#EEEDFC] to-white">
            <img src={serviceImg} alt="serviceImg" />
          </div>
          <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px] text-center">
            Cash on Home Delivery
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#606060] text-center">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
          </p>
        </div>
        <div className="bg-white p-7 rounded-3xl flex flex-col items-center">
          <div className="rounded-full p-6 bg-linear-to-b from-[#EEEDFC] to-white">
            <img src={serviceImg} alt="serviceImg" />
          </div>
          <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px] text-center">
            Corporate Service / Contract In Logistics
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#606060] text-center">
            Customized corporate services which includes warehouse and inventory management support.
          </p>
        </div>
        <div className="bg-white p-7 rounded-3xl flex flex-col items-center">
          <div className="rounded-full p-6 bg-linear-to-b from-[#EEEDFC] to-white">
            <img src={serviceImg} alt="serviceImg" />
          </div>
          <h1 className="text-[#03373D] font-bold mt-4 mb-2 text-[16px] md:text-[20px] text-center">
            Parcel Return
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#606060] text-center">
            Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
