// src/components/FloorSlider.jsx
import { useState, useRef } from "react";
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
  const [selectedSrc, setSelectedSrc] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full pb-5 md:py-10">
      <h2 className="text-3xl sm:text-5xl font-bold text-darkgreen text-center font-dancing sm:pb-4">
        Mặt Bằng Tổng Thể
      </h2>

      {/* Swiper chế độ thường: 1 slide, có prev/next */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        allowTouchMove={true}
        speed={500}
        loop={true}
        className="w-full mx-auto rounded-xl shadow-xl relative"
      >
        {floorPlans.map((plan, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={plan.src}
              alt={plan.alt}
              className="w-full h-auto object-cover cursor-zoom-in"
              onClick={() => setSelectedSrc(plan.src)}
            />
          </SwiperSlide>
        ))}

        {/* Các nút prev/next */}
        <div ref={prevRef} className="swiper-button-prev !text-darkgreen" />
        <div ref={nextRef} className="swiper-button-next !text-darkgreen" />
      </Swiper>

      {/* Overlay full-screen chỉ chứa ảnh được select */}
      {selectedSrc && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Nút đóng */}
          <button
            onClick={() => setSelectedSrc(null)}
            className="fixed top-4 right-4 z-50 bg-white text-black text-3xl p-2 rounded-full shadow-lg"
          >
            ✕
          </button>

          {/* Ảnh full-screen */}
          <img
            src={selectedSrc}
            alt="Expanded floor plan"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
