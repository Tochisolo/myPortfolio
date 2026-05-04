import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import contactInfo from "../data/contactInfo";

// ─── HERO ───────────────────────────────────────────────────────────────────
export const heroData = {
  greeting: "Hi, I am",
  name: "Tochukwu Solomon Frank",
  titles: ["Full-Stack Developer", "MERN Specialist", "UI/UX Enthusiast"],
  bio: "I build performant, scalable web applications from pixel-perfect frontends to robust backend APIs. Let's turn your ideas into digital reality.",
  cta: "Hire Me",
  cvLink: "/CV.pdf",
  socials: [
    { icon: "FaGithub",    url: contactInfo.socials.github,    label: "GitHub" },
    { icon: "FaTwitter",   url: contactInfo.socials.twitter,   label: "Twitter" },
    { icon: "FaLinkedin",  url: contactInfo.socials.linkedin,  label: "LinkedIn" },
  ],
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const aboutData = {
  bio: "I'm a passionate Full-Stack Developer with expertise in the MERN stack. With a deep love for clean code and intuitive design, I craft web experiences that are both visually compelling and technically robust. I thrive at the intersection of engineering precision and creative expression.",
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Done" },
    { value: "8+", label: "Happy Clients" },
    { value: "5★", label: "Average Rating" },
  ],
  skills: [
    { name: "React.js", level: 92, icon: SiReact },
    { name: "Node.js", level: 85, icon: SiNodedotjs },
    { name: "MongoDB", level: 80, icon: SiMongodb },
    { name: "TypeScript", level: 78, icon: SiTypescript },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
    { name: "Express.js", level: 83, icon: SiExpress },
  ],
};

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const servicesData = [
  {
    id: 1,
    icon: FaCode,
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive UIs built with React and Tailwind CSS. Fast, accessible, and SEO-optimised by default.",
    tags: ["React", "Tailwind", "Next.js"],
  },
  {
    id: 2,
    icon: FaServer,
    title: "Backend Development",
    description:
      "Scalable REST and GraphQL APIs using Node.js and Express, engineered for reliability and performance.",
    tags: ["Node.js", "Express", "GraphQL"],
  },
  {
    id: 3,
    icon: FaMobileAlt,
    title: "Mobile-First Design",
    description:
      "Interfaces that look and feel flawless across every screen size, from widescreen monitors to small mobile devices.",
    tags: ["Responsive", "PWA", "React Native"],
  },
  {
    id: 4,
    icon: FaDatabase,
    title: "Database Architecture",
    description:
      "Efficient data modelling and query optimisation with MongoDB and PostgreSQL for maximum performance.",
    tags: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    id: 5,
    icon: FaCloud,
    title: "Cloud Deployment",
    description:
      "Full CI/CD pipelines and cloud deployments on AWS, Vercel, and Railway so your app is always live and fast.",
    tags: ["AWS", "Vercel", "Docker"],
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: "Auth & Security",
    description:
      "Secure authentication systems with JWT, OAuth 2.0, and role-based access control baked into every project.",
    tags: ["JWT", "OAuth", "RBAC"],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projectCategories = ["All", "Frontend", "Full-Stack", "Backend"];

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    description: "Full MERN stack shop with Stripe payments and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  // {
  //   id: 2,
  //   title: "SaaS Dashboard",
  //   category: "Frontend",
  //   description: "Analytics dashboard with real-time charts and team collaboration.",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  //   tech: ["React", "TypeScript", "Recharts", "Tailwind"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    id: 3,
    title: "REST API Gateway",
    category: "Backend",
    description: "High-performance API gateway with rate limiting and caching.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    category: "Full-Stack",
    description: "Headless CMS for creatives with drag-and-drop page builder.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    tech: ["Next.js", "MongoDB", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    category: "Full-Stack",
    description: "WebSocket-powered chat with rooms, file sharing, and notifications.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Landing Page Kit",
    category: "Frontend",
    description: "Conversion-optimised landing pages with A/B testing built in.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80",
    tech: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, LaunchPad",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Francisco delivered our platform two weeks ahead of schedule. The code quality was exceptional and the UI exceeded every expectation we had. Highly recommended.",
  },
  {
    id: 2,
    name: "David Okafor",
    role: "CTO, FinTrack",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Working with Francisco was effortless. He understood our complex requirements immediately and translated them into a clean, scalable architecture we're still proud of.",
  },
  {
    id: 3,
    name: "Amara Diallo",
    role: "Founder, CreativeHub",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "From the first call to final deployment, Francisco was professional, communicative, and technically brilliant. Our conversion rate improved by 40% after the redesign.",
  },
];

// ─── BLOG POSTS ───────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    slug: "mastering-react-performance",
    title: "Mastering React Performance Optimisation",
    excerpt: "Deep dive into useMemo, useCallback, lazy loading, and code splitting to make your React apps blazing fast.",
    category: "React",
    date: "April 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=700&q=80",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: 2,
    slug: "node-api-security",
    title: "Securing Your Node.js API in 2025",
    excerpt: "JWT, rate limiting, input sanitisation, CORS, and Helmet.js — everything you need to lock down your backend.",
    category: "Backend",
    date: "March 14, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    tags: ["Node.js", "Security", "API"],
  },
  {
    id: 3,
    slug: "tailwind-design-system",
    title: "Building a Design System with Tailwind CSS",
    excerpt: "How to structure tokens, components, and themes in Tailwind for a consistent, scalable design system.",
    category: "CSS",
    date: "February 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=700&q=80",
    tags: ["Tailwind", "Design System", "CSS"],
  },
  {
    id: 4,
    slug: "mongodb-aggregation-pipelines",
    title: "MongoDB Aggregation Pipelines Explained",
    excerpt: "Master the aggregation framework to handle complex data transformations and analytics queries with ease.",
    category: "Database",
    date: "January 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=700&q=80",
    tags: ["MongoDB", "Database", "Backend"],
  },
];