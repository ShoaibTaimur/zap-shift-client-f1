import serviceImg from "../../../../Resources/assets/service.png";

const Services = () => {
  return (
    <div className="site-section bg-[#03373D] text-white lg:px-10 xl:px-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="section-title text-white">Our Services</h1>
        <p className="section-copy mt-2.5 font-medium text-white/80">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 xl:grid-cols-3">
        <div className="feature-card flex h-full flex-col items-center text-center">
          <div className="rounded-full bg-linear-to-b from-[#EEEDFC] to-white p-4 shadow-sm">
            <img src={serviceImg} alt="serviceImg" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          </div>
          <h1 className="mb-2 mt-4 text-base font-bold text-[#03373D] md:text-[19px]">
            Express & Standard Delivery
          </h1>
          <p className="section-copy">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="feature-card flex h-full flex-col items-center bg-[#CAEB66] text-center">
          <div className="rounded-full bg-linear-to-b from-[#EEEDFC] to-white p-4 shadow-sm">
            <img src={serviceImg} alt="serviceImg" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          </div>
          <h1 className="mb-2 mt-4 text-base font-bold text-[#03373D] md:text-[19px]">
            Nationwide Delivery
          </h1>
          <p className="section-copy text-[#48514D]">
            We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.
          </p>
        </div>
        <div className="feature-card flex h-full flex-col items-center text-center">
          <div className="rounded-full bg-linear-to-b from-[#EEEDFC] to-white p-4 shadow-sm">
            <img src={serviceImg} alt="serviceImg" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          </div>
          <h1 className="mb-2 mt-4 text-base font-bold text-[#03373D] md:text-[19px]">
            Fulfillment Solution
          </h1>
          <p className="section-copy">
            We also offer customized service with inventory management support, online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="feature-card flex h-full flex-col items-center text-center">
          <div className="rounded-full bg-linear-to-b from-[#EEEDFC] to-white p-4 shadow-sm">
            <img src={serviceImg} alt="serviceImg" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          </div>
          <h1 className="mb-2 mt-4 text-base font-bold text-[#03373D] md:text-[19px]">
            Cash on Home Delivery
          </h1>
          <p className="section-copy">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
          </p>
        </div>
        <div className="feature-card flex h-full flex-col items-center text-center">
          <div className="rounded-full bg-linear-to-b from-[#EEEDFC] to-white p-4 shadow-sm">
            <img src={serviceImg} alt="serviceImg" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          </div>
          <h1 className="mb-2 mt-4 text-base font-bold text-[#03373D] md:text-[19px]">
            Corporate Service / Contract In Logistics
          </h1>
          <p className="section-copy">
            Customized corporate services which includes warehouse and inventory management support.
          </p>
        </div>
        <div className="feature-card flex h-full flex-col items-center text-center">
          <div className="rounded-full bg-linear-to-b from-[#EEEDFC] to-white p-4 shadow-sm">
            <img src={serviceImg} alt="serviceImg" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          </div>
          <h1 className="mb-2 mt-4 text-base font-bold text-[#03373D] md:text-[19px]">
            Parcel Return
          </h1>
          <p className="section-copy">
            Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
