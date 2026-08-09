import Launchfolio from "../../public/images/Launchfolioo.png";
import Kickabout from "../../public/images/kick.png";
import Oaken from "../../public/images/oaken.png";
import OwnTheFit from "../../public/images/otf.png";
import screenshot1 from '../../public/images/screenshot1.png'
import screenshot2 from "../../public/images/screenshot2.png";
import screenshot3 from "../../public/images/screenshot3.png";
import screenshot4 from "../../public/images/screenshot4.png";
import { StaticImageData } from "next/image";
import Launchfolio2 from "../../public/images/launchfolio2.png";
import Launchfolio3 from "../../public/images/launchfolio3.png";
import Launchfolio4 from "../../public/images/launchfolio4.png";
import Launchfolio5 from "../../public/images/launchfolio5.png";
import Launchfolio6 from "../../public/images/launchfolio6.png";
import KA1 from '../../public/images/kickabout1.png'
import KA2 from '../../public/images/kickabout2.png'
import KA3 from '../../public/images/kickabout3.png'
import KA4 from '../../public/images/kickabout4.png'
import KA5 from '../../public/images/kickabout5.png'
import KA6 from '../../public/images/kickabout6.png'
import KA7 from '../../public/images/kickabout7.png'
import KA8 from '../../public/images/kickabout8.png'
import Oaken1 from '../../public/images/oaken1.png'
import Oaken2 from '../../public/images/oaken2.png'
import Oaken3 from '../../public/images/oaken3.png'
import Oaken4 from '../../public/images/oaken4.png'
import Oaken5 from '../../public/images/oaken5.png'
import Oaken6 from '../../public/images/oaken6.png'
import Oaken7 from '../../public/images/oaken7.png'
import OTF1 from '../../public/images/otf1.png'
import OTF2 from '../../public/images/otf2.png'
import OTF3 from '../../public/images/otf3.png'
import OTF4 from '../../public/images/otf4.png'
import OTF5 from '../../public/images/otf5.png'
import OTF6 from '../../public/images/otf6.png'
import OTF7 from '../../public/images/otf7.png'
import OTF8 from '../../public/images/otf8.png'
import OTF9 from '../../public/images/otf9.png'
import OTF10 from '../../public/images/otf10.png'
export type Category = 'frontend' | 'fullstack' | 'animations';

export type GalleryImage = {
    src:StaticImageData;
    type?: 'desktop' | 'mobile'
}
export type Project = {
  slug: string;
  image: StaticImageData;
  images:GalleryImage[];
  projectTitle: string;
  description: string;
  link:string;
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
    images:[{src:Launchfolio},{src:Launchfolio2},{src:Launchfolio3},{src:Launchfolio4},{src:Launchfolio5},{src:Launchfolio6}],
    projectTitle: "Launchfolio",
    description: "A pixel-accurate rebuild of a Framer template, translated into a fully responsive Next.js site — built to test how closely custom code could match a no-code design system in both fidelity and performance.",
    imageHeight: 520,
    category: 'frontend',
    link:'https://launchfolio.vercel.app',
    projectType:"Landing page",
    year:"2026",
    role:"frontend dev",
    client:"freelance"

  },
  {
    slug: 'kickabout',
    image: Kickabout,
    images:[
        { src:KA1, type:'mobile'},{src:KA2, type:'mobile'},{src:KA3, type:'mobile'},{src:KA4, type:'mobile'},{src:KA5, type:'mobile'},{src:KA6, type:'mobile'},{src:KA7, type:'mobile'},{src:KA8, type:'mobile'}],
    projectTitle: "Kickabout",
    link:"https://kickabout.vercel.app",
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
    images:[{src:Oaken1},{src:Oaken2},{src:Oaken3},{src:Oaken4},{src:Oaken5},{src:Oaken6},{src:Oaken7}],
    projectTitle: "Oaken",
    link:"https://oaken.vercel.app",
    description: "A furniture ecommerce site built from a designer-provided concept, with an editorial product presentation and a streamlined checkout experience.",
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
    images:[{src:OTF1,type:'mobile'},{src:OTF2,type:'mobile'},{src:OTF3,type:'mobile'},{src:OTF4,type:'mobile'},{src:OTF5,type:'mobile'},{src:OTF6,type:'mobile'},{src:OTF7,type:'mobile'},{src:OTF8,type:'mobile'},{src:OTF9,type:'mobile'},{src:OTF10,type:'mobile'}],
    projectTitle: "OwnTheFit",
    link:"https://own-the-fit.vercel.app",
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
    images:[{src:screenshot1}],
    projectTitle: "Image Hover Effect",
    description: "Interactive image gallery with smooth hover transitions and scale animations.",
    imageHeight: 520,
    link:'https://animations-opajobi.vercel.app/animations/image-hover',
    category: 'animations',
    projectType:"Hover animation",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
  {
    slug: 'image-gallery-selection',
    image: screenshot2,
    images:[{src:screenshot2}],
    projectTitle: "Image Gallery with Selection",
    description: "Interactive archive gallery allowing image selection with keyboard navigation and animated preview.",
    imageHeight: 520,
        link:'https://animations-opajobi.vercel.app/animations/image-select',
    category: 'animations',
    projectType:"Interactive animation",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
  {
    slug: 'hero-text-animation',
    image: screenshot3,
    images:[{src:screenshot3}],
    projectTitle: "Hero Section with Text Animation",
    description: "Full-screen hero section featuring character-by-character text animation and scroll-triggered reveals.",
    imageHeight: 520,
       link:'https://animations-opajobi.vercel.app/animations/hero-section',
    category: 'animations',
    projectType:"Text animation",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
  {
    slug: 'progress-indicator-animation',
    image: screenshot4,
    images:[{src:screenshot4}],
    projectTitle: "Progress Indicator Animation",
    description: "Dynamic progress animation with visual feedback and state management.",
    imageHeight: 520,
    link:'https://animations-opajobi.vercel.app/animations/progress-animation',
    category: 'animations',
    projectType:"Landing page",
    year:"2025",
    role:"frontend dev",
    client:"freelance"
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);