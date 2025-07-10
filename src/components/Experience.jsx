import React from "react";
import data from "../Data/Data.json";

export default function Experience() {
  const experiences = [
    {
      id: 0,
      name: data.experience.techFlitter,
      href: "https://www.thetfpl.com/",
      designation: data.experience.dev,
      desc: "Write modern, performant and robust code for a diverse array of client and internal projects, Work with a variety of different languages, frameworks and content management systems such as JavaScript and React, Worked with a team of 5 members and provided end-to-end solutions for clients",
      year: "June 2022 — Present",
    },

    {
      id: 1,
      name: data.experience.zestBrains,
      href: "https://www.zestbrains.com/",
      desc: "Completed a hands-on internship focused on React JS development. Contributed to building dynamic and responsive web interfaces, collaborated with senior developers to implement reusable components, and optimized front-end performance. Gained practical experience in state management, API integration, and component-based architecture.",
      designation: data.experience.frontDev,
      year: "Jan 2022 — May 2022",
    },
  ];

  return (
    <>
      <div
        className="flex flex-col lg:justify-center max-w-3xl lg:pt-24 lg:min-h-screen py-10 sm:m-auto sm:pt-20 p-8 gap-8"
        id="experience"
      >
        <h1 className="text-3xl sm:text-4xl font-displayMedium tracking-tight dark:text-white text-secondary">
          {data.experience.experienceTitle}
        </h1>

        <div className="flex flex-col gap-8">
          {experiences.map((experience) => {
            return (
              <div
                className="p-6 bg-white dark:bg-light-secondary shadow-lg rounded-lg"
                key={experience.id}
              >
                <div className="lg:max-w-4xl flex lg:flex-row sm:flex-col lg:items-center lg:justify-between sm:gap-2">
                  <h1 className="text-lg leading-6 font-sansMedium dark:text-white text-secondary">
                    <a
                      href={experience.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-link cursor-pointer text-xl"
                    >
                      {experience.name}
                    </a>
                  </h1>
                  <code className="text-sm dark:text-light-grey-third text-light-grey-second">
                    {experience.year}
                  </code>
                </div>
                <div>
                  <span className="text-[17px] dark:text-light-white-second text-secondary">
                    {experience.designation}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-[17px] leading-2 text-light-grey-third dark:text-light-grey-forth">
                    {experience.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
