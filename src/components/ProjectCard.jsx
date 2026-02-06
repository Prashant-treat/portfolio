import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function ProjectCard({
    image,
    title,
    description,
    technologies = [],
    status = "All Systems Operational",
    github,
    website,
    onViewDetails,
}) {
    const handleViewDetails = () => {
        onViewDetails({
            image,
            title,
            description,
            technologies,
            status,
            github,
            website,
        });
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={handleViewDetails}
            className="
                group relative overflow-hidden rounded-2xl
                h-520px
                bg-white dark:bg-zinc-900
                border border-zinc-200 dark:border-zinc-800
                shadow-sm dark:shadow-lg
                hover:border-zinc-300 dark:hover:border-zinc-700
                transition flex flex-col
                cursor-pointer
            "
        >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-white dark:from-zinc-900 via-white/40 dark:via-zinc-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
                <div className="space-y-4">
                    {/* Title + Actions */}
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                            {title}
                        </h3>

                        <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 shrink-0">
                            {github && (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="hover:text-zinc-900 dark:hover:text-white transition"
                                >
                                    <i className="ri-github-fill text-lg" />
                                </a>
                            )}

                            {website && (
                                <a
                                    href={website}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-1 text-sm hover:text-zinc-900 dark:hover:text-white transition"
                                >
                                    Live
                                    <ArrowUpRight size={14} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                        {description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-wider text-zinc-500">
                            Technologies
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs text-zinc-700 dark:text-zinc-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-5 flex items-center justify-between">
                    {/* Status */}
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        {status}
                    </div>

                    {/* View Details */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleViewDetails();
                        }}
                        className="
                            flex items-center gap-1 text-sm
                            text-zinc-600 dark:text-zinc-400
                            hover:text-zinc-900 dark:hover:text-white
                            transition
                        "
                    >
                        View Details
                        <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
