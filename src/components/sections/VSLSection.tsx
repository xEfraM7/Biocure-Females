"use client";

import { siteContent } from "@/content/site-content";
import { useState } from "react";
import { Play } from "lucide-react";

const VSLSection = () => {
  const { vsl } = siteContent;
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube Video ID
  const videoId = "AfjQs2lnQy0";

  // YouTube thumbnail URL (hqdefault for optimal size/quality balance on mobile)
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="vsl" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* YouTube Facade / Embed */}
          <div className="relative aspect-video bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
            {!isPlaying ? (
              // Facade: Thumbnail + Play Button (no iframe = no 900KB JS)
              <button
                onClick={handlePlay}
                className="absolute inset-0 w-full h-full cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
                aria-label="Reproducir video"
              >
                {/* Thumbnail */}
                <img
                  src={thumbnailUrl}
                  alt={vsl.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-current ml-1" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  {vsl.duration}
                </div>
              </button>
            ) : (
              // Real YouTube iframe (only loads after click)
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={vsl.caption}
              />
            )}
          </div>

          {/* Caption */}
          <p className="text-center text-muted-foreground mt-4 text-sm lg:text-base">
            {vsl.caption}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
