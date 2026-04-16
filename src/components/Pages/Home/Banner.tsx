import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner1 from "../../../../Resources/assets/banner/banner1.png";
import banner2 from "../../../../Resources/assets/banner/banner2.png";
import banner3 from "../../../../Resources/assets/banner/banner3.png";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      autoFocus={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div className="relative">
        <img src={banner1} className="block w-full" />
        <Button variant="signUp" className="hidden md:flex absolute rounded-2xl lg:px-2 xl:px-4 lg:py-3 xl:py-5 font-bold left-[7%] top-[87%] lg:top-[82%] z-10 -translate-y-1/2">
          Track Your Parcel
        </Button>
        <Button variant="outline" className="hidden md:flex absolute lg:px-2 xl:px-4 lg:py-3 xl:py-5 font-bold left-[30%] lg:left-[25%] xl:left-[21%] top-[87%] lg:top-[82%] z-10 -translate-y-1/2">
          Be A Rider
        </Button>
      </div>
      <div className="relative">
        <img src={banner2} className="block w-full" />
        <Button variant="signUp" className="hidden md:flex absolute rounded-2xl lg:px-2 xl:px-4 lg:py-3 xl:py-5 font-bold left-[7%] top-[87%] lg:top-[82%] z-10 -translate-y-1/2">
          Track Your Parcel
        </Button>
        <Button variant="outline" className="hidden md:flex absolute lg:px-2 xl:px-4 lg:py-3 xl:py-5 font-bold left-[30%] lg:left-[25%] xl:left-[21%] top-[87%] lg:top-[82%] z-10 -translate-y-1/2">
          Be A Rider
        </Button>
      </div>
      <div className="relative">
        <img src={banner3} className="block w-full" />
        <Button variant="signUp" className="hidden md:flex absolute rounded-2xl lg:px-2 xl:px-4 lg:py-3 xl:py-5 font-bold left-[7%] top-[87%] lg:top-[82%] z-10 -translate-y-1/2">
          Track Your Parcel
        </Button>
        <Button variant="outline" className="hidden md:flex absolute lg:px-2 xl:px-4 lg:py-3 xl:py-5 font-bold left-[30%] lg:left-[25%] xl:left-[21%] top-[87%] lg:top-[82%] z-10 -translate-y-1/2">
          Be A Rider
        </Button>
      </div>
    </Carousel>
  );
};

export default Banner;
