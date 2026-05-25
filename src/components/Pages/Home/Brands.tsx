import amazon from "../../../../Resources/assets/brands/amazon.png";
import casio from "../../../../Resources/assets/brands/casio.png";
import moonstar from "../../../../Resources/assets/brands/moonstar.png";
import randstad from "../../../../Resources/assets/brands/randstad.png";
import star from "../../../../Resources/assets/brands/star.png";
import start_people from "../../../../Resources/assets/brands/start_people.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <div className="rounded-[1.5rem] border border-[#03373D]/10 bg-white px-4 py-8 shadow-[0_14px_32px_rgba(15,23,42,0.04)] sm:px-6 md:rounded-[2rem] md:px-8 md:py-10">
      <h1 className="mx-auto mb-6 max-w-2xl text-center text-[24px] font-bold text-[#03373D] md:mb-8 md:text-[32px]">
        We’ve helped thousands of sales teams
      </h1>
      <div className="px-1">
        <Swiper
          loop={true}
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={18}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={amazon} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={casio} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={moonstar} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={randstad} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={star} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={start_people} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={amazon} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={casio} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={moonstar} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={randstad} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={star} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={start_people} alt="" className="mx-auto h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
