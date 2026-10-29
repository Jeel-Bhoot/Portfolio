import React from "react";
import data from "@/data/data.json";
import Folder from "@/components/icons/Folder";
import Link from "@/components/icons/Link";

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: data.projects.codeLensAi,
      link: "https://codelens-ai-dev.netlify.app/",
      desc: "CodeLens AI reviews React files directly in the browser using the Claude API, flagging performance, accessibility, security and best-practice issues, each tied to the exact line with a one-click suggested fix.",
      tech: ["Next JS", "React JS", "Claude API", "Tailwind CSS"],
    },
    {
      id: 1,
      title: data.projects.pxToRem,
      link: "https://www.github.com/Jeel-Bhoot/PX-to-REM",
      desc: "PX to REM Converter converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16px pixel.",
      tech: ["JavaScript", "React JS", "Tailwind CSS"],
    },
    {
      id: 2,
      title: data.projects.reactTemplate,
      link: "https://www.github.com/Jeel-Bhoot/React-Template",
      desc: "React-Template is a clean, well-structured starter template for React projects, designed to simplify development and streamline customization.",
      tech: ["JavaScript", "React JS", "Tailwind CSS"],
    },
  ];
  return (
    <>
      <div
        className="flex flex-col lg:justify-center max-w-4xl lg:pt-24 lg:min-h-screen py-10 sm:m-auto sm:pt-20 p-8 gap-8"
        id="projects"
      >
        <h1 className="text-3xl sm:text-4xl font-displayMedium tracking-tight dark:text-white text-secondary">
          {data.projects.projectsTitle}
        </h1>
        <div className="grid lg:grid-cols-2 gap-8 leading-6">
          {projects.map((project) => {
            return (
              <div
                className="flex flex-col gap-6 px-5 py-6 bg-white dark:bg-light-secondary shadow-lg rounded-lg transition-[translate,box-shadow] duration-200 will-change-[translate] hover:-translate-y-1 hover:shadow-xl"
                key={project.id}
              >
                <div className="flex items-center justify-between">
                  <Folder />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <Link />
                  </a>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <h2 className="font-sansMedium dark:text-white text-secondary text-xl leading-7">
                    {project.title}
                  </h2>
                  <p className="text-[17px] text-light-grey-third dark:text-light-grey-forth">
                    {project.desc}
                  </p>
                  <ul className="mt-auto flex flex-wrap lg:flex-nowrap gap-x-1 gap-y-1 pt-4">
                    {project.tech.map((tech, index) => {
                      return (
                        <li
                          key={tech}
                          className="flex items-center gap-1 whitespace-nowrap"
                        >
                          {index > 0 && (
                            <span
                              aria-hidden="true"
                              className="text-light-grey-second dark:text-light-grey-third"
                            >
                              |
                            </span>
                          )}
                          <code>{tech}</code>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
