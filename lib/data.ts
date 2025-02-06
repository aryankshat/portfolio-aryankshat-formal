import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Wat is Dis",
    description:
      "A fun-packed app for kids to learn through cool puzzles, awesome games, and a colorful picture dictionary—because learning should feel like playtime!",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    videoUrl: "https://www.youtube.com/embed/70vzI2c6ugY",
  },
  {
    title: "Pripay",
    description: 
      "An app that motivates buyers to hit their goals with exciting rewards when they’re close, helping sellers boost sales and earnings. Buyers enjoy rewards they might’ve missed, creating a win-win for both!",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    videoUrl:  "https://www.youtube.com/embed/BytZhTdKEy0",
  },
  {
    title: "Starlight",
    description:
      "Unlock a world of entertainment with our app, offering seamless streaming of movies and shows, plus smart parental controls, device management, and personalized features for an engaging and family-friendly experience.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    videoUrl:  "https://www.youtube.com/embed/J5XMS2sERyg",
  },
] as const;

export const skillsData = [
  "Flutter",
  "dart",
  "C++",
  "Firebase",
  "Android Studio",
  "MongoDB",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
