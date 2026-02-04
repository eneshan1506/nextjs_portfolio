export const personalInfo = {
  name: "Enes HAN",
  title: "Full-Stack Entwickler",
  description:
    "Ich entwickle moderne und benutzerfreundliche Webanwendungen. Ich arbeite mit React, Next.js und TypeScript.",
  avatar: "👨‍💻",
  email: "eneshan0646@gmail.com",
//   phone: "+90 555 123 4567",
  location: "Deutschland",
};

export const socialLinks = {
  github: "https://github.com/eneshan0646",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const about = {
  bio: [
    "Ich bin Enes HAN, ein leidenschaftlicher Full-Stack Entwickler mit Schwerpunkt auf modernen Webtechnologien. Mit umfangreicher Erfahrung in React, Next.js und TypeScript entwickle ich benutzerfreundliche und leistungsstarke Webanwendungen.",
  ],
};

export const skills = [
  { name: "React", level: "95%", icon: "FaReact" },
  { name: "Next.js", level: "90%", icon: "SiNextdotjs" },
  { name: "TypeScript", level: "75%", icon: "SiTypescript" },
  { name: "Tailwind", level: "90%", icon: "SiTailwindcss" },
//   { name: "Node.js", level: "80%", icon: "FaNodeJs" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-ticaret sitesi. Next.js, Stripe entegrasyonu.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Görev yönetim uygulaması. Drag & drop özellikli.",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "MDX tabanlı modern blog platformu. SEO optimizasyonlu.",
    tags: ["Next.js", "MDX", "Tailwind"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

export const contactInfo = [
  {
    icon: "IoMail",
    label: "Email",
    value: personalInfo.email,
  },
  {
    icon: "IoCall",
    label: "Telefon",
    value: personalInfo.phone,
  },
  {
    icon: "IoLocation",
    label: "Konum",
    value: personalInfo.location,
  },
];
