import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  masslogo,
  carrent,
  jobit,
  tripguide,
  threejs,
  ctlogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Cyber Security",
    icon: backend,
  },
  {
    title: "Digital Forensic",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SOC Analyst",
    company_name: "SISL Infotech",
    icon: ctlogo,
    iconBg: "#383E56",
    date: "AUGUST 2025 - Present",
    points: [
      "Internship Duration - 6 months",
      "Monitoring and maintaining the Alerts.",
      "Escalates to L2 ",
    ],
  },

  {
    title: "DBA Manager",
    company_name: "Celebal Technologies",
    icon: ctlogo,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Internship Duration - 2 months",
      "Monitoring and maintaining the DataBase.",
      "TechnolOgy using Oracle SQL.",
      "Participating in data reviews and providing constructive feedback to team leader",
    ],
  },
  {
    title: "Digital Forensic Investigater",
    company_name: "Massmatic Cyber Forensic",
    icon: masslogo,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Aug 2025",
    points: [
      "Internship Duration - 6 months",
      "Scanning and monitoring the devices using Dr. phon and other related technologies.",
      "Implementing procedures and precautions according IT Laws.",
      "Removing bad sectors from the devices like Malwares, virus etc.",
    ],
  },
  
];

const testimonials = [
  {
     cname: "CHFI",
     cdescription: "EC council",

  }
]
const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, };
