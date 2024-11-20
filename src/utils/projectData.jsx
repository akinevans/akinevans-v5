import cafe from "../assets/cafe.svg";
import social_sync from "../assets/social-sync.svg";

//? Moonjelly font for PetPal v1, Cloud Soft for v2, made using Canva
import petpal_v1_white from "../assets/petpal_v1_white.jpg";
import medcount from "../assets/med_count.jpg";

export const projectData = [
  {
    projectImg: cafe,
    alt: "Cafe Nyleta website",
    title: "Cafe Nyleta",
    description:
      "A responsive e-commerce website built with React, featuring an intuitive UI for effortless product browsing, filtering, and seamless category navigation. Key features include a shopping cart, product detail pages, and Redux for state management. Strapi CMS powers the back-end, while the mobile-friendly design ensures an optimal user experience across all devices, with a focus on performance and maintainability.",

    //^ listItems 1 - 3 are the left side. 4 - 6 are right

    listItem1: "React.js",
    listItem2: "JavaScript",
    listItem3: "Framer Motion",
    listItem4: "Redux",
    listItem5: "Strapi CMS",
    listItem6: "SCSS",
    githubLink: "https://github.com/akinevans/cafe-nyleta",
    externalLink: "https://cafe-nyleta.netlify.app/#/shop",
  },
  {
    projectImg: social_sync,
    alt: "Social Sync website",
    title: "Social Sync",
    description:
      "Created to showcase advanced user-interface development skills, Social Sync offers users a seamless landing page experience. Built using React, this project demonstrates proficiency in developing a clean, responsive, modern UI. Social Sync also showcases best practices in accessibility and performance optimization.",

    //^ listItems 1 - 3 are the left side. 4 - 6 are right

    listItem1: "React.js",
    listItem2: "HTML",
    listItem3: "Framer Motion",
    listItem4: "JavaScript",
    listItem5: "CSS",
    listItem6: "Figma",
    githubLink: "https://github.com/akinevans/socialsync",
    externalLink: "https://akinevans.github.io/socialsync/",
  },
  {
    projectImg: petpal_v1_white,
    alt: "Pet Pal website",
    title: "PetPal",
    description:
      "PetPal is a full-stack CRUD pet care tracker. Key features include comprehensive pet profiles, health and activity tracking, and data visualization for easy monitoring of metrics. Designed to help pet owners efficiently manage their pets health and well-being. PetPal streamlines the organization of pet-related tasks, making it an essential tool for ensuring optimal care and wellness for pets.",

    //^ listItems 1 - 3 are the left side. 4 - 6 are right

    listItem1: "React.js",
    listItem2: "MySQL",
    listItem3: "Redux",

    listItem4: "TypeScript",
    listItem5: "Firebase",
    listItem6: "SCSS",
    githubLink: "https://github.com/akinevans/pet-pal",
    externalLink: "https://github.com/akinevans/pet-pal",
  },
  {
    projectImg: medcount,
    alt: "Med Count website",
    title: "Med Count",
    description:
      "A health management tool designed to empower users with a structured approach to monitor wellness. By tracking daily symptoms, their severity, and many other metrics, the app helps users identify patterns and potential triggers over time. Med Count generates detailed health reports, enabling more accurate discussions with healthcare providers and supporting timely adjustments to treatment plans. Med Count bridges the gap between daily self-care and professional medical consultations, making health tracking more intuitive and impactful.",

    //^ listItems 1 - 3 are the left side. 4 - 6 are right

    listItem1: "React.js",
    listItem2: "MySQL",
    listItem3: "Redux",

    listItem4: "TypeScript",
    listItem5: "Firebase",
    listItem6: "SCSS",
    githubLink: "https://github.com/akinevans/med-counter",
    externalLink: "https://github.com/akinevans/med-counter",
  },
];
