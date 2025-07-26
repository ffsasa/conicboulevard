// src/components/FloorSlider.jsx
import { useState, useEffect, useRef } from "react";
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
  const [isFs, setIsFs] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const wrapperRef = useRef(null);

  // Theo dõi fullscreen API
  useEffect(() => {
    const onFsChange = () => {
      setIsFs(document.fullscreenElement === wrapperRef.current);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const openFullscreen = () => {
    const el = wrapperRef.current;
    if (el && el.requestFullscreen) {
      el.requestFullscreen();
    } else {
      // Fallback CSS overlay cho mobile
      setIsExpanded(true);
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    setIsExpanded(false);
  };

  const fullMode = isFs || isExpanded;

  return (
    <div
      ref={wrapperRef}
      className={
        `w-full pb-5 md:py-10 relative ${
          fullMode ? "fixed inset-0 bg-white flex flex-col" : ""
        }`
      }
      style={fullMode ? { zIndex: 1000, overflow: "hidden" } : undefined}
    >
      <h2
        className={
          `text-3xl sm:text-5xl font-bold text-darkgreen text-center font-dancing sm:pb-4 ${
            fullMode ? "text-white bg-black p-2" : ""
          }`
        }
      >
        Mặt Bằng Tổng Thể
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        speed={700}
        loop={true}
        className={
          `w-full mx-auto rounded-xl shadow-xl relative ${
            fullMode ? "flex-1" : ""
          }`
        }
      >
        {floorPlans.map((plan, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={plan.src}
              alt={plan.alt}
              onClick={openFullscreen}
              className={
                `cursor-zoom-in ${
                  fullMode
                    ? "h-full w-auto object-contain mx-auto"
                    : "w-full h-auto object-cover"
                }`
              }
            />
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-darkgreen" />
        <div className="swiper-button-next !text-darkgreen" />
      </Swiper>

      {fullMode && (
        <button
          onClick={exitFullscreen}
          className="fixed top-4 right-4 z-50 bg-white text-black text-2xl p-2 rounded-full shadow-lg"
        >
          ✕
        </button>
      )}
    </div>
  );
}
