"use client";


import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Infowiz from "@/public/experiences/Infowiz.jpg"
import blownfuse from "@/public/experiences/blownfuse.jpg"
import CodeVLogo from "@/public/experiences/CodeV.png"
import { FaBusinessTime } from "react-icons/fa";
import { SiSitepoint } from "react-icons/si";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';



const HomeExperience = () => {

    const CodeV = {
        keyResponsibilities: [
            "Working as Multiplayer Game Developer.",
            "Optimizing data flow in between server and clients",
        ],
        skillsUsed: [
            "C#", "Unity", "NotCode", "Multiplayer", ".Net", "PUN", "Real Time Synchronization"
        ]
    }


    const blownfuseData = {
        keyResponsibilities: [
            "Working as a core Unity Developer, handling complete game development pipelines from prototyping to production.",
            "Serving as Game Programmer and Unity Technical Artist, responsible for gameplay systems, UI logic, VFX integration, animations, and performance optimization.",
        ],
        skillsUsed: [
            "C#", "Unity", "Shader Lab", "VFX Graph", "ProBuilder", "Animation Rigging", "Performance Optimization", "Git", "Unet/PUN", "Real-time Synchronization"
        ]
    }

    const infowizData = {
        keyResponsibilities: [
            "Implemented speech recognition for hands-free user interaction.",
            "Designed and built an intuitive UI using Python libraries (Tkinter/PyQt/Kivy).",
        ],
        skillsUsed: [
            "Python", "Tkinter", "PyQt", "Kivy", "Speech Recognition", "UI/UX Design"
        ]
    }


    return (
        <div className='relative h-auto  w-full max-w-[1600px] mx-auto overflow-x-hidden scrollbar-hide py-16 pb-16'>
            <div className='relative mx-auto h-auto w-full max-w-[1400px] px-3 md:px-8 flex flex-col items-center scrollbar-hide'>

                {/* ---------------------------- Heading ------------------------- */}
                <motion.div className='relative h-28 flex justify-center items-end'
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className='absolute font-montserrat font-black tracking-tighter text-white/15 text-6xl md:text-8xl'>Experiences</h2>
                    <h1 className='text-4xl md:text-5xl font-bold text-primary font-league'>My Experiences</h1>
                </motion.div>


                {/*  ---------------------------- COntent section -------------------------  */}
                <div className='w-full h-auto flex flex-col lg:flex-row lg:items-stretch justify-center items-center gap-5 pt-16'>

                    {/* ------------ Blownfuse -------------- */}
                    <div className='w-full lg:w-[32%] h-auto p-4 py-8 md:py-8 md:p-8 bg-gradient-to-tl from-primary/10 to-white/5 rounded-2xl'>
                        {/* name and logo */}
                        <div className='relative w-full flex gap-5 items-start justify-start'>
                            <div className='relative w-20 h-20'>
                                <Image fill alt='logo' src={blownfuse} />
                            </div>
                            <div>
                                <h2 className='font-montserrat font-bold text-xl md:text-2xl'>Blownfuse Softlabs</h2>
                                <h3 className='text-primary/70 text-base md:text-lg'>Unity Developer | Technical Artist</h3>
                                <div className='flex gap-3 items-center text-white/50'>
                                    <FaBusinessTime className='text-2xl ' />
                                    <span>June 2025 - Feb 2026</span>
                                </div>
                            </div>

                        </div>

                        {/* content/information */}
                        <div className='w-full flex flex-col justify-start items-start'>
                            {/* <p className='text-white/80 font-thin'>In my current role, I am responsible for developing and maintaining full-stack applications, from sophisticated web platforms to complex game backends, utilizing modern cloud architecture.</p> */}

                            {/* responsibilities */}
                            <div className='w-full font-league pt-5'>
                                <h5 className='text-lg font-semibold text-primary/70 '>Key Responsibilities:</h5>
                                <div className='w-full flex flex-col justify-start items-start space-y-3 pt-2'>
                                    {blownfuseData.keyResponsibilities.map((res, i) => (
                                        <div key={i} className='flex items-start justify-normal gap-2 text-white/60 font-thin'>
                                            <SiSitepoint className='text-primary/60 text-base flex-shrink-0' />
                                            <p className=''>{res}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Used Skills */}
                            <div className='w-full font-league pt-3'>
                                <h5 className='text-lg font-semibold text-primary/70'>Skills/Technologies Used: </h5>
                                <div className="w-full flex flex-wrap justify-start items-center">
                                    {blownfuseData.skillsUsed.map((skill, i) => (
                                        <span key={skill + i} className="font-thin text-white/70">
                                            {skill}{i === blownfuseData.skillsUsed.length - 1 ? "." : ",\u00A0"}
                                        </span>
                                    ))}
                                </div>



                            </div>
                        </div>
                    </div>

                    {/* ------------ CodeV -------------- */}
                    <div className='w-full lg:w-[32%] h-auto p-4 py-8 md:py-8 md:p-8 bg-gradient-to-tl from-primary/10 to-white/5 rounded-2xl'>
                        {/* name and logo */}
                        <div className='relative w-full flex gap-5 items-start justify-start'>
                            <div className='relative w-20 h-20'>
                                <Image fill alt='logo' src={CodeVLogo} />
                            </div>
                            <div>
                                <h2 className='font-montserrat font-bold text-xl md:text-2xl'>CodeV</h2>
                                <h3 className='text-primary/70 text-base md:text-lg'>Multiplayer Game Developer</h3>
                                <div className='flex gap-3 items-center text-white/50'>
                                    <FaBusinessTime className='text-2xl ' />
                                    <span>Feb 2026 - Present</span>
                                </div>
                            </div>

                        </div>

                        {/* content/information */}
                        <div className='w-full flex flex-col justify-start items-start'>

                            {/* responsibilities */}
                            <div className='w-full font-league pt-5'>
                                <h5 className='text-lg font-semibold text-primary/70 '>Key Responsibilities:</h5>
                                <div className='w-full flex flex-col justify-start items-start space-y-3 pt-2'>
                                    {CodeV.keyResponsibilities.map((res, i) => (
                                        <div key={i} className='flex items-start justify-normal gap-2 text-white/60 font-thin'>
                                            <SiSitepoint className='text-primary/60 text-base flex-shrink-0' />
                                            <p className=''>{res}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Used Skills */}
                            <div className='w-full font-league pt-3'>
                                <h5 className='text-lg font-semibold text-primary/70'>Skills/Technologies Used: </h5>
                                <div className="w-full flex flex-wrap justify-start items-center">
                                    {CodeV.skillsUsed.map((skill, i) => (
                                        <span key={skill + i} className="font-thin text-white/70">
                                            {skill}{i === CodeV.skillsUsed.length - 1 ? "." : ",\u00A0"}
                                        </span>
                                    ))}
                                </div>



                            </div>
                        </div>
                    </div>

                    {/* ------------------ Infowiz ---------------- */}
                    <div className='w-full lg:w-[32%] h-auto p-4 py-8 md:py-8 md:p-8 bg-gradient-to-tl from-primary/10 to-white/5 rounded-2xl'>

                        {/* Logo and name */}
                        <div className='relative w-full flex gap-5 items-start justify-start'>
                            <div className='relative w-20 h-20'>
                                <Image fill alt='logo' src={Infowiz} />
                            </div>
                            <div>
                                <h2 className='font-montserrat font-bold text-xl md:text-2xl'>Infowiz Software Solutions</h2>
                                <h3 className='text-primary/70 text-base md:text-lg'>Python Developer Intern</h3>
                                <div className='flex gap-3 items-center text-white/50'>
                                    <FaBusinessTime className='text-2xl ' />
                                    <span>July 2021 - Aug 2021</span>
                                </div>
                            </div>

                        </div>

                        {/* content/information */}
                        <div className='w-full flex flex-col justify-start items-start'>
                            {/* <p className='text-white/80 font-thin'>During my time at Benda Infotech, I was a key member of the team that developed a sophisticated skill-testing and hiring platform for the U.S. market. This role allowed me to enhance my technical abilities and leadership skills.</p> */}

                            {/* responsibilities */}
                            <div className='w-full font-league pt-5'>
                                <h5 className='text-lg font-semibold text-primary/70'>Key Responsibilities:</h5>
                                <div className='w-full flex flex-col justify-start items-start space-y-3 pt-2'>
                                    {infowizData.keyResponsibilities.map((res, i) => (
                                        <div key={i} className='flex items-start justify-normal gap-2 text-white/60 font-thin'>
                                            <SiSitepoint className='text-primary/60 text-base flex-shrink-0' />
                                            <p className=''>{res}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Used Skills */}
                            <div className='w-full font-league pt-5'>
                                <h5 className='text-lg font-semibold text-primary/70'>Skills/Technologies Used:</h5>
                                <div className="w-full flex flex-wrap justify-start items-center">
                                    {infowizData.skillsUsed.map((skill, i) => (
                                        <span key={skill + i} className="font-thin text-white/70">
                                            {skill}{i === infowizData.skillsUsed.length - 1 ? "." : ",\u00A0"}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.a
                    href="https://www.linkedin.com/in/ramandeep-singh-0789232a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-lg pl-4 pr-1 py-1 border-[2px] border-white rounded-full mt-10 
                             transition-all duration-300 ease-in-out hover:bg-green-600 hover:cursor-pointer"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
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




            </div>
        </div>
    )
}

export default HomeExperience
