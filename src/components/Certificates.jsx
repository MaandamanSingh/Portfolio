import React from "react";
import { certificates } from "../data/portfolioData";

const CertificateCard = ({ cert, aosDelay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform">
        {cert.icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        {cert.name}
      </h3>

      <p className="uppercase tracking-[3px] text-white/60 text-xs font-semibold mb-5">
        {cert.issuer}
      </p>

      {cert.description && (
        <p className="text-white/80 leading-7 text-sm">
          {cert.description}
        </p>
      )}
    </div>
  </div>
);

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative bg-[#000000] pt-24 pb-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-white font-bold">
            {certificates.badge}
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-6">
            {certificates.heading}
          </h2>
          <p className="max-w-3xl mx-auto text-red-100 text-lg leading-8">

            {certificates.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.featured.map((cert, index) => (
            <CertificateCard
              key={cert.name}
              cert={cert}
              aosDelay={index * 100}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/My_resume.pdf"
            download
            className="inline-block px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certificates;