import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const firstrow = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  
] as const;

export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/Abhi0019?tab=repositories",
  },
  
] as const;

export const secondrow = [
  {
    skill_name: "Anaconda",
    image: "anaconda.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Astro",
    image: "astro.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "BootStrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "EsLint",
    image: "eslint.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Matplotlib",
    image: "matplotlib.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Numpy",
    image: "numpy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Vite JS",
    image: "vitejs.png",
    width: 80,
    height: 80,
  },
  
] as const;



export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://github.com/Abhi0019/Space-Portfolio",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://github.com/Abhi0019/Space-Portfolio",
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://github.com/Abhi0019/Space-Portfolio",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Abhi0019",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Github",
        icon: RxGithubLogo,
        link: "https://github.com/Abhi0019",
      },
      
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/abhi-varmora-780ba4390/",
      },
    ],
  },
  {
    title: "About",
    data: [
      
      
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:abhi.varmora19@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;


