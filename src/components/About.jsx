import React from "react";
import { motion } from "framer-motion";
import { aboutContent, statistics } from "../data/portfolioData";

const About=()=>(
<section id="about" className="bg-[#0a0a0a] py-24 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
<span className="text-red-400 uppercase tracking-[4px] font-bold">{aboutContent.badge}</span>
<h2 className="text-5xl font-black text-white mt-4">{aboutContent.heading}</h2>
<p className="text-white/70 mt-6 leading-8">{aboutContent.description}</p>
<p className="text-white/60 mt-6 leading-8">{aboutContent.paragraph1}</p>
<p className="text-white/60 mt-6 leading-8">{aboutContent.paragraph2}</p>
<div className="flex flex-wrap gap-3 mt-8">
{aboutContent.highlights.map(h=><span key={h} className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-300">{h}</span>)}
</div>
</motion.div>
<motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
<div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 p-4">
<img src={aboutContent.image} alt="About" className="rounded-3xl w-full object-cover"/>
</div>
<div className="grid grid-cols-2 gap-5 mt-8">
{statistics.map(s=>(
<div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
<h3 className="text-4xl font-black text-red-400">{s.number}</h3>
<p className="text-white/60 mt-2">{s.label}</p>
</div>))}
</div>
</motion.div>
</div>
</section>);
export default About;
