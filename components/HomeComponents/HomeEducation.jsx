"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { FaUniversity } from "react-icons/fa";


const HomeEducation = () => {
  return (
    <div className="relative h-auto w-full max-w-[1600px] mx-auto overflow-x-hidden scrollbar-hide py-10 pb-16">
      <div className="relative mx-auto h-auto w-full max-w-[1600px] px-3 md:px-8 flex flex-col items-center scrollbar-hide">
        {/* ---------------------------- Heading ------------------------- */}
        <motion.div
          className="relative h-28 flex justify-center items-end"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="absolute font-montserrat font-black tracking-tight text-white/15 text-6xl md:text-8xl">
            Education
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-league">
            Education
          </h1>
        </motion.div>

        {/* -------------------------- Cards ---------------------------- */}
        <div className='w-full h-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 pt-12'>

          {/* BCA Info */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            className='relative w-full md:w-[42%] h-[250px] md:h-[300px] bg-gradient-to-br from-primary/15 to-sky-600/20 rounded-xl aspect-auto py-10 px-12 flex flex-col items-start justify-center font-montserrat group'
          >
            <motion.div
              variants={{
                hover: { bottom: 0, right: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className='h-full w-full absolute border-[2px] rounded-xl border-primary/30 -bottom-2 -right-2'
            ></motion.div>

            <h2 className='text-3xl md:text-5xl font-semibold'>B.Tech</h2>
            <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center'>
              <p className='text-sm md:text-xl font-thin text-white/90'>Bachelor of Computer Engineering</p>
              <span className='text-white/40 text-xs'>2022-2025</span>
            </div>
            <div className='w-full flex items-center justify-start gap-4 pt-6'>
              <FaUniversity size={30} className='text-primary flex-shrink-0' />
              <h3 className='text-sm md:text-2xl '>Chandigarh University</h3>
            </div>
            <h4 className='text-xl md:text-2xl font-semibold text-primary pt-4'>
              CGPA: <span className='text-white'>7.76</span>
            </h4>
          </motion.div>

          {/* Coding-ninjas Info */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            className='relative w-full md:w-[42%] h-[280px] md:h-[300px] bg-gradient-to-bl from-primary/15 to-sky-600/20 rounded-xl aspect-auto py-10 px-12 flex flex-col items-start justify-center font-montserrat group '
          >
            <motion.div
              variants={{
                hover: { bottom: 0, right: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className='h-full w-full absolute border-[2px] rounded-xl border-primary/30 -bottom-2 -right-2'
            ></motion.div>

            <h2 className='text-3xl md:text-5xl font-semibold'>Diploma</h2>
            <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center'>
              <p className='text-sm md:text-xl font-thin text-white/90'>Computer Engineering</p>
              <span className='text-white/40 text-xs'>2019-2022</span>
            </div>
            <div className='w-full flex items-center justify-start gap-4 pt-6'>
              <FaUniversity size={30} className='text-primary flex-shrink-0' />
              <h3 className='text-sm md:text-2xl'>Sliet University</h3>
            </div>
            <h4 className='text-xl md:text-2xl font-semibold text-primary pt-4'>
              CGPA: <span className='text-white'>6.7</span>
            </h4>
          </motion.div>
        </div>


      </div>
    </div>
  )
}

export default HomeEducation
