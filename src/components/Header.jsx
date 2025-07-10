import React, { Fragment, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import data from "../Data/Data.json";
import { Dialog, Transition } from "@headlessui/react";
import Close from "../Assets/icons/Close";
import Logo from "../Assets/icons/Logo";

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

  return (
    <>
      <div
        className={`${
          hideHeader
            ? "hidden"
            : "sticky sm:fixed top-0 z-40 w-full md:py-3 sm:p-4 flex lg:justify-center sm:justify-between items-center transition-colors duration-500 bg-light-white-third/50 dark:bg-default/50 backdrop-blur-xl gap-10"
        }`}
      >
        <Link smooth to="#">
          <Logo />
        </Link>

        {navs.map((nav) => {
          return (
            <Link
              key={nav.id}
              smooth
              to={nav.path}
              className="lg:flex sm:hidden md:hidden text-sm cursor-pointer text-light-grey-third dark:text-light-grey-second hover:text-light-white-second"
            >
              {nav.name}
            </Link>
          );
        })}

        <a
          href="/Jeel-Bhoot-CV.pdf"
          target="_blank"
          className="lg:flex sm:hidden md:hidden text-sm cursor-pointer text-light-grey-third dark:text-light-grey-second hover:text-light-white-second"
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
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative" onClose={closeModal}>
            <div className="fixed inset-0 overflow-hidden">
              <div className="flex min-h-screen items-center justify-center text-center">
                <Dialog.Panel className="flex flex-col gap-4 w-full h-screen transform overflow-hidden bg-light-white/80 dark:bg-default/80 backdrop-blur-lg px-7 py-6 text-left align-middle transition-all">
                  <div
                    className="w-fit flex flex-col absolute right-4 top-5"
                    onClick={closeModal}
                  >
                    <Close />
                  </div>

                  <div className="flex flex-col gap-8 px-4 pt-12">
                    <Transition.Child
                      className="flex flex-col gap-8"
                      enter="transition ease-out duration-[400ms] transform"
                      enterFrom="opacity-0 scale-95 -translate-y-full"
                      enterTo="opacity-100 scale-100 translate-y-0"
                      leave="transition ease-out duration-[400ms] transform"
                      leaveFrom="opacity-100 scale-100 translate-y-0"
                      leaveTo="opacity-0 scale-95 -translate-y-full"
                    >
                      {navs.map((nav) => {
                        return (
                          <Link
                            key={nav.id}
                            smooth
                            to={nav.path}
                            className="w-fit text-3xl font-displayMedium cursor-pointer text-light-grey dark:text-light-white-second focus:outline-none"
                            onClick={closeModal}
                          >
                            {nav.name}
                          </Link>
                        );
                      })}

                      <a
                        href="/Jeel-Bhoot-CV.pdf"
                        target="_blank"
                        className="w-fit text-3xl font-displayMedium cursor-pointer text-light-grey dark:text-light-white-second focus:outline-none"
                      >
                        {data.resume}
                      </a>
                    </Transition.Child>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
