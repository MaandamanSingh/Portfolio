const PSPBL = ({ setProject, nextProject }) => { return (
    <div className="bg-[#0b0b0b] text-white">

      {/* ==========================================
          HERO
      =========================================== */}

      <section className="relative overflow-hidden py-32">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium tracking-wide text-cyan-300">
              UX/UI Design · Website Redesign · Digital Strategy
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              PSPBL Website Redesign &
              <span className="block text-cyan-400">
                Digital Strategy
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
              Reimagining the digital experience for the Police Society
              for Problem-Based Learning by improving usability,
              accessibility, content strategy, and modern learning
              experiences for a global audience.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#overview"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Explore Project
              </a>

              <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:border-cyan-400">
                View Prototype
              </button>

            </div>

          </div>

          <div className="mt-20">

            <img
              src="/projects/pspbl/hero.jpg"
              alt="PSPBL Hero"
              className="w-full rounded-3xl border border-white/10 shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* ==========================================
          PROJECT INFORMATION
      =========================================== */}

      <section className="border-y border-white/10 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "Client",
                value: "Police Society for Problem-Based Learning",
              },
              {
                title: "Duration",
                value: "October 2025 – April 2026",
              },
              {
                title: "Project Type",
                value: "Website Redesign",
              },
              {
                title: "Role",
                value: "UX/UI Designer & Front-End Developer",
              },
              {
                title: "Team",
                value: "Academic Capstone Project",
              },
              {
                title: "Focus",
                value: "Research, Strategy & User Experience",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-sm uppercase tracking-widest text-cyan-400">
                  {item.title}
                </h3>

                <p className="mt-4 text-2xl font-semibold leading-9">
                  {item.value}
                </p>
              </div>
            ))}

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

          <div className="mb-16">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Overview
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Redesigning a Platform for Global Police Education
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

          </div>

          <div className="space-y-8 text-lg leading-9 text-gray-300">

            <p>
              The <span className="font-semibold text-white">
              Police Society for Problem-Based Learning (PSPBL)
              </span> is an international organization dedicated to
              improving police education through collaboration,
              research, and problem-based learning.
            </p>

            <p>
              Our objective was to redesign the organization's website
              so it better represented PSPBL's global mission while
              improving accessibility, usability, and the overall
              digital experience for educators, police officers,
              researchers, and first responders.
            </p>

            <p>
              Throughout the project, our team conducted extensive UX
              research, stakeholder analysis, information architecture,
              content strategy, wireframing, visual design, and
              responsive interface planning before preparing the
              platform for WordPress implementation.
            </p>

          </div>

          <div className="mt-20">

            <img
              src="/projects/pspbl/overview.jpg"
              alt="PSPBL Overview"
              className="w-full rounded-3xl border border-white/10 shadow-2xl"
            />

          </div>

        </div>
      </section>



      {/* =======================================================
          THE CHALLENGE
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              The Challenge
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Modernizing an Outdated Digital Experience
            </h2>

          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 items-center">

            <div className="space-y-7 text-lg leading-9 text-gray-300">

              <p>
                PSPBL's existing website contained valuable educational
                resources, but users often struggled to locate important
                information because of outdated navigation,
                inconsistent page layouts, and fragmented content.
              </p>

              <p>
                The platform also lacked responsive layouts,
                accessibility improvements, and a modern user
                experience that reflected PSPBL's international
                reputation within police education.
              </p>

              <p>
                Our challenge was to redesign the website into an
                intuitive, visually consistent, and accessible platform
                while ensuring it remained easy for board members to
                maintain through WordPress.
              </p>

            </div>

            <div>

              <img
                src="/projects/pspbl/challenge.jpg"
                alt="Project Challenge"
                className="w-full rounded-3xl border border-white/10 shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>
            {/* =======================================================
          OBJECTIVES
      ======================================================== */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Objectives
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Project Goals
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Improve Navigation",
                desc: "Simplify the website structure and help visitors locate important information more efficiently.",
              },
              {
                title: "Modernize Branding",
                desc: "Create a professional visual identity that reflects PSPBL's international reputation.",
              },
              {
                title: "Accessibility",
                desc: "Design an inclusive experience following modern accessibility and usability standards.",
              },
              {
                title: "Digital Learning",
                desc: "Support online education through engaging learning experiences and improved resource discovery.",
              },
              {
                title: "Responsive Design",
                desc: "Ensure seamless experiences across desktop, tablet, and mobile devices.",
              },
              {
                title: "Content Management",
                desc: "Prepare layouts for WordPress so board members can easily update website content.",
              },
            ].map((goal) => (
              <div
                key={goal.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <h3 className="text-2xl font-semibold">
                  {goal.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  {goal.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          RESEARCH
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Research
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Understanding Users & Organizational Needs
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Our research combined website audits, stakeholder interviews,
              competitor benchmarking, accessibility reviews, and usability
              analysis to understand how PSPBL could better serve its global audience.
            </p>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-semibold">
                Website Audit
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• Usability Review</li>
                <li>• Broken Links</li>
                <li>• Content Analysis</li>
                <li>• Navigation Review</li>
                <li>• Information Hierarchy</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-semibold">
                Client Research
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• Stakeholder Meetings</li>
                <li>• Mission Analysis</li>
                <li>• User Goals</li>
                <li>• Project Priorities</li>
                <li>• Feedback Sessions</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-semibold">
                Industry Research
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• Competitor Analysis</li>
                <li>• Digital Learning Trends</li>
                <li>• Accessibility Standards</li>
                <li>• Mobile Usability</li>
                <li>• User Engagement</li>

              </ul>

            </div>

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
              From Research to User-Centered Design
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Research",
                description:
                  "Website audit, stakeholder interviews, competitor analysis, and accessibility evaluation.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Content strategy, sitemap creation, and information architecture planning.",
              },
              {
                number: "03",
                title: "Wireframing",
                description:
                  "Created low-fidelity and high-fidelity wireframes to refine layouts and user flow.",
              },
              {
                number: "04",
                title: "Visual Design",
                description:
                  "Designed responsive interfaces with a modern and consistent design system.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40"
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
          EMPATHY MAP
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              UX Research
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Understanding Our Users
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              We created an empathy map to better understand the needs,
              frustrations, motivations, and expectations of PSPBL's
              diverse audience, including police officers,
              educators, researchers, and organizational partners.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {[
              {
                title: "💭 Thinks",
                items: [
                  "How do I access learning resources?",
                  "Is this organization credible?",
                  "Can I quickly find training material?",
                  "How do I become involved?"
                ]
              },
              {
                title: "❤️ Feels",
                items: [
                  "Needs trustworthy information",
                  "Wants simple navigation",
                  "Prefers modern learning experiences",
                  "Values accessibility"
                ]
              },
              {
                title: "💬 Says",
                items: [
                  "\"Where can I register?\"",
                  "\"I can't find the resources.\"",
                  "\"The information feels outdated.\"",
                  "\"I need mobile access.\""
                ]
              },
              {
                title: "👣 Does",
                items: [
                  "Searches training material",
                  "Reads publications",
                  "Browses events",
                  "Visits from multiple devices"
                ]
              }
            ].map((card) => (

              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >

                <h3 className="text-2xl font-semibold">
                  {card.title}
                </h3>

                <ul className="mt-6 space-y-4 text-gray-300">

                  {card.items.map((item) => (

                    <li key={item}>
                      • {item}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          DESIGN SYSTEM
      ======================================================== */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Design System
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Creating Consistency Across the Platform
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Typography",
                desc: "Established clear heading hierarchy, body text styles, spacing, and readability standards."
              },
              {
                title: "Color Palette",
                desc: "Created an accessible color system that communicates professionalism and trust."
              },
              {
                title: "Components",
                desc: "Standardized buttons, navigation, cards, icons, and reusable interface elements."
              },
              {
                title: "Responsive Design",
                desc: "Designed layouts optimized for desktop, tablet, and mobile experiences."
              },
              {
                title: "Accessibility",
                desc: "Applied proper spacing, typography, contrast, and usability principles throughout."
              },
              {
                title: "WordPress Planning",
                desc: "Prepared layouts that could be efficiently implemented within WordPress."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40"
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
          SOLUTION
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Solution
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              A Modern Learning Platform
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              The redesigned website presents PSPBL as a modern,
              internationally recognized organization while making
              educational resources easier to discover, navigate,
              and manage through thoughtful UX decisions and
              scalable content architecture.
            </p>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <img
                src="/projects/pspbl/architecture.jpg"
                alt="Information Architecture"
                className="mb-6 rounded-2xl"
              />

              <h3 className="text-2xl font-semibold">
                Information Architecture
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• Improved Sitemap</li>
                <li>• Clear Navigation</li>
                <li>• Better Page Hierarchy</li>
                <li>• Organized Content</li>
                <li>• User-Focused Structure</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <img
                src="/projects/pspbl/learning.jpg"
                alt="Learning Experience"
                className="mb-6 rounded-2xl"
              />

              <h3 className="text-2xl font-semibold">
                Learning Experience
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• Training Resources</li>
                <li>• AI-powered Quizzes</li>
                <li>• Educational Videos</li>
                <li>• Community Forums</li>
                <li>• Interactive Learning</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <img
                src="/projects/pspbl/cms.jpg"
                alt="CMS"
                className="mb-6 rounded-2xl"
              />

              <h3 className="text-2xl font-semibold">
                Content Management
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>• WordPress CMS</li>
                <li>• Easy Editing</li>
                <li>• Future Scalability</li>
                <li>• Simple Maintenance</li>
                <li>• Board Member Updates</li>

              </ul>

            </div>

          </div>

        </div>

      </section>
            {/* =======================================================
          TECHNOLOGIES
      ======================================================== */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Technologies
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Tools Used
            </h2>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {[
              "Figma",
              "WordPress",
              "HTML5",
              "CSS3",
              "UX Research",
              "Wireframing",
              "Information Architecture",
              "Responsive Design",
              "Accessibility",
              "Content Strategy",
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

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Gallery
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Design Process Showcase
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Wireframes",
                image: "/projects/pspbl/wireframes.jpg",
              },
              {
                title: "Information Architecture",
                image: "/projects/pspbl/sitemap.jpg",
              },
              {
                title: "Design System",
                image: "/projects/pspbl/design-system.jpg",
              },
              {
                title: "Responsive Mockups",
                image: "/projects/pspbl/mockups.jpg",
              },
              {
                title: "Mobile Experience",
                image: "/projects/pspbl/mobile.jpg",
              },
              {
                title: "Final Website",
                image: "/projects/pspbl/final-design.jpg",
              },
            ].map((item) => (

              <figure
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
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

      <section className="py-28">

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
              "Fully redesigned responsive website",
              "Simplified navigation structure",
              "Modern visual identity",
              "Improved accessibility",
              "Better learning experience",
              "Mobile-first layouts",
              "WordPress CMS planning",
              "Scalable content strategy",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6"
              >

                <p className="font-medium text-green-300">
                  ✓ {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          IMPACT
      ======================================================== */}

      <section className="py-28 bg-[#111111]">

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Impact
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Supporting PSPBL's Global Mission
            </h2>

          </div>

          <div className="mt-16 space-y-5">

            {[
              "Improved communication of PSPBL's mission and values.",
              "Made educational resources easier to discover.",
              "Created a more engaging learning experience.",
              "Strengthened organizational credibility.",
              "Improved accessibility for international audiences.",
              "Prepared the platform for future growth.",
              "Enabled easier website management with WordPress.",
              "Applied modern UX best practices throughout the redesign.",
            ].map((item) => (

              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >

                <span className="text-cyan-400 text-xl">
                  ✓
                </span>

                <p className="text-gray-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =======================================================
          REFLECTION
      ======================================================== */}

      <section className="py-28">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Reflection
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            What I Learned
          </h2>

          <p className="mt-10 text-lg leading-9 text-gray-300">

            This capstone project strengthened my understanding of the
            complete UX design process—from research and stakeholder
            collaboration to information architecture, wireframing,
            responsive interface design, and accessibility.

            Working with a real organization reinforced the importance
            of balancing user needs with organizational goals while
            making design decisions supported by research and
            usability testing.

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
              Dynamic E-Commerce Website
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

              Discover how I built a fully functional database-driven
              e-commerce website using PHP, MySQL, and responsive web
              development techniques.

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

export default PSPBL;