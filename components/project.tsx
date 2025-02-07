"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  videoUrl,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "0.8 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|v\/|embed\/))([^&?\s]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&showinfo=0` : url;
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="relative w-full max-w-5xl mx-auto mb-16 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container */}
      <div
        className={`
          relative w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-center
          gap-y-6 md:gap-x-8 p-0 md:p-10 rounded-3xl
          shadow-2xl transition-all duration-500 ease-out
          min-h-[850px] md:min-h-[750px] lg:min-h-[750px] max-h-[800px] 
          hover:scale-[1.02] hover:shadow-red-900/50
          bg-gradient-to-br from-red-950 via-red-900 to-orange-700
          border border-red-800/50
        `}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129, 84, 84, 0.03)_1px,transparent_1px)] bg-[length:20px_20px] rounded-3xl opacity-30" />

        {/* Title Container - Fixed Center Alignment */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full text-center">
          <h3
            className={`
              text-4xl md:text-5xl font-black tracking-tight transition-all duration-300 uppercase
              text-red-100 font-sans ${isHovered ? 'text-white' : ''}
            `}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', letterSpacing: '0.05em' }}
          >
            {title}
          </h3>
        </div>

        {/* Video Section */}
        <div
          className={`
            relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[320px] aspect-[1/2]
            rounded-2xl overflow-hidden shadow-xl transition-all duration-300
            hover:scale-[1.03] mt-20 md:mt-24
            ${isHovered ? 'shadow-orange-900/50' : 'shadow-black/40'}
          `}
        >
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
        <div className="flex-1 max-w-full md:max-w-[35%] text-center md:text-left self-center">
        <p
  className={`
    text-red-100 text-lg sm:text-xl leading-relaxed mb-6
    transition-all duration-500 pl-6 md:pl-6 
    font-sans font-medium tracking-wide
    border-l-8 border-orange-400
    ${isHovered ? 'text-white' : ''}
  `}
  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
>
  {description}
</p>

        </div>
      </div>
    </motion.div>
  );
}
