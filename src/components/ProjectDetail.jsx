import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-[95vw] max-w-4xl h-[85vh]
                     bg-white dark:bg-zinc-900
                     rounded-2xl overflow-hidden shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10
                       w-9 h-9 rounded-full
                       flex items-center justify-center
                       hover:bg-black/10 dark:hover:bg-white/10"
          >
            <X />
          </button>

          {/* Image */}
          <div className="h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-224px)]">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-semibold">
                {project.title}
              </h2>

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm underline"
                >
                  Live
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-2 text-zinc-500">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-md
                               bg-zinc-100 dark:bg-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {project.status}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
