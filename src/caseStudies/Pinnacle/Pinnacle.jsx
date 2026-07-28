const Pinnacle = ({ setProject, nextProject }) => { return (
    
    <div className="bg-[#0b0b0b] text-white">

      {/* =======================================================
          HERO SECTION
      ======================================================== */}

      <section className="relative overflow-hidden py-28 lg:py-36">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/projects/pinnacle/hero.jpg"
            alt="Pinnacle Event Rentals Hero"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#0b0b0b]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">

          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium tracking-wide text-cyan-300">
            Website Enhancement & AI Integration
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            Pinnacle Event Rentals
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Enhancing customer experience through intelligent website
            improvements, AI-powered customer support, and interactive
            product discovery.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#overview"
              className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
            >
              Explore Project
            </a>

            <a
              href="https://pinnacleeventrentals.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Visit Website
            </a>

          </div>

        </div>

      </section>



      {/* =======================================================
          PROJECT INFORMATION
      ======================================================== */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="text-sm uppercase tracking-widest text-cyan-300">
                Client
              </h4>
              <p className="mt-3 text-lg font-semibold">
                Pinnacle Event Rentals
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="text-sm uppercase tracking-widest text-cyan-300">
                Owner
              </h4>
              <p className="mt-3 text-lg font-semibold">
                Ty Worthington
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="text-sm uppercase tracking-widest text-cyan-300">
                Location
              </h4>
              <p className="mt-3 text-lg font-semibold">
                Brandon & Winnipeg,
                <br />
                Manitoba
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="text-sm uppercase tracking-widest text-cyan-300">
                Duration
              </h4>
              <p className="mt-3 text-lg font-semibold">
                May 2026 – July 2026
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="text-sm uppercase tracking-widest text-cyan-300">
                Role
              </h4>
              <p className="mt-3 text-lg font-semibold">
                Web Developer
                <br />
                UX/UI Designer
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="text-sm uppercase tracking-widest text-cyan-300">
                Project Type
              </h4>
              <p className="mt-3 text-lg font-semibold">
                Website Enhancement
              </p>
            </div>

          </div>

        </div>

      </section>

  
      {/* =======================================================
          PROJECT OVERVIEW
      ======================================================== */}

      <section
        id="overview"
        className="py-28 border-t border-white/10"
      >
        <div className="mx-auto max-w-5xl px-6">

          {/* Section Heading */}
          <div className="mb-16">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Overview
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Modernizing an Event Rental Experience
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

          </div>

          {/* Content */}
          <div className="space-y-8 text-lg leading-9 text-gray-300">

            <p>
              During my practicum at{" "}
              <span className="font-semibold text-white">
                Pinnacle Event Rentals
              </span>
              , I worked directly with the client to improve the company’s
              website by designing and implementing customer-focused features
              that enhanced usability, product discovery, and the overall user
              experience.
            </p>

            <p>
              The primary goal was to simplify how customers browse rental
              products, discover event inspiration, and receive immediate
              assistance while planning weddings, corporate events, and private
              celebrations.
            </p>

            <p>
              Throughout the project, I researched AI-powered customer support
              solutions, evaluated multiple chatbot platforms, developed
              concepts for an interactive Event Inspiration Gallery, improved
              product discovery, and created comprehensive documentation to
              ensure the client could easily maintain and expand the website in
              the future.
            </p>

          </div>

          {/* Overview Image Placeholder */}
          <div className="mt-20">

            <img
              src="/projects/pinnacle/overview.jpg"
              alt="Project Overview"
              className="w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
            />

          </div>

        </div>
      </section>
            {/* =======================================================
          DESIGN PROCESS
      ======================================================== */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Design Process
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              From Research to Implementation
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Research",
                description:
                  "Studied rental websites, AI tools, customer workflows, and interaction patterns.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Defined project goals, selected technologies, and prioritized features.",
              },
              {
                number: "03",
                title: "Design",
                description:
                  "Designed gallery layouts, chatbot experiences, and interaction flows.",
              },
              {
                number: "04",
                title: "Development",
                description:
                  "Implemented website enhancements, AI integration, and interactive gallery concepts.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 transition"
              >
                <span className="text-5xl font-black text-cyan-400/30">
                  {step.number}
                </span>

                <h3 className="mt-6 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          SOLUTION
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Solution
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Delivering Intelligent Website Enhancements
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Based on research and user analysis, I designed several
              customer-focused improvements to modernize the Pinnacle Event
              Rentals website. Every solution focused on simplifying customer
              interactions while remaining scalable for future growth.
            </p>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <img
                src="/projects/pinnacle/ai-placeholder.jpg"
                alt="AI Assistant"
                className="rounded-2xl mb-6"
              />

              <h3 className="text-2xl font-semibold">
                AI Customer Assistant
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• AI-powered customer support</li>
                <li>• Website knowledge training</li>
                <li>• Frequently asked questions</li>
                <li>• Event planning assistance</li>
                <li>• Product recommendations</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <img
                src="/projects/pinnacle/gallery-placeholder.jpg"
                alt="Gallery"
                className="rounded-2xl mb-6"
              />

              <h3 className="text-2xl font-semibold">
                Event Inspiration Gallery
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• Interactive gallery experience</li>
                <li>• Shop This Look concept</li>
                <li>• Product tagging</li>
                <li>• Popup interactions</li>
                <li>• Inventory integration</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <img
                src="/projects/pinnacle/docs-placeholder.jpg"
                alt="Documentation"
                className="rounded-2xl mb-6"
              />

              <h3 className="text-2xl font-semibold">
                Documentation
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• Maintenance guide</li>
                <li>• Gallery administration manual</li>
                <li>• Future recommendations</li>
                <li>• Implementation notes</li>
                <li>• Scalable workflow</li>

              </ul>

            </div>

          </div>

        </div>

      </section>



      {/* =======================================================
          MY CONTRIBUTIONS
      ======================================================== */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              My Contributions
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Responsibilities Throughout the Project
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "UX Research",
                desc: "Researched customer behaviour, competitor websites, accessibility, and product discovery.",
              },
              {
                title: "AI Integration",
                desc: "Evaluated multiple chatbot platforms, trained AI knowledge bases, and recommended the best solution.",
              },
              {
                title: "Interactive Gallery",
                desc: "Designed a visual inspiration gallery allowing customers to explore complete event setups with interactive product links.",
              },
              {
                title: "Website Enhancement",
                desc: "Improved navigation, customer interaction, product discovery, and website usability.",
              },
              {
                title: "Documentation",
                desc: "Produced detailed documentation so future staff can maintain and expand the website.",
              },
              {
                title: "Client Collaboration",
                desc: "Worked directly with the client, gathered feedback, tested ideas, and refined solutions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 transition"
              >
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>
            {/* =======================================================
          TECHNOLOGIES
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Technologies
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Tools & Technologies
            </h2>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {[
              "WordPress",
              "Elementor",
              "HTML5",
              "CSS3",
              "JavaScript",
              "Chatbase",
              "AI Integration",
              "UX Research",
              "UI Design",
              "Documentation",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300"
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

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Gallery
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Project Showcase
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {[
              {
                title: "Homepage Redesign",
                image: "/projects/pinnacle/gallery-1.jpg",
              },
              {
                title: "Event Inspiration Gallery",
                image: "/projects/pinnacle/gallery-2.jpg",
              },
              {
                title: "AI Customer Assistant",
                image: "/projects/pinnacle/gallery-3.jpg",
              },
              {
                title: "Responsive Experience",
                image: "/projects/pinnacle/gallery-4.jpg",
              },
            ].map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                />

                <figcaption className="p-6 text-lg font-semibold">
                  {item.title}
                </figcaption>
              </figure>
            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          RESULTS
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Results
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Project Outcomes
            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Improved customer journey",
              "Faster product discovery",
              "AI-powered customer support",
              "Interactive inspiration gallery",
              "Better navigation",
              "Improved user engagement",
              "Professional documentation",
              "Future-ready website improvements",
            ].map((result) => (
              <div
                key={result}
                className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6"
              >
                <p className="font-medium text-green-300">
                  ✓ {result}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          KEY ACHIEVEMENTS
      ======================================================== */}

      <section className="py-28">

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Achievements
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Highlights
            </h2>

          </div>

          <div className="mt-16 space-y-5">

            {[
              "Implemented an AI-powered customer assistant.",
              "Researched and evaluated multiple AI chatbot platforms.",
              "Designed an interactive Event Inspiration Gallery.",
              "Improved website navigation and product discovery.",
              "Created documentation for future website maintenance.",
              "Worked directly with a real client throughout the practicum.",
              "Balanced business goals with user experience improvements.",
              "Delivered scalable solutions for future expansion.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-cyan-400 text-xl">✓</span>

                <p className="text-gray-300">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          LESSONS LEARNED
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Reflection
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Lessons Learned
          </h2>

          <p className="mt-10 text-lg leading-9 text-gray-300">

            Working directly with Pinnacle Event Rentals gave me valuable
            experience collaborating with a real client while balancing
            business objectives, technical feasibility, and user needs.

            Throughout the practicum, I strengthened my skills in UX
            research, WordPress development, AI integration,
            documentation, and professional communication.

            The project reinforced the importance of creating scalable,
            user-centred solutions that continue to provide value long
            after implementation.

          </p>

        </div>

      </section>



      {/* =======================================================
          NEXT PROJECT
      ======================================================== */}

      <section className="py-32">

        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-12 text-center">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Continue Exploring
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              Police Society for Problem-Based Learning
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

              Discover how I redesigned the PSPBL website by improving
              accessibility, user experience, and information architecture
              for a global non-profit organization.

            </p>
<button
  onClick={() => nextProject && setProject(nextProject)}
  className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
>
  {nextProject ? "Next Case Study →" : "Finish"}
</button>
          </div>

        </div>

      </section>

    </div>
  );
  
};

export default Pinnacle;