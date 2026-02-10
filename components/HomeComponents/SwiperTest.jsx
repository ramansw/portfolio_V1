// "use client"
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/autoplay";

// export default function OfferSwiper({ listings }) {
//   if (!listings || listings.length === 0) {
//     return (
//       <div className="w-full bg-black py-20 px-4 flex items-center justify-center min-h-[500px]">
//         <h2 className="text-4xl text-white font-bold text-center">No Featured Listings</h2>
//       </div>
//     );
//   }

//   const validListings = listings.filter((listing) => listing.imageUrls && listing.imageUrls[0]);
//   const slides = validListings.length < 3 ? [...validListings, ...validListings] : validListings;

//   return (
//     <div className="w-full bg-black py-20 px-2">
//       <div className="max-w-[1600px] mx-auto">
//         <h2 className="text-5xl text-white font-bold mb-16 text-center">Featured Listings</h2>
//         <Swiper
//           modules={[EffectCoverflow, Autoplay]}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true} // Changed from true to false for fewer slides
//           loopedSlides={listings.length}
//           slidesPerView={3}
//           spaceBetween={-200}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: false,
//             stopOnLastSlide: false,
//             waitForTransition: true,
//           }}
//           speed={900}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 400,
//             modifier: 3,
//             slideShadows: true,
//             scale: 1,
//           }}
//           className="w-full"
//           style={{ paddingBottom: "60px", minHeight: "600px" }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               spaceBetween: 0,
//             },
//             640: {
//               slidesPerView: 1.2,
//               spaceBetween: -60,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: -200,
//             },
//             1400: {
//               slidesPerView: 3,
//               spaceBetween: -320,
//             },
//           }}
//         >
//           {slides.map((listing, idx) => (
//             <SwiperSlide
//               key={listing._id + "-" + idx}
//               className="w-[500px] md:w-[600px] lg:w-[700px] transition-transform"
//               style={{
//                 borderRadius: "36px",
//                 overflow: "hidden",
//                 boxShadow: "0 16px 48px 0 rgba(0,0,0,0.35)",
//                 minHeight: "500px",
//                 background: "#181818",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <div className="relative group w-full h-full">
//                 <img
//                   src={listing.imageUrls && listing.imageUrls[0] ? listing.imageUrls[0] : "/default-image.jpg"}
//                   alt={listing.name}
//                   className="w-full h-[500px] object-cover"
//                   style={{
//                     transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-100 transition-opacity">
//                   <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">{listing.name}</h2>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCube, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/autoplay";

// export default function OfferSwiper({ listings }) {
//   if (!listings || listings.length === 0) {
//     return (
//       <div className="w-full bg-black py-20 px-4 flex items-center justify-center min-h-[500px]">
//         <h2 className="text-4xl text-white font-bold text-center">No Featured Listings</h2>
//       </div>
//     );
//   }

//   const validListings = listings.filter((listing) => listing.imageUrls && listing.imageUrls[0]);
//   const slides = validListings.length < 3 ? [...validListings, ...validListings] : validListings;

//   return (
//     <div className="w-full bg-black py-20 px-2">
//       <div className="max-w-[1600px] mx-auto">
//         <h2 className="text-5xl text-white font-bold mb-16 text-center">Featured Listings</h2>
//         <Swiper
//           modules={[EffectCube, Autoplay]}
//           effect="cube"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           loopedSlides={listings.length}
//           slidesPerView={1}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: false,
//             stopOnLastSlide: false,
//             waitForTransition: true,
//           }}
//           speed={900}
//           cubeEffect={{
//             shadow: true,
//             slideShadows: true,
//             shadowOffset: 40,
//             shadowScale: 0.94,
//           }}
//           className="w-full"
//           style={{ paddingBottom: "60px", minHeight: "600px" }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             640: {
//               slidesPerView: 1,
//             },
//             1024: {
//               slidesPerView: 1,
//             },
//             1400: {
//               slidesPerView: 1,
//             },
//           }}
//         >
//           {slides.map((listing, idx) => (
//             <SwiperSlide
//               key={listing._id + "-" + idx}
//               className="w-[500px] md:w-[600px] lg:w-[700px] transition-transform"
//               style={{
//                 borderRadius: "36px",
//                 overflow: "hidden",
//                 boxShadow: "0 16px 48px 0 rgba(0,0,0,0.35)",
//                 minHeight: "500px",
//                 background: "#181818",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <div className="relative group w-full h-full">
//                 <img
//                   src={listing.imageUrls && listing.imageUrls[0] ? listing.imageUrls[0] : "/default-image.jpg"}
//                   alt={listing.name}
//                   className="w-full h-[500px] object-cover"
//                   style={{
//                     transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-100 transition-opacity">
//                   <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">{listing.name}</h2>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }










