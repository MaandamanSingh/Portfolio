
import React from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import TechnicalSkills from "./components/TechnicalSkills";
import Leadership from "./components/Leadership";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Preloader />


     <main className="bg-black text-white overflow-x-hidden scroll-smooth">
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <About />
        <Experience />
        <Services />
        <TechnicalSkills />
        <Leadership />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
export default App;
