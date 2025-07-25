import { useRef, useState, useEffect } from "react";

const FullscreenImage = ({ src, alt, className = "" }) => {
  const imageRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    const el = imageRef.current;
    if (el?.requestFullscreen) el.requestFullscreen();
    else if (el?.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el?.msRequestFullscreen) el.msRequestFullscreen();
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  };

  useEffect(() => {
    const handleChange = () => {
      const isNowFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
      setIsFullscreen(!!isNowFullscreen);
    };

    document.addEventListener("fullscreenchange", handleChange);
    document.addEventListener("webkitfullscreenchange", handleChange);
    document.addEventListener("msfullscreenchange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
      document.removeEventListener("webkitfullscreenchange", handleChange);
      document.removeEventListener("msfullscreenchange", handleChange);
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={`${
        isFullscreen
          ? "fixed inset-0 bg-black z-[9998] flex items-center justify-center"
          : ""
      }`}
    >
      <img
        src={src}
        alt={alt}
        onClick={openFullscreen}
        className={`cursor-pointer ${
          isFullscreen
            ? "max-w-full max-h-full object-contain"
            : className
        }`}
      />
      {isFullscreen && (
        <button
          onClick={closeFullscreen}
          className="fixed top-4 right-4 z-[9999] bg-black bg-opacity-60 text-white text-xl px-4 py-2 rounded-full shadow-xl transition hover:bg-opacity-80"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default FullscreenImage;