// "use client"
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFlip, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-flip";
// import "swiper/css/autoplay";

// export default function OfferSwiper({ listings }) {
//   if (!listings || listings.length === 0) {
//     return (
//       <div className="w-full bg-black py-20 px-4 flex items-center justify-center min-h-[500px]">
//         <h2 className="text-4xl text-white font-bold text-center">No Featured Listings</h2>
//       </div>
//     );
//   }

//   const validListings = listings.filter((listing) => listing.imageUrls && listing.imageUrls[0]);
//   const slides = validListings.length < 3 ? [...validListings, ...validListings] : validListings;

//   return (
//     <div className="w-full bg-black py-20 px-2">
//       <div className="max-w-[1600px] mx-auto">
//         <h2 className="text-5xl text-white font-bold mb-16 text-center">Featured Listings</h2>
//         <Swiper
//           modules={[EffectFlip, Autoplay]}
//           effect="flip"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           loopedSlides={listings.length}
//           slidesPerView={1}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: false,
//             stopOnLastSlide: false,
//             waitForTransition: true,
//           }}
//           speed={900}
//           flipEffect={{
//             slideShadows: true,
//             limitRotation: true,
//           }}
//           className="w-full"
//           style={{ paddingBottom: "60px", minHeight: "600px" }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             640: {
//               slidesPerView: 1,
//             },
//             1024: {
//               slidesPerView: 1,
//             },
//             1400: {
//               slidesPerView: 1,
//             },
//           }}
//         >
//           {slides.map((listing, idx) => (
//             <SwiperSlide
//               key={listing._id + "-" + idx}
//               className="w-[500px] md:w-[600px] lg:w-[700px] transition-transform"
//               style={{
//                 borderRadius: "36px",
//                 overflow: "hidden",
//                 boxShadow: "0 16px 48px 0 rgba(0,0,0,0.35)",
//                 minHeight: "500px",
//                 background: "#181818",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <div className="relative group w-full h-full">
//                 <img
//                   src={listing.imageUrls && listing.imageUrls[0] ? listing.imageUrls[0] : "/default-image.jpg"}
//                   alt={listing.name}
//                   className="w-full h-[500px] object-cover"
//                   style={{
//                     transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-100 transition-opacity">
//                   <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">{listing.name}</h2>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }


// "use client"
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCreative, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/autoplay";

// export default function OfferSwiper({ listings }) {
//   if (!listings || listings.length === 0) {
//     return (
//       <div className="w-full bg-black py-20 px-4 flex items-center justify-center min-h-[500px]">
//         <h2 className="text-4xl text-white font-bold text-center">No Featured Listings</h2>
//       </div>
//     );
//   }

//   // Ensure at least 3 slides for the 3D effect and looping
//   let validListings = listings.filter((listing) => listing.imageUrls && listing.imageUrls[0]);
//   let slides = validListings;
//   if (validListings.length < 3) {
//     // Repeat listings to ensure at least 3 unique slides for loop to work
//     while (slides.length < 3) {
//       slides = slides.concat(validListings);
//     }
//     slides = slides.slice(0, 3);
//   }

