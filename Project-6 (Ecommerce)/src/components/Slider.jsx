import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const images = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1764511276_iPhone_16.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1764511304_Finest_Dry_Fruits.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1764511567_Walk_In_Style.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1764783767_Everyday_Elegance.jpg",
  ];

  return (
    <div className="w-full ">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-[95%] my-5 h-[350px] "   // ✅ small height
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
