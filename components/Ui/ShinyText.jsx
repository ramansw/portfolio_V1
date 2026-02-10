"use client";
import React from "react";

const ShinyText = ({
  children,
  disabled = false,
  speed = 6,
  color = "#adadad",
  highlight = "#ffffff",
  direction = "left", // "right" or "left"
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  // pick direction
  const animationName = direction === "left" ? "shine-left" : "shine-right";

  return (
    <>
      {/* Define animations globally (always loaded) */}
      <style jsx global>{`
        @keyframes shine-right {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes shine-left {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: 0% 0;
          }
        }
      `}</style>

      <span
        className={`inline-block bg-clip-text text-transparent ${className}`}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              120deg,
              ${color},
              ${color} 30%,
              ${highlight} 50%,
              ${color} 60%,
              ${color} 100%
            )
          `,
          backgroundSize: "200% 100%",
          animation: disabled
            ? "none"
            : `${animationName} ${animationDuration} linear infinite`,
        }}
      >
        {children}
      </span>
    </>
  );
};

export default ShinyText;