//   return (
//     <div className="w-full bg-black py-20 px-2">
//       <div className="max-w-[1600px] mx-auto">
//         <h2 className="text-5xl text-white font-bold mb-16 text-center">Featured Listings</h2>
//         <Swiper
//           modules={[EffectCreative, Autoplay]}
//           effect="creative"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={3}
//           spaceBetween={60}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: false,
//             stopOnLastSlide: false,
//             waitForTransition: true,
//           }}
//           speed={900}
//           creativeEffect={{
//             prev: {
//               shadow: true,
//               translate: ["-120%", 0, -500],
//               rotate: [0, 0, -15],
//               opacity: 0.7,
//               scale: 0.85,
//             },
//             next: {
//               shadow: true,
//               translate: ["120%", 0, -500],
//               rotate: [0, 0, 15],
//               opacity: 0.7,
//               scale: 0.85,
//             },
//             // The active slide stays in the center, slightly raised
//             // This gives a 3D carousel look
//           }}
//           className="w-full"
//           style={{ paddingBottom: "60px", minHeight: "600px" }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               spaceBetween: 0,
//             },
//             640: {
//               slidesPerView: 1.2,
//               spaceBetween: 10,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 60,
//             },
//             1400: {
//               slidesPerView: 3,
//               spaceBetween: 80,
//             },
//           }}
//         >
//           {slides.map((listing, idx) => (
//             <SwiperSlide
//               key={listing._id + "-" + idx}
//               className="w-[350px] md:w-[400px] lg:w-[500px] transition-transform"
//               style={{
//                 borderRadius: "36px",
//                 overflow: "hidden",
//                 boxShadow: "0 16px 48px 0 rgba(0,0,0,0.35)",
//                 minHeight: "500px",
//                 background: "#181818",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <div className="relative group w-full h-full">
//                 <img
//                   src={listing.imageUrls && listing.imageUrls[0] ? listing.imageUrls[0] : "/default-image.jpg"}
//                   alt={listing.name}
//                   className="w-full h-[500px] object-cover"
//                   style={{
//                     transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-100 transition-opacity">
//                   <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">{listing.name}</h2>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCreative, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/autoplay";

// export default function OfferSwiper({ listings }) {
//   if (!listings || listings.length === 0) {
//     return (
//       <div className="w-full bg-black py-20 px-4 flex items-center justify-center min-h-[500px]">
//         <h2 className="text-4xl text-white font-bold text-center">No Featured Listings</h2>
//       </div>
//     );
//   }

//   // Ensure at least 3 slides for the 3D effect and looping, fill blank space if needed
//   let validListings = listings.filter((listing) => listing.imageUrls && listing.imageUrls[0]);
//   let slides = [...validListings];

//   // If less than 3, repeat and fill with placeholders to avoid blank space and enable loop
//   if (slides.length < 3) {
//     while (slides.length < 3) {
//       slides = slides.concat(validListings);
//     }
//     slides = slides.slice(0, 3);
//   }

//   // If still less than 3 (e.g. listings was empty), fill with placeholders
//   while (slides.length < 3) {
//     slides.push({
//       _id: "placeholder-" + slides.length,
//       name: "Coming Soon",
//       imageUrls: ["/default-image.jpg"],
//     });
//   }

//   return (
//     <div className="w-full bg-black py-20 px-2">
//       <div className="max-w-[1600px] mx-auto">
//         <h2 className="text-5xl text-white font-bold mb-16 text-center">Featured Listings</h2>
//         <Swiper
//           modules={[EffectCreative, Autoplay]}
//           effect="creative"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={3}
//           spaceBetween={60}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: false,
//             stopOnLastSlide: false,
//             waitForTransition: true,
//           }}
//           speed={900}
//           creativeEffect={{
//             prev: {
//               shadow: true,
//               translate: ["-120%", 0, -500],
//               rotate: [0, 0, -15],
//               opacity: 0.7,
//               scale: 0.85,
//             },
//             next: {
//               shadow: true,
//               translate: ["120%", 0, -500],
//               rotate: [0, 0, 15],
//               opacity: 0.7,
//               scale: 0.85,
//             },
//           }}
//           className="w-full"
//           style={{ paddingBottom: "60px", minHeight: "600px" }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               spaceBetween: 0,
//             },
//             640: {
//               slidesPerView: 1.2,
//               spaceBetween: 10,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 60,
//             },
//             1400: {
//               slidesPerView: 3,
//               spaceBetween: 80,
//             },
//           }}
//         >
//           {slides.map((listing, idx) => (
//             <SwiperSlide
//               key={listing._id + "-" + idx}
//               className="w-[350px] md:w-[400px] lg:w-[500px] transition-transform"
//               style={{
//                 borderRadius: "36px",
//                 overflow: "hidden",
//                 boxShadow: "0 16px 48px 0 rgba(0,0,0,0.35)",
//                 minHeight: "500px",
//                 background: "#181818",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <div className="relative group w-full h-full">
//                 <img
//                   src={listing.imageUrls && listing.imageUrls[0] ? listing.imageUrls[0] : "/default-image.jpg"}
//                   alt={listing.name}
//                   className="w-full h-[500px] object-cover"
//                   style={{
//                     transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-100 transition-opacity">
//                   <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">{listing.name}</h2>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

