import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaTools,
  FaGithubAlt,
} from "react-icons/fa";
import {
  SiFramer,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMongoose,
  SiVite,
  SiExpress,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

/* ---------------- Motion Variants ---------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 26,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.18 },
  },
};

/* ---------------- Skills Data ---------------- */

const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <FaCss3Alt />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: <SiJavascript />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: <FaReact />, url: "https://react.dev" },
    { name: "Tailwind", icon: <SiTailwindcss />, url: "https://tailwindcss.com" },
    { name: "Motion", icon: <SiFramer />, url: "https://www.framer.com/motion/" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, url: "https://nodejs.org" },
    { name: "Express", icon: <SiExpress />, url: "https://expressjs.com" },
    { name: "REST API", icon: <FaTools />, url: "https://restfulapi.net" },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com" },
    { name: "Mongoose", icon: <SiMongoose />, url: "https://mongoosejs.com" },
    { name: "PostgreSQL", icon: <SiPostgresql />, url: "https://www.postgresql.org" },
    { name: "SQL", icon: <FaDatabase />, url: "https://www.w3schools.com/sql/" },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, url: "https://git-scm.com" },
    { name: "GitHub", icon: <FaGithubAlt />, url: "https://github.com" },
    { name: "VS Code", icon: <VscCode />, url: "https://code.visualstudio.com" },
    { name: "Vite", icon: <SiVite />, url: "https://vitejs.dev" },
  ],
};

const sections = ["frontend", "backend", "database", "tools"];

/* ---------------- Component ---------------- */

export default function Skills() {
  const [activeSection, setActiveSection] = useState("frontend");
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="Skills"
      className="scroll-mt-32 w-full py-20 bg-gray-50 dark:bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Click a category to explore my skills
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`relative px-5 py-2 text-sm font-semibold transition-colors
                ${
                  activeSection === section
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

              {activeSection === section && (
                <motion.span
                  layoutId="skills-underline"
                  className="absolute left-0 -bottom-1 w-full h-2px
                    bg-black dark:bg-white rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {skills[activeSection].map((skill, index) => (
              <motion.a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={
                  reduceMotion
                    ? {}
                    : { y: -3, scale: 1.03 }
                }
                whileTap={{ scale: 0.98 }}
                className="group rounded-xl border border-gray-200 dark:border-white/12
                  bg-black/3 dark:bg-white/10
                  p-6 flex flex-col items-center text-center
                  hover:shadow-lg transition-shadow
                  focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
              >
                <div
                  className="text-4xl mb-4 text-black dark:text-white
                  transition-transform duration-300
                  group-hover:scale-110 group-hover:rotate-3"
                >
                  {skill.icon}
                </div>

                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
