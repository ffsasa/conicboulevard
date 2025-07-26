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
  const wrapperRef = useRef(null);

  // Theo dõi fullscreen
  useEffect(() => {
    const onFsChange = () => {
      // Mỗi khi fullscreenchange, kiểm tra xem chính wrapperRef đang full-screen không
      setIsFs(document.fullscreenElement === wrapperRef.current);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const openFullscreen = () => {
    const el = wrapperRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  };

  return (
    <div
      ref={wrapperRef}
      className={`w-full pb-5 md:py-10 relative ${
        isFs ? "flex flex-col h-screen" : ""
      }`}
    >
      {/* Tiêu đề luôn nằm top */}
      <h2 className="text-3xl sm:text-5xl font-bold text-darkgreen text-center font-dancing sm:pb-4">
        Mặt Bằng Tổng Thể
      </h2>

      {/* Swiper sẽ flex-1 và chiếm hết khoảng còn lại của wrapper khi full-screen */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        speed={700}
        loop={true}
        className={`w-full mx-auto rounded-xl shadow-xl relative ${
          isFs ? "flex-1" : ""
        }`}
      >
        {floorPlans.map((plan, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={plan.src}
              alt={plan.alt}
              onClick={openFullscreen}
              className={`cursor-zoom-in w-full ${
                isFs
                  ? "h-full w-auto object-contain mx-auto"
                  : "h-auto object-cover"
              }`}
            />
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-darkgreen" />
        <div className="swiper-button-next !text-darkgreen" />
      </Swiper>

      {/* Nút ✕ hiển thị khi wrapper đang full-screen */}
      {isFs && (
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
