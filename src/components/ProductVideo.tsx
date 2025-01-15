"use client";

import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { ProductVideo as ProductVideoType } from "../types/product";

interface ProductVideoProps {
  video: ProductVideoType;
}

export const ProductVideo = ({ video }: ProductVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const videoElement = document.getElementById(
      "product-video"
    ) as HTMLVideoElement;
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
      <video
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

      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
          {isPlaying ? (
            <Pause className="w-8 h-8 text-gray-900" />
          ) : (
            <Play className="w-8 h-8 text-gray-900 ml-1" />
          )}
        </div>
      </button>

      {/* {(video.title || video.description) && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          {video.title && (
            <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
          )}
          {video.description && (
            <p className="text-sm text-gray-200">{video.description}</p>
          )}
        </div>
      )} */}
    </div>
  );
};
