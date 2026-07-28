import React from "react";
import { motion } from "framer-motion";
import { technicalSkills } from "../data/portfolioData";

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="relative bg-black py-28 px-6 overflow-hidden
      bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
      bg-[size:70px_70px]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="inline-block border border-white-300 rounded-full px-5 py-2 text-sm font-bold text-gray-600 shadow-sm bg-white">

            {technicalSkills.badge}

          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-black text-white-900 leading-tight">

            {technicalSkills.heading}

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-500 text-lg leading-8">

            {technicalSkills.description}

          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {technicalSkills.categories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-[32px] border border-white-200 bg-black p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(255,42,42,0.15)] transition-all duration-500"
            >

              {/* Card Title */}

              <h3 className="text-2xl font-black text-white-900 mb-6">

                {category.title}

              </h3>

              <div className="w-full h-px bg-white-200 mb-8"></div>

              {/* Skills */}

              <div className="space-y-5">

                {category.skills.map((skill, i) => (

                  <div key={i}>

                    <div className="flex justify-between mb-2">

                      <span className="font-semibold text-white-800">

                        {skill.name}

                      </span>

                      <span className="text-red-500 font-bold text-sm">

                        {skill.level}%

                      </span>

                    </div>

                    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.08,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400"
                      />
                    </div>

                  </div>

                ))}
                              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-400/10 blur-[140px] rounded-full pointer-events-none"></div>

    </section>
  );
};

export default TechnicalSkills;