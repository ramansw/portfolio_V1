"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import polygon1 from "@/public/hero/polygon1.png"
import shapes1 from "@/public/hero/shapes1.png"
import React from 'react'
import ShinyText from '../Ui/ShinyText'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { SiUnity, SiUnrealengine } from "react-icons/si";
import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb";
import { GiGamepad, GiJoystick } from "react-icons/gi";



const HomeHero = () => {

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

                <div className="absolute inset-0 h-auto w-auto -top-[10%] md:-top-[25%] -left-[6%]">
                    <Image
                        alt="POLYGON1"
                        src={polygon1}
                        className="w-[140%] md:w-[65%] h-auto object-cover"
                        priority
                    />
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
             transition-all duration-300 ease-in-out hover:bg-green-600 hover:cursor-pointer"
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
                    <motion.div
                        className="relative w-[120%] md:w-[100%] flex flex-col items-center justify-center p-12 bg-gradient-to-br from-primary/5 to-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm shadow-2xl"
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
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                y: [0, -10, 10, 0]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10"
                        >
                            <SiUnity className="text-[180px] md:text-[250px] text-primary/80 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]" />
                        </motion.div>

                        {/* Decorative Rings */}
                        <motion.div
                            className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] border border-primary/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute w-[350px] md:w-[450px] h-[350px] md:h-[450px] border border-white/5 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        />

                        <p className="mt-8 font-montserrat font-bold text-white/40 tracking-[0.2em] uppercase text-xs md:text-sm text-center">Tech stack: Unreal C++ | Unity C# | Multiplayer & Console</p>
                    </motion.div>
                    {/* dgdchsdu */}

                    {/* ---- code --------- */}
                    <motion.div
                        className="floating-icon absolute w-14 md:w-16 h-14 md:h-16 right-[6%] md:right-[10%] bottom-[15%] md:bottom-[16%] rounded-full flex justify-center items-center border-[2px] border-[#00a973] bg-gradient-to-br from-[#00c586]/80 to-[#00593d]/50"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <TbBrandCSharp className="relative w-[60%] h-[60%]" />
                    </motion.div>

                    {/* ---- AWS --------- */}
                    <motion.div
                        className="floating-icon absolute w-[54px] md:w-[70px] h-[54px] md:h-[70px] right-[10%] md:right-[14%] top-[42%] md:top-[46%] rounded-full flex justify-center items-center border-[2px] border-[#dc7200] bg-gradient-to-bl from-[#bb6100] to-[#001b59]"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <SiUnrealengine className="relative w-[60%] h-[60%]" />
                    </motion.div>

                    {/* ---- Database --------- */}
                    <motion.div
                        className="floating-icon absolute w-12 md:w-16 h-12 md:h-16 right-[19%] md:right-[18%] top-[22%] md:top-[20%] rounded-full flex justify-center items-center border-[2px] border-[#0035b1] bg-gradient-to-bl from-[#0030a1] to-[#001b59]"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <GiGamepad className="relative w-[60%] h-[60%]" />
                    </motion.div>

                    {/* ---- C++ --------- */}
                    <motion.div
                        className="floating-icon absolute w-12 md:w-16 h-12 md:h-16 left-[10%] md:left-[10%] bottom-[5%] md:bottom-[5%] rounded-full flex justify-center items-center border-[2px] border-[#00599c] bg-gradient-to-br from-[#00447c] to-[#00284c]"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <TbBrandCpp className="relative w-[60%] h-[60%] text-white" />
                    </motion.div>

                    {/* ---- React --------- */}
                    <motion.div
                        className="floating-icon absolute w-12 md:w-[60px] h-12 md:h-[60px] left-[15%] md:left-[15%] top-[45%] md:top-[50%] rounded-full flex justify-center items-center border-[2px] border-[#02b5d5] bg-gradient-to-bl from-[#008ca5] to-[#003a45]"
                        style={{ opacity: 0, transform: 'scale(0.5)' }}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <SiUnity className="relative w-[60%] h-[60%]" />
                    </motion.div>
                </div>


            </div>
        </>
    )
}

export default HomeHero
