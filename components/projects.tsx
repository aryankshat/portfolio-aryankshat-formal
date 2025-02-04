"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function Projects() {
  const { ref: sectionRef } = useSectionInView("Projects", 0.5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return projectsData.length - 1;
      if (nextIndex >= projectsData.length) return 0;
      return nextIndex;
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-28 mb-28 relative">
      <SectionHeading>My Projects</SectionHeading>

      {/* 📌 Large Screens: Show Slider + Arrows */}
      <div className="hidden lg:block relative w-full max-w-8xl mx-auto">
        <div className="relative flex justify-center items-center h-[850px]">
          
          {/* Left Arrow (Visible only on lg and larger) */}
          <button
            className="absolute -left-16 z-10 w-12 h-12 flex items-center justify-center rounded-full 
                       bg-white/90 text-gray-800 shadow-lg hover:bg-gray-200 transition-all hidden lg:flex"
            onClick={() => paginate(-1)}
            aria-label="Previous project"
          >
            <ArrowLeft />
          </button>

          <div className="w-full overflow-hidden h-full">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full h-full flex justify-center items-center"
              >
                <Project {...projectsData[currentIndex]} key={currentIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow (Visible only on lg and larger) */}
          <button
            className="absolute -right-16 z-10 w-12 h-12 flex items-center justify-center rounded-full 
                       bg-white/90 text-gray-800 shadow-lg hover:bg-gray-200 transition-all hidden lg:flex"
            onClick={() => paginate(1)}
            aria-label="Next project"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* 📌 Small & Medium Screens: Show All Projects Stacked */}
      <div className="lg:hidden grid grid-cols-1 gap-12 px-4">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
