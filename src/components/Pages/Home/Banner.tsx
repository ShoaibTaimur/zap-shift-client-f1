import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../../../Resources/assets/banner/banner1.png";
import banner2 from "../../../../Resources/assets/banner/banner2.png";
import banner3 from "../../../../Resources/assets/banner/banner3.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#03373D]/10 bg-[#ECF5F4] shadow-[0_18px_48px_rgba(3,55,61,0.1)] md:rounded-[2rem]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        autoFocus={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        {[banner1, banner2, banner3].map((banner, index) => (
          <div key={index} className="relative">
            <img
              src={banner}
              className="block h-55 w-full object-contain object-center md:h-auto md:min-h-95 md:object-cover xl:min-h-125"
              alt="ZapShift delivery banner"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#03373D]/76 via-[#03373D]/20 to-transparent px-4 pb-4 pt-14 md:px-8 md:pb-8 md:pt-20 lg:px-12">
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                <Button
                  onClick={() => navigate("/rider")}
                  variant="outline"
                  className="border-white/70 bg-white/90 px-4 py-4 text-xs font-bold text-[#03373D] hover:bg-white md:px-5 md:text-sm"
                >
                  Be A Rider
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
