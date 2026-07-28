import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

import { skillsContent } from "../data/portfolioData";

const TagCard = ({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const relativeTop = cardRect.top - containerRect.top;

    const triggerPoint = relativeTop + 50;

    const linePosition = latest * containerRect.height;

    if (linePosition >= triggerPoint && !isActive) {
      setIsActive(true);
    }

    if (linePosition < triggerPoint && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center transition-all duration-700 hover:scale-[1.02] z-10 ${className}
      ${
        isActive
          ? "bg-[#ff2a2a] border-red-400 shadow-[0_20px_55px_rgba(255,42,42,.45)]"
          : "bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,.08)] hover:shadow-[0_20px_55px_rgba(0,0,0,.12)]"
      }`}
    >
      {/* Hole punch */}

      <div className="absolute top-4 w-5 h-5 rounded-full bg-gradient-to-br from-gray-300 to-gray-100 border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,.25)] flex items-center justify-center">

        <div className="w-2 h-2 rounded-full bg-black/20" />

      </div>

      {/* Paper */}

      <div
        className={`mt-8 w-full rounded-[1.5rem] p-8 min-h-[220px] transition-colors duration-700
        ${
          isActive
            ? "bg-red-700/40"
            : "bg-[#f5f5f5]"
        }`}
      >
        <span
          className={`text-xl italic font-serif font-bold transition-colors duration-700
          ${
            isActive
              ? "text-red-200"
              : "text-gray-400"
          }`}
        >
          {number}
        </span>

        <h3
          className={`mt-3 text-3xl font-black tracking-tight transition-colors duration-700
          ${
            isActive
              ? "text-white"
              : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-4 text-sm leading-7 font-medium transition-colors duration-700
          ${
            isActive
              ? "text-red-100"
              : "text-gray-500"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });
    return (
   <section
  id="services"
  ref={containerRef}
      className="relative overflow-hidden bg-white pt-24 pb-32 px-6 md:px-12 font-sans
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* Header */}

        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[460px] z-20 mb-16 md:mb-0"
        >
          <div className="inline-flex items-center border border-gray-300 rounded-full px-5 py-2 bg-white shadow-sm text-gray-600 font-bold text-sm mb-8">

            {skillsContent.badge}

          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-gray-900 relative">

            {skillsContent.heading}

            {/* Hand drawn arrow */}

            <svg
              className="absolute -bottom-10 right-12 w-12 h-12 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 4 Q10 10 15 15 M15 15 L10 15 M15 15 L15 10"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </h2>

          <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed max-w-sm font-medium">

            {skillsContent.description}

          </p>
        </div>

        {/* Desktop SVG */}

        <svg
          className="hidden md:block absolute inset-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >

          {/* Background dashed line */}

          <path
            d="M650,200 C400,300 200,400 300,600 C400,800 750,750 700,950 C650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Reveal mask */}

          <mask id="process-mask">

            <motion.path
              d="M650,200 C400,300 200,400 300,600 C400,800 750,750 700,950 C650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />

          </mask>

          {/* Animated dashed line */}

          <path
            d="M650,200 C400,300 200,400 300,600 C400,800 750,750 700,950 C650,1150 400,1150 300,1200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#process-mask)"
          />

        </svg>

        {/* Mobile SVG */}

        <svg
          className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 w-4 h-full pointer-events-none"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >

          <path
            d="M2 0 L2 100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          <mask id="mobile-mask">

            <motion.path
              d="M2 0 L2 100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />

          </mask>

          <path
            d="M2 0 L2 100"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#mobile-mask)"
            vectorEffect="non-scaling-stroke"
          />

        </svg>

        {/* Floating Cards */}

        <div className="relative z-10 flex flex-col items-center md:block gap-10 md:gap-0 pt-4 md:pt-0">
                    {skillsContent.cards.map((card, index) => {
            const positions = [
              "md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6",
              "md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6",
              "md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3",
              "md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3",
            ];

            const aosTypes = [
              "fade-left",
              "fade-right",
              "fade-left",
              "fade-right",
            ];

            const aosDelays = [
              "100",
              "200",
              "300",
              "400",
            ];

            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={positions[index]}
                aosType={aosTypes[index]}
                aosDelay={aosDelays[index]}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            );
          })}

          {/* Handwritten text */}

          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1250px] left-[60%] rotate-6 text-3xl text-gray-600 font-['Caveat',cursive]"
          >
            {skillsContent.endText}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
        