"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BsPlayFill, 
  BsPauseFill, 
  BsVolumeUpFill, 
  BsVolumeMuteFill, 
  BsFullscreen, 
  BsFullscreenExit,
  BsPlayCircleFill
} from 'react-icons/bs';
import { SiUnrealengine, SiUnity } from 'react-icons/si';

const videoList = [
  {
    id: "superman",
    title: "Superman UE5 Prototype",
    subtitle: "Third-Person Flight & Combat System",
    description: "A high-fidelity gameplay prototype developed in Unreal Engine 5. It features physics-based flight controls, custom speed-lines VFX, dynamic motion blur, and a heat-vision beam target acquisition system. Built to explore character controller responsiveness, animation state machine blending, and complex projectile logic in UE5.",
    youtubeId: "DbL30EdFqmA",
    poster: "/works/SupermanRender.png",
    tags: ["Unreal Engine 5", "Flight Mechanics", "VFX Shaders", "Character Controller"],
    engine: "unreal"
  },
  {
    id: "trash",
    title: "Trash (Console Port)",
    subtitle: "Console Optimization & Multiplayer Networking",
    description: "Trash is a co-op open-world survival crafting game developed by Bin Chicken Studios. For the console port, I designed and implemented the networked architecture to support multiplayer gameplay across multiple platforms, developed platform-specific network layer integrations, and optimized performance for PlayStation 5, Xbox Series X/S, and Nintendo Switch console systems.",
    youtubeId: "oeKYxrJ5TQY",
    poster: "/works/Trash.jpg",
    tags: ["PlayStation 5", "Xbox Series X/S", "Nintendo Switch", "Multiplayer Networking", "Optimization"],
    engine: "unity"
  },
  {
    id: "upcoming-1",
    title: "Co-op Survival System",
    subtitle: "Multiplayer Network Replication",
    description: "An upcoming showcase focusing on networked physics replication, steam matchmaking, and custom inventory synchronization in Unity. Prototype demonstration showing lag compensation and client-side prediction.",
    src: "",
    poster: "",
    tags: ["Unity", "Mirror Networking", "Steam API", "Matchmaking"],
    engine: "unity",
    isUpcoming: true
  }
];

