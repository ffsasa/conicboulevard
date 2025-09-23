import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImageCarousel = ({ images, className = "" }) => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [activeImage]);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className={`w-full rounded-xl shadow-lg ${className}`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.src ?? index} className="flex">
            <div className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9]">
              <img
                src={image.src}
                alt={image.alt ?? `Slide image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
                onClick={() => setActiveImage(image)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeImage &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-white text-black text-3xl p-2 rounded-full shadow-lg"
              aria-label="Đóng hình ảnh"
            >
              ✕
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt ?? "Expanded image"}
              className="max-w-full max-h-full object-contain"
            />
          </div>,
          document.body,
        )}
    </div>
  );
};

export default ImageCarousel;