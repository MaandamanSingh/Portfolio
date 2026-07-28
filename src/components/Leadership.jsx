import React from "react";
import { motion } from "framer-motion";
import { leadershipList } from "../data/portfolioData";

const LeadershipCard = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.12,
      }}
      className="relative mb-20"
    >
      <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-10">

        {/* LEFT SIDE */}

        <div
          className={`${
            isLeft ? "block" : "hidden md:block"
          }`}
        >
          {isLeft && (
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              shadow-xl
              hover:border-red-500/40
              hover:shadow-[0_25px_50px_rgba(255,42,42,0.15)]
              transition-all duration-500"
            >
              <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 uppercase tracking-[2px] text-[11px] font-black">

                {item.badge}

              </span>

              <h3 className="mt-5 text-3xl font-black text-white">

                {item.title}

              </h3>

              <p className="mt-3 uppercase tracking-[3px] text-red-400 text-xs font-bold">

                {item.role}

              </p>

              <p className="mt-2 text-white/50">

                {item.organization}

              </p>

              <p className="mt-6 text-white/70 leading-8">

                {item.description}

              </p>
            </motion.div>
          )}
        </div>

        {/* CENTER TIMELINE */}

        <div className="relative flex justify-center">

          <div className="w-[2px] h-full bg-gradient-to-b from-red-500 via-red-500/70 to-white/10 absolute"></div>

          <motion.div
            whileInView={{
              scale: [0, 1.25, 1],
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative z-20 w-5 h-5 rounded-full bg-red-500 border-[5px] border-[#0a0a0a] shadow-[0_0_20px_rgba(239,68,68,0.9)]"
          />

        </div>

        {/* RIGHT SIDE */}
                <div
          className={`${
            isLeft ? "hidden md:block" : "block"
          }`}
        >
          {!isLeft && (
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              shadow-xl
              hover:border-red-500/40
              hover:shadow-[0_25px_50px_rgba(255,42,42,0.15)]
              transition-all duration-500"
            >
              <span className="inline-block px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 uppercase tracking-[2px] text-[11px] font-black">
                {item.badge}
              </span>

              <h3 className="mt-5 text-3xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 uppercase tracking-[3px] text-red-400 text-xs font-bold">
                {item.role}
              </p>

              <p className="mt-2 text-white/50">
                {item.organization}
              </p>

              <p className="mt-6 text-white/70 leading-8">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>

      </div>
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-[#0a0a0a] py-28 px-6 md:px-12
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:80px_80px]"
    >
      {/* Background Glow */}

      <div className="absolute top-24 left-0 w-72 h-72 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-red-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-white/70 backdrop-blur">
            Activities
          </div>

          <h2 className="mt-7 text-5xl md:text-6xl font-black text-white">
            Leadership & Engagement
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-white/55">
            Building leadership through client collaboration,
            academic projects, teamwork, and continuous learning.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Main Vertical Line */}

          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block w-[2px] bg-gradient-to-b from-red-500 via-red-500/70 to-white/10" />

          {leadershipList.map((item, index) => (
            <LeadershipCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Leadership;