const HomeVideos = () => {
  const [activeVideo, setActiveVideo] = useState(videoList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default muted to allow autoplay/smoother entry
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // Synchronize play state if active video changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
    if (videoRef.current) {
      videoRef.current.load();
      // Try to autoplay muted when switching
      if (videoRef.current.autoplay || !activeVideo.isUpcoming) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              setIsPlaying(false);
            });
        }
      }
    }
  }, [activeVideo]);

  // Sync fullscreen state change (like pressing Escape key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Format seconds to MM:SS
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Play / Pause handler
  const handlePlayPause = () => {
    if (activeVideo.isUpcoming) return;
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Play failed:", err);
        });
      }
    }
  };

  // Mute / Unmute handler
  const handleMuteToggle = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle video time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      if (total) {
        setProgress((current / total) * 100);
        setCurrentTime(formatTime(current));
      }
    }
  };

  // Handle video duration loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  // Handle progress bar slider change
  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (videoRef.current && videoRef.current.duration) {
      const newTime = (newProgress / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(formatTime(newTime));
    }
  };

  // Fullscreen handler
  const handleFullscreenToggle = (e) => {
    e.stopPropagation();
    if (!playerContainerRef.current) return;

    if (!isFullscreen) {
      if (playerContainerRef.current.requestFullscreen) {
        playerContainerRef.current.requestFullscreen();
      } else if (playerContainerRef.current.webkitRequestFullscreen) {
        playerContainerRef.current.webkitRequestFullscreen();
      } else if (playerContainerRef.current.msRequestFullscreen) {
        playerContainerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  // Control bar visibility handlers on mouse movement
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className='relative h-auto w-full max-w-[1600px] mx-auto overflow-x-hidden scrollbar-hide py-16 pb-24 border-t border-white/5'>
      <div className='relative mx-auto h-auto w-full max-w-[1400px] px-4 md:px-8 flex flex-col items-center scrollbar-hide'>
        
        {/* ---------------------------- Heading ------------------------- */}
        <motion.div 
          className='relative h-28 flex justify-center items-end mb-12'
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='absolute font-montserrat font-black tracking-tighter text-white/10 text-7xl md:text-8xl select-none uppercase'>Gameplay</h2>
          <h1 className='text-4xl md:text-5xl font-bold text-primary font-league select-none'>Video Showcase</h1>
        </motion.div>

        {/* ---------------------------- Content Grid ----------------------- */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          
          {/* Left Side: Cinematic Video Player (8 cols) */}
          <motion.div 
            className='lg:col-span-8 flex flex-col gap-4 w-full'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {activeVideo.isUpcoming ? (
              // Placeholder for upcoming video
              <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden bg-black/40 border border-white/10 flex flex-col items-center justify-center p-8 text-center backdrop-blur-md h-[300px] md:h-[450px]">
                <div className="absolute w-[200px] h-[200px] bg-primary/10 rounded-full blur-[60px]" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5 text-primary text-2xl animate-pulse">
                    <SiUnity className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white/80">{activeVideo.title}</h3>
                  <p className="text-white/40 max-w-md text-sm">{activeVideo.subtitle}. Project presentation file currently in build phase.</p>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30 uppercase tracking-widest font-semibold font-montserrat mt-2">
                    Coming Soon
                  </span>
                </div>
              </div>
            ) : activeVideo.youtubeId ? (
              // Elegant Custom YouTube Iframe Player
              <div 
                className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden bg-black border border-white/10 group shadow-2xl hover:shadow-[0_0_40px_rgba(247,127,0,0.15)] transition-all duration-500 h-[300px] md:h-[450px]"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&mute=${isMuted ? '1' : '0'}&loop=1&playlist=${activeVideo.youtubeId}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  frameBorder="0"
                />
                
                {/* Embed volume helper control overlay */}
                <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                  <button 
                    onClick={handleMuteToggle}
                    className="px-3.5 py-2 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 text-white hover:text-primary text-xs flex items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    {isMuted ? <BsVolumeMuteFill /> : <BsVolumeUpFill />} {isMuted ? "Unmute Audio" : "Mute Audio"}
                  </button>
                </div>
              </div>
            ) : (
              // Elegant Custom Video Player
              <div 
                ref={playerContainerRef}
                className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden bg-black border border-white/10 group shadow-2xl hover:shadow-[0_0_40px_rgba(247,127,0,0.1)] transition-all duration-500 cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => { setIsHovered(true); setShowControls(true); }}
                onMouseLeave={() => { setIsHovered(false); setShowControls(false); }}
                onClick={handlePlayPause}
              >
                {/* HTML5 Video element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={activeVideo.src}
                  poster={activeVideo.poster}
                  loop
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onClick={(e) => { e.stopPropagation(); handlePlayPause(); }}
                />

                {/* Ambient glow in background based on play state */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none transition-opacity duration-500 ${isPlaying && !showControls ? 'opacity-0' : 'opacity-100'}`} />

                {/* Custom Big Play Button in Center */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_30px_rgba(247,127,0,0.5)] transform hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto">
                        <BsPlayFill className="text-3xl md:text-4xl ml-1" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Custom Glassmorphic Controls Bar */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-[2px] transition-all duration-300 z-10 flex flex-col gap-3 ${showControls || !isPlaying ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`} onClick={(e) => e.stopPropagation()}>
                  
                  {/* Timeline progress slider */}
                  <div className="w-full flex items-center gap-3 group/slider">
                    <input 
                      type="range" 
                      min="0"
                      max="100"
                      step="0.1"
                      value={progress}
                      onChange={handleProgressChange}
                      className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary group-hover/slider:h-2 transition-all"
                    />
                  </div>

                  {/* Buttons & Status row */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-4 text-white">
                      
                      {/* Play/Pause Button */}
                      <button 
                        onClick={handlePlayPause}
                        className="text-white hover:text-primary text-xl transition-colors p-1"
                      >
                        {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                      </button>

                      {/* Mute/Volume Button */}
                      <button 
                        onClick={handleMuteToggle}
                        className="text-white hover:text-primary text-lg transition-colors p-1"
                      >
                        {isMuted ? <BsVolumeMuteFill /> : <BsVolumeUpFill />}
                      </button>

                      {/* Time display */}
                      <span className="text-xs md:text-sm text-white/70 font-mono tracking-wider">
                        {currentTime} <span className="text-white/30">/</span> {duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Engine Logo badge inside player controls */}
                      <span className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-semibold text-white/80">
                        {activeVideo.engine === 'unreal' ? (
                          <>
                            <SiUnrealengine className="text-white text-xs" /> UE5 Prototype
                          </>
                        ) : (
                          <>
                            <SiUnity className="text-white text-xs" /> Unity Prototype
                          </>
                        )}
                      </span>

                      {/* Fullscreen Button */}
                      <button 
                        onClick={handleFullscreenToggle}
                        className="text-white hover:text-primary text-lg transition-colors p-1"
                      >
                        {isFullscreen ? <BsFullscreenExit /> : <BsFullscreen />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video description card below player */}
            <div className="bg-gradient-to-r from-primary/5 to-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight font-league">{activeVideo.title}</h3>
                  <p className="text-sm text-primary font-semibold">{activeVideo.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  {activeVideo.engine === 'unreal' ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary">
                      <SiUnrealengine /> Unreal Engine 5
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                      <SiUnity /> Unity
                    </span>
                  )}
                </div>
              </div>
              <p className="text-[#d0d0d0] font-thin text-sm leading-relaxed mb-4">
                {activeVideo.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeVideo.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Showcase Playlist / Selector (4 cols) */}
          <motion.div 
            className='lg:col-span-4 flex flex-col gap-4 w-full h-full'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-1">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
              <h3 className="font-montserrat font-bold text-sm tracking-widest text-white/50 uppercase">Playlists</h3>
            </div>
            
            <div className="flex flex-col gap-3 max-h-[550px] overflow-y-auto pr-1">
              {videoList.map((video) => {
                const isActive = activeVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`relative p-4 rounded-xl border flex gap-3 cursor-pointer group transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/45 shadow-[0_0_15px_rgba(247,127,0,0.1)]' 
                        : 'bg-white/5 border-white/5 hover:border-white/15 hover:bg-white/10'
                    }`}
                  >
                    {/* Thumbnail box */}
                    <div className="relative w-24 h-16 rounded-md overflow-hidden bg-black/60 flex-shrink-0 border border-white/10 flex items-center justify-center">
                      {video.isUpcoming ? (
                        <SiUnity className="text-white/20 text-2xl" />
                      ) : (
                        <>
                          {/* Mini visual poster fallback if image can't be rendered */}
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-300 group-hover:opacity-80"
                            style={{ backgroundImage: `url('${video.poster || '/works/SupermanRender.png'}')` }}
                          />
                          <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                            <BsPlayCircleFill className={`text-xl transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-white group-hover:scale-110'}`} />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Metadata text */}
                    <div className="flex flex-col justify-center min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className={`text-sm font-semibold truncate transition-colors duration-300 ${isActive ? 'text-primary' : 'text-white'}`}>
                          {video.title}
                        </h4>
                        {video.isUpcoming && (
                          <span className="text-[9px] px-1.5 py-0.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded uppercase font-bold tracking-wider flex-shrink-0">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/50 truncate font-thin mt-0.5">
                        {video.subtitle}
                      </p>
                      <div className="flex gap-1 mt-1.5">
                        <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-white/40">
                          {video.engine === 'unreal' ? 'UE5' : 'Unity'}
                        </span>
                      </div>
                    </div>

                    {/* Border highlight glow for active video */}
                    {isActive && (
                      <motion.div 
                        layoutId="playlistGlow" 
                        className="absolute -inset-[1px] border border-primary rounded-xl pointer-events-none"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}

              {/* Extra gorgeous information card in the list */}
              <div className="p-4 rounded-xl border border-white/5 bg-gradient-to-br from-white/0 to-white/[0.02] flex flex-col justify-center text-center py-6 mt-2 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 text-white/5 text-7xl select-none pointer-events-none group-hover:text-white/10 transition-colors duration-300 font-league">
                  UE5
                </div>
                <h5 className="text-xs font-bold text-white/40 uppercase tracking-widest font-montserrat">Looking for more?</h5>
                <p className="text-[11px] text-white/30 font-thin mt-1.5 px-4 leading-normal">
                  I regularly post implementation clips and workflow updates on my socials. Make sure to visit my social hubs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default HomeVideos;
