"use client"

import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import shapes1 from "@/public/hero/shapes1.png"
import React, { useState, useEffect, useRef } from 'react'
import ShinyText from '../Ui/ShinyText'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { SiUnity, SiUnrealengine } from "react-icons/si";
import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb";
import { GiGamepad, GiJoystick } from "react-icons/gi";



const centerIcons = [
    { Icon: SiUnity,        color: "#f77f00", label: "Unity" },
    { Icon: SiUnrealengine, color: "#eae2b7", label: "Unreal" },
    { Icon: TbBrandCSharp,  color: "#fcbf49", label: "C#" },
    { Icon: TbBrandCpp,     color: "#d62828", label: "C++" },
    { Icon: GiGamepad,      color: "#f77f00", label: "Gameplay" },
    { Icon: GiJoystick,     color: "#d62828", label: "Systems" },
];

const HomeHero = () => {
    const [iconIndex, setIconIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIconIndex(prev => (prev + 1) % centerIcons.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const current = centerIcons[iconIndex];

    // ── Cursor-reactive card tilt ──
    const cardRef = useRef(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });

    const springCfg = { stiffness: 180, damping: 22 };
    const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), springCfg);
    const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), springCfg);

    const onCardMove = (e) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        rawX.set((e.clientX - rect.left) / rect.width - 0.5);
        rawY.set((e.clientY - rect.top) / rect.height - 0.5);
        setSpotlight({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
            visible: true,
        });
    };

    const onCardLeave = () => {
        rawX.set(0);
        rawY.set(0);
        setSpotlight((p) => ({ ...p, visible: false }));
    };

    // Parent container (stagger effect)
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // delay between children
            },
        },
    };

    // Children fade-up variant
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <>
            <style jsx>{`
                .floating-icon {
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }
            `}</style>
            <div className=' w-full max-w-[1600px] h-screen max-h-[1000px] mx-auto px-[5vw]  flex flex-col-reverse md:flex-row justify-between items-center overflow-x-hidden overflow-y-hidden'>

                {/* Theme-reactive background glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div style={{
                        position: "absolute",
                        top: "-20%",
                        left: "-10%",
                        width: "70%",
                        height: "80%",
                        background: "radial-gradient(ellipse at top left, rgb(var(--color-navy) / 0.55) 0%, rgb(var(--color-red) / 0.18) 40%, transparent 70%)",
                        borderRadius: "50%",
                        filter: "blur(40px)",
                    }} />
                    <div style={{
                        position: "absolute",
                        top: "30%",
                        left: "5%",
                        width: "40%",
                        height: "50%",
                        background: "radial-gradient(ellipse, rgb(var(--color-primary) / 0.1) 0%, transparent 70%)",
                        borderRadius: "50%",
                        filter: "blur(60px)",
                    }} />
                </div>


                {/* -------------------------------- Text Section ------------------------- */}
                <motion.div
                    className="relative w-full md:w-[50%] h-full flex flex-col items-center md:items-start justify-center"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h3 className="text-[1.7rem] md:text-[2rem] font-bold" variants={fadeUpVariant}>
                        Hello,
                    </motion.h3>

                    <motion.h1
                        className="text-[2.6rem] md:text-[4rem] font-semibold -mt-4"
                        variants={fadeUpVariant}
                    >
                        I'm <span className="text-primary font-extrabold">Ramandeep Singh</span>
                    </motion.h1>

                    <motion.h2
                        className="font-bold text-[1.6rem] md:text-[2.8rem] -mt-2 md:-mt-5 text-[#d0d0d0]"
                        variants={fadeUpVariant}
                    >
                        <ShinyText color="#757575" speed={4}>
                            Game Developer
                        </ShinyText>
                    </motion.h2>

                    <motion.p
                        className="pt-5 font-thin text-[#d0d0d0] text-center md:text-start"
                        variants={fadeUpVariant}
                    >
                        I am a Game Programmer specializing in designing and building multiplayer game architecture, interactive gameplay systems, and console ports using Unreal Engine, Unity, C++, and C#.
                        I focus on implementing scalable network architecture, console optimization, and developing robust features ranging from multiplayer replication to custom gameplay physics, delivering premium player experiences.
                    </motion.p>

                    <motion.a
                        href="https://www.linkedin.com/in/ramandeep-singh-0789232a8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 text-lg pl-4 pr-1 py-1 border-[2px] border-white rounded-full mt-10 
             transition-all duration-300 ease-in-out hover:bg-primary hover:cursor-pointer"
                        variants={fadeUpVariant}
                        whileHover="hover"
                    >
                        <span className="pr-3 text-white group-hover:text-white">Linkedin</span>

                        {/* Icon controlled by parent hover */}
                        <motion.div
                            variants={{
                                hover: { rotate: 360 },
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <BsFillArrowRightCircleFill
                                className="text-primary group-hover:text-white transition-colors duration-300 ease-in-out"
                                size={30}
                            />
                        </motion.div>
                    </motion.a>



                </motion.div>

                {/* -------------------------------- Image Section ------------------------- */}
                <div className="relative w-full md:w-[50%] h-full flex justify-center items-center mt-12 md:mt-0">
                    <div className="absolute w-[100%] md:w-[150%] top-[20%]">
                        <Image alt="shapes" src={shapes1} />
                    </div>

                    {/* My Photo (appears first) */}
                    <div style={{ perspective: "1200px" }} className="w-[120%] md:w-[100%]">
                    <motion.div
                        ref={cardRef}
                        onMouseMove={onCardMove}
                        onMouseLeave={onCardLeave}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-navy/60 to-base rounded-[40px] border border-white/10 backdrop-blur-md shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        onAnimationComplete={() => {
                            // Trigger icon animations after photo animation completes
                            setTimeout(() => {
                                document.querySelectorAll('.floating-icon').forEach((icon, index) => {
                                    setTimeout(() => {
                                        icon.style.opacity = '1';
                                        icon.style.transform = 'scale(1)';
                                    }, index * 200); // 200ms delay between each icon
                                });
                            }, 300); // 300ms delay after photo animation
                        }}
                    >
                        {/* Cycling center icon */}
                        <div className="relative z-10 w-[180px] h-[180px] md:w-[250px] md:h-[250px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={iconIndex}
                                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -10, 10, 0] }}
                                    exit={{ opacity: 0, scale: 0.4, rotate: 20 }}
                                    transition={{
                                        opacity: { duration: 0.4 },
                                        scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                                        rotate: { duration: 0.4 },
                                        y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                                    }}
                                    className="absolute flex flex-col items-center gap-3"
                                >
                                    <current.Icon
                                        style={{ color: current.color, filter: `drop-shadow(0 0 30px ${current.color}55)` }}
                                        className="text-[140px] md:text-[200px]"
                                    />
                                    <motion.span
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        className="text-xs font-montserrat tracking-[0.25em] uppercase font-semibold"
                                        style={{ color: current.color + "99" }}
                                    >
                                        {current.label}
                                    </motion.span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Decorative Rings — color follows active icon */}
                        <motion.div
                            className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full"
                            style={{ border: `1px solid ${current.color}33` }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute w-[350px] md:w-[460px] h-[350px] md:h-[460px] rounded-full"
                            style={{ border: `1px solid ${current.color}15` }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute w-[260px] md:w-[340px] h-[260px] md:h-[340px] rounded-full"
                            style={{ border: `1px dashed ${current.color}20` }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />

                        <p className="mt-8 font-montserrat font-bold text-white/40 tracking-[0.2em] uppercase text-xs md:text-sm text-center">Tech stack: Unreal C++ | Unity C# | Multiplayer & Console</p>

                        {/* Cursor spotlight overlay */}
                        <div
                            className="absolute inset-0 rounded-[40px] pointer-events-none"
                            style={{
                                opacity: spotlight.visible ? 1 : 0,
                                transition: "opacity 0.3s ease",
                                background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgb(var(--color-primary) / 0.18) 0%, transparent 55%)`,
                            }}
                        />
                    </motion.div>
                    </div>{/* /perspective wrapper */}
                    {/* dgdchsdu */}

                    {/* ---- C# --------- */}
                    <motion.div
                        className="floating-icon absolute w-14 md:w-16 h-14 md:h-16 right-[6%] md:right-[10%] bottom-[15%] md:bottom-[16%] rounded-full flex justify-center items-center border-[2px] border-[#f77f00] bg-gradient-to-br from-[#f77f00]/80 to-[#780000]/50"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -14, 6, 0], x: [0, 5, -3, 0], rotate: [0, 4, -4, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                    >
                        <TbBrandCSharp className="relative w-[60%] h-[60%] text-[#fcbf49]" />
                    </motion.div>

                    {/* ---- Unreal --------- */}
                    <motion.div
                        className="floating-icon absolute w-[54px] md:w-[70px] h-[54px] md:h-[70px] right-[10%] md:right-[14%] top-[42%] md:top-[46%] rounded-full flex justify-center items-center border-[2px] border-[#d62828] bg-gradient-to-bl from-[#d62828] to-[#780000]"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -18, 8, 0], x: [0, -6, 4, 0], rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <SiUnrealengine className="relative w-[60%] h-[60%]" />
                    </motion.div>

                    {/* ---- Gamepad --------- */}
                    <motion.div
                        className="floating-icon absolute w-12 md:w-16 h-12 md:h-16 right-[19%] md:right-[18%] top-[22%] md:top-[20%] rounded-full flex justify-center items-center border-[2px] border-[#f77f00] bg-gradient-to-bl from-[#f77f00] to-[#780000]"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -12, 5, 0], x: [0, 8, -4, 0], rotate: [0, 6, -3, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <GiGamepad className="relative w-[60%] h-[60%] text-[#f77f00]" />
                    </motion.div>

                    {/* ---- C++ --------- */}
                    <motion.div
                        className="floating-icon absolute w-12 md:w-16 h-12 md:h-16 left-[10%] md:left-[10%] bottom-[5%] md:bottom-[5%] rounded-full flex justify-center items-center border-[2px] border-[#d62828] bg-gradient-to-br from-[#780000] to-[#3d0000]"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -10, 4, 0], x: [0, -5, 3, 0], rotate: [0, -4, 4, 0] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    >
                        <TbBrandCpp className="relative w-[60%] h-[60%] text-white" />
                    </motion.div>

                    {/* ---- Joystick --------- */}
                    <motion.div
                        className="floating-icon absolute w-12 md:w-[60px] h-12 md:h-[60px] left-[15%] md:left-[15%] top-[45%] md:top-[50%] rounded-full flex justify-center items-center border-[2px] border-[#d62828] bg-gradient-to-bl from-[#d62828] to-[#780000]"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -16, 6, 0], x: [0, 6, -5, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <GiJoystick className="relative w-[60%] h-[60%] text-[#d62828]" />
                    </motion.div>
                </div>


            </div>
        </>
    )
}

export default HomeHero
