"use client";
import React from 'react'
import moreProject3 from "@/public/moreProject3.jpg"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


const HomeMoreProjects = () => {
  return (
    <div className='relative w-screen h-[400px] md:h-[600px] my-10 flex flex-col justify-center items-center'>
      <div className='absolute w-full h-full'>
        <Image className=' object-cover' fill alt='moreProject3' src={moreProject3} />
      </div>
      <div className='absolute h-full w-full bg-black/60'></div>

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 },
        },
      }}
      className="w-full"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        className="relative text-5xl md:text-9xl font-bold mx-auto px-5 md:px-10 text-white/70 text-center"
      >
        Explore More of <br />
        <span className="text-primary/60">My Works</span>
      </motion.h1>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        className="relative text-center text-white/70"
      >
        For a deeper look at my personal projects and coding experiments, please
        visit my GitHub profile.
      </motion.p>
    </motion.div>

      <motion.a
        className="relative group flex items-center gap-4 text-lg pl-6 pr-1 py-1 border-[2px] border-white rounded-full mt-10 md:mt-10
                           transition-all duration-300 ease-in-out hover:bg-primary hover:cursor-pointer"
        href='https://github.com/SudipGhara19'
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover="hover"
      >
        <span className="pr-3 text-white group-hover:text-white text-base font-montserrat">Github</span>

        {/* Icon controlled by parent hover */}
        <motion.div
          variants={{
            hover: { rotate: 360 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <BsFillArrowRightCircleFill
            className="text-primary group-hover:text-white transition-colors duration-300 ease-in-out"
            size={40}
          />
        </motion.div>
      </motion.a>

    </div>
  )
}

export default HomeMoreProjects
