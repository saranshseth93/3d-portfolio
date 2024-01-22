import { amazingCo, nookal, dnb, core, ibm } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";
import {
  faCloudSunRain,
  faDumbbell,
  faGamepad,
  faImage,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAirbnb,
  faBitcoin,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
    iconUrl: faComments,
    theme: "btn-back-red",
    name: "Bindi Buzz - Chat App",
    description:
      "A realtime chat application including adding friends using Google Authentication, Redis, ReactJS, NextJS, Typescript and TailwindCSS.",
    link: "https://bindibuzz.com",
  },
  {
    iconUrl: faGamepad,
    theme: "btn-back-yellow",
    name: "Snake Game",
    description:
      "A clone of the epic retro snake game we were all stuck to in the 90s. Built using HTML, CSS and JavaScript.",
    link: "https://naagin.netlify.app/",
  },
  {
    iconUrl: faGamepad,
    theme: "btn-back-green",
    name: "Emoji Tic Tac Toe",
    description:
      "A clone of tic tac toe game but with emojis. Built using NextJS and Tailwind CSS.",
    link: "https://tic-tac-toe-emoji.netlify.app/",
  },
  {
    iconUrl: faImage,
    theme: "btn-back-blue",
    name: "AI Image Generation from text",
    description:
      "A Dall-E Clone which generates an image from text entered using AI. Also has a place to display all generated art. Built using OpenAI API, ReactJS and Tailwind CSS & MongoDB.",
    link: "https://chitrakala.io/",
  },
  {
    iconUrl: faAirbnb,
    theme: "btn-back-pink",
    name: "Airbnb Clone",
    description: "An Airbnb UI clone using Tailwind CSS, mapbox and Nextjs.",
    link: "https://airbnb-clone-cws1mjarb-saranshseth93.vercel.app/",
  },
  {
    iconUrl: faYoutube,
    theme: "btn-back-black",
    name: "Youtube Clone",
    description:
      "A funtional Youtube clone using ReactJS, MaterialUI and Youtube API v3 to fetch videos.",
    link: "https://steady-pixel-media.netlify.app/",
  },
  {
    iconUrl: faDumbbell,
    theme: "btn-back-red",
    name: "Swasthya - Fitness App",
    description:
      "A functional Fitness app called Swasthya using ReactJS, MaterialUI and RapidAPI.",
    link: "https://swasthya-exercise.netlify.app/",
  },
  {
    iconUrl: faSpotify,
    theme: "btn-back-blue",
    name: "Dhun Lagi",
    description:
      "A functional Music app called Dhun Laagi using ReactJS, MaterialUI and Shazam API. It is a Spotify clone.",
    link: "https://dhun-laagi.netlify.app/",
  },
  {
    iconUrl: faBitcoin,
    theme: "btn-back-green",
    name: "Shaanti NFT Marketplace",
    description:
      "A functional NFT landing page called Shaanti used for my NFT collection using ReactJS, MaterialUI and Blockchain.",
    link: "https://shaanti.io/",
  },
  {
    iconUrl: faCloudSunRain,
    theme: "btn-back-black",
    name: "Is it raining?",
    description:
      "A weather app which tells you the weather in your city using VanillaJS, location API and Weather API. Location access needed!",
    link: "https://is-it-rainingg.netlify.app/",
  },
];
