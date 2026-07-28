import { motion } from "framer-motion";

const AdventureGame = ({ setProject, nextProject, onFinish }) => {
      return (
    <main className="bg-[#030303] text-white">

      {/* =======================================================
          HERO
      ======================================================== */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/projects/game/hero.jpg"
          alt="Adventure Game Prototype"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#030303]" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="relative z-10 max-w-6xl mx-auto px-8 text-center"
        >

          <span className="inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 uppercase tracking-[4px] text-sm text-amber-300">

            Game Development • Unreal Engine 5

          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            Adventure
            <br />
            Game Prototype

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-white/70">

            My first Unreal Engine project focused on creating an
            interactive adventure experience using Blueprint scripting,
            environmental storytelling, and real-time gameplay mechanics.

          </p>

        </motion.div>

      </section>



      {/* =======================================================
          PROJECT INFORMATION
      ======================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              ["Project Type","Adventure Game Prototype"],
              ["Client","Academic Project"],
              ["Duration","August 2025 – December 2025"],
              ["Role","Game Designer & Developer"],
              ["Engine","Unreal Engine 5"],
              ["Focus","Gameplay & Environment Design"],
            ].map(([title,value])=>(

              <motion.div
                key={title}
                whileHover={{ y:-6 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <h3 className="text-sm uppercase tracking-[3px] text-amber-300 mb-5">

                  {title}

                </h3>

                <p className="text-xl font-semibold">

                  {value}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          OVERVIEW
      ======================================================== */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">

            Overview

          </span>

          <h2 className="mt-4 text-5xl font-black">

            My First Journey into Game Development

          </h2>

          <div className="space-y-8 mt-12 text-lg leading-9 text-white/70">

            <p>

              This project marked my first experience working with
              Unreal Engine and real-time game development.
              Rather than simply following tutorials,
              I challenged myself to build an interactive
              adventure prototype that combined exploration,
              player interaction, Blueprint scripting,
              and environmental storytelling.

            </p>

            <p>

              The objective was to understand how professional game
              engines work while learning the core principles behind
              level design, player movement, lighting,
              gameplay logic, and immersive world building.

            </p>

            <p>

              By the end of the project I had created a playable
              experience where players explore a mysterious
              environment, interact with objects,
              unlock rewards,
              and complete a simple gameplay objective.

            </p>

          </div>

        </div>

      </section>



      {/* =======================================================
          PROJECT HIGHLIGHTS
      ======================================================== */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                number:"UE5",
                title:"Game Engine",
                desc:"Built entirely in Unreal Engine 5."
              },
              {
                number:"Blueprint",
                title:"Visual Scripting",
                desc:"Gameplay mechanics developed without traditional coding."
              },
              {
                number:"3D",
                title:"Environment",
                desc:"Designed an immersive world focused on exploration."
              },
              {
                number:"Playable",
                title:"Prototype",
                desc:"Complete gameplay loop with interactions and rewards."
              },
            ].map((item)=>(

              <motion.div
                key={item.title}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 text-center"
              >

                <div className="text-4xl md:text-5xl font-black text-amber-300">

                  {item.number}

                </div>

                <h3 className="mt-5 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 text-white/70">

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* =======================================================
          THE CHALLENGE
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">
            The Challenge
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Learning an Entire Game Engine from Scratch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">

            <motion.div
              initial={{ opacity:0, x:-50 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.7 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >

              <h3 className="text-2xl font-bold mb-8">

                Technical Challenges

              </h3>

              <ul className="space-y-5 text-white/70 leading-8">

                <li>• Learning Unreal Engine for the first time.</li>

                <li>• Understanding Blueprint Visual Scripting.</li>

                <li>• Building interactive gameplay systems.</li>

                <li>• Designing believable 3D environments.</li>

                <li>• Connecting gameplay mechanics into one playable experience.</li>

              </ul>

            </motion.div>

            <motion.div
              initial={{ opacity:0, x:50 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.7 }}
              className="rounded-3xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-xl p-10"
            >

              <h3 className="text-2xl font-bold mb-8 text-amber-300">

                Development Goal

              </h3>

              <p className="text-white/70 leading-9">

                Rather than simply completing tutorials,
                my objective was to understand how a modern
                game engine works by creating an original,
                playable adventure prototype that combined
                exploration, interaction, environmental
                storytelling, and Blueprint-driven gameplay.

              </p>

            </motion.div>

          </div>

        </div>

      </section>



      {/* =======================================================
          OBJECTIVES
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">

            Objectives

          </span>

          <h2 className="mt-4 text-5xl font-black">

            Project Goals

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Learn Unreal Engine",
                desc:"Understand the engine, editor, and development workflow."
              },
              {
                title:"Blueprint Scripting",
                desc:"Create gameplay systems using visual scripting."
              },
              {
                title:"Environment Design",
                desc:"Build an immersive world focused on exploration."
              },
              {
                title:"Interactive Gameplay",
                desc:"Develop engaging player interactions."
              },
              {
                title:"Atmosphere",
                desc:"Use lighting and fog to enhance immersion."
              },
              {
                title:"Playable Prototype",
                desc:"Deliver a complete adventure experience."
              },
            ].map((goal)=>(

              <motion.div
                key={goal.title}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <h3 className="text-2xl font-bold mb-5">

                  {goal.title}

                </h3>

                <p className="text-white/70 leading-8">

                  {goal.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          LEARNING STRATEGY
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">

            Learning Strategy

          </span>

          <h2 className="mt-4 text-5xl font-black">

            Building Knowledge Through Experimentation

          </h2>

          <p className="max-w-4xl mt-8 text-lg leading-9 text-white/70">

            Since Unreal Engine was completely new to me,
            I adopted a hands-on learning approach by
            combining structured tutorials with continuous
            experimentation. Every feature was built,
            tested, improved, and refined until I fully
            understood how each gameplay system worked.

          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Engine Fundamentals",
                items:[
                  "Editor navigation",
                  "Viewport controls",
                  "Asset management",
                  "Scene organization",
                  "Project structure",
                ]
              },
              {
                title:"Blueprint System",
                items:[
                  "Blueprint basics",
                  "Gameplay events",
                  "Interactive objects",
                  "Player input",
                  "Visual scripting",
                ]
              },
              {
                title:"Environment Design",
                items:[
                  "Lighting",
                  "Fog effects",
                  "Asset placement",
                  "World building",
                  "Environmental storytelling",
                ]
              },
            ].map((card)=>(

              <motion.div
                key={card.title}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >

                <h3 className="text-2xl font-bold mb-6">

                  {card.title}

                </h3>

                <ul className="space-y-4 text-white/70">

                  {card.items.map(item=>(
                    <li key={item}>
                      ✓ {item}
                    </li>
                  ))}

                </ul>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          DEVELOPMENT PROCESS
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">

            Development Process

          </span>

          <h2 className="mt-4 text-5xl font-black">

            From Learning to Gameplay

          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {[
              {
                number:"01",
                title:"Learn",
                desc:"Explored Unreal Engine, Blueprints, assets, lighting, and development tools."
              },
              {
                number:"02",
                title:"Design",
                desc:"Built an atmospheric environment focused on exploration."
              },
              {
                number:"03",
                title:"Develop",
                desc:"Created player movement, interaction systems, and Blueprint gameplay."
              },
              {
                number:"04",
                title:"Test",
                desc:"Refined mechanics, interactions, lighting, and overall gameplay."
              },
            ].map((step)=>(

              <motion.div
                key={step.number}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 text-center"
              >

                <div className="text-5xl font-black text-amber-300 mb-6">

                  {step.number}

                </div>

                <h3 className="text-2xl font-bold">

                  {step.title}

                </h3>

                <p className="mt-5 text-white/70 leading-8">

                  {step.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* =======================================================
          GAMEPLAY FEATURES
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">
            Gameplay
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Creating an Interactive Adventure Experience
          </h2>

          <p className="max-w-4xl mt-8 text-lg leading-9 text-white/70">

            Once the core environment was completed, I focused on
            implementing gameplay mechanics that encouraged exploration
            and rewarded player interaction. Using Unreal Engine's
            Blueprint Visual Scripting system, I transformed a static
            environment into an engaging playable experience where each
            interaction contributes to the player's progression.

          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Exploration",
                items:[
                  "Open 3D environment",
                  "Free player movement",
                  "Environmental storytelling",
                  "Immersive world design",
                  "Atmospheric exploration"
                ]
              },
              {
                title:"Interactive Gameplay",
                items:[
                  "Blueprint-driven interaction",
                  "Interactive treasure chest",
                  "E key interaction system",
                  "Object animations",
                  "Mission progression"
                ]
              },
              {
                title:"Reward System",
                items:[
                  "Chest opening animation",
                  "Glowing sword spawn",
                  "Mission completed message",
                  "Visual player feedback",
                  "Gameplay satisfaction"
                ]
              }

            ].map((feature)=>(

              <motion.div
                key={feature.title}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <h3 className="text-2xl font-bold mb-8">

                  {feature.title}

                </h3>

                <ul className="space-y-4 text-white/70">

                  {feature.items.map((item)=>(

                    <li key={item}>
                      ✓ {item}
                    </li>

                  ))}

                </ul>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          MY CONTRIBUTIONS
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">

            My Contributions

          </span>

          <h2 className="mt-4 text-5xl font-black">

            Responsibilities Throughout Development

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Level Design",
                desc:"Designed and organized the game environment using terrain, environmental assets, and composition techniques to encourage exploration."
              },
              {
                title:"Blueprint Scripting",
                desc:"Developed gameplay interactions using Unreal Engine Blueprints including player input, object events, and mission logic."
              },
              {
                title:"Gameplay Mechanics",
                desc:"Implemented player movement, camera controls, object interaction, and progression systems."
              },
              {
                title:"Environment Art",
                desc:"Enhanced atmosphere using lighting, fog effects, environmental assets, and scene composition."
              },
              {
                title:"Testing & Debugging",
                desc:"Continuously tested gameplay mechanics, interaction triggers, collision, and player movement."
              },
              {
                title:"Problem Solving",
                desc:"Learned unfamiliar systems quickly, experimented with different solutions, and refined gameplay through iteration."
              }

            ].map((card)=>(

              <motion.div
                key={card.title}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8"
              >

                <h3 className="text-2xl font-bold">

                  {card.title}

                </h3>

                <p className="mt-6 text-white/70 leading-8">

                  {card.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          TECHNOLOGIES
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <span className="uppercase tracking-[4px] text-amber-300">

            Technologies

          </span>

          <h2 className="mt-4 text-5xl font-black">

            Tools & Software

          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            {[
              "Unreal Engine 5",
              "Blueprint Visual Scripting",
              "Level Design",
              "Lighting",
              "Fog Effects",
              "Environment Design",
              "Gameplay Logic",
              "Player Controller",
              "Asset Management",
              "Visual Storytelling",
            ].map((tech)=>(

              <motion.span
                key={tech}
                whileHover={{ scale:1.08 }}
                className="rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-3 text-amber-300 font-medium"
              >

                {tech}

              </motion.span>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          GAMEPLAY GALLERY
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">

            Gallery

          </span>

          <h2 className="mt-4 text-5xl font-black">

            Gameplay Showcase

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                image:"/projects/game/environment.jpg",
                title:"Adventure Environment"
              },
              {
                image:"/projects/game/exploration.jpg",
                title:"Player Exploration"
              },
              {
                image:"/projects/game/chest.jpg",
                title:"Interactive Treasure Chest"
              },
              {
                image:"/projects/game/sword.jpg",
                title:"Reward Spawn System"
              },
              {
                image:"/projects/game/blueprints.jpg",
                title:"Blueprint Gameplay Logic"
              },
              {
                image:"/projects/game/mission.jpg",
                title:"Mission Complete"
              }

            ].map((image)=>(

              <motion.figure
                key={image.title}
                whileHover={{ y:-8 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >

                <img
                  src={image.image}
                  alt={image.title}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                />

                <figcaption className="p-6 text-center text-white/80">

                  {image.title}

                </figcaption>

              </motion.figure>

            ))}

          </div>

        </div>

      </section>
            {/* =======================================================
          RESULTS
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">

            Results

          </span>

          <h2 className="mt-4 text-5xl font-black">

            Final Gameplay Experience

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Playable 3D adventure prototype",
              "Interactive gameplay mechanics",
              "Blueprint-driven interactions",
              "Responsive player controls",
              "Atmospheric lighting & fog",
              "Interactive reward system",
              "Mission completion feedback",
              "Immersive exploration experience",
            ].map((item)=>(

              <motion.div
                key={item}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center"
              >

                <div className="text-5xl mb-6">

                  ✓

                </div>

                <p className="text-lg leading-8">

                  {item}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          SKILLS GAINED
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <span className="uppercase tracking-[4px] text-amber-300">

            Skills Gained

          </span>

          <h2 className="mt-4 text-5xl font-black">

            Technical Growth

          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            {[
              "Unreal Engine Fundamentals",
              "Blueprint Visual Scripting",
              "Level Design",
              "Environment Design",
              "Interactive Gameplay",
              "Lighting & Atmosphere",
              "Player Controller",
              "Gameplay Testing",
              "Debugging",
              "Creative Problem Solving",
            ].map((skill)=>(

              <motion.span
                key={skill}
                whileHover={{ scale:1.08 }}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/80"
              >

                {skill}

              </motion.span>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          REFLECTION
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-5xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-amber-300">

            Reflection

          </span>

          <h2 className="mt-4 text-5xl font-black">

            From Player to Creator

          </h2>

          <div className="mt-12 space-y-8 text-lg leading-9 text-white/70">

            <p>

              This project represented a major milestone in my
              learning journey. It challenged me to step beyond
              traditional web development and explore the world
              of interactive game design.

            </p>

            <p>

              Working with Unreal Engine taught me how
              environments, gameplay systems, lighting,
              Blueprint scripting, and visual storytelling
              combine to create engaging player experiences.

            </p>

            <p>

              More importantly, this experience strengthened my
              confidence in learning complex technologies,
              experimenting with new ideas, and transforming
              creative concepts into functional interactive
              experiences. It inspired me to continue expanding
              my knowledge of game development and build even
              more immersive projects in the future.

            </p>

          </div>

        </div>

      </section>



      {/* =======================================================
          NEXT CASE STUDY
      ======================================================== */}

      <section className="py-32">

        <div className="max-w-5xl mx-auto px-8">

          <motion.div
            whileHover={{ y:-6 }}
            className="rounded-[40px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-white/5 p-16 text-center"
          >

            <span className="uppercase tracking-[4px] text-amber-300">

              Continue Exploring

            </span>
<h2 className="mt-6 text-5xl font-black">
I appreciate you spent the time reviewing my work!
</h2>

            <p className="max-w-3xl mx-auto mt-8 text-lg leading-9 text-white/70">

            
            </p>

           <button
 onClick={() => {
  if (nextProject) {
    setProject(nextProject);
  } else {
    onFinish();
  }
}}   
  className="mt-12 rounded-full bg-amber-400 px-10 py-5 text-black font-bold transition hover:scale-105 hover:bg-amber-300"
>
  {nextProject ? "Next Case Study →" : "Finish"}
</button>

          </motion.div>

        </div>

      </section>

    </main>

  );
};

export default AdventureGame;