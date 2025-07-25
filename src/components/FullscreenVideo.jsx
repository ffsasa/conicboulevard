import { useState, useRef, useEffect } from "react";

const FullscreenVideo = ({ videoUrl, className = "" }) => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    const el = containerRef.current;
    if (el?.requestFullscreen) el.requestFullscreen();
    else if (el?.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el?.msRequestFullscreen) el.msRequestFullscreen();
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  };

  useEffect(() => {
    const handleStateChange = (event) => {
      if (event.data === window.YT?.PlayerState?.PLAYING) {
        openFullscreen();
        setIsFullscreen(true);
      }
    };

    const onPlayerReady = (event) => {
      playerRef.current = event.target;
      playerRef.current.addEventListener("onStateChange", handleStateChange);
    };

    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        window.onYouTubeIframeAPIReady();
      }
    };

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    loadYouTubeAPI();

    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, []);

  // Đảm bảo URL có enablejsapi=1
  const videoWithAPI = videoUrl.includes("enablejsapi=1")
    ? videoUrl
    : `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}enablejsapi=1`;

  return (
    <>
      <div ref={containerRef} className={`${className} relative`}>
        <iframe
          ref={iframeRef}
          className="w-full h-full rounded-xl shadow-lg"
          src={videoWithAPI}
          title="Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
        {isFullscreen && (
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-[9999] bg-white text-black text-2xl px-3 py-1 rounded-full shadow-lg"
          >
            ✕
          </button>
        )}
      </div>
    </>
  );
};

export default FullscreenVideo;
