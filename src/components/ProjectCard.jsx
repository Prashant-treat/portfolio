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
    details 
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
            details
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
    h-113
    bg-white dark:bg-zinc-900
    border border-zinc-200 dark:border-zinc-800
    shadow-sm dark:shadow-lg
    hover:border-zinc-300 dark:hover:border-zinc-700
    transition flex flex-col
    cursor-pointer
  "
>

{/* Image */}
<div className="relative w-full h-48 md:h-52 lg:h-56 overflow-hidden rounded-t-2xl bg-linear-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700
">
  <motion.img
    src={image}
    alt={title}
    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
  />
  {/* Optional subtle overlay for readability */}
  <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
</div>



  {/* Content */}
  <div className="flex flex-col flex-1 p-5">
    {/* Title */}
    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
      {title}
    </h3>

    {/* Technologies */}
    <div className="mt-2 flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs text-zinc-700 dark:text-zinc-300"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Description */}
    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
      {description}
    </p>

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
