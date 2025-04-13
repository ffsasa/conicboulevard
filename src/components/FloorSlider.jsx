// src/components/FloorSlider.jsx
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
  return (
    <div className="w-full pb-5 md:py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-darkgreen text-center font-dancing">
        Mặt Bằng Tổng Thể
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        allowTouchMove={false} // Tắt kéo tay
        speed={700} // Không có hiệu ứng chuyển động
        loop={true} // Không lặp
        className="w-full mx-auto rounded-xl shadow-xl overflow-hidden relative"
      >
        {floorPlans.map((plan, index) => (
          <SwiperSlide key={index}>
            <img
              src={plan.src}
              alt={plan.alt}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-darkgreen" />
        <div className="swiper-button-next !text-darkgreen" />
      </Swiper>
    </div>
  );
}
