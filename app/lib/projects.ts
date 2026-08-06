import Launchfolio from "../../public/images/Launchfolioo.png";
import Kickabout from "../../public/images/kick.png";
import Oaken from "../../public/images/oaken.png";
import OwnTheFit from "../../public/images/otf.png";
import screenshot1 from '../../public/images/screenshot1.png'
import screenshot2 from "../../public/images/screenshot2.png";
import screenshot3 from "../../public/images/screenshot3.png";
import screenshot4 from "../../public/images/screenshot4.png";
import { StaticImageData } from "next/image";

export type Category = 'frontend' | 'fullstack' | 'animations';

export type Project = {
  slug: string;
  image: StaticImageData;
  images:StaticImageData[];
  projectTitle: string;
  description: string;
  imageHeight: number;
  category: Category;
  projectType:string;
  year:string;
  role:string;
  client:string;
};

export const projects: Project[] = [
  {
    slug: 'launchfolio',
    image: Launchfolio,
    images:[Launchfolio,Launchfolio,Launchfolio,Launchfolio,Launchfolio,Launchfolio,Launchfolio,Launchfolio],
    projectTitle: "Launchfolio",
    description: "A framer template recreate",
    imageHeight: 520,
    category: 'frontend',
    projectType:"Landing page",
    year:"2026",
    role:"frontend dev",
    client:"freelance"

  },
  {
    slug: 'kickabout',
    image: Kickabout,
    images:[Kickabout,Kickabout,Kickabout,Kickabout,Kickabout,Kickabout,Kickabout,Kickabout],
    projectTitle: "Kickabout",
    description: "A bright startup idea where users can create 5 aside football sessions with flexibility of time, location and skill level and others can join. Users also have the luxury of rating and reviewing each other after a kickabout session.",
    imageHeight: 520,
    category: 'fullstack',
    projectType:"Web app, Mobile app",
    year:"2025",
    role:"fullstack dev",
    client:"freelance"
  },
  {
    slug: 'oaken',
    image: Oaken,
    images:[Oaken,Oaken,Oaken,Oaken,Oaken,Oaken,Oaken,Oaken],
    projectTitle: "Oaken",
    description: "An ecommerce furniture website designed by a twitter mutual.",
    imageHeight: 520,
    category: 'frontend',
    projectType:"Ecommerce",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
  {
    slug: 'own-the-fit',
    image: OwnTheFit,
    images:[OwnTheFit,OwnTheFit,OwnTheFit,OwnTheFit,OwnTheFit,OwnTheFit,OwnTheFit,OwnTheFit],
    projectTitle: "OwnTheFit",
    description: "A social community meets Ecommerce web app for streetwear enthusiasts and designers to connect.",
    imageHeight: 520,
    category: 'fullstack',
    projectType:"Web App",
    year:"2025",
    role:"fullstack dev",
    client:"freelance"
  },
  {
    slug: 'image-hover-effect',
    image: screenshot1,
    images:[screenshot1,screenshot1,screenshot1,screenshot1,screenshot1,screenshot1,screenshot1,screenshot1],
    projectTitle: "Image Hover Effect",
    description: "Interactive image gallery with smooth hover transitions and scale animations.",
    imageHeight: 520,
    category: 'animations',
    projectType:"Hover animation",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
  {
    slug: 'image-gallery-selection',
    image: screenshot2,
    images:[screenshot2,screenshot2,screenshot2,screenshot2,screenshot2,screenshot2,screenshot2,screenshot2],
    projectTitle: "Image Gallery with Selection",
    description: "Interactive archive gallery allowing image selection with keyboard navigation and animated preview.",
    imageHeight: 520,
    category: 'animations',
    projectType:"Interactive animation",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
  {
    slug: 'hero-text-animation',
    image: screenshot3,
    images:[screenshot3,screenshot3,screenshot3,screenshot3,screenshot3,screenshot3,screenshot3,screenshot3],
    projectTitle: "Hero Section with Text Animation",
    description: "Full-screen hero section featuring character-by-character text animation and scroll-triggered reveals.",
    imageHeight: 520,
    category: 'animations',
    projectType:"Text animation",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
  {
    slug: 'progress-indicator-animation',
    image: screenshot4,
    images:[screenshot4,screenshot4,screenshot4,screenshot4,screenshot4,screenshot4,screenshot4,screenshot4],
    projectTitle: "Progress Indicator Animation",
    description: "Dynamic progress animation with visual feedback and state management.",
    imageHeight: 520,
    category: 'animations',
    projectType:"Landing page",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);