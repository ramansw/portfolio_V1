"use client";

import Lottie from 'lottie-react'
import React from 'react'
import WorkingTech from "@/public/json/WorkingTech.json"
import { motion } from 'framer-motion';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const HomeAbout = () => {
  return (
    <div className='relative h-auto  w-full max-w-[1600px] mx-auto overflow-x-hidden scrollbar-hide py-10 pb-16'>
      <div className='relative mx-auto h-auto w-full max-w-[1400px] px-3 md:px-8 flex flex-col items-center scrollbar-hide'>



        {/* ---------------------------- Heading ------------------------- */}
        <motion.div className='relative h-28 flex justify-center items-end'
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='absolute font-montserrat font-black tracking-tighter text-white/15 text-7xl md:text-8xl'>About</h2>
          <h1 className='text-4xl md:text-5xl font-bold text-primary font-league'>About Me</h1>
        </motion.div>

        {/* ---------------------------- Content Section ----------------------- */}
        <div className='w-full h-auto pt-10 flex flex-col md:flex-row justify-between items-center'>

          {/* Image Section */}
          <motion.div
            className="relative w-[90%] md:w-[40%] flex justify-center md:justify-start pt-10 md:pt-0"
            initial={{ scale: 0, opacity: 0 }} // hidden at first
            whileInView={{ scale: 1, opacity: 1 }} // pops into view
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            transition={{
              type: "tween",
              duration: 0.6,
            }}
          >
            <motion.div
              className="absolute w-full h-full md:h-[250px] md:w-[250px] bg-gradient-to-t from-primary to-blue-500 rounded-full blur-[40px] md:blur-[80px] 
        opacity-65 left-0 md:left-1/3 top-0 md:top-[5%]"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            />
            <Lottie animationData={WorkingTech} loop={true} />
          </motion.div>

          {/* Text Section */}
          <motion.div className='w-full md:w-[50%] flex flex-col items-center md:items-start pt-10 md:pt-0'
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='font-thin text-lg text-center md:text-start'>Hello! I'm <span className='font-regular'>Ramandeep Singh</span>, a <br />

              Game Programmer based in India, with hands-on experience designing and delivering interactive gameplay systems, real-time multiplayer features, and immersive simulations using Unity and C#. I specialize in building engaging player-focused experiences that combine strong technical architecture with creative implementation, focusing on performance, scalability, and clean code practices  <br /> <br />

            </h2>

            {/* ---------------------------- Button Section ----------------------- */}
            <motion.a
              href="https://drive.google.com/file/d/11afvbg-pZnd-BzCvf7mmMNmZkuKh0xaD/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-lg pl-4 pr-1 py-1 border-[2px] border-white rounded-full mt-10 md:mt-10
                     transition-all duration-300 ease-in-out hover:bg-green-600 hover:cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
            >
              <span className="pr-3 text-white group-hover:text-white">Download Resume</span>

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


        </div>


      </div>
    </div>
  )
}

export default HomeAbout
