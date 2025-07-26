// src/components/FloorSlider.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const floorPlans = [
  { src: "/blocka1.jpg", alt: "Block A1" },
  { src: "/blocka2.jpg", alt: "Block A2" },
  { src: "/blockb1.jpg", alt: "Block B1" },
  { src: "/blockb2.jpg", alt: "Block B2" },
];

export default function FloorSlider() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full pb-5 md:py-10">
      {/* Bình thường thì hiển thị slider */}
      <h2 className="text-3xl sm:text-5xl font-bold text-darkgreen text-center font-dancing sm:pb-4">
        Mặt Bằng Tổng Thể
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        speed={700}
        loop
        className="w-full mx-auto rounded-xl shadow-xl relative"
      >
        {floorPlans.map((plan, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={plan.src}
              alt={plan.alt}
              className="w-full h-auto object-cover cursor-zoom-in"
              onClick={() => setIsExpanded(true)}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !text-darkgreen" />
        <div className="swiper-button-next !text-darkgreen" />
      </Swiper>

      {/* Overlay full‑screen khi isExpanded = true */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 z-60 bg-white text-black text-2xl p-2 rounded-full shadow-lg"
          >
            ✕
          </button>
          <h2 className="text-4xl text-white text-center mt-8 font-dancing">
            Mặt Bằng Tổng Thể
          </h2>
          <div className="flex-1 flex items-center justify-center p-4">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation={{ nextEl: ".swiper-button-prev-full", prevEl: ".swiper-button-next-full" }}
              pagination={{ clickable: true }}
              allowTouchMove
              speed={700}
              loop
              className="w-full h-full max-w-4xl"
            >
              {floorPlans.map((plan, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center">
                  <img
                    src={plan.src}
                    alt={plan.alt}
                    className="max-h-full object-contain"
                  />
                </SwiperSlide>
              ))}
              {/* Nút điều hướng full‑screen */}
              <div className="swiper-button-prev-full text-white !text-4xl" />
              <div className="swiper-button-next-full text-white !text-4xl" />
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
