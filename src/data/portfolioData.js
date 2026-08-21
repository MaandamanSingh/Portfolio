import pinnacleImg from "../assets/about/pinnacle.png";
import pspblImg from "../assets/about/pspbl.png";
import bibliophileImg from "../assets/about/bibliophile.png";
import studySyncImg from "../assets/about/Studysync.png";
import regentImg from "../assets/about/regent.png";
import unrealImg from "../assets/about/unreal.png";

/* ==========================================================
   PERSONAL INFORMATION
========================================================== */

export const personalInfo = {
  
  name: "Maandaman Singh",

  firstName: "Maandaman",

  lastName: "Singh",

  displayName: "Maandaman Singh",

  title: "Frontend Developer",

  subtitle:
    "React Developer • WordPress Developer • UI/UX Designer",

  location: "Brandon, Manitoba, Canada",

  phone: "+1 (204) 574-8509",

  emails: {
    primary: "maandamansingh6@gmail.com",
    secondary: "vanshcanada0603@gmail.com",
  },

  website: "",

  resumeUrl: "/My_resume.pdf",

  profileImage: "/images/profile.png",

  availability: "Available for Opportunities",

  summary:
    "Frontend Developer passionate about building modern, responsive, and user-focused digital experiences. Experienced in React, WordPress, UI/UX Design, PHP, and full-stack web development through real-world client work, academic projects, and professional practicum. I enjoy transforming ideas into scalable, accessible, and visually engaging web applications.",
};

/* ==========================================================
   NAVIGATION
========================================================== */

export const navigation = [
  {
    title: "Home",
    href: "#home",
  },

  {
    title: "About",
    href: "#about",
  },

  {
    title: "Experience",
    href: "#experience",
  },

  {
    title: "Projects",
    href: "#projects",
  },

  {
    title: "Services",
    href: "#services",
  },

  {
    title: "Skills",
    href: "#skills",
  },

  {
    title: "Leadership",
    href: "#leadership",
  },

  {
    title: "Certificates",
    href: "#certificates",
  },

  {
    title: "Contact",
    href: "#contact",
  },
];

/* ==========================================================
   HERO SECTION
========================================================== */

export const heroContent = {
  badge: "Available for Opportunities",

  greeting: "Hello, I'm",

  name: "Maandaman Singh",

  title: "Building Modern Digital Experiences",

  rotatingTitles: [
    "Frontend Developer",
    "React Developer",
    "WordPress Developer",
    "UI/UX Designer",
    "Web Developer",
  ],

  description:
    "I design and develop fast, modern, and responsive websites that combine clean user experiences with scalable code. My expertise spans React, WordPress, UI/UX Design, and full-stack web development.",

  primaryButton: {
    text: "View Projects",
    link: "#projects",
  },

  secondaryButton: {
    text: "Download Resume",
    link: "/My_resume.pdf",
  },

  experience: "1+",

  stats: [
    {
      number: "15+",
      label: "Projects Delivered",
    },

    {
      number: "12+",
      label: "Technologies",
    },

    {
      number: "1+",
      label: "Years Experience",
    },
  ],
};

/* ==========================================================
   ABOUT
========================================================== */

export const aboutContent = {
  badge: "About Me",

  heading: "Passionate About Creating Digital Experiences",

  description:
    "I'm a Web & Interactive Development graduate from Assiniboine College who enjoys transforming ideas into modern digital products. My work focuses on responsive web development, intuitive user experiences, and scalable WordPress and React solutions.",

  paragraph1:
    "Through academic projects and professional practicum experience, I've worked with React, PHP, Django, WordPress, Elementor, MySQL, JavaScript, and modern frontend technologies while solving real-world business challenges.",

  paragraph2:
    "I believe great software is built by combining thoughtful design, clean development practices, accessibility, and continuous learning. Every project is an opportunity to create meaningful digital experiences.",
image: "/maandaman.png",

  highlights: [
    "Frontend Development",

    "React Development",

    "WordPress Development",

    "UI/UX Design",

    "Responsive Web Design",

    "Accessibility",
  ],
};

/* ==========================================================
   QUICK STATISTICS
========================================================== */

export const statistics = [
  {
    number: "15+",
    label: "Completed Projects",
  },

  {
    number: "12+",
    label: "Technologies",
  },

  {
    number: "100%",
    label: "Responsive Designs",
  },

  {
    number: "∞",
    label: "Continuous Learning",
  },
];

