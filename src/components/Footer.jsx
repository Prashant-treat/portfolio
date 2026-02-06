export default function Footer() {

  return (
    <footer className="w-full  border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Prashant. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#Skills"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
