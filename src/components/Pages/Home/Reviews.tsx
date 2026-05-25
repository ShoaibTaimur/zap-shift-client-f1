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
    <div className="site-section bg-[#F7FBFB]">
      <div className="mb-6 flex flex-col items-center text-center md:mb-8">
        <img className="mb-4 w-20 md:w-28" src={customerTop} alt="" />
        <h1 className="section-title mb-2.5">
          What our customers are sayings
        </h1>
        <p className="section-copy max-w-2xl">
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
          slidesPerView={1}
          coverflowEffect={{
            rotate: 18,
            stretch: 0,
            depth: 90,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
            },
            1280: {
              slidesPerView: 1.7,
            },
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
