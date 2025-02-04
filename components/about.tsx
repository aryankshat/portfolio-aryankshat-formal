"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a final-year engineering student with a passion for building apps and websites. I develop apps using Flutter and websites with Next.js and React.This is the tech stack I've used, tried and tested, but I'm not limited to it—I can learn and develop in any stack super fast. I'm comfortable working with both SQL and NoSQL databases. From an idea to a fully functional product, I enjoy building things from the ground up.
      </p>

      <p>
      When I’m not in front of my screen, I’m lost in the thrill of a badminton match, a table tennis duel, or a long ride on my bicycle.

      </p>
    </motion.section>
  );
}
