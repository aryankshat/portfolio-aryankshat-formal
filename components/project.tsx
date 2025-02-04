"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  videoUrl,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|v\/|embed\/))([^&?\s]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1` : url;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-5xl mx-auto mb-16 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container */}
      <div
        className={`
          relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 
          p-8 md:p-10 rounded-3xl
          shadow-2xl transition-all duration-500 ease-out
          min-h-[550px] md:min-h-[750px] lg:min-h-[750px] max-h-[800px] 
          hover:scale-[1.02] hover:shadow-red-900/50
          bg-gradient-to-br from-red-950 via-red-900 to-orange-700
          border border-red-800/50
        `}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] rounded-3xl opacity-30" />

        {/* Title Container - Now with better spacing and wrapping */}
        <div className="absolute top-0 left-0 right-0 p-6 md:p-8">
          <h3
            className={`
              text-4xl md:text-5xl font-black
              text-center tracking-tight transition-all duration-300 uppercase
              text-red-100 font-sans whitespace-normal md:whitespace-nowrap
              ${isHovered ? 'text-white' : ''}
            `}
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.05em'
            }}
          >
            {title}
          </h3>
        </div>

        {/* Video Section - Adjusted top margin to prevent overlap */}
        <div
          className={`
            relative w-full max-w-[320px] md:max-w-[360px] lg:max-w-[380px] aspect-[9/16] 
            rounded-2xl overflow-hidden shadow-xl transition-all duration-300
            hover:scale-[1.03] mt-20 md:mt-24
            ${isHovered ? 'shadow-orange-900/50' : 'shadow-black/40'}
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 to-orange-800/10 z-10 pointer-events-none" />
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src={getEmbedUrl(videoUrl)}
            title="Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div
          className="
            flex-1 max-w-full md:max-w-[35%] text-center md:text-left 
            self-center md:self-auto md:ml-4 lg:ml-6
          "
        >
          <p
            className={`
              text-red-100 text-lg sm:text-xl leading-relaxed mb-6 
              transition-all duration-500 pl-4 md:pl-6
              font-sans font-medium tracking-wide
              border-l-4 border-orange-400
              ${isHovered ? 'text-white' : ''}
            `}
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            {description}
          </p>
          
        
        </div>
      </div>
    </motion.div>
  );
}