import { amazingCo, nookal, dnb, core, ibm } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "AmazingCo",
    icon: amazingCo, // Replace with actual icon variable
    iconBg: "#424F69",
    date: "February 2022 - Present",
    points: [
      "Led full lifecycle development of web apps using React, Redux, Styled Components, Node.js, MongoDB, Next.js.",
      "Implemented functionalities such as subscription UI, payment integrations, carousel components, and A/B testing.",
      "Optimized SEO and website performance using AWS services and managed AWS S3 resources.",
      "Handled integrations with external services like Twilio, GA4, MailChimp, Auth0 and deployed apps using AWS, Buildkite.",
      "Converted designs to responsive websites and integrated payment solutions like PayPal, Stripe.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company_name: "Nookal",
    icon: nookal, // Replace with actual icon variable
    iconBg: "#323C40",
    date: "June 2017 - February 2022",
    points: [
      "Developed features and interfaces, aligning with UI/UX design standards.",
      "Transitioned the company from JavaScript to React and implemented code testing with Jest.",
      "Managed multiple SaaS product development using Bitbucket, Slack, Trello, JIRA.",
      "Improved company revenue by 1.5x through efficient coding in React, HTML5, AJAX, CSS, PHP.",
      "Ensured cross-browser compatibility and maintained high-quality, well-documented code.",
    ],
  },
  {
    title: "Website Developer Intern",
    company_name: "Dun & Bradstreet",
    icon: dnb, // Replace with actual icon variable
    iconBg: "#FFFFFF",
    date: "May 2017 - June 2017",
    points: [
      "Supported development of various websites using React, HTML, CSS, JavaScript, AngularJS, C3, D3, Bootstrap.",
      "Collaborated in team environments to develop web applications and solve software bugs.",
    ],
  },
  {
    title: "Web Developer & Project Analyst",
    company_name: "Core Management",
    icon: core, // Replace with actual icon variable
    iconBg: "#accbe1",
    date: "June 2016 - November 2016",
    points: [
      "Managed website development phases using Ruby on Rails, Materialize, CoffeeScript.",
      "Contributed to data-driven decision-making and established strong client relationships.",
    ],
  },
  {
    title: "Website Developer Intern",
    company_name: "IBM",
    icon: ibm, // Replace with actual icon variable
    iconBg: "#080808",
    date: "April 2016 - October 2016",
    points: [
      "Participated in design and project organization for multiple web and application projects.",
      "Guided front-end development using Meteor, Polymer, Materialize, Less, NodeJS, ESLint.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/saranshseth93",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/saranshseth/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
