"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import spoontoo from "@/public/works/spoontooImg.png"
import blownfuse from "@/public/works/blownfuseImg.png"
import blownfuseCMS from "@/public/works/blownfuseCMS.png"
import horg from "@/public/works/horg.png"
import PaperPlane from "@/public/works/PaperPlane.png"
import TileTactics from "@/public/works/TileTactics.png"
import PCGSync from "@/public/works/PCG_Sync.png"
import POShadows from "@/public/works/PortofShadows.jpg"
import EAF from "@/public/works/EAF.png"
import MiniCrush from "@/public/works/MiniCrush.png"
import travelguru from "@/public/works/travelguru.png"
import webTech from "@/public/works/webTech.png"
import SuperMan from "@/public/works/SupermanRender.png"
import playStar from "@/public/works/playStar.png"
import EmotionalDamage from '@/public/works/EmotionalDamage.png'
import MyPhoneRage from "@/public/works/MyPhoneRage.png"
import xpenseTracker from "@/public/works/xpenseTracker.png"
import TrashImg from "@/public/works/Trash.jpg"
import Image from "next/image";
import { MdOutlinePerson } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { GoLink } from "react-icons/go";
import { GoUnlink } from "react-icons/go";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";





const listings = [
{
  _id: "0",
  type: "Bin Chicken Studios",
  name: "Trash",
  visitURL: "https://store.steampowered.com/app/1589700/Trash/",
  repo: "",
  desc: "Trash is a co-op open-world survival crafting game developed by Bin Chicken Studios. I designed and implemented the networked architecture to support multiplayer gameplay across multiple platforms, developed platform-specific network layer integrations, and optimized performance for co-op console systems.",
  imageUrl: TrashImg,
},
{
  _id: "1",
  type: "Blownfuse Softlabs",
  desc: "Emotional Dama is a 2D cozy game centered on introspective themes and atmospheric player experience. I developed core gameplay mechanics and interaction systems while contributing as a technical artist through shader work, asset integration, and visual optimization. The project balances mechanics and aesthetics within a modular structure that supports iteration and experimentation.",
  name: "Emotional Damage",
  visitURL: "https://blownfuse.itch.io/ggj2026",
  repo: "",
  imageUrl: EmotionalDamage,

},
{
  _id: "2",
  type: "Blownfuse Softlabs",
  name: "My Phone Rage",
  visitURL: "https://projesh.itch.io/myphone-rage",
  repo: "",
  desc: "This project is a sprite-based FPS inspired by classic DOOM-style gameplay, featuring playful combat using unconventional weapons such as fish, mops, and light bulbs instead of traditional firearms. I focused on implementing core shooting, movement, and interaction mechanics while maintaining responsive gameplay flow and a cohesive retro-styled presentation.",
  imageUrl: MyPhoneRage,
},
{
  _id: "3",
  type: "Individual",
  name: "Paper Plane",
  visitURL: "",
  repo: "",
  desc: "This project involved building an endless runner where players control a paper plane navigating dynamic obstacles. I implemented core systems for movement, interaction, and scoring, while designing modular tile generation for continuous environments. The focus was on performance optimization, stable gameplay flow, and clear visual feedback to ensure an accessible player experience.",
  imageUrl: PaperPlane,
},
/*
{
  _id: "4",
  type: "Blownfuse Softlabs",
  name: "Play Star Games",
  visitURL: "",
  repo: "",
  desc: "Worked as a Game Developer on a multi-game casino platform, contributing to gameplay systems and client–server integration. My role focused on implementing and maintaining game logic, integrating backend APIs, and ensuring smooth real-time interaction using WebSockets.",
  imageUrl: playStar,
},
*/
{
  _id: "5",
  type: "Individual",
  name: "Tile Tactics",
  visitURL: " ",
  repo: "",
  desc: "This project explored a tile-based tactics prototype where players navigate grid platforms while avoiding obstacles by identifying efficient movement routes. I implemented core gameplay systems including grid interaction, traversal logic, and player control to support structured navigation across the environment. The project served as a testing ground for shortest path algorithms, where enemy agents dynamically followed the player based on calculated routes. ",
  imageUrl: TileTactics,
},
{
  _id: "6",
  type: "Individual",
  name: "Mini Crush",
  visitURL: "",
  repo: "",
  desc: "Mini Crush is a cozy arcade-style project where the player spawns on a ship while coins rain across the environment, encouraging quick collection and movement decisions. I implemented core gameplay mechanics including spawning logic, collection systems, and collision handling to maintain responsive interactions. The experience balances relaxed visual tone with light challenge, requiring players to gather coins before incoming ships collide with them. ",
  imageUrl: MiniCrush,
},
{
  _id: "7",
  type: "Individual",
  name: "Superman",
  visitURL: "",
  repo: "",
  desc: "This project is a third-person Superman-inspired prototype developed in Unreal Engine 5, focused on building responsive flight and combat abilities. I implemented core mechanics including aerial movement control and heat vision beam functionality, emphasizing smooth transitions and player feedback. The work centers on refining character handling, animation integration, and system responsiveness while maintaining a modular structure to support continued iteration and expansion.",
  imageUrl: SuperMan,
},
{
  _id: "8",
  type: "Blownfuse Softlabs",
  name: "Electric Arc Furnance (VR)",
  visitURL: "",
  repo: " ",
  desc: "This project involved developing a VR-based simulation focused on an electric arc furnace environment. I implemented interactive components that allowed users to engage with equipment and controls in an immersive setting, emphasizing usability and realism. My work centered on building responsive VR interactions, handling object behavior, and ensuring stable performance while maintaining a modular structure to support integration within the broader simulation system.",
  imageUrl: EAF,
},
{
     _id: "9",
  type: "Reasech Paper",
  name: "PCG Sync In Multi(P) Games",
  visitURL: "https://lnkd.in/gvy4xPa8",
  repo: "https://lnkd.in/gEWHGfQy ",
  desc: "This project involved writing a research paper on procedural content generation synchronization in multiplayer games. I developed a Unity prototype using Mirror networking to test hybrid deterministic and server-authoritative approaches for synchronized platform generation. The study focused on bandwidth efficiency, client consistency, and real-time performance, demonstrating a scalable method to maintain aligned game states with minimal network overhead.",
  imageUrl: PCGSync,
},
{
     _id: "10",
  type: "Individual",
  name: "Port of Shadows",
  visitURL: "https://ramansw.itch.io/port-of-shadows",
  repo: "https://github.com/ramansw/Port-of-Shadows",
  desc: "Port of Shadows is a cinematic Unity 3D experience where the player explores an ancient, ocean-bound castle port near an isolated island. Initially serene and peaceful, the walkthrough slowly unravels dark secrets hidden within the castle’s mysterious halls.",
  imageUrl: POShadows,
},
]