/* ==========================================================
   SOCIAL LINKS
========================================================== */

export const socialLinks = {
  linkedin: "https://linkedin.com/in/MaandamanSingh",

  whatsapp: "https://wa.me/12045748509",

  email: "mailto:maandamansingh6@gmail.com",

  resume: "/My_resume.pdf",
};
/* ==========================================================
   PROFESSIONAL EXPERIENCE
========================================================== */

export const experienceContent = {
  badge: "Professional Experience",

  heading: "Experience That Creates Impact",

  description:
    "Real-world experience building responsive websites, collaborating with clients, solving business challenges, and delivering production-ready web solutions.",

  experiences: [
    {
      company: "Pinnacle Event Rentals",

      position: "Web Developer Intern",

      duration: "May 2026 – July 2026",

      location: "Brandon, Manitoba",

      description:
        "Completed a full-time practicum focused on WordPress development, Elementor customization, inventory integration, UI improvements, responsive design, and custom functionality for a live business website.",

      achievements: [
        "Built custom WordPress features",

        "Developed inventory filtering solutions",

        "Designed interactive gallery experiences",

        "Improved responsive layouts",

        "Enhanced user experience",

        "Worked directly with real clients",
      ],
    },
  ],
};

/* ==========================================================
   PROJECTS
========================================================== */

export const projects = [
  {
    id: "pinnacle", 

    image: pinnacleImg,

    number: "01",

    badge: "⭐ Featured Project",

    title: "Pinnacle Event Rentals",

    description:
      "Developed custom WordPress features, Elementor layouts, inventory filtering, gallery functionality, and responsive improvements for a live rental business during my professional practicum.",

    techTags: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "CSS",
      "HTML",
    ],

    links: {
      demo: "https://pinnacleeventrentals.ca/",

      github: null,
    },

    featured: true,
  },

  {
    id: "pspbl",

    image: pspblImg,

    number: "02",

    badge: "Capstone Project",

    title: "PSPBL Website Redesign",

    description:
      "Complete UX/UI redesign and digital strategy for the Problem-Based Learning Institute including research, wireframes, prototypes, branding, and responsive interfaces.",

    techTags: [
      "Figma",
      "UI/UX",
      "Research",
      "Wireframes",
      "Prototype",
    ],

    links: {
      demo: "https://assiniboinecreative.media/pspbl/",

      github: null,
    },

    featured: true,
  },

  {
    id: "ecommerce",

    number: "03",

    image: bibliophileImg,

    title: "Bibliophile Club",

    description:
      "Responsive e-commerce platform featuring authentication, shopping cart, database integration, and admin functionality.",

    techTags: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    links: {
      demo: "https://assiniboinecreative.media/student/wid/2024/singhm21/Proj_1/stack.php",

      github: null,
    },
  },

  {
    id: "studysync",

    number: "04",

    image: studySyncImg,

    title: "Study Sync",

    description:
      "Student productivity application designed using FlutterFlow and Firebase to improve task management and organization.",

    techTags: [
      "FlutterFlow",
      "Firebase",
      "Mobile UI",
      "UX",
    ],

    links: {
      demo: "https://app.flutterflow.io/project/study-sync-ggvfox",

      github: null,
    },
  },

  {
    id: "regent",

    image: regentImg,

    number: "05",

    title: "Regent Custom Crest",

    description:
      "Website redesign focused on improving branding, responsiveness, navigation, and overall user experience.",

    techTags: [
      "WordPress",
      "Figma",
      "UI Design",
      "Responsive Design",
    ],

    links: {
      demo: "https://assiniboinecreative.media/student/wid/2024/singhm21/Regent%20website/",

      github: null,
    },
  },

  {
    id: "adventuregame",

    image: unrealImg,

    number: "06",

    badge: "Game Development",

    title: "Adventure Game Prototype",

    description:
      "Third-person game prototype built in Unreal Engine 5 featuring level design, lighting, gameplay mechanics, and environment creation.",

    techTags: [
      "UE5",
      "Blueprints",
      "3D",
      "Level Design",
    ],

    links: {
      demo: "https://youtu.be/BRrOuHBMCVI",

      github: null,
    },
  },
];

