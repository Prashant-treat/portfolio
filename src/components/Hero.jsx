import Badge from "./Badge";
import { useState } from "react";
import ResumePage from "./ResumePage.jsx";

import {
    CIcon,
    CppIcon,
    JsIcon,
    ReactIcon,
    NodeIcon,
    ExpressIcon,
    MongoIcon,
} from "./icon.jsx";
import { motion } from "motion/react";

export default function Hero() {
    const [showResume, setShowResume] = useState(false);



      const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.section
            className="pt-20 max-w-4xl mx-auto my-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Avatar */}
            <motion.div
                className="relative inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <img
                    src="/src/assets/image.png"
                    alt="Profile"
                    className="w-28 h-28 rounded-full mx-auto bg-blue-300 dark:bg-yellow-300"
                />
            </motion.div>

            {/* Heading */}
            <motion.h1
                className="mt-8 text-4xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                Hi, I&apos;m Prashant —{" "}
                <span className="text-gray-400 dark:text-gray-500 font-semibold">
                    A Full Stack web developer.
                </span>
            </motion.h1>

            {/* Description */}
            <motion.p
                className="mt-10 text-xl leading-loose text-gray-600 dark:text-gray-400"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                Aspiring software developer with hands-on experience in building
                applications using{" "}
                <Badge
                    icon={CIcon}
                    href="https://en.wikipedia.org/wiki/C_(programming_language)"
                >
                    Clang
                </Badge>
                ,{" "}
                <Badge icon={CppIcon} href="https://isocpp.org">
                    C++
                </Badge>
                . Experienced in developing full-stack projects with API
                integrations using{" "}
                <Badge
                    icon={JsIcon}
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                >
                    JavaScript
                </Badge>
                ,{" "}
                <Badge icon={ReactIcon} href="https://react.dev">
                    React
                </Badge>
                ,{" "}
                <Badge icon={ExpressIcon} href="https://expressjs.com">
                    Express
                </Badge>
                ,{" "}
                <Badge icon={NodeIcon} href="https://nodejs.org">
                    Node.js
                </Badge>
                , and{" "}
                <Badge icon={MongoIcon} href="https://www.mongodb.com">
                    MongoDB
                </Badge>
                . along with a solid understanding of{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Backend Development
                </span>{" "}
                and{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Security.
                </span>
            </motion.p>

            {/* CTA */}
            <motion.div
                className="mt-8 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <button
                    onClick={() => setShowResume(true)}
                    className="px-5 py-2.5 text-sm font-medium rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                    Resume / CV
                </button>

                <motion.a
                    key="Contact"
                    className="px-5 py-2.5 text-sm font-medium rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200"
                    onClick={() => scrollToSection("Contact")}
                >
                    Get in touch
                    </motion.a>
                
            </motion.div>

            {/* Social icons */}
            <motion.div
                className="mt-8 flex px-2 gap-5 text-lg text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <a
                    href="https://x.com/prashan33956510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                >
                    X
                </a>
                <a
                    href="https://www.linkedin.com/in/prashant-kumar-84181721b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                >
                    In
                </a>
                <a
                    href="mailto:prashantreat@example.com"
                    className="hover:text-black dark:hover:text-white transition-colors"
                >
                    @
                </a>

                <ResumePage
                    isOpen={showResume}
                    onClose={() => setShowResume(false)}
                />
            </motion.div>
        </motion.section>
    );
}
