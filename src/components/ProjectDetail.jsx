import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Github, Globe } from "lucide-react";

export default function ProjectDetail({ project, onClose }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, [project]);

    if (!project) return null;

    const images = project.images?.length
        ? project.images
        : project.image
          ? [project.image]
          : [];

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="relative w-[95vw] max-w-5xl max-h-[90vh] bg-white dark:bg-zinc-950 rounded-3xl overflow-auto shadow-2xl flex flex-col"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-2 right-5 z-20
    w-9 h-9 rounded-full
    bg-black/60 text-white
    hover:bg-black/80
    flex items-center justify-center
    focus:outline-none focus:ring-2 focus:ring-white/70"
                    >
                        ✕
                    </button>

                    <div className="w-full flex flex-col">
                        {/* HERO IMAGE */}
                        {images.length > 0 ? (
                            <div className="relative w-full h-96 md:h-103.5 overflow-hidden rounded-t-3xl bg-linear-to-br from-pink-500 via-purple-500 to-indigo-600">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={index}
                                        src={images[index]}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                </AnimatePresence>

                                {/* Optional subtle overlay */}
                                <div className="absolute inset-0 bg-black/20" />

                                {/* Slider Controls */}
                                {images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() =>
                                                setIndex(
                                                    (index -
                                                        1 +
                                                        images.length) %
                                                        images.length,
                                                )
                                            }
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                setIndex(
                                                    (index + 1) % images.length,
                                                )
                                            }
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                                        >
                                            <ChevronRight size={18} />
                                        </button>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="w-full h-96 md:h-103.5 rounded-t-3xl bg-linear-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700
  " />
                        )}

                        {/* CONTENT */}
                        <div className="flex-1 p-6 flex flex-col gap-6">
                            {/* TITLE */}
                            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                                {project.title}
                            </h1>
                            {/* OVERVIEW */}
                            <section>
                                <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">
                                    Overview
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {project.description}
                                </p>
                            </section>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* META ROW */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                                <Meta
                                    label="Status"
                                    value={project.status}
                                    highlight
                                />
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="flex gap-4">
                                {project.website && (
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-black/80"
                                    >
                                        <Globe size={16} />
                                        Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white"
                                    >
                                        <Github size={16} />
                                        Source Code
                                    </a>
                                )}
                            </div>

                            {/* DETAILS */}
                            <section>
                                <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">
                                    Project Details
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                                    {project.details?.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

/* Meta helper */
function Meta({ label, value, highlight }) {
    return (
        <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {label}
            </p>
            <p
                className={`mt-1 font-medium ${
                    highlight
                        ? "text-green-600 dark:text-green-400"
                        : "text-zinc-900 dark:text-white"
                }`}
            >
                {value}
            </p>
        </div>
    );
}
