import { Project } from "@/types";
import { images } from "./images";

export const PROJECTS: Project[] = [
  {
    image: images.web_mockup,
    title: "WatchMe",
    desc: "Developed an anime streaming platform with seamless playback via React Player, integrated real-time global chat using Socket.IO, and implemented search, filtering, and pagination within a fully responsive Tailwind CSS UI.",
    tech_stack: [
      { name: "MongoDB", image: images.mongodb_icon },
      { name: "Express", image: images.express_icon },
      { name: "React", image: images.react_icon },
      { name: "Node.js", image: images.node_icon },
      { name: "Socket.io", image: images.socket_icon },
      { name: "Tailwind CSS", image: images.tailwind_icon },
    ],
    date_published: "August, 2024",
    link: "https://watch-me.vercel.app/",
  },
  {
    image: images.web_mockup,
    title: "Meshenger",
    desc: "Built a real-time chat application with the MERN stack, featuring instant messaging via Socket.IO, secure authentication with JWT and bcrypt, and a responsive Tailwind CSS interface for seamless cross-device usability.",
    tech_stack: [
      { name: "MongoDB", image: images.mongodb_icon },
      { name: "Express", image: images.express_icon },
      { name: "React", image: images.react_icon },
      { name: "Node.js", image: images.node_icon },
      { name: "Socket.io", image: images.socket_icon },
      { name: "Tailwind CSS", image: images.tailwind_icon },
    ],
    date_published: "Octorber, 2024",
    link: "https://meshenger.vercel.app/",
  },
  {
    image: images.web_mockup,
    title: "ExQuizite",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam velit ipsam enim voluptas quae vel facere, voluptates doloribus vero nemo quod in ad expedita quas eveniet placeat, cumque ullam, officia eius soluta suscipit iure! Quia officiis modi iure explicabo qui! Lorem ipsum dolor error, hic doloremque libero natus commodi",
    tech_stack: [
      { name: "MongoDB", image: images.mongodb_icon },
      { name: "Express", image: images.express_icon },
      { name: "React", image: images.react_icon },
      { name: "Node.js", image: images.node_icon },
    ],
    date_published: "August, 2024",
    link: "https://exquizite-two.vercel.app/",
  },
  {
    image: images.web_mockup,
    title: "Shambles",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam velit ipsam enim voluptas quae vel facere, voluptates doloribus vero nemo quod in ad expedita quas eveniet placeat, cumque ullam, officia eius soluta suscipit iure! Quia officiis modi iure explicabo qui! Lorem ipsum dolor error, hic doloremque libero natus commodi",
    tech_stack: [
      { name: "MongoDB", image: images.mongodb_icon },
      { name: "Express", image: images.express_icon },
      { name: "React", image: images.react_icon },
      { name: "Node.js", image: images.node_icon },
    ],
    date_published: "September, 2024",
    link: "https://shambles-five.vercel.app/",
  },
];
