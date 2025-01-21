import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import b1 from './../assets/B2.png';
import b2 from './../assets/B1.png';
import b3 from './../assets/B3.png';

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="w-full mt-7">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={b2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={b3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
