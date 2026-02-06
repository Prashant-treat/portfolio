import { useState } from "react";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import projects from "../assets/projects";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function ProjectsSection() {
    const [activeProject, setActiveProject] = useState(null);
    return (
        <motion.section
            id="Projects"
            className="py-20 bg-white/10 dark:bg-black transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
        >
            <div className="px-6">
                {/* Header */}
                <motion.div className="mb-10" variants={fadeUp}>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        Featured
                    </span>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                        Projects
                    </h2>
                </motion.div>

                {/* Responsive Grid (NO OVERLAP) */}
                <motion.div
                    className="
          
            grid gap-8 lg:grid-cols-2
          "
                    variants={container}
                >
                    {projects.map((project) => (
                        <motion.div variants={fadeUp}>
                            <ProjectCard
                                key={project.title}
                                {...project}
                                onViewDetails={setActiveProject}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ProjectDetail
                project={activeProject}
                onClose={() => setActiveProject(null)}
            />
        </motion.section>
    );
}
