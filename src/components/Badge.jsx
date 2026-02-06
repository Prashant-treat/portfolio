const Badge = ({ icon: Icon, href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2 px-3 py-1 mr-2 rounded-md
      text-sm font-medium

      bg-black/10 
      dark:bg-white/15 text-gray-800 dark:text-gray-200

      border border-gray-400 border-dashed
      dark:border-gray-700

      shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]
      dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]


    "
  >
    {Icon && <Icon className="w-5 h-5" />}
    {children}
  </a>
);

export default Badge;
