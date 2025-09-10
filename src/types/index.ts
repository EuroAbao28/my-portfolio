import { StaticImageData } from "next/image";
import React from "react";

export interface ParentContainerProps {
  id?: string;
  children: React.ReactNode;
}

export type Project = {
  title: string;
  image: StaticImageData | string;
  desc: string;
  tech_stack: { name: string; image: StaticImageData | string }[];
  date_published: string;
  link: string;
};

export interface ProjectDetailsProp {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}
