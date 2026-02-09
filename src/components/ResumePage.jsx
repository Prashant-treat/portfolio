import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ResumeModal({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    aria-modal="true"
                    role="dialog"
                >
                    {/* SIZE CONTAINER */}
                    <div
                        className="relative w-[95vw] max-w-5xl h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            aria-label="Close resume"
                            className="absolute -top-10 -right-3 z-30
                         rounded-xl w-9 h-9 flex items-center justify-center
                         bg-white dark:bg-black shadow
                         text-gray-600 dark:text-gray-100
                         hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            ✕
                        </button>

                        {/* MODAL CARD */}
                        <motion.div
                            className="w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <iframe
                                src="/portfolio/resume.pdf"
                                className="w-full h-full"
                                title="Resume"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
