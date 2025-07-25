import { useRef, useEffect, useState } from "react";

const FullscreenVideo = ({ videoUrl }) => {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    const el = containerRef.current;
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
      ref={containerRef}
      className={`relative max-w-5xl w-full aspect-video rounded-xl overflow-hidden shadow-lg ${
        isFullscreen ? "fixed inset-0 z-[9998] bg-black" : ""
      }`}
      onClick={openFullscreen}
    >
      <iframe
        className="w-full h-full"
        src={videoUrl}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {isFullscreen && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Ngăn click tiếp tục gây fullscreen
            closeFullscreen();
          }}
          className="fixed top-4 right-4 z-[9999] bg-black bg-opacity-60 text-white text-xl px-4 py-2 rounded-full shadow-xl transition hover:bg-opacity-80"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default FullscreenVideo;