/* ==========================================================
   SERVICES
========================================================== */

export const skillsContent = {
  badge: "What I Do",

  heading: "Helping Businesses Build Better Digital Experiences",

  description:
    "From planning and design to development and deployment, I build modern websites and web applications that are fast, scalable, and user-focused.",

  cards: [
    {
      number: "01",

      title: "Web Development",

      text:
        "Building responsive websites using HTML, CSS, JavaScript, PHP, and modern web technologies.",
    },

    {
      number: "02",

      title: "React Development",

      text:
        "Creating interactive, component-based applications with React and modern frontend architecture.",
    },

    {
      number: "03",

      title: "WordPress Development",

      text:
        "Developing custom WordPress websites using Elementor, WooCommerce, themes, and plugins.",
    },

    {
      number: "04",

      title: "UI / UX Design",

      text:
        "Designing intuitive interfaces, wireframes, and engaging user experiences using Figma and modern design principles.",
    },
  ],
};

/* ==========================================================
   TECHNICAL SKILLS
========================================================== */

export const technicalSkills = {
  badge: "Technology Stack",

  heading: "Technologies I Work With",

  description:
    "A collection of technologies, frameworks, platforms, and tools I use to design and develop modern digital products.",

  categories: [
    {
  title: "Frontend Development",

  skills: [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 80 },
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 94 },
    { name: "Bootstrap", level: 90 },
  ],
},

    {
  title: "Backend Development",

  skills: [
    { name: "PHP", level: 90 },
    { name: "Python", level: 82 },
    { name: "Django", level: 82 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 78 },
    { name: "REST APIs", level: 90 },
  ],
},
    {
  title: "Databases",

  skills: [
    { name: "MySQL", level: 90 },
    { name: "SQLite", level: 85 },
    { name: "Firebase", level: 88 },
  ],
},

    {
  title: "CMS & Web Platforms",

  skills: [
    { name: "WordPress", level: 95 },
    { name: "Elementor", level: 95 },
    { name: "WooCommerce", level: 88 },
    { name: "ACF", level: 75 },
    { name: "Custom Themes", level: 85 },
    { name: "Custom Plugins", level: 80 },
  ],
},

    {
  title: "Design & UI",

  skills: [
    { name: "Figma", level: 90 },
    { name: "Photoshop", level: 82 },
    { name: "Canva", level: 88 },
    { name: "Responsive Design", level: 95 },
    { name: "UI/UX", level: 90 },
    { name: "Accessibility", level: 88 },
  ],
},

   {
  title: "Tools & Workflow",

  skills: [
    { name: "Git", level: 88 },
    { name: "VS Code", level: 98 },
    { name: "Postman", level: 85 },
    { name: "Vite", level: 90 },
    { name: "XAMPP", level: 90 },
    { name: "FileZilla", level: 88 },
    { name: "GoDaddy", level: 82 },
  ],
},
  ],
};

/* ==========================================================
   SOFT SKILLS
========================================================== */

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Finding practical solutions through analytical thinking.",
  },

  {
    name: "Communication",
    icon: "💬",
    desc: "Clear communication with clients and development teams.",
  },

  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working effectively in collaborative environments.",
  },

  {
    name: "Adaptability",
    icon: "🚀",
    desc: "Learning new technologies and frameworks quickly.",
  },

  {
    name: "Attention to Detail",
    icon: "🎯",
    desc: "Building polished, accessible, and responsive interfaces.",
  },

  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Always improving through new technologies and best practices.",
  },
];
/* ==========================================================
   LEADERSHIP & COMMUNITY
========================================================== */

export const leadershipList = [
  {
    title: "Client Collaboration",

    badge: "Professional Experience",

    role: "Web Developer Intern",

    organization: "Pinnacle Event Rentals",

    description:
      "Worked directly with business owners to understand requirements, implement website improvements, and deliver solutions that enhanced both functionality and user experience.",
  },

  {
    title: "Capstone Project Leadership",

    badge: "Academic Project",

    role: "UX/UI Designer",

    organization: "PSPBL",

    description:
      "Led the research, planning, interface design, and presentation of a complete website redesign project using user-centered design principles.",
  },

  {
    title: "Cross-Functional Collaboration",

    badge: "Teamwork",

    role: "Developer",

    organization: "Academic Projects",

    description:
      "Collaborated with classmates on frontend development, UI/UX design, database integration, and project presentations while meeting strict academic deadlines.",
  },

  {
    title: "Continuous Professional Growth",

    badge: "Learning",

    role: "Self Learner",

    organization: "Personal Development",

    description:
      "Continuously expanding my knowledge through personal projects, modern web technologies, AI tools, UI/UX trends, and industry best practices.",
  },
];

