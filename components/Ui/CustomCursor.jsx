"use client";

import { useState, useEffect, useRef } from "react";
import { BsController } from "react-icons/bs";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hovering, setHovering] = useState(false);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: -200, y: -200 });
  const currentRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e) => {
      const el = e.target.closest(
        "a, button, [role='button'], input, select, textarea, label, [tabindex]:not([tabindex='-1'])"
      );
      setHovering(!!el);
    };

    // Use a high lerp value (0.35) so cursor feels snappy, not laggy
    const animate = () => {
      const lerp = 0.35;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;
      setPos({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        willChange: "left, top",
        transition: "none",
      }}
    >
      {/* Dot for precise click targeting */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: hovering ? "#fcbf49" : "#ffffff",
          boxShadow: hovering ? "0 0 6px #fcbf49" : "none",
          transition: "background 0.15s, box-shadow 0.15s",
          zIndex: 1,
        }}
      />
      <BsController
        size={hovering ? 34 : 28}
        style={{
          color: hovering ? "#f77f00" : "rgba(255,255,255,0.85)",
          filter: hovering
            ? "drop-shadow(0 0 10px #f77f00)"
            : "drop-shadow(0 0 3px rgba(255,255,255,0.2))",
          transition: "color 0.15s, filter 0.15s",
          transform: hovering ? "rotate(-10deg)" : "rotate(0deg)",
          display: "block",
        }}
      />
    </div>
  );
};

export default CustomCursor;
