"use client";

import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";

const projects = [
  {
    title: "EpicEscapes - Travel and Tourism Guide",
    description:
      "EpicEscapes is a platform to enhance your travel experiences with detailed destination information, tour guides, and a booking system.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    githubLink: "https://github.com/username/epicescapes",
    liveLink: "https://b9-a12-auth.web.app/",
  },
  {
    title: "AlternativeZone",
    description:
      "AlternativeZone helps users discover the best alternatives to products, focusing on eco-friendly and sustainable options.",
    technologies: ["React.js", "Tailwind CSS", "Firebase", "Node.js"],
    githubLink: "https://github.com/username/alternativezone",
    liveLink: "https://b9-a11-8d2de.web.app/",
  },
  {
    title: "Roamify",
    description:
      "Roamify showcases Southeast Asia's tourist spots and culture, with user-generated content, Firebase authentication, and a responsive design.",
    technologies: ["React.js", "Tailwind CSS", "Firebase", "React Tooltip"],
    githubLink: "https://github.com/username/roamify",
    liveLink: "https://roamify-282b4.web.app/",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden dark:bg-grid-white/[0.05]">
      <InfiniteMovingCards projects={projects} direction="right" speed="slow" />
    </div>
  );
}