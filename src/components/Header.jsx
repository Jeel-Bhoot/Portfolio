"use client";

import React, { Fragment, useRef, useState } from "react";
import data from "@/data/data.json";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Close from "@/components/icons/Close";
import Logo from "@/components/icons/Logo";

export default function Header() {
  const navs = [
    {
      id: 0,
      name: data.about.aboutTitle,
      path: `/#${data.about.aboutTitle.toLowerCase()}`,
    },
    {
      id: 1,
      name: data.experience.experienceTitle,
      path: `/#${data.experience.experienceTitle.toLowerCase()}`,
    },
    {
      id: 2,
      name: data.projects.projectsTitle,
      path: `/#${data.projects.projectsTitle.toLowerCase()}`,
    },
    {
      id: 3,
      name: data.contact.contactTitle,
      path: `/#${data.contact.contactTitle.toLowerCase()}`,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  // Section to scroll to once the mobile menu has closed and released its scroll lock
  const pendingHash = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHideHeader(false);
    }, 300);
  };

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setHideHeader(true);
    }, 100);
  };

  const navigateFromMenu = (event, path) => {
    event.preventDefault();
    pendingHash.current = path.slice(path.indexOf("#"));
    closeModal();
  };

  const scrollToPendingHash = () => {
    const hash = pendingHash.current;
    pendingHash.current = null;
    if (!hash) return;
    window.history.pushState(null, "", hash);
    document.getElementById(hash.slice(1))?.scrollIntoView();
  };

  return (
    <>
      <div
        className={`${
          hideHeader
            ? "hidden"
            : "sticky sm:fixed top-0 z-40 w-full md:py-5 sm:p-5 flex lg:justify-center sm:justify-between items-center transition-colors duration-500 bg-light-white-third/50 dark:bg-default/50 backdrop-blur-sm gap-10"
        }`}
      >
        <a href="#" aria-label={data.app}>
          <Logo />
        </a>

        {navs.map((nav) => {
          const navigateFromMenu = (event, path) => {
            event.preventDefault();
            pendingHash.current = path.slice(path.indexOf("#"));
            closeModal();
          };

          const scrollToPendingHash = () => {
            const hash = pendingHash.current;
            pendingHash.current = null;
            if (!hash) return;
            window.history.pushState(null, "", hash);
            document.getElementById(hash.slice(1))?.scrollIntoView();
          };

          return (
            <a
              key={nav.id}
              href={nav.path}
              className="lg:flex sm:hidden md:hidden text-sm cursor-pointer text-light-grey-third dark:text-light-grey-second hover:text-[#1877F2]"
            >
              {nav.name}
            </a>
          );
        })}

        <a
          href="/Jeel_Bhoot_React_NextJS_Developer.pdf"
          target="_blank"
          className="lg:flex sm:hidden md:hidden text-sm cursor-pointer text-light-grey-third dark:text-light-grey-second hover:text-[#1877F2]"
        >
          {data.resume}
        </a>

        <div className="lg:hidden sm:flex md:flex flex-col">
          <div className="flex flex-col" onClick={openModal}>
            <span className="w-5 h-0.5 dark:bg-light-white-second bg-secondary mb-1.5"></span>
            <span className="w-5 h-0.5 dark:bg-light-white-second bg-secondary"></span>
          </div>
        </div>
      </div>

      <div className="lg:hidden sm:flex md:flex flex-col">
        <Transition
          appear
          show={isOpen}
          as={Fragment}
          afterLeave={scrollToPendingHash}
        >
          <Dialog as="div" className="relative" onClose={closeModal}>
            <div className="fixed inset-0 overflow-hidden">
              <div className="flex min-h-screen items-center justify-center text-center">
                <DialogPanel className="flex flex-col gap-4 w-full h-screen transform overflow-hidden bg-light-white/80 dark:bg-default/80 backdrop-blur-lg px-7 py-6 text-left align-middle transition-all">
                  <div
                    className="w-fit flex flex-col absolute right-4 top-5"
                    onClick={closeModal}
                  >
                    <Close />
                  </div>

                  <div className="flex flex-col gap-8 px-4 pt-12">
                    <TransitionChild
                      as="div"
                      className="flex flex-col gap-8"
                      enter="transition ease-out duration-[400ms] transform"
                      enterFrom="opacity-0 scale-95 -translate-y-full"
                      enterTo="opacity-100 scale-100 translate-y-0"
                      leave="transition ease-out duration-[400ms] transform"
                      leaveFrom="opacity-100 scale-100 translate-y-0"
                      leaveTo="opacity-0 scale-95 -translate-y-full"
                    >
                      {navs.map((nav) => {
                        const navigateFromMenu = (event, path) => {
                          event.preventDefault();
                          pendingHash.current = path.slice(path.indexOf("#"));
                          closeModal();
                        };

                        const scrollToPendingHash = () => {
                          const hash = pendingHash.current;
                          pendingHash.current = null;
                          if (!hash) return;
                          window.history.pushState(null, "", hash);
                          document
                            .getElementById(hash.slice(1))
                            ?.scrollIntoView();
                        };

                        return (
                          <a
                            key={nav.id}
                            href={nav.path}
                            className="w-fit text-3xl font-displayMedium cursor-pointer text-light-grey dark:text-light-white-second focus:outline-hidden"
                            onClick={(event) =>
                              navigateFromMenu(event, nav.path)
                            }
                          >
                            {nav.name}
                          </a>
                        );
                      })}

                      <a
                        href="/Jeel_Bhoot_React_NextJS_Developer.pdf"
                        target="_blank"
                        className="w-fit text-3xl font-displayMedium cursor-pointer text-light-grey dark:text-light-white-second focus:outline-hidden"
                      >
                        {data.resume}
                      </a>
                    </TransitionChild>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
