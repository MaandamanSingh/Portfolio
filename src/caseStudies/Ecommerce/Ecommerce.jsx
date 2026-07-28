import { motion } from "framer-motion";

const Ecommerce = ({ setProject, nextProject }) => {
  return (
    <main className="bg-[#050505] text-white">

      {/* =======================================================
          HERO
      ======================================================== */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/projects/ecommerce/hero.jpg"
          alt="Bibliophile Club Website"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#050505]" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="relative z-10 max-w-6xl mx-auto px-8 text-center"
        >

          <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm tracking-widest uppercase text-cyan-300">
            Full Stack Web Development
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Bibliophile
            <br />
            club website
          </h1>

          <p className="mt-8 text-xl text-white/70 max-w-3xl mx-auto leading-9">

            Transforming a static ecommerce concept into a fully functional,
            database-driven shopping platform through backend integration,
            user authentication, dynamic product management,
            and modern user experience.

          </p>

        </motion.div>

      </section>



      {/* =======================================================
          PROJECT INFO
      ======================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              ["Project Type","Bibliophile Club Website"],
              ["Client","Academic Project"],
              ["Duration","March 2025 – August 2025"],
              ["Role","Full Stack Web Developer"],
              ["Technologies","PHP • MySQL • HTML • CSS • JavaScript"],
              ["Focus","Backend Development & Database Integration"],
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
            Bringing an Ecommerce Platform to Life
          </h2>

          <div className="space-y-8 mt-12 text-white/70 leading-9 text-lg">

            <p>

              This project focused on transforming a partially functional
              ecommerce website into a fully operational,
              database-driven shopping platform.

            </p>

            <p>

              While the original interface visually resembled an online
              store, many core features—including product management,
              shopping cart functionality,
              authentication,
              and contact forms—were static.

            </p>

            <p>

              My objective was to rebuild the application using PHP,
              MySQL, JavaScript,
              and backend integration while improving usability,
              maintainability,
              and scalability.

            </p>

          </div>

        </div>

      </section>
            {/* =======================================================
          THE CHALLENGE
      ======================================================== */}

      <section className="py-24 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            The Challenge
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Converting Static Pages into Dynamic Functionality
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
                Existing Problems
              </h3>

              <ul className="space-y-5 text-white/70 leading-8">

                <li>• Static product pages with no database connection.</li>

                <li>• Shopping cart buttons without backend functionality.</li>

                <li>• Contact forms disconnected from any database.</li>

                <li>• No user authentication or session management.</li>

                <li>• Difficult content management due to hardcoded data.</li>

              </ul>

            </motion.div>

            <motion.div
              initial={{ opacity:0,x:50 }}
              whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.7 }}
              className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-10"
            >

              <h3 className="text-2xl font-bold mb-8 text-cyan-300">
                My Goal
              </h3>

              <p className="text-white/70 leading-9">

                Transform every major section of the website into
                a connected, database-driven application while
                maintaining a clean interface, improving usability,
                increasing scalability, and delivering a realistic
                online shopping experience.

              </p>

            </motion.div>

          </div>

        </div>

      </section>



      {/* =======================================================
          OBJECTIVES
      ======================================================== */}

      <section className="py-24">

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
                title:"Database Integration",
                desc:"Connect all products, users and website content with MySQL."
              },
              {
                title:"Shopping Cart",
                desc:"Develop a fully functional Add to Cart workflow."
              },
              {
                title:"Authentication",
                desc:"Implement secure Login and Registration."
              },
              {
                title:"User Experience",
                desc:"Improve navigation and shopping flow."
              },
              {
                title:"Debugging",
                desc:"Identify and resolve existing technical issues."
              },
              {
                title:"Professional Quality",
                desc:"Deliver a scalable production-ready architecture."
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
          STRATEGY
      ======================================================== */}

      <section className="py-24 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Strategy & Planning
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Building a Solid Foundation
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            <motion.div
              whileHover={{ y:-8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >

              <h3 className="text-2xl font-bold mb-6">
                Website Analysis
              </h3>

              <ul className="space-y-4 text-white/70">

                <li>✓ Reviewed existing codebase</li>

                <li>✓ Identified broken features</li>

                <li>✓ Evaluated usability</li>

                <li>✓ Planned improvements</li>

                <li>✓ Defined project roadmap</li>

              </ul>

            </motion.div>

            <motion.div
              whileHover={{ y:-8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >

              <h3 className="text-2xl font-bold mb-6">
                Database Planning
              </h3>

              <ul className="space-y-4 text-white/70">

                <li>✓ Designed relational tables</li>

                <li>✓ Created product schema</li>

                <li>✓ User management</li>

                <li>✓ Contact form storage</li>

                <li>✓ Data relationships</li>

              </ul>

            </motion.div>

            <motion.div
              whileHover={{ y:-8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >

              <h3 className="text-2xl font-bold mb-6">
                Feature Planning
              </h3>

              <ul className="space-y-4 text-white/70">

                <li>✓ Authentication</li>

                <li>✓ Shopping Cart</li>

                <li>✓ Checkout Workflow</li>

                <li>✓ Product Management</li>

                <li>✓ Performance Optimization</li>

              </ul>

            </motion.div>

          </div>

        </div>

      </section>



      {/* =======================================================
          DEVELOPMENT TIMELINE
      ======================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Development Process
          </span>

          <h2 className="mt-4 text-5xl font-black">
            From Planning to Deployment
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {[
              ["01","Research"],
              ["02","Database Design"],
              ["03","Development"],
              ["04","Testing"],
            ].map(([num,title])=>(
              <motion.div
                key={num}
                whileHover={{ y:-8 }}
                className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center"
              >

                <div className="text-5xl font-black text-cyan-400 mb-6">
                  {num}
                </div>

                <h3 className="text-2xl font-bold">
                  {title}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>
            {/* =======================================================
          DEVELOPMENT FEATURES
      ======================================================== */}

      <section className="py-28 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Development
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Building a Functional Shopping Experience
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title:"Dynamic Product Listings",
                items:[
                  "Connected products with MySQL",
                  "Dynamic content loading",
                  "Scalable architecture",
                  "Centralized management",
                  "Reduced manual updates",
                ]
              },
              {
                title:"Shopping Cart",
                items:[
                  "Functional Add to Cart",
                  "Quantity updates",
                  "Product removal",
                  "Cart management",
                  "Checkout workflow",
                ]
              },
              {
                title:"Authentication",
                items:[
                  "User registration",
                  "Login validation",
                  "Session management",
                  "Secure authentication",
                  "User redirection",
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
                    <li key={item}>✓ {item}</li>
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

          <span className="uppercase tracking-[4px] text-cyan-300">
            My Contributions
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Responsibilities Throughout Development
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              "Frontend Development",
              "Backend Development",
              "Database Integration",
              "Debugging",
              "UX Improvements",
              "Testing",
            ].map((item)=>(
              <motion.div
                key={item}
                whileHover={{ scale:1.03 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >

                <div className="text-5xl mb-5">💻</div>

                <h3 className="text-2xl font-bold">
                  {item}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          TECHNOLOGIES
      ======================================================== */}

      <section className="py-24 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Technologies
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "PHP",
              "MySQL",
              "PHPMyAdmin",
              "XAMPP",
              "Git",
              "VS Code",
              "Responsive Design",
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

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Gallery
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Project Showcase
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              "homepage",
              "products",
              "cart",
              "login",
              "contact",
              "checkout",
            ].map((img)=>(
              <motion.div
                key={img}
                whileHover={{ scale:1.03 }}
                className="overflow-hidden rounded-3xl border border-white/10"
              >

                <img
                  src={`/projects/ecommerce/${img}.jpg`}
                  alt={img}
                  className="w-full aspect-video object-cover"
                />

              </motion.div>
            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          RESULTS
      ======================================================== */}

      <section className="py-24 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-cyan-300">
            Results
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Final Outcome
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-16">

            {[
              "Dynamic database-driven website",
              "Functional shopping cart",
              "Login & Registration",
              "Database contact form",
              "Checkout workflow",
              "Responsive interface",
              "Optimized performance",
              "Professional codebase",
            ].map((item)=>(
              <div
                key={item}
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-lg"
              >
                ✔ {item}
              </div>
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

          <p className="mt-10 text-white/70 leading-9 text-lg">

            This project strengthened my understanding of full-stack
            development by combining frontend design, backend programming,
            relational databases, debugging, authentication, and user
            experience into one complete application. It reinforced the
            importance of clean architecture, scalable code, and thoughtful
            planning when building dynamic web applications.

          </p>

        </div>

      </section>



      {/* =======================================================
          NEXT CASE STUDY
      ======================================================== */}

      <section className="pb-28">

        <div className="max-w-5xl mx-auto px-8 text-center">

          <motion.button
            whileHover={{ scale:1.05 }}
            whileTap={{ scale:.96 }}
            onClick={() => nextProject && setProject(nextProject)}
            className="rounded-full bg-cyan-400 px-10 py-5 text-xl font-bold text-black transition"
          >
            {nextProject
              ? "Next Case Study →"
              : "Finish Portfolio"}
          </motion.button>

        </div>

      </section>

    </main>
  );
};

export default Ecommerce;