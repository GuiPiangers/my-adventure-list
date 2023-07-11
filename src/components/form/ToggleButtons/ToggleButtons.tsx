import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, A11y, Scrollbar } from "swiper/modules";
import ToggleButton from "./Toggle";

export default function ToggleButtons() {
  return (
    <>
      <Swiper
        className="w-full"
        slidesPerView={"auto"}
        spaceBetween={16}
        freeMode={true}
        modules={[FreeMode, A11y, Scrollbar]}
        wrapperClass="pb-4"
        scrollbar={{
          hide: false,
        }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
      >
        <SwiperSlide style={{ width: "fit-content" }}>
          <ToggleButton img="/img/pixelArt.jpg" name="Força" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <ToggleButton img="/img/pixelArt.jpg" name="Inteligência" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <ToggleButton img="/img/pixelArt.jpg" name="Carisma" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <ToggleButton img="/img/pixelArt.jpg" name="Criatividade" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <ToggleButton img="/img/pixelArt.jpg" name="Organização" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
