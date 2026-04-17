import wildOasisPic from "./assets/images/Wild-oasis-pic.png";
import ForkifyPic from "./assets/images/Pizza-App.png";

const logotext = "SurajMurali*";

const meta = {
  title: "Suraj Murali",
  description:
    "I’m Suraj Murali Full-Stack devloper, Inspired /~\nd Experienced on developing Business concepts into software-products",
};

const introdata = {
  title: "I’m Suraj Murali",
  animated: {
    first: "I love communicating with Computers",
    second: "I code cool websites",
    third: "I develop concepts as Product",
  },
  description:
    "I’m Suraj Murali Full-Stack devloper, Inspired & Experienced on developing Business concepts into software-products",

  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "Hi Im Suraj Murali",
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
  {
    jobtitle: "Intern",
    where: "TechData",
    date: "2024-Mar",
  },
  {
    jobtitle: "Software Trainee",
    where: "Avasoft",
    date: "2024-Sep",
  },
  {
    jobtitle: "FullStack Developer",
    where: "Intech Systems",
    date: "2025-Feb",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "React",
    value: 90,
  },
  {
    name: "Type-Script",
    value: 85,
  },
  {
    name: "Node-Js",
    value: 80,
  },
  {
    name: "Mongo-DB",
    value: 70,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const ReactProjects = [
  {
    img: wildOasisPic,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://wild-oasis-pi-topaz.vercel.app",
  },

  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const VanillaProjects = [
  {
    img: ForkifyPic,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "surajmuralisri@gmail.com",
  YOUR_FONE: "9342216329",
  description:
    "“Have an opportunity or idea? I’d love to collaborate and bring it to life.”",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/SurajMurali2003",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/suraj-murali-sri",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  ReactProjects,
  VanillaProjects,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
