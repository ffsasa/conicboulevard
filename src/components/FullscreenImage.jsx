import { useRef, useState } from "react";

const FullscreenImage = ({ src, alt, className = "" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={openFullscreen}
        className={`cursor-pointer ${className}`}
      />

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
