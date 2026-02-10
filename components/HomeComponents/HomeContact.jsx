"use client";

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import CircularText from '../Ui/CircularText';
import paperPlane from "@/public/json/paperPlane.json"
import Lottie from 'lottie-react';
import { IoCallOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { PiArrowFatLinesDown } from "react-icons/pi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import emailjs from '@emailjs/browser';





const HomeContact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.title.trim()) {
      newErrors.title = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = 'service_i54smq7';
      const templateId = 'template_rmmul5u';
        const publicKey = 'ykORQxYV-qW1SlTTS'; 


      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        title: formData.title,
        message: formData.message,
        to_name: 'Ramandeep Singh',
      };



      // Send email using EmailJS sendForm method
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        title: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative h-auto w-full max-w-[1600px] mx-auto overflow-x-hidden scrollbar-hide pt-16 pb-8">
      <div className="relative mx-auto h-auto w-full max-w-[1600px] px-3 md:px-8 flex flex-col items-center scrollbar-hide">


        {/* ---------------------------- Heading ------------------------- */}
        <motion.div className='relative flex justify-center items-end'
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='absolute font-montserrat font-black tracking-tighter text-white/15 text-7xl md:text-8xl '>Contact</h2>
          <h1 className='text-4xl md:text-5xl font-bold text-primary font-league'>Contact Me</h1>

        </motion.div>
        <motion.p
          className="w-full lg:w-[50%] text-center text-sm font-thin text-white/70 pt-5 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I am ready to bring my skills in Game Development to a new project
          or role. Whether you have a question or just want to connect, feel free
          to reach out. I look forward to hearing from you.
        </motion.p>

        {/* ---------------------- Main Cointainer ----------------------- */}
        <div className='relative w-full h-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between pt-8 gap-8 lg:gap-0'>

          {/* ---------- Animatin And Content ----------- */}
          <div className='relative w-full lg:w-[40%] h-auto flex flex-col items-center lg:items-start pt-8'>
            {/* <motion.h1
              className="w-full text-center text-4xl font-extrabold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Get In Touch
            </motion.h1> */}

            {/* Paragraph */}
            {/* <motion.p
              className="text-center text-sm font-thin text-white/70 pt-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              I am ready to bring my skills in Game development to a new project
              or role. Whether you have a question or just want to connect, feel free
              to reach out. I look forward to hearing from you.
            </motion.p> */}

             {/* Animation Circle */}
             <motion.div
               className="relative w-full h-[300px] lg:h-[350px] flex items-center justify-center"
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.2 }}
             >
               <div className="absolute h-[200px] w-[200px] lg:h-[200px] lg:w-[200px] bg-gradient-to-br from-primary/80 to-sky-500/80 rounded-full blur-[120px] lg:blur-[150px]"></div>
               <Lottie 
                 className="absolute scale-100 lg:scale-100" 
                 animationData={paperPlane} 
                 loop={true}
                 rendererSettings={{
                   preserveAspectRatio: 'xMidYMid slice'
                 }}
                 style={{
                   willChange: 'transform',
                   backfaceVisibility: 'hidden',
                   transform: 'translateZ(0)'
                 }}
               />
               <CircularText
                 text="CONNECT*CONTACT*DISCOVER*"
                 onHover="slowDown"
                 spinDuration={20}
                 className="custom-class h-full w-full opacity-50"
               />
             </motion.div>

             {/* ----------- Number And Mail (Hidden on mobile) -------- */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.2 }}
               className='relative w-full hidden lg:flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 items-center pt-6 lg:pt-10'>
               <div className='flex items-center gap-1 text-sm lg:text-base'>
                 <IoCallOutline className='text-primary' size={20} />
                 <span>+91 7625 975 167</span>
               </div>

               <div className='flex items-center gap-1 text-sm lg:text-base'>
                 <IoMailUnreadOutline className='text-primary' size={20} />
                 <span className="break-all">officialraman.sw@gmail.com</span>
               </div>
             </motion.div>

             

             {/* ----------- Download Resume (Hidden on mobile) -------- */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.2 }}
               className='relative w-full hidden lg:flex justify-center items-center pt-6 font-montserrat'>
               <a
                 href="https://drive.google.com/file/d/11afvbg-pZnd-BzCvf7mmMNmZkuKh0xaD/view?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full flex justify-center items-center gap-2 rounded-full py-2 px-4 border-[1px] text-white hover:bg-primary/70 hover:text-black transition-all duration-300 ease-in-out"
               >
                 <PiArrowFatLinesDown />
                 <span className="text-sm">Download Resume</span>
               </a>
             </motion.div>

          </div>

          {/* ------------ Form Section --------------- */}
          <div className='relative w-full lg:w-[50%] flex flex-col items-center lg:items-end justify-start lg:justify-end'>
            <motion.div
              className="w-full max-w-md lg:max-w-none "
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                {/* Name and Email Fields - Row on large screens */}
                <motion.div 
                  className="flex flex-col lg:flex-row gap-4 lg:gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {/* Name Field */}
                  <div className="flex-1 space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-white/80">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-all duration-300 backdrop-blur-sm ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary/50'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="flex-1 space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white/80">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-all duration-300 backdrop-blur-sm ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary/50'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                {/* Subject Field */}
                <motion.div 
                  className="space-y-2"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <label htmlFor="title" className="block text-sm font-medium text-white/80">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-all duration-300 backdrop-blur-sm ${
                      errors.title ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary/50'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.title && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs"
                    >
                      {errors.title}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div 
                  className="space-y-2"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-white/80">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-all duration-300 backdrop-blur-sm resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary/50'
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Hidden fields for EmailJS */}
                <input type="hidden" name="to_name" value="Ramandeep Singh" />
                <input type="hidden" name="from_name" value={formData.name} />
                <input type="hidden" name="from_email" value={formData.email} />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-primary to-sky-500 text-black font-semibold rounded-lg hover:from-primary/80 hover:to-sky-500/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>


                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm"
                  >
                    <IoCheckmarkCircleOutline size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <IoCloseCircleOutline size={20} />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
               </form>
             </motion.div>

             {/* ----------- Mobile Contact Information (Below Form) -------- */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.2 }}
               className='relative w-full flex lg:hidden flex-col gap-4 items-center pt-8'
             >
               {/* Number And Mail */}
               <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 items-center'>
                 <div className='flex items-center gap-1 text-sm'>
                   <IoCallOutline className='text-primary' size={20} />
                   <span>+91 7625 975 167</span>
                 </div>

                 <div className='flex items-center gap-1 text-sm'>
                   <IoMailUnreadOutline className='text-primary' size={20} />
                   <span className="break-all">officialraman.sw@gmail.com</span>
                 </div>
               </div>

               {/* Download Resume */}
               <div className='flex justify-center items-center font-montserrat w-full'>
                 <a
                   href="https://drive.google.com/file/d/1JrMf6yz1uIEG3OJ8v4zDdW7HG9CjkS3z/view?usp=sharing"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full flex justify-center items-center gap-2 rounded-full py-2 px-4 border-[1px] text-white hover:bg-primary/70 hover:text-black transition-all duration-300 ease-in-out"
                 >
                   <PiArrowFatLinesDown />
                   <span className="text-sm">Download Resume</span>
                 </a>
               </div>
             </motion.div>

           </div>

         </div>

      </div>
    </div>
  )
}

export default HomeContact
