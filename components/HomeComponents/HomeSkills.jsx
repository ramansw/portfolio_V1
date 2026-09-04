"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import frontend from "@/public/json/frontend.json"
import backend from "@/public/json/backend.json"
import tools from "@/public/json/tools.json"
import professional from "@/public/json/professional.json"
import Lottie from "lottie-react";
import uiux from "@/public/json/uiux.json"

const destinations = [
  {
    name: "Programming",
    desc: "I specialize in low-level and high-level programming for performance-driven applications and games: ",
    from: "--color-primary",
    to: "--color-secondary",
    json: frontend,
    skills: [
      { skillName: "Core Languages: ", skill: ["C#", "C++", "Python"] },
      { skillName: "Logic Systems: ", skill: ["Data Structures", "Algorithms", "Object Oriented Programming"] },
    ]
  },
  {
    name: "Game Engines",
    desc: "I have extensive experience building immersive experiences across industry-leading engines: ",
    from: "--color-red",
    to: "--color-navy",
    json: uiux,
    skills: [
      { skillName: "Development: ", skill: ["Unity", "Unreal Engine"] },
      { skillName: "Tools: ", skill: ["Unity Editor", "Unreal Editor", "Blueprints"] },
    ]
  },
  {
    name: "Gameplay Systems",
    desc: "I design and implement complex mechanics that define the player experience: ",
    from: "--color-primary",
    to: "--color-navy",
    json: backend,
    skills: [
      { skillName: "Mechanics: ", skill: ["FPS Mechanics", "Character Controller"] },
      { skillName: "AI & Logic: ", skill: ["State Machines", "AI Behaviors", "Pathfinding"] },
    ]
  },
  {
    name: "Multiplayer & Console Services",
    desc: "I engineer robust networking solutions and platform integration systems for real-time interactive cross-platform environments: ",
    from: "--color-red",
    to: "--color-primary",
    json: tools,
    skills: [
      { skillName: "Networking: ", skill: ["WebSocket", "PUN", "Mirror", "Epic Online Services (EOS)"] },
      { skillName: "Protocols & Systems: ", skill: ["NAT Traversal (STUN/TURN)", "Real-Time Synchronization", "Latency Compensation"] },
      { skillName: "Console Services: ", skill: ["PlayStation Network (PSN)", "Xbox Live Services", "Nintendo Switch Online"] }
    ]
  },
  {
    name: "Technical Art",
    desc: "I bridge the gap between art and code to create visually stunning and optimized games: ",
    from: "--color-secondary",
    to: "--color-navy",
    json: professional,
    skills: [
      { skillName: "Visuals: ", skill: ["Shader Integration", "VFX (Unity)", "Animation Systems"] },
      { skillName: "Optimization: ", skill: ["Performance Optimization", "LOD Systems", "Memory Management"] }
    ]
  },
];

const Card = ({ item }) => {
  return (
    <div
      className={`relative w-[85vw] md:w-[55vw] h-[74vh] rounded-2xl overflow-hidden flex-shrink-0 p-6 md:p-10`}
      style={{
        background: `linear-gradient(135deg, rgb(var(${item.from}) / 0.42), rgb(var(${item.to}) / 0.28))`,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.13)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
      }}
    >

      <div className={`${item.name === "Frontend Development" ? "h-[600px] w-[600px] -bottom-[25%] md:-bottom-[40%] -right-[60%] md:-right-[30%]" : "h-[400px] w-[400px] -bottom-[20%] -right-20"} absolute    opacity-10`}>
        <Lottie animationData={item.json} loop={true} />
      </div>

      {/* <div className="h-24 w-24 bg-[#007631]"></div> */}
      {/* Animated Gradient Blob */}
      <motion.div
        className={`absolute h-[250px] w-[250px] rounded-full blur-[80px]`}
        style={{
          background: `rgb(var(${item.from}) / 0.55)`
        }}
        animate={{
          x: ["0%", "80%", "10%", "90%", "0%"],
          y: ["0%", "70%", "90%", "20%", "0%"],
        }}
        transition={{
          duration: 8, // faster than before
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <h3 className="absolute w-full md:w-[80%] text-4xl md:text-6xl top-8 md:top-4 tracking-tighter text-white/60 font-montserrat font-semibold" dangerouslySetInnerHTML={{ __html: item.name }}></h3>

      <div className="relative top-20 md:top-28">
        <p className="font-thin text-[20px] text-white/90 hidden md:flex">{item.desc}</p>

        {/* ---------- Skills --------------- */}
        <div className="pt-10 flex flex-col  space-y-4 md:space-y-4">
          {item.skills.map((s, i) => (
            <div className="text-xl flex flex-col md:flex-row items-start  gap-0 md:gap-10" key={i}>
              <h2 className="w-full md:w-[30%] text-primary/90 font-semibold">{s.skillName}</h2>
              <div className="w-full md:w-[70%] flex items-center justify-start flex-wrap gap-2">
                {s.skill.map((d, ind) => (
                  <span key={ind} className="text-base font-thin px-[8px]  py-[0.3px] border-white/50 border-[1px] rounded-md bg-white/10 flex items-center justify-center">{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HorizontalScrollSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.2, 0.85], ["45%", "-40%"]);

  return (
    <div className=" text-white pt-16">
      <section ref={targetRef} className=" h-[520vh] md:h-[400vh]">
        <div
          className="sticky top-16 md:top-6 flex-col h-screen flex items-center overflow-hidden"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            perspective: 1000
          }}
        >
          {/* <div className=" px-4 text-center mb-12 md:mb-5">
            <h2 className="text-5xl md:text-5xl font-bold mb-2">Destinations</h2>
            <p className="text-xl text-gray-400">That Tell a Story</p>
          </div> */}

          <motion.div className='relative h-24 flex justify-center items-end mb-10 overflow-y-visible'
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='absolute font-montserrat font-black tracking-tighter text-white/15 text-7xl md:text-8xl'>Skills</h2>
            <h1 className='text-4xl md:text-5xl font-bold text-primary font-league'>My Skills</h1>
          </motion.div>
          <motion.div
            style={{ x }}
            className="flex gap-8 pl-24"
          >
            {destinations.map((dest, index) => (
              <Card item={dest} key={index} />
            ))}
            {/* SPACE FIX: Add an empty div for spacing at the end */}
            <div className="w-[20vw] flex-shrink-0" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScrollSection;