import { use } from "react";
import customerTop from "../../../../Resources/assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Review from "./Review";

type reviewData = {
  id: string;
  user_email: string;
  userName: string;
  delivery_email: string;
  ratings: number;
  review: string;
  parcel_id: string;
  pick_up_email: string;
  user_photoURL: string;
  date: string;
};

type reviewProps = {
  reviewPromise: Promise<reviewData[]>;
};

const Reviews = ({ reviewPromise }: reviewProps) => {
  const reviewsData = use(reviewPromise);

  return (
    <div className="my-12 md:my-25 mx-5 md:mx-15">
      <div className="flex flex-col items-center mb-8">
        <img className="mb-8" src={customerTop} alt="" />
        <h1 className="text-[25px] md:text-[32px] font-bold text-[#03373D] text-center mb-3">
          What our customers are sayings
        </h1>
        <p className="text-[#606060] text-[14px] md:text-[16px] w-[90%] md:w-[70%] text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviewsData.map((reviews) => (
            <SwiperSlide key={reviews.id}>
              <Review reviews={reviews}></Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
