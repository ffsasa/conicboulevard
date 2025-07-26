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

  // Bật/tắt khi thực sự fullscreen API change
  useEffect(() => {
    const onFsChange = () => {
      setIsFs(document.fullscreenElement === wrapperRef.current);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Mở fullscreen: ưu tiên API, fallback CSS
  const openFullscreen = () => {
    const el = wrapperRef.current;
    if (el && el.requestFullscreen) {
      el.requestFullscreen();
    } else {
      // fallback: simulate fullscreen via CSS
      setIsExpanded(true);
    }
  };

  // Thoát fullscreen/API hoặc CSS
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsExpanded(false);
  };

  // Chỉ khi đang fullscreen API hoặc CSS thì overlay chế độ full
  const fullMode = isFs || isExpanded;

  return (
    <div
      ref={wrapperRef}
      className={`w-full pb-5 md:py-10 relative 
        ${fullMode ? "fixed inset-0 bg-black flex flex-col" : ""}`}
      style={fullMode ? { zIndex: 1000 } : undefined}
    >
      {/* Tiêu đề */}
      <h2 className="text-3xl sm:text-5xl font-bold text-darkgreen text-center font-dancing sm:pb-4">
        Mặt Bằng Tổng Thể
      </h2>

      {/* Slider flex-1 khi fullScreen/CSS */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        speed={700}
        loop={true}
        className={`w-full mx-auto rounded-xl shadow-xl relative 
          ${fullMode ? "flex-1" : ""}`}
      >
        {floorPlans.map((plan, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={plan.src}
              alt={plan.alt}
              onClick={openFullscreen}
              className={`cursor-zoom-in w-full 
                ${fullMode 
                  ? "h-full w-auto object-contain mx-auto" 
                  : "h-auto object-cover"}`}
            />
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-darkgreen" />
        <div className="swiper-button-next !text-darkgreen" />
      </Swiper>

      {/* Nút ✕ cố định */}
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
