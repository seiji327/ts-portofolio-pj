const technologiesPath = "images/Technologies";
const snackyPath = "images/Projects/Snacky";
const ncdiPath = "images/Projects/NCDI";
const portfolioPath = "images/Projects/Portfolio";
const budgetterPath = "images/Projects/Budgetter";

type Projects = {
  readonly name: string;
  readonly header: string;
  readonly image: string;
  readonly technologies: {
    [key: string]: string;
  };
  readonly description: string;
  readonly carouselImages: string[];
  readonly primaryColor: string;
}[];

const projects: Projects = [
  {
    name: "Snacky",
    header:
      "Snacky is an online snack shopping website developed during summer project term.",
    image: `${snackyPath}/card_image.png`,
    technologies: {
      html: `${technologiesPath}/html_logo.png`,
      css: `${technologiesPath}/css_logo.png`,
      js: `${technologiesPath}/js_logo.png`,
      sql: `${technologiesPath}/sql_logo.png`,
      php: `${technologiesPath}/php_logo.png`,
    },
    description: `Snacky is an online shopping website which was developed as a summer team project. It was the first time I worked in a team to develop something from scratch. 
      We used HTML, CSS as a frontend and JavaScript for any additional animation, MySQL as a database and PHP as the bridge between frontend and backend.
      We also incorporated Stripe for the payment system. I learned a lot of things not only related to programing also how to effectively and efficiently work as a team.`,
    carouselImages: [
      `${snackyPath}/carousel_1.png`,
      `${snackyPath}/carousel_2.png`,
      `${snackyPath}/carousel_3.png`,
      `${snackyPath}/carousel_4.png`,
      `${snackyPath}/carousel_5.png`,
      `${snackyPath}/carousel_6.png`,
      `${snackyPath}/carousel_7.png`,
      `${snackyPath}/carousel_8.png`,
    ],
    primaryColor: "#fc9403",
  },
  {
    name: "NCDI 2.0",
    header:
      "NCDI 2.0 is an internal tool which is used by our sponsor of the capstone project 2021",
    image: `${ncdiPath}/card_image.png`,
    technologies: {
      html: `${technologiesPath}/html_logo.png`,
      css: `${technologiesPath}/css_logo.png`,
      js: `${technologiesPath}/js_logo.png`,
      react: `${technologiesPath}/react_logo.png`,
    },
    description: `NCDI(New Customer Data Importer) 2.0 is an updated version of NCDI which was developed by our previous year's Camosun College capstone team. 
    This web application was developed by using mainly JavaScript and React. This was the first time for me to add functionalities to the exisiting program. 
    There were a lot of challenges such as understanding the existing code, refactoring and meeting the sponsor's needs.`,
    carouselImages: [
      `${ncdiPath}/carousel_1.png`,
      `${ncdiPath}/carousel_2.png`,
      `${ncdiPath}/carousel_3.png`,
      `${ncdiPath}/carousel_4.png`,
      `${ncdiPath}/carousel_5.png`,
    ],
    primaryColor: "#263055",
  },
  {
    name: "Portfolio",
    header: "This is my own portfolio website to intoroduce myself.",
    image: `${portfolioPath}/card_image.png`,
    technologies: {
      html: `${technologiesPath}/html_logo.png`,
      css: `${technologiesPath}/css_logo.png`,
      js: `${technologiesPath}/js_logo.png`,
      react: `${technologiesPath}/react_logo.png`,
    },
    description: `This is the portfolio website developed by using TypeScript and React. Initially, I developed this website using JavaScript and React, 
      but since I thought it would be a great practice for me to learn TypeScript, I decided to convert JavaScript to TypeScript (Not much change though).`,
    carouselImages: [
      `${portfolioPath}/carousel_1.png`,
      `${portfolioPath}/carousel_2.png`,
      `${portfolioPath}/carousel_3.png`,
      `${portfolioPath}/carousel_4.png`,
      `${portfolioPath}/carousel_5.png`,
    ],
    primaryColor: "#9803fc",
  },
  {
    name: "Budgetter (in progress)",
    header: "This is an web application to manage budget.",
    image: `${budgetterPath}/card_image.png`,
    technologies: {
      html: `${technologiesPath}/html_logo.png`,
      css: `${technologiesPath}/css_logo.png`,
      js: `${technologiesPath}/js_logo.png`,
      react: `${technologiesPath}/react_logo.png`,
    },
    description: `This is an web application that manages budget. I decided to develop this to strengthen my skills 
    about JavaScript, ReactJS, Context API, Express, Mongoose and API. For the future, I am planning to add more analytics
    functionalities such as comparing month to month and which category a user is spending most and how to cut off expense.`,
    carouselImages: [
      `${budgetterPath}/carousel_1.png`,
      `${budgetterPath}/carousel_2.png`,
      `${budgetterPath}/carousel_3.png`,
      `${budgetterPath}/carousel_4.png`,
    ],
    primaryColor: "#495bf5",
  },
];

export default projects;
