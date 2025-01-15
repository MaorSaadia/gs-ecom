"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Maximize,
  Minimize,
  Volume2,
  VolumeX,
} from "lucide-react";
import { ProductVideo as ProductVideoType } from "../types/product";

interface ProductVideoProps {
  video: ProductVideoType;
}

export const ProductVideo = ({ video }: ProductVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
  }, []);

  useEffect(() => {
    // Clear existing timeout
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    // If video is playing, hide controls after 1 second
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 1000);
    } else {
      // If video is paused, always show controls
      setShowControls(true);
    }

    // Cleanup timeout on unmount or when isPlaying changes
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg group"
      onMouseEnter={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        id="product-video"
        className="w-full h-full object-cover"
        src={video.url}
        poster={video.thumbnail}
        preload="metadata"
        playsInline
        onEnded={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay Controls */}
      <div
        className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-300 bg-gradient-to-b from-black/30 via-transparent to-black/60 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Top Controls */}
        <div className="p-2 flex justify-end">
          <button
            onClick={toggleFullscreen}
            className="p-1 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-white" />
            ) : (
              <Maximize className="w-4 h-4 text-white" />
            )}
          </button>
        </div>

        {/* Center Play Button */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-gray-900" />
            ) : (
              <Play className="w-6 h-6 text-gray-900 ml-1" />
            )}
          </div>
        </button>

        {/* Bottom Controls */}
        <div className="p-3 space-y-1.5">
          {/* Time and Volume Controls */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <button
                onClick={togglePlay}
                className="p-1 hover:bg-white/20 rounded-full"
              >
                {isPlaying ? (
                  <Pause className="w-3 h-3" />
                ) : (
                  <Play className="w-3 h-3" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="p-1 hover:bg-white/20 rounded-full"
              >
                {isMuted ? (
                  <VolumeX className="w-3 h-3" />
                ) : (
                  <Volume2 className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideo;
