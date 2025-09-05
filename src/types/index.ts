import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  image: StaticImageData | string;
  desc: string;
  tech_stack: { name: string; image: StaticImageData | string }[];
  date_published: string;
  link: string;
};

export type ProjectDetailsProp = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};
