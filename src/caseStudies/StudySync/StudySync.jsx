import { motion } from "framer-motion";

const StudySync = ({ setProject, nextProject }) => {
  return (
    <main className="bg-[#050505] text-white">

      {/* =======================================================
          HERO
      ======================================================== */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/projects/studysync/hero.jpg"
          alt="StudySync Mobile App"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#050505]" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto px-8 text-center"
        >

          <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm uppercase tracking-[4px] text-cyan-300">

            UX Design • Mobile App • FlutterFlow

          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            StudySync

            <br />

            Student Productivity App

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-white/70">

            A mobile productivity application designed to help students
            organize coursework, manage assignments, monitor deadlines,
            and reduce academic stress through a clean, intuitive,
            user-centered experience.

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
              ["Project Type", "UX/UI Mobile Application"],
              ["Client", "Academic Project"],
              ["Role", "UX Designer & Mobile Developer"],
              ["Platform", "FlutterFlow"],
              ["Backend", "Firebase"],
              ["Focus", "User Experience & Productivity"],
            ].map(([title, value]) => (

              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <h3 className="text-cyan-300 uppercase tracking-[3px] text-sm mb-5">

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

          <span className="uppercase tracking-[4px] text-cyan-300">

            Overview

          </span>

          <h2 className="mt-4 text-5xl font-black">

            Helping Students Stay Organized

          </h2>

          <div className="space-y-8 mt-12 text-white/70 text-lg leading-9">

            <p>

              StudySync was created to simplify academic task
              management by providing students with one centralized
              platform for tracking assignments, organizing coursework,
              and monitoring upcoming deadlines.

            </p>

            <p>

              Rather than overwhelming users with unnecessary
              functionality, the application focuses on delivering
              a clean, distraction-free experience that encourages
              productivity and reduces academic stress.

            </p>

            <p>

              The project combined UX research, user journey mapping,
              interface design, FlutterFlow development, Firebase
              integration, and usability testing to transform an
              initial concept into a functional mobile application.

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
                number: "20+",
                title: "Research Insights",
                desc: "Student productivity pain points identified"
              },
              {
                number: "6",
                title: "Core Screens",
                desc: "Designed and developed"
              },
              {
                number: "100%",
                title: "Responsive",
                desc: "Optimized for mobile devices"
              },
              {
                number: "1",
                title: "Complete Workflow",
                desc: "From UX research to development"
              }
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center"
              >

                <div className="text-5xl font-black text-cyan-300">

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
          PROBLEM STATEMENT
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Problem
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Students Struggle to Stay Organized
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">

            <motion.div
              initial={{ opacity:0,x:-50 }}
              whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.7 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >

              <h3 className="text-2xl font-bold mb-8">
                The Challenge
              </h3>

              <p className="text-white/70 leading-9">

                Students often rely on multiple applications to manage
                coursework, assignments, notes, and deadlines. Switching
                between different tools increases cognitive load and makes
                it easier to overlook important academic responsibilities.

              </p>

            </motion.div>

            <motion.div
              initial={{ opacity:0,x:50 }}
              whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.7 }}
              className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-10"
            >

              <h3 className="text-2xl font-bold mb-8 text-cyan-300">
                Design Goal
              </h3>

              <p className="text-white/70 leading-9">

                Create one intuitive mobile application where students
                can organize assignments, monitor deadlines, manage daily
                tasks, and reduce academic stress through a simple,
                distraction-free experience.

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

          <span className="uppercase tracking-[4px] text-cyan-300">
            Objectives
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Project Goals
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Centralized Task Management",
                desc:"Provide one platform for organizing assignments and coursework."
              },
              {
                title:"Deadline Tracking",
                desc:"Help students stay aware of upcoming due dates."
              },
              {
                title:"Simple Navigation",
                desc:"Reduce friction through an intuitive interface."
              },
              {
                title:"Mobile First",
                desc:"Design an experience optimized for smartphones."
              },
              {
                title:"Cloud Synchronization",
                desc:"Store assignment data securely using Firebase."
              },
              {
                title:"User-Centered Design",
                desc:"Build features based on research instead of assumptions."
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
          RESEARCH PROCESS
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            UX Research
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Understanding Student Needs
          </h2>

          <p className="max-w-4xl mt-8 text-lg text-white/70 leading-9">

            Before designing the interface, I researched how students
            currently manage coursework, what challenges they face,
            and where existing productivity applications create
            unnecessary complexity.

          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Research",
                items:[
                  "Interviewed student workflows",
                  "Identified productivity pain points",
                  "Observed assignment management habits",
                  "Documented usability challenges"
                ]
              },
              {
                title:"Analysis",
                items:[
                  "Grouped common frustrations",
                  "Prioritized recurring issues",
                  "Defined core features",
                  "Established user goals"
                ]
              },
              {
                title:"Planning",
                items:[
                  "Created information architecture",
                  "Designed navigation",
                  "Planned screen hierarchy",
                  "Prepared design system"
                ]
              }
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
          USER PERSONA
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            User Persona
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Designing for Real Students
          </h2>

          <motion.div
            whileHover={{ y:-6 }}
            className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >

            <div className="grid lg:grid-cols-[250px_1fr] gap-12">

              <div>

                <img
                  src="/projects/studysync/persona.jpg"
                  alt="User Persona"
                  className="rounded-3xl"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Emily Carter
                </h3>

                <p className="mt-3 text-white/60">
                  20 Years Old • College Student • Business Administration
                </p>

                <div className="grid md:grid-cols-2 gap-10 mt-10">

                  <div>

                    <h4 className="text-cyan-300 font-semibold mb-5">
                      Goals
                    </h4>

                    <ul className="space-y-3 text-white/70">

                      <li>Stay organized throughout the semester.</li>

                      <li>Track assignments and deadlines.</li>

                      <li>Reduce stress during busy weeks.</li>

                      <li>Manage coursework efficiently.</li>

                    </ul>

                  </div>

                  <div>

                    <h4 className="text-cyan-300 font-semibold mb-5">
                      Frustrations
                    </h4>

                    <ul className="space-y-3 text-white/70">

                      <li>Uses multiple productivity apps.</li>

                      <li>Frequently forgets deadlines.</li>

                      <li>Current apps feel overwhelming.</li>

                      <li>Needs faster task management.</li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>



      {/* =======================================================
          USER JOURNEY
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            User Journey
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Student Workflow
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {[
              {
                number:"01",
                title:"Dashboard",
                desc:"View today's assignments and upcoming deadlines."
              },
              {
                number:"02",
                title:"Add Task",
                desc:"Create new assignments with due dates and priorities."
              },
              {
                number:"03",
                title:"Manage Tasks",
                desc:"Edit, organize and prioritize coursework."
              },
              {
                number:"04",
                title:"Complete",
                desc:"Mark assignments complete and update progress."
              },
            ].map((step)=>(
              <motion.div
                key={step.number}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center"
              >

                <div className="text-5xl font-black text-cyan-300 mb-6">
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
          SOLUTION
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Solution
          </span>

          <h2 className="mt-4 text-5xl font-black">
            A Student-Centered Productivity Experience
          </h2>

          <p className="max-w-4xl mt-8 text-lg text-white/70 leading-9">

            StudySync was designed to remove unnecessary complexity from
            academic task management. Instead of overwhelming users with
            excessive features, every screen focuses on helping students
            organize coursework, monitor deadlines, and stay productive
            through a clean and intuitive interface.

          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Dashboard",
                items:[
                  "Assignment overview",
                  "Upcoming deadlines",
                  "Today's priorities",
                  "Progress tracking",
                  "Clean navigation"
                ]
              },
              {
                title:"Task Management",
                items:[
                  "Create assignments",
                  "Edit tasks",
                  "Delete completed work",
                  "Track progress",
                  "Deadline management"
                ]
              },
              {
                title:"Mobile Experience",
                items:[
                  "Responsive layouts",
                  "Minimal interface",
                  "Fast interactions",
                  "Firebase integration",
                  "Accessible navigation"
                ]
              },
            ].map((card)=>(
              <motion.div
                key={card.title}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
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
          MY CONTRIBUTIONS
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            My Contributions
          </span>

          <h2 className="mt-4 text-5xl font-black">
            End-to-End Product Development
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"UX Research",
                desc:"Researched student workflows, productivity habits, and usability challenges to understand real user needs."
              },
              {
                title:"Wireframing",
                desc:"Designed low and high-fidelity wireframes in Figma to validate navigation, layouts, and interactions."
              },
              {
                title:"UI Design",
                desc:"Created an accessible interface with clear typography, spacing, hierarchy, and consistent components."
              },
              {
                title:"FlutterFlow",
                desc:"Developed the mobile application using FlutterFlow with responsive layouts and reusable components."
              },
              {
                title:"Firebase",
                desc:"Integrated Firebase to securely manage assignment data and real-time updates."
              },
              {
                title:"Testing",
                desc:"Refined navigation and usability through multiple testing iterations and feedback."
              },
            ].map((card)=>(
              <motion.div
                key={card.title}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <h3 className="text-2xl font-bold mb-5">
                  {card.title}
                </h3>

                <p className="text-white/70 leading-8">
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

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Technologies
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Tools & Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            {[
              "FlutterFlow",
              "Firebase",
              "Figma",
              "UX Research",
              "Wireframing",
              "User Flow",
              "UI Design",
              "Responsive Design",
              "Mobile Development",
              "User Testing",
            ].map((tech)=>(
              <span
                key={tech}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-cyan-300 font-semibold"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          PROJECT GALLERY
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Gallery
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Design & Development Journey
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                image:"./src/caseStudies/StudySync/wireframes.jpg",
                title:"Wireframes"
              },
              {
                image:"./src/caseStudies/StudySync/assets/mockups.jpg",
                title:"UI Mockups"
              },
              {
                image:"./src/caseStudies/StudySync/assets/flutterflow.jpg",
                title:"FlutterFlow Development"
              },
              {
                image:"./src/caseStudies/StudySync/assets/firebase.jpg",
                title:"Firebase Integration"
              },
              {
                image:"./src/caseStudies/StudySync/assets/persona.jpg",
                title:"User Persona"
              },
              {
                image:"./src/caseStudies/StudySync/assets/final-app.jpg",
                title:"Final Mobile App"
              },
            ].map((item)=>(

              <motion.div
                key={item.image}
                whileHover={{ y:-8, scale:1.02 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-90 w-full bg-black object-contain transition duration-500 hover:scale-105"         />

                <div className="p-6">

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* =======================================================
          RESULTS
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Results
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Project Outcomes
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-16">

            {[
              "Fully functional mobile application",
              "Firebase-powered task management",
              "Student-focused dashboard",
              "Responsive mobile interface",
              "Simple and intuitive navigation",
              "Improved usability through user testing",
              "End-to-end UX design process",
              "Scalable architecture for future expansion",
            ].map((result) => (

              <motion.div
                key={result}
                whileHover={{ x: 8 }}
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6"
              >

                <span className="text-lg font-medium">
                  ✔ {result}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          IMPACT
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Impact
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Creating a Better Academic Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {[
              "Simplified assignment management for students.",
              "Reduced complexity found in traditional productivity apps.",
              "Improved usability through user-centered design.",
              "Demonstrated the complete UX design lifecycle.",
              "Strengthened FlutterFlow and Firebase development skills.",
              "Created a scalable foundation for future features.",
            ].map((item) => (

              <motion.div
                key={item}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <p className="text-white/80 leading-8">
                  ✓ {item}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          REFLECTION
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-5xl mx-auto px-8 text-center">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Reflection
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Lessons Learned
          </h2>

          <p className="mt-12 text-lg leading-9 text-white/70">

            StudySync became one of the most rewarding projects in my
            academic journey because it allowed me to experience every
            stage of product development—from understanding user needs
            through research to designing interfaces, developing the
            application with FlutterFlow, integrating Firebase, and
            refining the experience through usability testing.

          </p>

          <p className="mt-8 text-lg leading-9 text-white/70">

            More importantly, this project reinforced that successful
            digital products are built by solving real user problems,
            not by adding unnecessary features. Focusing on simplicity,
            accessibility, and thoughtful design resulted in an
            experience that feels intuitive while supporting students'
            daily academic workflow.

          </p>

        </div>

      </section>



      {/* =======================================================
          NEXT CASE STUDY
      ======================================================== */}

      <section className="pb-32">

        <div className="max-w-5xl mx-auto px-8">

          <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-14 text-center">

            <span className="uppercase tracking-[4px] text-cyan-300">

              Continue Exploring

            </span>

            <h2 className="mt-5 text-5xl font-black">

              Ready for the Next Project?

            </h2>

            <p className="mt-8 max-w-2xl mx-auto text-lg leading-9 text-white/70">

              Continue exploring more projects from my portfolio and
              discover how I approach web development, UX design,
              branding, and interactive digital experiences.

            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .97 }}
              onClick={() => nextProject && setProject(nextProject)}
              className="mt-12 rounded-full bg-cyan-400 px-10 py-5 text-lg font-bold text-black shadow-lg shadow-cyan-500/30 transition"
            >

              {nextProject
                ? "Next Case Study →"
                : "Finish Portfolio"}

            </motion.button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default StudySync;