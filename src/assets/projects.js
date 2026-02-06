
const projects = [


 {
    id: "blogy",
    image: ["blogy0.png"],
    title: "Blogy",
    description: "Blogy — a blogging website project built with JavaScript, providing basic blogging functionality and structure.",
    technologies: ["JavaScript", "HTML", "CSS","React","Appwrite", "Vite"],
    status: "Active",
    github: "https://github.com/Prashant-treat/Blogy",
    website: "#",
    details: [
  "Developed a scalable and responsive blogging platform using React and Vite with a modular, component-based architecture.",
  "Built a clean and intuitive UI using reusable components to improve maintainability and user experience.",
  "Integrated Appwrite services for user authentication, database operations, and content management.",
  "Enabled secure CRUD operations for blog posts with proper access control and session handling.",
  "Optimized performance using Vite’s fast build system and deployed the application on Vercel."
]

},
{
    id: "fullstack-user-portal",
    image: ["diagram-export-7-24-2025-5_31_33-PM(1).svg"],
    title: "Full Stack User Portal",
    description: "A scalable backend built with Node.js and MongoDB, featuring JWT-based authentication, secure file uploads, and 10+ RESTful APIs. Optimized developer experience using nodemon and Prettier for faster iteration and cleaner code.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Mongoose"],
    status: "Active",
    github: "https://github.com/Prashant-treat/backend",
    website: "",
    details: [
        "Developed a modular and scalable backend architecture using Node.js, MongoDB, and Mongoose.",
        "Implemented secure user authentication with JWT and bcrypt for encrypted login and session management.",
        "Built and tested 10+ RESTful APIs supporting CRUD operations and file uploads using Cloudinary.",
        "Used Postman for API testing and validation to ensure reliability.",
        "Improved development workflow with nodemon (auto reload) and Prettier for consistent code formatting and faster iteration."
    ]
},
{
    id: "mark-sweep-gc",
    image: ["mark-and-sweep-garbage-collection-l.webp"],
    title: "Mark Sweep Garbage Collector",
    description: "A C project implementing a custom mark-and-sweep garbage collector in a simulated VM, demonstrating memory management.",
    technologies: ["C"],
    status: "Active",
    github: "https://github.com/Prashant-treat/Mark-Sweep-Garbage-Collector",
    website: "",
    details: [
    "Implemented a custom mark-and-sweep garbage collection algorithm in C.",
    "Simulated a virtual machine environment to manage dynamic memory allocation.",
    "Designed marking and sweeping phases to detect and reclaim unreachable memory.",
    "Focused on memory safety, pointer traversal, and heap management concepts.",
    "Strengthened understanding of low-level memory management and system design."
  ]
},
]



export default projects;

