// src/components/FullscreenVideo.jsx
import { useEffect, useMemo, useRef, useState } from "react";

let youTubeApiPromise;

const loadYouTubeAPI = () => {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }

  if (window.YT && window.YT.Player) {
    return Promise.resolve(window.YT);
  }

  if (!youTubeApiPromise) {
    youTubeApiPromise = new Promise((resolve) => {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        resolve(window.YT);
      };

      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.head.appendChild(tag);
    });
  }

  return youTubeApiPromise;
};

const FullscreenVideo = ({ videoUrl, className = "" }) => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [shouldLoadPlayer, setShouldLoadPlayer] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFsChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, []);

  useEffect(() => {
    if (!shouldLoadPlayer || playerRef.current || typeof window === "undefined") {
      return undefined;
    }
    
    let isSubscribed = true;

    const setupPlayer = async () => {
      const YT = await loadYouTubeAPI();

      if (!isSubscribed || !YT || playerRef.current || !iframeRef.current) {
        return;
      }

      playerRef.current = new YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            if (!isSubscribed) {
              return;
            }
            event.target.playVideo();
          },
        },
      });
    };

    setupPlayer();

    return () => {
      isSubscribed = false;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [shouldLoadPlayer]);

  const handleStart = () => {
    if (containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen().catch(() => {});
    }

    setShouldLoadPlayer(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const src = useMemo(() => {
    const ensuredUrl = videoUrl.includes("enablejsapi=1")
      ? videoUrl
      : `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}enablejsapi=1`;
    return ensuredUrl;
  }, [videoUrl]);

  const videoId = useMemo(() => {
    const match = videoUrl.match(/\/embed\/([^?&]+)/);
    return match?.[1] ?? null;
  }, [videoUrl]);

  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <div
      ref={containerRef}
      className={`relative ${isFullscreen ? "h-full w-full max-w-none" : ""} ${className}`}
    >
      <div
        className={`relative w-full ${isFullscreen ? "h-full" : "pt-[56.25%]"}`}
      >
        {shouldLoadPlayer ? (
          <iframe
            ref={iframeRef}
            src={src}
            className={`absolute inset-0 h-full w-full ${
              isFullscreen ? "" : "rounded-xl shadow-lg"
            }`}
            title="Video"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          ) : (
          <button
            type="button"
            onClick={handleStart}
            className={`group absolute inset-0 flex w-full items-center justify-center overflow-hidden ${
              isFullscreen ? "" : "rounded-xl shadow-lg"
            } cursor-pointer focus:outline-none`}
            aria-label="Phát video YouTube"
          >
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt="YouTube video thumbnail"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="h-full w-full bg-black" />
            )}
            <span className="absolute w-16 h-16 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-16 h-16"
              >
                <polygon points="8,5 19,12 8,19" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {/* Nút ✕ chỉ hiện khi đang fullscreen */}
      {isFullscreen && (
        <button
          onClick={exitFullscreen}
          className="absolute top-4 right-4 z-10 rounded-full bg-white px-3 py-1 text-2xl text-black shadow-lg"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default FullscreenVideo;
