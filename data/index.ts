import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Im a newly graduted front-end developer with a passion for web development and design. I am a fast learner and a team player. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible and can adapt to any situation or project ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently looking for new opportunities to grow",
    description: "What is happening now?",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to contact me? Send me an email!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Exam Project - Gym Tracker",
    des: "A full-stack application that allows users to track their workouts and exercises. Users can create, update, and delete their workouts and exercises.",
    img: "/gt.svg",
    iconLists: [
      "/re.svg",
      "/css3.svg",
      "/axios.svg",
      "/ts.svg",
      "/node.svg",
      "/mongodb.svg",
    ],
    link: "https://github.com/Frawser/Exam-Project",
  },
  {
    id: 2,
    title: "Lottery website concept",
    des: "A application that tracks winning numbers from the biggest lotteries in America. Also inlcudes a system ready to recieve user lotter numbers and check if they are winners.",
    img: "/lot.svg",
    iconLists: ["/re.svg", "/css3.svg", "/axios.svg", "/ts.svg", "/node.svg"],
    link: "https://github.com/Frawser/Lottery/tree/main/my-react-ts-app",
  },
  {
    id: 3,
    title: "AirBnB clone for garage rentals",
    des: "A full-stack application that allows users to rent garages. Users can create, update, and delete their garages. The application also includes a search feature.",
    img: "/grg.svg",
    iconLists: [
      "/re.svg",
      "/sass.svg",
      "/ts.svg",
      "/node.svg",
      "/mongoose.svg",
      "/express.svg",
    ],
    link: "https://github.com/Frawser/FEP",
  },
  {
    id: 4,
    title: "Fullstack CMS website",
    des: "Project for school where I created a fullstack CMS website for a company that sells phones. The website is fully responsive.",
    img: "/cms.svg",
    iconLists: [
      "/re.svg",
      "/bootstrap.svg",
      "/ts.svg",
      "/node.svg",
      "/mongoose.svg",
      "/express.svg",
    ],
    link: "https://github.com/Frawser/JS3-CMS/tree/main/CMS",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Transformed their desktop app into mobile wireframes based on user needs, created CSS animations for key features, and developed an API that reads winning numbers from America's largest jackpots.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Development Program",
    desc: "Completed a 2-year program in frontend development, where I learned the latest technologies and tools in the industry.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Frawser",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mikael-fernandez-olsson-3822941b3/",
  },
];
