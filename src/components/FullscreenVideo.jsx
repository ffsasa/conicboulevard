// src/components/FullscreenVideo.jsx
import { useEffect, useRef, useState } from "react";

const FullscreenVideo = ({ videoUrl, className = "" }) => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // 1) Khởi tạo YouTube API để có thể gọi playVideo()
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current);
    };
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    } else {
      window.onYouTubeIframeAPIReady();
    }

    // 2) Lắng nghe thay đổi fullscreen
    const handleFsChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };
    document.addEventListener("fullscreenchange", handleFsChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      playerRef.current?.destroy?.();
    };
  }, []);

  const handleOverlayClick = () => {
    // Yêu cầu vào full‑screen (được phép vì user gesture)
    if (containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen();
    }
    // Phát video
    playerRef.current?.playVideo();
    // Ẩn overlay để lộ controls bên trong iframe
    setOverlayVisible(false);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // Đảm bảo URL có enablejsapi để quay control được
  const src = videoUrl.includes("enablejsapi=1")
    ? videoUrl
    : `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}enablejsapi=1`;

  return (
    <div ref={containerRef} className={`${className} relative`}>
      <iframe
        ref={iframeRef}
        src={src}
        className="w-full h-full rounded-xl shadow-lg"
        title="Video"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
      {/* Lớp overlay bắt click lần đầu */}
      {overlayVisible && (
        <div
          onClick={handleOverlayClick}
          className="absolute inset-0 cursor-pointer bg-transparent"
        />
      )}
      {/* Nút ✕ chỉ hiện khi đang fullscreen */}
      {isFullscreen && (
        <button
          onClick={exitFullscreen}
          className="absolute top-4 right-4 z-10 bg-white text-black text-2xl px-3 py-1 rounded-full shadow-lg"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default FullscreenVideo;
