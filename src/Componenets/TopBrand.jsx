import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import br1 from "./../assets/Br1.png"
import br2 from "./../assets/Br2.png"
import br3 from "./../assets/Br3.png"
import br4 from "./../assets/Br4.png"
import br5 from "./../assets/Br5.png"
import br6 from "./../assets/Br6.png"

import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const TopBrand = () => {
  return (
    <div className="w-full mt-7">
        <h1 className="text-4xl font-bold p-6">Top Brands</h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        <SwiperSlide><img src={br1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={br2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={br3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={br4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={br5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={br6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopBrand;
