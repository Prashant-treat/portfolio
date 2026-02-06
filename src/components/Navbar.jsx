import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
            sticky top-4 z-50
    max-w-6xl mx-auto
    px-4 sm:px-6 py-4
    flex items-center justify-between
    
    rounded-2xl
    backdrop-blur-sm
    bg-white/70 dark:bg-black/50
    border border-black/5 dark:border-white/10
      "
        // sticky top-4 z-50
        // max-w-6xl mx-auto
        // px-6 py-4
        // flex items-center justify-between
        // rounded-2xl
        // backdrop-blur-sm
        // bg-white/70 dark:bg-black/50
        // border border-black/5 dark:border-white/10
        >
            {/* Left */}
            <div className="flex items-center gap-3">
                {/* Avatar */}
                <motion.img
                    src="/src/assets/image.png"
                    alt="Avatar"
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className="
                w-12 h-12 rounded-lg
                bg-blue-400 dark:bg-yellow-300
                border border-white
                cursor-pointer
        "
                />
            </div>

            <div className="flex items-center gap-3 ">
                {/* Nav */}
                <nav className="flex space-x-4 translate-y-0 text-md font-medium text-gray-700 dark:text-gray-300">
                    {["Skills", "Projects", "Contact"].map((item) => (
                        <motion.a
                            key={item}
                            // href={`#${item}`}
                            whileHover={{ scale: 0.95, y: -1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="
                relative inline-block
                hover:text-black dark:hover:text-white
                
              "
                            onClick={() => scrollToSection(item)}
                        >
                            {item}
                            {/* Animated underline */}
                            <motion.span
                                className="absolute left-0 -bottom-1 h-2px w-full bg-black dark:bg-white"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.25 }}
                                style={{ originX: 0 }}
                            />
                        </motion.a>
                    ))}
                </nav>

                {/* Right */}

                {/* Search
                <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="
            hidden md:flex items-center gap-2
            px-3 py-2 text-sm
            rounded-lg border
            border-black/10 dark:border-white/10
            text-gray-600 dark:text-gray-300
            bg-white/50 dark:bg-black/40
          "
                >
                    Search
                    <span className="text-xs border rounded px-1">
                        Ctrl + K
                    </span>
                </motion.button> */}

                {/* Theme Toggle */}
                <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 0.95, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    aria-label="Toggle theme"
                    className="
             p-2 w-10 h-10 rounded-lg
            border border-black/10 dark:border-white/10
            bg-white/50 dark:bg-black/40
            text-gray-700 dark:text-gray-200
          "
                >
                    {theme === "dark" ? "☼" : "☾"}
                </motion.button>
            </div>
        </motion.header>
    );
}
