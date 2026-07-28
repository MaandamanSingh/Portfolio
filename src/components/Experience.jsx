import React from "react";
import { motion } from "framer-motion";
import { experienceContent } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-red-400 font-bold">
            {experienceContent.badge}
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            {experienceContent.heading}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-white/60 leading-8">
            {experienceContent.description}
          </p>
        </motion.div>

        <div className="space-y-10">
          {experienceContent.experiences.map((exp,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*0.1}}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black text-white">
                    {exp.position}
                  </h3>
                  <p className="text-red-400 font-semibold mt-2">
                    {exp.company}
                  </p>
                  <p className="text-white/50 mt-1">
                    {exp.location}
                  </p>
                </div>

                <div className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-red-300 font-semibold">
                  {exp.duration}
                </div>
              </div>

              <p className="mt-8 text-white/70 leading-8">
                {exp.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {exp.achievements.map((item,i)=>(
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <span className="text-red-400 font-bold">✓</span>
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
