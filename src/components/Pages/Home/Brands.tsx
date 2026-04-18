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
    <div className="my-12 md:my-25 mx-8 md:mx-15">
      <h1 className="text-[#03373D] font-bold text-[25px] text-center md:text-[32px] mb-8">
        We've helped thousands of sales teams
      </h1>
      <div>
        <Swiper
          loop={true}
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={amazon} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={casio} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={moonstar} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={randstad} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={star} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={start_people} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={amazon} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={casio} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={moonstar} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={randstad} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={star} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={start_people} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