/* ==========================================================
   EDUCATION
========================================================== */

export const education = [
  {
    institution: "Assiniboine College",

    program: "Web & Interactive Development",

    location: "Brandon, Manitoba",

    duration: "2024 – 2026",

    status: "Completed",

    highlights: [
      "Frontend Development",
      "React Development",
      "WordPress Development",
      "UI/UX Design",
      "Backend Development",
      "Database Design",
      "Mobile Application Development",
      "Accessibility",
    ],
  },
];

/* ==========================================================
   CERTIFICATES
========================================================== */

export const certificates = {
  badge: "Certificates",

  heading: "Learning Never Stops",

  description:
    "Academic achievements, certifications, and professional learning that continue to strengthen my technical and creative skills.",

  featured: [
    {
      name: "Web & Interactive Development Diploma",

      issuer: "Assiniboine College",

      icon: "🎓",
    },

    {
      name: "IELTS Academic",

      issuer: "IELTS",

      icon: "🌎",
    },

    {
      name: "Responsive Web Design",

      issuer: "freeCodeCamp",

      icon: "💻",
    },

    {
      name: "WordPress Development",

      issuer: "Professional Experience",

      icon: "🖥️",
    },

    {
      name: "UI/UX Design",

      issuer: "Academic Projects",

      icon: "🎨",
    },

    {
      name: "Google UX Design",

      issuer: "In Progress",

      icon: "✨",
    },
  ],

  buttonText: "View All",

  buttonLink: "#",
};

/* ==========================================================
   CONTACT
========================================================== */

export const contactContent = {
  badge: "Let's Connect",

  heading: "Let's Build Something Amazing Together",

  description:
    "Whether you're looking for a Frontend Developer, React Developer, or WordPress Developer, I'd love to hear about your project or opportunity.",

  email: "maandamansingh6@gmail.com",

  phone: "+1 (204) 574-8509",

  location: "Brandon, Manitoba, Canada",

  availability: "Open to Full-Time Opportunities",

  primaryButton: {
    text: "Send Email",

    link: "mailto:maandamansingh6@gmail.com",
  },

  secondaryButton: {
    text: "Download Resume",

    link: "/My_resume.pdf",
  },
};

/* ==========================================================
   RESUME CTA
========================================================== */

export const resumeCTA = {
  badge: "Resume",

  heading: "Interested In Working Together?",

  description:
    "Download my resume to learn more about my experience, technical skills, academic projects, and professional journey.",

  buttonText: "Download Resume",

  buttonLink: "/My_resume.pdf",
};

/* ==========================================================
   FOOTER
========================================================== */

export const footerContent = {
  brand: "Maandaman Singh",

  title: "Frontend Developer",

  tagline:
    "Building modern digital experiences through thoughtful design and clean development.",

  quickLinks: [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Services",
    "Skills",
    "Leadership",
    "Certificates",
    "Contact",
  ],

  technologies: [
    "React",
    "WordPress",
    "PHP",
    "JavaScript",
    "UI/UX",
  ],

  copyright: `© ${new Date().getFullYear()} Maandaman Singh. All Rights Reserved.`,
};

/* ==========================================================
   SEO
========================================================== */

export const seo = {
  title: "Maandaman Singh | Frontend Developer",

  description:
    "Portfolio of Maandaman Singh, Frontend Developer specializing in React, WordPress, UI/UX Design, and modern web development.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "WordPress Developer",
    "UI UX Designer",
    "Web Developer",
    "JavaScript",
    "Portfolio",
  ],
};
export const emailjsConfig = {
  serviceId: "",
  templateId: "",
  publicKey: "",
};
export const internshipsList = experienceContent.experiences.map((exp) => ({
  role: exp.position,
  organization: exp.company,
  duration: exp.duration,
  skills: exp.achievements,
  tech: [
    "WordPress",
    "React",
    "JavaScript",
    "PHP",
    "Elementor",
  ],
}));