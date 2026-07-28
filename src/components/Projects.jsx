import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import Pinnacle from "../caseStudies/Pinnacle/Pinnacle";
import PSPBL from "../caseStudies/PSPBL/PSPBL";
import Ecommerce from "../caseStudies/Ecommerce/Ecommerce";
import StudySync from "../caseStudies/StudySync/StudySync";
import Regent from "../caseStudies/Regent/Regent";
import AdventureGame from "../caseStudies/AdventureGame/AdventureGame";
import PortfolioEnding from "./PortfolioEnding";
import CaseStudyModal from "./CaseStudyModal";

/* ============================================
   PROJECT CARD
============================================ */

const ProjectCard = ({
  project,
  featured = false,
  onViewCaseStudy,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden ${
        featured ? "p-10" : "p-8"
      }`}
    >
      {project.image && (
       <div className="mb-8 h-64 overflow-hidden rounded-2xl bg-black/10 flex items-center justify-center">
  <img
    src={project.image}
    alt={project.title}
    className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
  />
</div>
      )}

      <div className="flex items-center justify-between mb-6">
        <span className="text-red-300 font-bold tracking-[3px] uppercase text-sm">
          {project.badge || `Project ${project.number}`}
        </span>

        <span className="text-white/30 text-4xl font-black">
          {project.number}
        </span>
      </div>

      <h3 className="text-3xl font-black text-white mb-4">
        {project.title}
      </h3>

      <p className="text-white/60 leading-8 mb-8">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {(project.techTags || []).map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-white/10 text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {project.links?.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-all"
          >
            Live Demo
          </a>
        ) : (
          <button
            disabled
            className="px-6 py-3 rounded-full bg-white/10 text-white/40 cursor-not-allowed"
          >
            Demo Coming Soon
          </button>
        )}

        <button
          onClick={onViewCaseStudy}
          className="px-6 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all"
        >
          View Case Study
        </button>
      </div>
    </motion.div>
  );
};

/* ============================================
   PROJECTS
============================================ */

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showEnding, setShowEnding] = useState(false);

  const caseStudies = {
    pinnacle: Pinnacle,
    pspbl: PSPBL,
    ecommerce: Ecommerce,
    studysync: StudySync,
    regent: Regent,
    adventuregame: AdventureGame
  };

  const projectOrder = [
    "pinnacle",
    "pspbl",
    "ecommerce",
    "studysync",
    "regent",
    "adventuregame"
  ];

  const ActiveCaseStudy =
    selectedProject
      ? caseStudies[selectedProject]
      : null;

  const currentIndex =
    projectOrder.indexOf(selectedProject);

  const nextProject =
    currentIndex !== -1 &&
    currentIndex < projectOrder.length - 1
      ? projectOrder[currentIndex + 1]
      : null;

  const featuredProject =
    projects.find(
      (p) => p.featured || p.isFlagship
    ) || projects[0];

  const otherProjects =
    projects.filter(
      (p) => p.id !== featuredProject?.id
    );
  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0a] py-28 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* ===========================
            HEADER
        =========================== */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-red-300 font-bold">
            Portfolio
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black text-white">
            Featured Projects
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-white/60 leading-8">
            A selection of projects demonstrating my experience in
            React, WordPress, UI/UX and modern web development.
          </p>

        </div>

        {/* ===========================
            FEATURED PROJECT
        =========================== */}

        {featuredProject && (

          <div className="mb-20">

            <ProjectCard
              project={featuredProject}
              featured
              onViewCaseStudy={() =>
                setSelectedProject(featuredProject.id)
              }
            />

          </div>

        )}

        {/* ===========================
            OTHER PROJECTS
        =========================== */}

        <div className="grid lg:grid-cols-2 gap-10">

          {otherProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
              onViewCaseStudy={() =>
                setSelectedProject(project.id)
              }
            />

          ))}

        </div>

        {/* ===========================
            CTA
        =========================== */}

        <div className="mt-24 text-center">

          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-all"
          >
            Let's Work Together
          </a>

        </div>

      </div>

      {/* ===========================
          CASE STUDY MODAL
      =========================== */}

      <CaseStudyModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {ActiveCaseStudy && (
<ActiveCaseStudy
    setProject={setSelectedProject}
    nextProject={nextProject}
    onFinish={() => setShowEnding(true)}
/>

        )}
      </CaseStudyModal>
      {showEnding && (
  <PortfolioEnding
    onRestart={() => {
      setShowEnding(false);
      setSelectedProject(null);
    }}
  />
)}

    </section>
  );
};

export default Projects;