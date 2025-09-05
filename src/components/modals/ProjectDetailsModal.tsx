import { ProjectDetailsProp } from "@/types";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuExternalLink } from "react-icons/lu";

function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsProp) {
  console.log(project);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      </TransitionChild>

      {/* Modal container */}
      <div className="fixed inset-0  w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-2">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-8"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-8">
            <DialogPanel className="max-w-4xl w-full">
              <div
                className="bg-white grid grid-cols-[16px_1fr_16px] grid-rows-[16px_1fr_16px_auto_16px] sm:grid-cols-[24px_1fr_24px] sm:grid-rows-[24px_1fr_24px_auto_24px]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 9px, rgba(83, 83, 83, 0.2) 9px, rgba(83, 83, 83, 0.2) 10px)",
                  backgroundPosition: "center center",
                }}>
                <div></div>
                <div className="border-x border-gray-300"></div>
                <div></div>

                <div className="border-y border-gray-300"></div>
                <div className="border border-gray-300">
                  {project && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-center object-cover"
                    />
                  )}
                </div>
                <div className="border-y border-gray-300"></div>

                <div></div>
                <div className="border-x border-gray-300"></div>
                <div></div>

                <div className="border-y border-gray-300"></div>
                <div className="border border-gray-300 bg-white">
                  <div className="flex justify-between items-center p-2 border-b border-gray-300">
                    <div>
                      <h1 className="text-lg sm:text-2xl font-medium">
                        {project?.title}
                      </h1>

                      <p className="text-xs sm:text-sm text-gray-500">
                        {project?.date_published}
                      </p>
                    </div>

                    {project && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="border border-gray-300 p-2 bg-gray-50 text-lg">
                        <LuExternalLink />
                      </Link>
                    )}
                  </div>

                  <p className="mt-6 border-y border-gray-300 text-sm sm:text-base">
                    {project?.desc}
                  </p>

                  <div className="mt-6 border-t border-gray-300 flex flex-wrap gap-2 p-2">
                    {project?.tech_stack.map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-300 p-2 bg-gray-50 flex items-center gap-2">
                        {project && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="w-5"
                          />
                        )}

                        <p className="text-xs sm:text-sm">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-y border-gray-300"></div>

                <div></div>
                <div className="border-x border-gray-300"></div>
                <div></div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  );
}

export default ProjectDetailsModal;
