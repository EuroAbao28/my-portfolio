import { images } from "./images";

export const PROJECTS = [
  {
    image: images.web_mockup,
    title: "WatchMe",
    desc: "I created an anime streaming platform powered by the Consumet API, offering seamless anime playback through React Player. The platform includes a real-time global chat system using Socket.IO, allowing users to engage while streaming. To enhance usability, I implemented search, filtering, and pagination features within a responsive UI built with Tailwind CSS.",
    tech_stack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    tech_stack_img: [
      images.mongodb_icon,
      images.express_icon,
      images.react_icon,
      images.node_icon,
      images.socket_icon,
    ],
    date_published: "August, 2024",
    link: "https://watch-me.vercel.app/",
  },
  {
    image: images.web_mockup,
    title: "Meshenger",
    desc: "I built a real-time chat application using the MERN stack, enabling instant messaging between users with Socket.IO. To ensure security, I implemented authentication with JWT and bcrypt. The application features a modern, responsive user interface designed with Tailwind CSS, providing a smooth and accessible messaging experience across devices.",
    tech_stack: ["MongoDB", "Express", "React", "Node.js", "Axios"],
    tech_stack_img: [
      images.mongodb_icon,
      images.express_icon,
      images.react_icon,
      images.node_icon,
      images.socket_icon,
    ],
    date_published: "Octorber, 2024",
    link: "https://meshenger.vercel.app/",
  },
  {
    image: images.web_mockup,
    title: "ExQuizite",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam velit ipsam enim voluptas quae vel facere, voluptates doloribus vero nemo quod in ad expedita quas eveniet placeat, cumque ullam, officia eius soluta suscipit iure! Quia officiis modi iure explicabo qui! Lorem ipsum dolor error, hic doloremque libero natus commodi",
    tech_stack: ["MongoDB", "Express", "React", "Node.js", "API"],
    tech_stack_img: [
      images.mongodb_icon,
      images.express_icon,
      images.react_icon,
      images.node_icon,
    ],
    date_published: "August, 2024",
    link: "https://exquizite-two.vercel.app/",
  },
  {
    image: images.web_mockup,
    title: "Shambles",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam velit ipsam enim voluptas quae vel facere, voluptates doloribus vero nemo quod in ad expedita quas eveniet placeat, cumque ullam, officia eius soluta suscipit iure! Quia officiis modi iure explicabo qui! Lorem ipsum dolor error, hic doloremque libero natus commodi",
    tech_stack: ["MongoDB", "Express", "React", "Node.js", "API"],
    tech_stack_img: [
      images.mongodb_icon,
      images.express_icon,
      images.react_icon,
      images.node_icon,
    ],
    date_published: "September, 2024",
    link: "https://shambles-five.vercel.app/",
  },
];
