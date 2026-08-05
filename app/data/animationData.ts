import screenshot1 from '../../public/images/screenshot1.png'
import screenshot2 from '../../public/images/screenshot2.png'
import screenshot3 from '../../public/images/screenshot3.png'
import screenshot4 from '../../public/images/screenshot4.png'
export const animations = [
  {
    title: "Image Hover Effect",
    preview:screenshot1,
    description:
      "Interactive image gallery with smooth hover transitions and scale animations.",
    categories: ["CSS", "Framer Motion"],
    link:'https://animations-opajobi.vercel.app/animations/image-hover',
    approach:
      "Uses CSS transforms and transitions to create smooth scale and opacity effects on image hover, with a clean gallery layout.",
  },
  {
    title: "Image Gallery with Selection",
    preview:screenshot2,
    description:
      "Interactive archive gallery allowing image selection with keyboard navigation and animated preview.",
    categories: ["GSAP", "Canvas"],
        link:'https://animations-opajobi.vercel.app/animations/image-select',
    approach:
      "Combines GSAP animations with keyboard controls (arrow keys) to navigate a scrollable gallery, displaying selected images with overlay effects and smooth scrolling behavior.",
  },
  {
    title: "Hero Section with Text Animation",
    preview:screenshot3,
    description:
      "Full-screen hero section featuring character-by-character text animation and scroll-triggered reveals.",
    categories: ["GSAP", "SVG"],
        link:'https://animations-opajobi.vercel.app/animations/hero-section',
    approach:
      "Uses GSAP SplitText to split typography into individual characters, applies ScrollTrigger for scroll-based animations, and includes a custom cursor effect that follows mouse movement within the section.",
  },
  {
    title: "Progress Indicator Animation",
    preview:screenshot4,
    description:
      "Dynamic progress animation with visual feedback and state management.",
    categories: ["GSAP", "Framer Motion"],
        link:'https://animations-opajobi.vercel.app/animations/progress-animation',
    approach:
      "Showcases how to create animated progress indicators using GSAP for smooth value transitions and visual state changes.",
  },
];