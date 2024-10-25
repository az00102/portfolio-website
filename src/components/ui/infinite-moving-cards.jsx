"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  projects,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast"
          ? "20s"
          : speed === "normal"
            ? "40s"
            : "80s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {projects.map((project, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-lg"
            key={project.title}
          >
            <blockquote>
              {/* Project Title */}
              <h3 className="relative z-20 text-xl font-bold text-white">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="relative z-20 text-sm leading-relaxed text-gray-400 font-light mt-2 block">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-4">
                <h4 className="text-gray-300 font-medium text-sm">Technologies:</h4>
                <ul className="flex space-x-2 mt-2 flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-indigo-500 text-white px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="relative z-20 mt-4 flex space-x-4">
                {/* Live Demo Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white text-sm py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Live Demo
                </a>
                {/* GitHub Button */}
                <a
                  href={project.githubCLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white text-sm py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
                >
                  GitHub Client
                </a>

                <a
                  href={project.githubSLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white text-sm py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
                >
                  GitHub Server
                </a>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};