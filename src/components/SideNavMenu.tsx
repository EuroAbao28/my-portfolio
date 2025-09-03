import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import React from "react";

type SideNavMenuProps = {
  navItems: string[];
  isOpen: boolean;
  onClose: () => void;
};

function SideNavMenu({ navItems, isOpen, onClose }: SideNavMenuProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50 min-[600px]:hidden">
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
      <div className="fixed inset-0">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full">
          <DialogPanel>
            <div
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 9px, rgba(83, 83, 83, 0.2) 9px, rgba(83, 83, 83, 0.2) 10px)",
                backgroundPosition: "center center",
              }}
              className="bg-white fixed right-0 top-0 max-h-60 w-1/2 shadow-lg grid grid-cols-[20px_1fr_20px] grid-rows-[20px_1fr_20px]">
              <div></div>
              <div className="border-x border-gray-300"></div>
              <div></div>

              <div className="border-y border-gray-300"></div>
              <ul className="border border-gray-300 space-y-4">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={onClose}
                    className="bg-white first:border-b last:border-t border-gray-300 not-first:not-last:border-y hover:bg-gray-50 active:bg-gray-50">
                    <a
                      href={`#${item}`}
                      className="flex py-2 justify-center items-center capitalize text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-y border-gray-300"></div>

              <div></div>
              <div className="border-x border-gray-300"></div>
              <div></div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
}

export default SideNavMenu;
