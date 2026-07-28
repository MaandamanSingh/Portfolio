import { motion } from "framer-motion";

const Regent = ({ setProject, nextProject }) => {
  return (
    <main className="bg-[#050505] text-white">

      {/* =======================================================
          HERO
      ======================================================== */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/projects/regent/hero.jpg"
          alt="Regent Custom Crest Website Redesign"
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

            Website Redesign • UX/UI • Responsive Design

          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            Regent
            <br />
            Custom Crest

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-white/70">

            Redesigning the digital presence of a local embroidery
            and branding company through improved usability,
            responsive layouts, accessibility,
            and a modern customer experience.

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
              ["Client","Regent Custom Crest"],
              ["Owner","Darryl Elton"],
              ["Date","April 2025"],
              ["Role","Front-End Developer & UX Contributor"],
              ["Project Type","Website Redesign"],
              ["Focus","UX • Accessibility • Responsive Design"],
            ].map(([title,value])=>(

              <motion.div
                key={title}
                whileHover={{ y:-6 }}
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

            Refreshing a Local Brand's Digital Presence

          </h2>

          <div className="space-y-8 mt-12 text-white/70 text-lg leading-9">

            <p>

              Regent Custom Crest is a well-established embroidery
              and custom branding company based in Brandon,
              Manitoba, specializing in embroidered apparel,
              stitched logos, promotional products,
              and personalized branding solutions.

            </p>

            <p>

              The objective of this project was to redesign the
              company's website so that it better reflected the
              quality of its craftsmanship while delivering a more
              modern, accessible, and user-friendly experience.

            </p>

            <p>

              Through improvements in navigation,
              visual hierarchy,
              responsive layouts,
              and accessibility,
              the redesigned website provides customers
              with a clearer understanding of the company's
              services while strengthening its overall
              digital identity.

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
                number:"100%",
                title:"Responsive",
                desc:"Optimized for desktop, tablet and mobile."
              },
              {
                number:"6+",
                title:"Key Improvements",
                desc:"Navigation, hierarchy and accessibility."
              },
              {
                number:"1",
                title:"Local Business",
                desc:"Complete website redesign project."
              },
              {
                number:"UX",
                title:"Focused",
                desc:"Designed around customer needs."
              },
            ].map((item)=>(

              <motion.div
                key={item.title}
                whileHover={{ y:-8 }}
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
          THE CHALLENGE
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Challenge
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Modernizing an Established Business Without Losing Its Identity
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
                Existing Challenges
              </h3>

              <ul className="space-y-5 text-white/70 leading-8">

                <li>• Outdated visual appearance.</li>

                <li>• Navigation made important information difficult to locate.</li>

                <li>• Limited visual hierarchy across pages.</li>

                <li>• Mobile responsiveness required improvement.</li>

                <li>• Digital experience did not reflect the company's craftsmanship.</li>

              </ul>

            </motion.div>

            <motion.div
              initial={{ opacity:0, x:50 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.7 }}
              className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-10"
            >

              <h3 className="text-2xl font-bold mb-8 text-cyan-300">
                Design Goal
              </h3>

              <p className="text-white/70 leading-9">

                Create a modern, responsive website that improves
                usability, strengthens the company's branding,
                simplifies navigation, and provides customers with
                a professional digital experience while preserving
                Regent Custom Crest's established reputation.

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
                title:"Improve Navigation",
                desc:"Help visitors find services and products quickly."
              },
              {
                title:"Modern Interface",
                desc:"Create a clean, professional visual identity."
              },
              {
                title:"Content Hierarchy",
                desc:"Present information in a clear and logical order."
              },
              {
                title:"Responsive Design",
                desc:"Ensure consistent experiences across every device."
              },
              {
                title:"Accessibility",
                desc:"Improve readability and usability for all visitors."
              },
              {
                title:"Brand Consistency",
                desc:"Reflect the quality and professionalism of the business."
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
          UX RESEARCH
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            UX Research
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Understanding the Existing Experience
          </h2>

          <p className="max-w-4xl mt-8 text-lg leading-9 text-white/70">

            Before redesigning the website, I evaluated the existing
            experience to understand where customers encountered
            friction and which improvements would have the greatest
            impact on usability, accessibility, and business goals.

          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Website Review",
                items:[
                  "Navigation analysis",
                  "Layout evaluation",
                  "Content review",
                  "Visual consistency",
                  "Usability assessment",
                ]
              },
              {
                title:"Customer Needs",
                items:[
                  "Find services quickly",
                  "Understand available products",
                  "Locate contact information",
                  "Request quotations",
                  "Browse on mobile devices",
                ]
              },
              {
                title:"Opportunities",
                items:[
                  "Modern interface",
                  "Responsive layouts",
                  "Improved hierarchy",
                  "Accessibility",
                  "Brand presentation",
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
          BUSINESS ANALYSIS
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Business Analysis
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Aligning Business Goals with Customer Needs
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 mt-16">

            <motion.div
              whileHover={{ y:-6 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >

              <h3 className="text-2xl font-bold mb-6">
                Business Goals
              </h3>

              <ul className="space-y-4 text-white/70">

                <li>Increase customer trust.</li>

                <li>Showcase embroidery services professionally.</li>

                <li>Improve online visibility.</li>

                <li>Encourage customer inquiries.</li>

                <li>Strengthen digital branding.</li>

              </ul>

            </motion.div>

            <motion.div
              whileHover={{ y:-6 }}
              className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-10"
            >

              <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                Customer Expectations
              </h3>

              <ul className="space-y-4 text-white/70">

                <li>Easy navigation.</li>

                <li>Clear service descriptions.</li>

                <li>Professional presentation.</li>

                <li>Responsive mobile experience.</li>

                <li>Simple contact options.</li>

              </ul>

            </motion.div>

          </div>

        </div>

      </section>



      {/* =======================================================
          DESIGN PROCESS
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Design Process
          </span>

          <h2 className="mt-4 text-5xl font-black">
            From Research to Responsive Design
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {[
              {
                number:"01",
                title:"Research",
                desc:"Reviewed the existing website and identified usability issues."
              },
              {
                number:"02",
                title:"Planning",
                desc:"Improved navigation, hierarchy and content flow."
              },
              {
                number:"03",
                title:"Design",
                desc:"Created modern layouts and stronger visual consistency."
              },
              {
                number:"04",
                title:"Development",
                desc:"Built responsive and accessible front-end pages."
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
            Delivering a Modern Digital Experience
          </h2>

          <p className="max-w-4xl mt-8 text-lg leading-9 text-white/70">

            The redesigned website provides Regent Custom Crest with
            a cleaner, more professional online presence that reflects
            the quality of its embroidery and branding services.
            Through improved navigation, stronger visual hierarchy,
            responsive layouts, and accessibility enhancements,
            customers can now explore the business with greater ease
            and confidence.

          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Information Architecture",
                items:[
                  "Simplified navigation",
                  "Logical content hierarchy",
                  "Improved customer journey",
                  "Clear service categories",
                  "Better information flow",
                ]
              },
              {
                title:"Visual Design",
                items:[
                  "Modern layouts",
                  "Improved typography",
                  "Consistent spacing",
                  "Professional branding",
                  "Cleaner interface",
                ]
              },
              {
                title:"Front-End Improvements",
                items:[
                  "Responsive layouts",
                  "Accessibility enhancements",
                  "Cross-device support",
                  "Improved usability",
                  "Scalable structure",
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
            My Role Throughout the Project
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"UX Evaluation",
                desc:"Reviewed the existing website to identify usability issues, navigation challenges, and opportunities for improvement."
              },
              {
                title:"Layout Design",
                desc:"Reorganized layouts to improve readability, content hierarchy, and customer experience."
              },
              {
                title:"Front-End Development",
                desc:"Developed responsive interfaces using modern HTML and CSS techniques."
              },
              {
                title:"Accessibility",
                desc:"Improved typography, spacing, contrast, and interface consistency for better usability."
              },
              {
                title:"Content Strategy",
                desc:"Structured services into logical sections so customers could quickly understand the business."
              },
              {
                title:"Responsive Testing",
                desc:"Validated layouts across desktop, tablet, and mobile devices for consistent performance."
              },
            ].map((item)=>(

              <motion.div
                key={item.title}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <h3 className="text-2xl font-bold mb-5">

                  {item.title}

                </h3>

                <p className="text-white/70 leading-8">

                  {item.desc}

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

            Tools & Skills

          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            {[
              "HTML5",
              "CSS3",
              "Responsive Design",
              "UX Design",
              "Accessibility",
              "Wireframing",
              "Content Strategy",
              "Visual Hierarchy",
              "Typography",
              "User Experience",
            ].map((tech)=>(

              <span
                key={tech}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300"
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

            Website Redesign Showcase

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                image:"old-website",
                title:"Original Website"
              },
              {
                image:"wireframes",
                title:"Wireframes"
              },
              {
                image:"branding",
                title:"Brand Improvements"
              },
              {
                image:"homepage",
                title:"Homepage Redesign"
              },
              {
                image:"responsive",
                title:"Responsive Layout"
              },
              {
                image:"final-design",
                title:"Final Website"
              },
            ].map((item)=>(

              <motion.div
                key={item.image}
                whileHover={{ y:-8, scale:1.02 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >

                <img
                  src={`/projects/regent/${item.image}.jpg`}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover transition duration-500 hover:scale-105"
                />

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
              "Modern and responsive website redesign",
              "Improved navigation and information hierarchy",
              "Cleaner visual identity aligned with the brand",
              "Enhanced accessibility and readability",
              "Optimized experience across desktop, tablet, and mobile",
              "More intuitive customer journey",
              "Professional presentation of products and services",
              "Scalable structure for future website growth",
            ].map((result)=>(

              <motion.div
                key={result}
                whileHover={{ x:8 }}
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
            Strengthening a Local Business Online
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {[
              "Improved the company's professional online presence.",
              "Made services easier for customers to discover.",
              "Created a more intuitive navigation experience.",
              "Enhanced visual consistency across the website.",
              "Improved usability for desktop and mobile visitors.",
              "Built greater customer confidence through modern design.",
              "Created a scalable foundation for future updates.",
              "Better reflected the craftsmanship and quality of the business.",
            ].map((item)=>(

              <motion.div
                key={item}
                whileHover={{ y:-6 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <p className="leading-8 text-white/80">

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

            Working on the Regent Custom Crest redesign reinforced the
            importance of designing for both business objectives and user
            expectations. Rather than changing the company's identity,
            the focus was on improving how customers experienced the
            brand through better navigation, clearer content hierarchy,
            responsive layouts, and thoughtful visual design.

          </p>

          <p className="mt-8 text-lg leading-9 text-white/70">

            This project strengthened my front-end development skills
            while deepening my understanding of accessibility,
            responsive design, and user experience. It demonstrated
            how strategic design improvements can modernize an existing
            business without sacrificing the trust and recognition it
            has already built within its community.

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
              discover how I approach web development, UX/UI design,
              branding, and interactive digital experiences across
              different industries.

            </p>

            <motion.button
              whileHover={{ scale:1.05 }}
              whileTap={{ scale:.97 }}
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

export default Regent;