const HomeWorks = () => {


  const swiperRef = useRef(null);

  // const validListings = listings.filter(
  //   (listing) => listing.imageUrls && listing.imageUrls[0]
  // );
  const slides =
    listings.length < 3
      ? [...listings, ...listings]
      : listings;

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
          <h2 className="absolute font-montserrat font-black tracking-tight text-white/15 text-7xl md:text-8xl">
            Works
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-league">
            My Works
          </h1>
        </motion.div>

        {/* ---------------------------- Swiper -------------------- */}
        <div className="relative w-full h-auto pt-14">
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={-200}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={900}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 400,
              modifier: 3,
              slideShadows: true,
              scale: 1,
            }}
            className="w-full"
            style={{ paddingBottom: "60px", minHeight: "600px" }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 1.2, spaceBetween: -60 },
              1024: { slidesPerView: 3, spaceBetween: -200 },
              1400: { slidesPerView: 3, spaceBetween: -320 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {slides.map((listing, idx) => (
              <SwiperSlide
                key={idx}
                className="relative w-[400px] md:w-[500px] lg:w-[600px] h-[600px] sm:h-[500px] md:h-[650px] min-h-[600px] transition-transform bg-gradient-to-br from-[#780000]/60 to-[#0c0000]/80"
                style={{
                  borderRadius: "36px",
                  overflow: "hidden",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 16px 48px 0 rgba(0,0,0,0.35)",
                  display: "flex",
                  flexDirection: "column", // ✅ ensures content flows top to bottom
                  alignItems: "stretch",   // ✅ makes image stick to top
                }}
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
              >
                {/* Image always starts at top */}
                <div className="w-full h-[240px] md:h-[380px]">
                  <Image
                    src={listing.imageUrl}
                    alt={listing.name}
                    className="w-full h-full object-cover"
                    style={{
                      transition:
                        "transform 0.5s cubic-bezier(.4,2,.6,1)",
                    }}
                  />
                </div>

                {/* Project details */}
                <div className="relative p-5 w-full h-full flex flex-col justify-start items-start">
                  <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-5">
                    <h2 className="text-white text-4xl font-bold font-montserrat">{listing.name}</h2>
                    <div className="font-montserrat flex justify-end items-center text-xs text-white/80 gap-2 bg-white/15 px-2 py-1 border-[1px] border-white/40  rounded-md">
                      {listing.type === "Personal" ? <MdOutlinePerson className="text-primary" /> : <ImOffice className="text-primary" />}
                      <p className="">{listing.type}</p>
                    </div>


                  </div>

                  <p className="font-thin leading-tight pt-6 md:pt-3 text-white/90">{listing.desc}</p>

                </div>
                {/* git and live links button */}
                <div className="absolute  bottom-5 right-10   flex items-center justify-end gap-4 ">
                  {listing.visitURL !== "" ? (
                    <a
                      href={listing.visitURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-[1px] border-white/90 text-white/80 rounded-full flex items-center justify-center gap-2 font-montserrat font-normal bg-primary/40 hover:bg-primary hover:text-black hover:border-black">
                      <GoLink />
                      <span>Link</span>
                    </a>
                  ) : (
                    <div
                      className="px-4 py-2 border-[1px] border-white/90 text-white/80 rounded-full flex items-center justify-center gap-2 font-montserrat font-normal ">
                      <GoUnlink />
                      <span>No Link</span>
                    </div>)}

                  {listing.repo !== "" ? (
                    <a
                      href={listing.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-[1px] border-white/90 text-white/80 rounded-full flex items-center justify-center gap-2 font-montserrat font-normal bg-primary/40 hover:bg-primary hover:text-black hover:border-black">
                      <BsGithub />
                      <span>Git Repo</span>
                    </a>
                  ) : (
                    <div
                      className="px-4 py-2 border-[1px] border-white/90 text-white/80 rounded-full flex items-center justify-center gap-2 font-montserrat font-normal ">
                      <BsGithub />
                      <span>Private Repo</span>
                    </div>)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.a
          className="group flex items-center gap-4 text-lg pl-4 pr-1 py-1 border-[2px] border-white rounded-full 
                             transition-all duration-300 ease-in-out hover:bg-primary hover:cursor-pointer"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover="hover"
          href="https://github.com/ramansw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pr-3 text-white group-hover:text-white">My Github</span>

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
  );
};

export default HomeWorks;
