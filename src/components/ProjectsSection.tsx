import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import ProjectDetailsModal from "./modals/ProjectDetailsModal";
import { Project } from "@/types";
import NumberStamp from "./NumberStamp";

function ProjectsSection() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="grid grid-cols-[1fr_14px_minmax(0,1100px)_14px_1fr] sm:grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr]">
        <div className="bg-white"></div>
        <div className="border-x border-gray-300"></div>

        <div className="bg-white grid">
          <NumberStamp number="03" />

          <div className="py-16 col-start-1 row-start-1">
            <h3 className="font-bold text-2xl border-y border-r-gray-300 bg-white">
              Personal Projects:
            </h3>

            <div className="grid max-[620px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 p-4 gap-4">
              {PROJECTS.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 group transition-all">
                  <div className="h-36 overflow-hidden border-b border-gray-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="space-y-4 p-4">
                    <div className="flex justify-between">
                      <p className="text-base lg:text-xl font-medium">
                        {item.title}
                      </p>

                      <p className="text-xs lg:text-sm text-gray-500">
                        {item.date_published}
                      </p>
                    </div>

                    <p className="line-clamp-2 text-gray-700 text-sm mt-4">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech_stack.map((item, index) => (
                        <div
                          key={index}
                          className="w-8 p-1 border border-gray-300">
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProject(item);
                        setIsProjectModalOpen(true);
                      }}
                      className="flex items-center gap-4 bg-gray-950 text-white px-4 py-2 text-xs md:text-sm hover:gap-6 transition-all duration-500 cursor-pointer uppercase">
                      View Details
                      <BsArrowRight className="-mt-0.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-x border-gray-300"></div>
        <div className="bg-white"></div>
      </section>

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
    </>
  );
}

export default ProjectsSection;
