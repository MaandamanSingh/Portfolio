import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import introVideo from "../assets/videos/intro.mp4";

import {
  heroContent,
  personalInfo,
  socialLinks,
} from "../data/portfolioData";

const Hero = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });

    
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >

      {/* Background Video */}

      <video
        ref={videoRef}
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Left Floating Social Bar */}

      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">

       {/* WhatsApp */}

<a
  href={socialLinks.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 hover:text-[#25D366] transition-all duration-300 transform hover:scale-125"
  aria-label="WhatsApp"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.59 5.98L0 24l6.23-1.63a11.95 11.95 0 005.82 1.48h.01c6.59 0 11.94-5.36 11.94-11.95 0-3.19-1.24-6.19-3.48-8.42zM12.06 21.8a9.83 9.83 0 01-5.01-1.37l-.36-.21-3.7.97.99-3.61-.24-.37a9.82 9.82 0 01-1.52-5.26c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.78 9.78 0 012.88 6.96c0 5.43-4.42 9.86-9.86 9.86zm5.41-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.08-.12-.28-.2-.58-.35z"/>
  </svg>
</a>

        {/* LinkedIn */}

        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

       
      {/* Email */}

<a
  href={`mailto:${socialLinks.email}`}
  className="text-white/60 hover:text-[#EA4335] transition-all duration-300 transform hover:scale-125"
  aria-label="Email"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2L12 13 4 6h16zm0 12H4V8l8 6 8-6v10z"/>
  </svg>
</a>

      </div>
      
            {/* =========================
          Content Container
      ========================== */}

      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

        {/* =========================
            Left Content
        ========================== */}

        <div className="flex flex-col items-start text-left max-w-2xl w-full">

          {/* Mobile Social Icons */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-4 mb-4 lg:hidden"
          >

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#ff2a2a] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </a>

          </div>

          {/* Main Heading */}

          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight"
          >
            {heroContent.greeting}
            <br />

            <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
              {heroContent.name}
            </span>

          </h1>

          {/* Subtitle */}

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-6 max-w-lg drop-shadow-lg"
          >
           {heroContent.title}
          </p>

          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white/80 leading-7 max-w-xl mb-8"
          >
            {heroContent.description}
          </p>

          {/* CTA Buttons */}

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap gap-4"
          >

            <a
         href={heroContent.primaryButton.link}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              {heroContent.primaryButton.text}
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white bg-black/30 backdrop-blur-md text-white hover:bg-black/60 transition-all duration-300"
            >
            Let's Talk
            </a>

            <a
             href={heroContent.secondaryButton.link}
              download
              className="px-6 py-3 rounded-full border border-white/50 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
            >
           {heroContent.secondaryButton.text}
            </a>

          </div>

        </div>
                {/* =========================
            Right Side Play Button
        ========================== */}

   <motion.div
  data-aos="zoom-in"
  data-aos-delay="600"
  onClick={toggleVideo}
  animate={
    !isPlaying
      ? {
          y: [0, -12, 0],
          scale: [1, 1.05, 1],
          filter: [
            "drop-shadow(0 0 0px rgba(255,42,42,0))",
            "drop-shadow(0 0 18px rgba(255,42,42,.8))",
            "drop-shadow(0 0 0px rgba(255,42,42,0))",
          ],
        }
      : {}
  }
  transition={{
    duration: 1,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 3,
  }}
  className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
>

<motion.div
  animate={
    !isPlaying
      ? {
          scale: [1, 1.08, 1],
          boxShadow: [
  "0 0 15px rgba(255,42,42,.35)",
  "0 0 35px rgba(255,42,42,.65)",
  "0 0 60px rgba(255,42,42,.9)",
  "0 0 90px rgba(255,42,42,.75)",
  "0 0 60px rgba(255,42,42,.9)",
  "0 0 35px rgba(255,42,42,.65)",
  "0 0 15px rgba(255,42,42,.35)",
],
        }
      : {}
  }
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center"
>
            {isPlaying ? (

              /* Pause */

              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>

            ) : (

              /* Play */

              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>

            )}

</motion.div>
          <span className="text-white text-xs uppercase tracking-[0.25em] opacity-70 group-hover:opacity-100 transition-opacity">

            {isPlaying ? "Pause Reel" : "Play Reel"}

          </span>

</motion.div>
      </div>

      {/* =========================
          Scroll Indicator
      ========================== */}

      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >

        <div className="animate-bounce">

          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >

            <path d="M12 5v14"></path>

            <path d="M19 12l-7 7-7-7"></path>

          </svg>

        </div>

      </div>

    </section>
  );
};

export default Hero;