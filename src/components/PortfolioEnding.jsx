
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function PortfolioEnding({ onRestart }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const cards = [
    { emoji:"💬", title:"WhatsApp", desc:"Let's discuss your next project", href:"https://wa.me/12045748509" },
    { emoji:"📧", title:"Email", desc:"maandamansingh6@gmail.com", href:"mailto:maandamansingh6@gmail.com" },
    { emoji:"💼", title:"LinkedIn", desc:"Let's connect professionally", href:"https://www.linkedin.com/in/maandamansingh/" },
  ];

  return (
    <div className="fixed inset-0 z-[9999] overflow-auto bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_,i)=>(
          <motion.div key={i}
            className="absolute rounded-full bg-amber-300"
            style={{width:3,height:3,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,opacity:.5}}
            animate={{y:[0,-120],opacity:[.2,.8,0]}}
            transition={{duration:5+Math.random()*3,repeat:Infinity,delay:Math.random()*3}}
          />
        ))}
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-6xl md:text-8xl font-black text-center">
          THANK YOU
        </motion.h1>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}
          className="mt-8 max-w-3xl text-center text-xl text-white/70">
          Thank you for taking the time to explore my portfolio. Every project reflects my passion for creating meaningful digital experiences.
        </motion.p>

        <motion.h2 initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{delay:1}}
          className="mt-16 text-center text-4xl md:text-6xl font-extrabold text-amber-300">
          So... What Are You Waiting For?
        </motion.h2>

        <div className="mt-16 w-full max-w-xl space-y-6">
          {cards.map((c,idx)=>(
            <motion.a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer"
              initial={{opacity:0,y:80}} animate={{opacity:1,y:0}}
              transition={{delay:1.5+idx*.25}}
              whileHover={{scale:1.03,y:-6,boxShadow:"0 0 40px rgba(251,191,36,.35)"}}
              className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="text-5xl">{c.emoji}</div>
              <div>
                <h3 className="text-2xl font-bold">{c.title}</h3>
                <p className="text-white/60">{c.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:2.5}}
          onClick={onRestart}
          className="mt-14 rounded-full bg-amber-400 px-10 py-5 text-lg font-bold text-black hover:scale-105 transition">
          Explore Portfolio Again →
        </motion.button>
      </div>
    </div>
  );
}
