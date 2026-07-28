import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [launchSequence, setLaunchSequence] = useState(false);
const [showClouds, setShowClouds] = useState(false);
const [showPlane, setShowPlane] = useState(false);
const [planeTakeoff, setPlaneTakeoff] = useState(false);
const [cloudSplit, setCloudSplit] = useState(false);
const [showPhone, setShowPhone] = useState(false);
    const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [progress, setProgress] = useState(0);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
    useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);
    useEffect(() => {
    let completed = 0;

    if (form.name) completed++;
    if (form.email) completed++;
    if (form.subject) completed++;
    if (form.message) completed++;

    setProgress((completed / 4) * 100);
  }, [form]);
    const particles = useMemo(
    () =>
      [...Array(55)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.4 + 0.2,
      })),
    []
  );
    const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSending(true);
  setLaunchSequence(true);

  setTimeout(() => {
    setShowClouds(true);
  }, 400);

  setTimeout(() => {
    setShowPlane(true);
  }, 1400);

  // Aircraft begins takeoff
setTimeout(() => {
  setPlaneTakeoff(true);
}, 4300);

setTimeout(() => {
  setShowPhone(true);
}, 5600);
setTimeout(() => {
  const message = `Hello Maandaman,

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

${form.message}`;

  window.open(
    `https://wa.me/12045748509?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}, 9000);

  // Clouds split just after takeoff
  setTimeout(() => {
    setCloudSplit(true);
  }, 4400);
};

return (
<>

{launchSequence && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="fixed inset-0 z-[9999] overflow-hidden bg-black"
  >
    {/* Background Glow */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.25, 0.45, 0.25],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-1/2 top-1/2 h-[900px] w-[900px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      bg-red-600/20
      blur-[180px]"
    />

   {/* LEFT CLOUD */}

<motion.div
  initial={{ x: "-100%" }}
  animate={
    !showClouds
      ? {}
      : cloudSplit
      ? {
          x: "-160%",
          opacity: 0,
        }
      : {
          x: "0%",
          opacity: 1,
        }
  }
  transition={{
    duration: cloudSplit ? 1.4 : 2.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="absolute left-[-20%] top-0 w-[70%] h-full"
>

  <img
    src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?fm=jpg&q=80&w=2000"
    className="w-full h-full object-cover opacity-30 blur-xl"
    alt=""
  />

</motion.div>

    {/* RIGHT CLOUD */}

<motion.div
  initial={{ x: "100%" }}
  animate={
    !showClouds
      ? {}
      : cloudSplit
      ? {
          x: "160%",
          opacity: 0,
        }
      : {
          x: "0%",
          opacity: 1,
        }
  }
  transition={{
    duration: cloudSplit ? 1.4 : 2.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="absolute right-[-20%] top-0 w-[70%] h-full"
>

  <img
    src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?fm=jpg&q=80&w=2000"
    className="w-full h-full object-cover opacity-30 blur-xl scale-x-[-1]"
    alt=""
  />

</motion.div>
    <motion.div
      initial={{ x: "120%" }}
animate={
  !showClouds
    ? {}
    : cloudSplit
    ? {
        x: "130%",
        opacity: 0,
        scale: 1.35,
      }
    : {
        x: "10%",
        opacity: 1,
        scale: 1,
      }
}  transition={{
  duration: cloudSplit ? 1.2 : 2.5,
  ease: [0.22, 1, 0.36, 1],
}}
      className="absolute right-0 top-0 h-full w-[70%]"
    >
      <div
        className="absolute inset-0
        bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,.35),transparent_65%)]
        blur-[90px]"
      />

      <div
        className="absolute right-[-15%] top-[20%]
        h-[650px] w-[650px]
        rounded-full
        bg-white/20
        blur-[80px]"
      />

      <div
        className="absolute bottom-[-10%] right-[5%]
        h-[700px] w-[700px]
        rounded-full
        bg-white/30
        blur-[80px]"
      />
    </motion.div>
<div
  className="
    absolute
    left-[30%]
    top-[40%]
    h-[350px]
    w-[350px]
    rounded-full
    bg-white/20
    blur-[70px]
  "
/>

<div
  className="
    absolute
    left-[5%]
    top-[60%]
    h-[280px]
    w-[280px]
    rounded-full
    bg-white/15
    blur-[60px]
  "
/>
    {/* Floating Embers */}
    {[...Array(18)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute h-1 w-1 rounded-full bg-red-400"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-20, 20, -20],
          opacity: [0, 1, 0],
          scale: [0.6, 1.4, 0.6],
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
{planeTakeoff && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, .5, 0] }}
    transition={{ duration: .35 }}
    className="
      absolute
      inset-0
      bg-white
      pointer-events-none
    "
  />
)}
    {/* Center Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
<motion.div
  className="absolute"
  initial={{
    opacity: 0,
    scale: 0.65,
    x: -700,
    y: 180,
    rotate: -18,
  }}
  animate={
  !showPlane
    ? {}
    : planeTakeoff
    ? {
        opacity: 1,
        x: 1700,
        y: -620,
        rotate: -24,
        scale: 0.72,
      }
    : {
        opacity: 1,
        scale: 1,
        x: 280,
        y: [-240, -155, -140],
        rotate: [-8, -6, -8],
      }
}
transition={{
  opacity: {
    duration: 0.5,
  },

  x: planeTakeoff
    ? {
        duration: 1.4,
        ease: [0.18, 0.9, 0.25, 1],
      }
    : {
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      },

  y: planeTakeoff
    ? {
        duration: 1.4,
      }
    : {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },

  rotate: planeTakeoff
    ? {
        duration: 1.4,
      }
    : {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },

  scale: {
    duration: 1.4,
  },
}}
> {/* Engine Glow */}

<motion.div
animate={
  planeTakeoff
    ? {
        scale: 2,
        opacity: .8,
      }
    : {
        scale: [1,1.2,1],
        opacity:[.25,.45,.25],
      }
}
  transition={{
    duration: 1.5,
    repeat: Infinity,
  }}
  className="
    absolute
    left-[170px]
    top-[135px]
    w-28
    h-20
    rounded-full
    bg-red-500/40
    blur-3xl
    -z-10
  "
/><motion.div
  animate={{
    opacity: [0.3, 0.8, 0.3],
    scaleX: [1, 1.2, 1],
  }}
  transition={{
    duration: 1.2,
    repeat: Infinity,
  }}
  className="
    absolute
    left-[-250px]
    top-[120px]
    h-12
    w-[280px]
    rounded-full
    bg-gradient-to-r
    from-white/0
    via-white/50
    to-white/0
    blur-2xl
"


/>{planeTakeoff && (
  <motion.div
    initial={{
      opacity: 1,
      scaleX: 0,
    }}
    animate={{
      opacity: 0,
      scaleX: 1,
    }}
    transition={{
      duration: 1.6,
      ease: "easeOut",
    }}
    className="
      absolute
      left-[-850px]
      top-[120px]
      h-24
      w-[900px]
      origin-right
      rounded-full
      bg-gradient-to-r
      from-transparent
      via-white/80
      to-white/10
      blur-3xl
    "
  />
)}<img
  src="/plane.png"
  alt=""
  className="
    relative
    w-[520px]
    pointer-events-none
    drop-shadow-[0_40px_80px_rgba(255,0,0,.45)]
  "
/><motion.div
 animate={
  planeTakeoff
    ? {
        rotate: 38,
        x: -55,
        y: 32,
      }
    : {
        rotate: [-10, 10, -10],
      }
}
 transition={
  planeTakeoff
    ? {
        duration: 0.8,
      }
    : {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }
}
  className="
    absolute
    left-[255px]
    top-[230px]
    origin-top
  "
>
  {/* Rope */}

  <div className="w-[2px] h-12 bg-white/60 mx-auto" />

  {/* Tag */}

  <div
    className="
      w-44
      rounded-xl
      bg-white
      text-black
      shadow-2xl
      p-4
      border-2
      border-gray-300
    "
  >
    <p className="text-[10px] uppercase text-gray-400">
      To
    </p>

    <h3 className="font-bold text-lg">
      Maandaman
    </h3>

    <div className="mt-3 border-t pt-3">

      <p className="text-[10px] uppercase text-gray-400">
        From
      </p>

      <p className="font-semibold">
        {form.name}
      </p>

    </div>
  </div>
</motion.div></motion.div>

{/* ================= PHONE APPEARS ================= */}




<motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={
    showPhone
      ? {
          opacity: 0,
          y: -80,
          scale: .8,
        }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
        }
  }
  transition={{
    duration: .8,
  }}
  className="text-6xl font-black tracking-tight text-white"
>
        PREPARING
        <span className="text-red-500"> FLIGHT</span>
      </motion.h2>

   <motion.p
  initial={{ opacity: 0 }}
  animate={
    showPhone
      ? {
          opacity: 0,
          y: -50,
        }
      : {
          opacity: 1,
          y: 0,
        }
  }
  transition={{
    duration: .8,
    delay: showPhone ? 0 : 1,
  }}
  className="mt-6 text-lg tracking-[0.4em] uppercase text-white/60"
>
        Initializing Launch Sequence
      </motion.p>
   {showPhone && (
  <motion.div
    initial={{
      opacity: 0,
      y: 250,
      scale: .8,
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: .9,
      ease: [0.22,1,0.36,1],
    }}
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      z-[100]
    "
  >

    {/* Phone */}

    <div
      className="
        relative
        w-[330px]
        h-[680px]
        rounded-[52px]
        bg-[#1d1d1f]
        border
        border-white/10
        shadow-[0_50px_120px_rgba(0,0,0,.8)]
        overflow-hidden
      "
    >

      {/* Screen */}


<div
  className="
    absolute
    inset-[8px]
    rounded-[44px]
    bg-[#0b141a]
    overflow-hidden"
    
>
  

  {/* Header */}

  <div
    className="
      flex
      items-center
      gap-3
      px-5
      pt-14
      pb-4
      bg-[#202c33]
      border-b
      border-white/10
    "
  >

    {/* Avatar */}

    <div
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-xl
      "
    >
      💬
    </div>

    {/* Name */}

    <div>

      <h3 className="text-white font-semibold">
        Maandaman Singh
      </h3>

      <p className="text-xs text-green-400">
      </p>
      

    </div>

  </div>
{/* Chat Area */}

<div className="flex flex-col gap-4 px-4 py-6">

  <motion.div
    initial={{
      opacity: 0,
      x: -40,
      scale: .9,
    }}
    animate={{
      opacity: 1,
      x: 0,
      scale: 1,
    }}
    transition={{
      delay: .5,
      duration: .45,
    }}
    className="
      max-w-[78%]
      rounded-3xl
      rounded-bl-md
      bg-[#202c33]
      px-4
      py-3
      text-sm
      text-white
      shadow-lg
    "
  >

    <p>
      Hi 👋
    </p>

    <p className="mt-2">
      Thanks for reaching out!
    </p>

    <p className="mt-2">
      I'd love to hear about your project.
    </p>
<motion.div
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: 1,
  }}
  transition={{
    delay: 2.2,
    duration: 0.5,
  }}
  className="
    mt-6
    flex
    justify-center
  "
>
  <div
    className="
      rounded-full
      bg-[#202c33]
      px-4
      py-2
      text-xs
      text-white/80
      shadow-lg
    "
  >
    🚀 Redirecting to WhatsApp...
  </div>
</motion.div>
   

  </motion.div>

</div>
</div>

      {/* Dynamic Island */}

      <div
        className="
          absolute
          left-1/2
          top-4
          -translate-x-1/2
          w-32
          h-8
          rounded-full
          bg-black
          border
          border-white/10
        "
      />

    </div>

  </motion.div>
)}
    </div>
  
  </motion.div>
)}

<section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
            <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0">

          <div className="absolute left-1/2 -top-72 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[200px]" />

          <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-red-500/10 blur-[180px]" />

          <div className="absolute right-0 top-60 h-[350px] w-[350px] rounded-full bg-red-800/10 blur-[180px]" />

        </div>
                <motion.div
          animate={{
            x: mousePosition.x - 220,
            y: mousePosition.y - 220,
          }}
          transition={{
            type: "spring",
            damping: 35,
            stiffness: 120,
          }}
          className="pointer-events-none absolute h-[440px] w-[440px] rounded-full bg-red-500/10 blur-[170px]"
        />
                <motion.div
          animate={{
            x: mousePosition.x - 220,
            y: mousePosition.y - 220,
          }}
          transition={{
            type: "spring",
            damping: 35,
            stiffness: 120,
          }}
          className="pointer-events-none absolute h-[440px] w-[440px] rounded-full bg-red-500/10 blur-[170px]"
        />
                {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-red-400"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              y: [-15, 20, -15],
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              delay: particle.delay,
            }}
          />
        ))}
                <motion.div
          className="absolute left-[-250px] top-20 h-[2px] w-52 bg-gradient-to-r from-transparent via-white to-transparent"
         animate={{
  x: showClouds
    ? ["0%", "4%", "0%"]
    : "100%",
}}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "linear",
          }}
        />
              </div>
                    <div className="relative z-10 mx-auto max-w-7xl px-6">        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >          <p className="mb-4 tracking-[6px] uppercase text-red-400 font-semibold">

            LET'S CONNECT

          </p>          <h2 className="text-6xl font-black text-white">

            Ready To Build Something Amazing?

          </h2>          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/60">

            Have a project in mind? Let's create something exceptional together.
            Fill out the form below and launch your message directly to me.

          </p>        </motion.div>        <div className="grid gap-12 lg:grid-cols-2">          <div>

<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>
  {/* Main Glass Card */}

  <motion.div
    whileHover={{
      y: -8,
      scale: 1.01,
    }}
    transition={{ duration: 0.4 }}
    className="relative overflow-hidden rounded-[35px]
    border border-white/10
    bg-white/5
    backdrop-blur-2xl
    p-10"
  >

    {/* Glow */}

    <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-red-500/20 blur-[120px]" />

    <p className="tracking-[4px] uppercase text-red-400 font-semibold">

      AVAILABLE FOR

    </p>

    <h3 className="mt-4 text-4xl font-black text-white leading-tight">
      <br />

      Full-Time

      <br />

      Collaboration

    </h3>

    <p className="mt-8 leading-8 text-white/65">

      Whether you're building a startup, redesigning a website,
      developing a modern web application, or looking for a
      passionate developer, I'd love to hear about your project.

    </p>

  </motion.div>

  {/* =========================
    Email
========================= */}

<motion.a
  href="mailto:maandamansingh6@gmail.com"
  whileHover={{
    x: 10,
    borderColor: "rgba(239,68,68,.6)",
  }}
className="group flex items-center gap-6 rounded-3xl
border border-white/10
bg-white/5
backdrop-blur-xl
p-6
cursor-pointer
transition-all
duration-500
hover:shadow-[0_0_35px_rgba(239,68,68,.18)]"
>
  <motion.div
    whileHover={{
      rotate: -10,
      scale: 1.15,
    }}
    className="flex h-16 w-16 items-center justify-center
    rounded-2xl
    bg-red-500/20
    text-red-400 text-2xl"
  >
    <FaEnvelope />
  </motion.div>

  <div>
    <p className="text-white/40 uppercase tracking-[3px] text-sm">
      Email
    </p>

    <h4 className="mt-2 text-lg font-semibold text-white">
      maandamansingh6@gmail.com
    </h4>
  </div>
</motion.a>

{/* =========================
    WhatsApp
========================= */}

<motion.a
  href="https://wa.me/12045748509"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    x: 10,
    borderColor: "rgba(239,68,68,.6)",
  }}
className="group flex items-center gap-6 rounded-3xl
border border-white/10
bg-white/5
backdrop-blur-xl
p-6
cursor-pointer
transition-all
duration-500
hover:shadow-[0_0_35px_rgba(239,68,68,.18)]"
>
  <motion.div
    whileHover={{
      rotate: 8,
      scale: 1.15,
    }}
    className="flex h-16 w-16 items-center justify-center
    rounded-2xl
    bg-red-500/20
    text-red-400 text-2xl"
  >
    <FaWhatsapp />
  </motion.div>

  <div>
    <p className="text-white/40 uppercase tracking-[3px] text-sm">
      WhatsApp
    </p>

    <h4 className="mt-2 text-lg font-semibold text-white">
      Instant Response
    </h4>
  </div>
</motion.a>

{/* =========================
    LinkedIn
========================= */}

<motion.a
  href="https://www.linkedin.com/in/maandamansingh/"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    x: 10,
    borderColor: "rgba(239,68,68,.6)",
  }}
className="group flex items-center gap-6 rounded-3xl
border border-white/10
bg-white/5
backdrop-blur-xl
p-6
cursor-pointer
transition-all
duration-500
hover:shadow-[0_0_35px_rgba(239,68,68,.18)]"
  
>
  <motion.div
    whileHover={{
      rotate: -8,
      scale: 1.15,
    }}
    className="flex h-16 w-16 items-center justify-center
    rounded-2xl
    bg-red-500/20
    text-red-400 text-2xl"
    
  >
    <FaLinkedin />
  </motion.div>

  <div>
    <p className="text-white/40 uppercase tracking-[3px] text-sm">
      LinkedIn
    </p>

    <h4 className="mt-2 text-lg font-semibold text-white">
      Let's Connect
    </h4>
  </div>
</motion.a>
  {/* Status Card */}

  <motion.div
    whileHover={{
      scale: 1.02,
    }}
    className="rounded-[30px]
    border border-red-500/20
    bg-gradient-to-r
    from-red-600/20
    to-transparent
    p-8"
    
  >

    <div className="flex items-center gap-4">

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, .5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="h-4 w-4 rounded-full bg-green-400"
      />

      <span className="text-white font-semibold">

        Available for new opportunities

      </span>

    </div>

    <p className="mt-4 text-white/60">

      Usually replies within 12 hours.

    </p>

  </motion.div>

</motion.div>
          </div>          <div>

            {<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="relative overflow-hidden rounded-[35px]
  border border-white/10
  bg-white/5
  backdrop-blur-2xl
  p-10"
>

  {/* Background Glow */}

  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/15 blur-[150px]" />

  {/* Header */}

  <div className="relative">

    <p className="uppercase tracking-[5px] text-red-400 font-semibold">

      SEND MESSAGE

    </p>

    <h3 className="mt-3 text-4xl font-black text-white">

      Let's Create Something Incredible

    </h3>

    <p className="mt-5 text-white/60 leading-8">

      Fill out the form below and launch your project directly to me.

    </p>

  </div>

  {/* Progress */}

  <div className="relative mt-10">

    <div className="h-2 overflow-hidden rounded-full bg-white/10">

      <motion.div
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: .5,
        }}
        className="h-full rounded-full
        bg-gradient-to-r
        from-red-500
        via-red-400
        to-red-600"
      />

    </div>

    <div className="mt-3 flex justify-between text-xs uppercase tracking-[3px] text-white/40">

      <span>Message Progress</span>

      <span>{progress}%</span>

    </div>

  </div>

  {/* FORM */}

  <form
    onSubmit={handleSubmit}
    className="mt-10 space-y-7"
  >

    {/* Name */}

    <div>

      <label className="mb-3 block uppercase tracking-[3px] text-white/50 text-xs">

        Your Name

      </label>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="John Doe"
        className="w-full rounded-2xl
        border border-white/10
        bg-black/20
        px-6
        py-5
        text-white
        placeholder:text-white/30
        outline-none
        transition-all
        duration-300
        focus:border-red-500
        focus:bg-black/40
        focus:shadow-[0_0_40px_rgba(239,68,68,.2)]"
      />

    </div>

    {/* Email */}

    <div>

      <label className="mb-3 block uppercase tracking-[3px] text-white/50 text-xs">

        Email Address

      </label>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="john@email.com"
        className="w-full rounded-2xl
        border border-white/10
        bg-black/20
        px-6
        py-5
        text-white
        placeholder:text-white/30
        outline-none
        transition-all
        duration-300
        focus:border-red-500
        focus:bg-black/40
        focus:shadow-[0_0_40px_rgba(239,68,68,.2)]"
      />

    </div>

    {/* Subject */}

    <div>

      <label className="mb-3 block uppercase tracking-[3px] text-white/50 text-xs">

        Subject

      </label>

      <input
        type="text"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Website Development"
        className="w-full rounded-2xl
        border border-white/10
        bg-black/20
        px-6
        py-5
        text-white
        placeholder:text-white/30
        outline-none
        transition-all
        duration-300
        focus:border-red-500
        focus:bg-black/40
        focus:shadow-[0_0_40px_rgba(239,68,68,.2)]"
      />

    </div>

    {/* Message */}

    <div>

      <label className="mb-3 block uppercase tracking-[3px] text-white/50 text-xs">

        Your Message

      </label>

      <textarea
        rows={7}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell me about your project..."
        className="w-full resize-none rounded-2xl
        border border-white/10
        bg-black/20
        px-6
        py-5
        text-white
        placeholder:text-white/30
        outline-none
        transition-all
        duration-300
        focus:border-red-500
        focus:bg-black/40
        focus:shadow-[0_0_40px_rgba(239,68,68,.2)]"
      />

      <div className="mt-3 flex justify-end text-xs uppercase tracking-[2px] text-white/30">

        {form.message.length}/500

      </div>

    </div>

    {/* Button Placeholder */}

<motion.button
  type="submit"
  disabled={isSending}
  onHoverStart={() => setIsHoveringButton(true)}
  onHoverEnd={() => setIsHoveringButton(false)}
  whileHover={{
    scale: 1.03,
    y: -3,
  }}
  whileTap={{
    scale: 0.96,
  }}
className="group relative w-full overflow-hidden rounded-full
border border-red-500/30
bg-gradient-to-r
from-red-600
via-red-500
to-red-700
py-5
font-bold
tracking-[2px]
text-white
shadow-[0_0_40px_rgba(239,68,68,.25)]
disabled:opacity-70
disabled:cursor-not-allowed"
>
  {/* Shine */}

<motion.div
  animate={
    isHoveringButton
      ? {
          x: ["-120%", "250%"],
        }
      : {}
  }
  transition={{
    duration: 1.2,
    ease: "easeInOut",
  }}
  className="absolute inset-y-0 left-0 w-20
  rotate-12
  bg-white/30
  blur-xl"
/>
<motion.div
  animate={{
    opacity: [.3, .8, .3],
    scale: [1, 1.05, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="absolute inset-0 rounded-full bg-red-500/20"
/>
{isHoveringButton &&
  [...Array(10)].map((_, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
        y: 10,
        scale: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: -40,
        x: Math.random() * 80 - 40,
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay: index * 0.08,
      }}
      className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white"
    />
))}
<div className="relative z-20 flex items-center justify-center gap-4">

  <motion.div
    animate={{
      rotate: isHoveringButton ? -18 : 0,
      x: isHoveringButton ? 6 : 0,
    }}
    transition={{
      duration: .3,
    }}
  >
    <FaPaperPlane className="text-lg" />
  </motion.div>

  <span>

  {isSending
  ? "PREPARING FOR TAKEOFF..."
  : progress === 100
  ? "🚀 READY FOR TAKEOFF"
  : "SEND MESSAGE"}

  </span>

</div>
</motion.button>

<p className="mt-5 text-center text-sm text-white/35">

Your message will be securely prepared and launched directly to WhatsApp.

</p>

  </form>

</motion.div>}

          </div>        </div>

      </div>

   </section>

</>
);
};

export default Contact;