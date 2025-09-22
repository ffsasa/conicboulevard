import { useState, useRef } from "react";

const FullscreenImage = ({ src, alt, className = "" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: new Date().getTime(),
    };
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dx = Math.abs(touch.clientX - touchStartRef.current.x);
    const dy = Math.abs(touch.clientY - touchStartRef.current.y);
    const dt = new Date().getTime() - touchStartRef.current.time;

    // Nếu chạm nhẹ không di chuyển nhiều và thời gian ngắn → xem như là click
    if (dx < 10 && dy < 10 && dt < 300) {
      setIsFullscreen(true);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsFullscreen(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="block w-full p-0 border-none bg-transparent"
      >
        <img
          src={src}
          alt={alt}
          className={`block w-full cursor-pointer overflow-hidden rounded-3xl shadow-[0_25px_80px_-35px_rgba(96,56,19,0.55)] ring-1 ring-luxurybronze/20 transition-all duration-500 ease-out hover:scale-[1.015] hover:shadow-[0_40px_120px_-45px_rgba(96,56,19,0.6)] bg-white/60 object-cover ${className}`}        />
      </button>

      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[9998] flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-[9999] bg-white text-black text-2xl px-3 py-1 rounded-full shadow-lg"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default FullscreenImage;
