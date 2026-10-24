import React from "react";
import data from "../Data/Data.json";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiStorybook,
  SiFigma,
  SiJsonwebtokens,
  SiJest,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiWebpack,
  SiVite,
  SiNetlify,
  SiJira,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  TbServerBolt,
  TbBraces,
  TbDevices,
  TbShare,
  TbAccessible,
  TbComponents,
  TbArrowsSplit,
  TbLoader2,
  TbCpu,
  TbGauge,
  TbApi,
  TbShieldLock,
  TbBroadcast,
  TbMapPin,
  TbChartBar,
  TbRefresh,
  TbGitPullRequest,
  TbCalendarEvent,
  TbUsersGroup,
} from "react-icons/tb";

// Brand logos use their brand color; concept icons and monochrome logos
// (color: null) use the accent or current text color instead.
const ACCENT = "#007AFF";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "SCSS / Sass", icon: SiSass, color: "#CC6699" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: null },
      { name: "SSR / SSG", icon: TbServerBolt, color: ACCENT },
      { name: "Hooks & Custom Hooks", icon: TbBraces, color: ACCENT },
      { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
      { name: "Responsive Design", icon: TbDevices, color: ACCENT },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Context API", icon: TbShare, color: ACCENT },
    ],
  },
  {
    title: "UI & Design Systems",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Accessibility", icon: TbAccessible, color: ACCENT },
    ],
  },
  {
    title: "Architecture & Performance",
    skills: [
      { name: "Component Architecture", icon: TbComponents, color: ACCENT },
      { name: "Code Splitting", icon: TbArrowsSplit, color: ACCENT },
      { name: "Lazy Loading", icon: TbLoader2, color: ACCENT },
      { name: "Memoization", icon: TbCpu, color: ACCENT },
      { name: "Performance Optimization", icon: TbGauge, color: ACCENT },
    ],
  },
  {
    title: "APIs & Data",
    skills: [
      { name: "REST APIs", icon: TbApi, color: ACCENT },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: null },
      { name: "RBAC", icon: TbShieldLock, color: ACCENT },
      { name: "Real-Time Data", icon: TbBroadcast, color: ACCENT },
      { name: "Map Integration", icon: TbMapPin, color: ACCENT },
      { name: "Data Visualization", icon: TbChartBar, color: ACCENT },
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: null },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
    ],
  },
  {
    title: "Practices",
    skills: [
      { name: "Agile / Scrum", icon: TbRefresh, color: ACCENT },
      { name: "Code Review", icon: TbGitPullRequest, color: ACCENT },
      { name: "Sprint Planning", icon: TbCalendarEvent, color: ACCENT },
      { name: "Mentorship", icon: TbUsersGroup, color: ACCENT },
    ],
  },
];

export default function About() {
  return (
    <>
      <div
        className="flex flex-col lg:justify-center max-w-2xl lg:pt-24 lg:min-h-screen py-10 sm:m-auto sm:pt-20 p-8 gap-8"
        id="about"
      >
        <h1 className="text-3xl sm:text-4xl font-displayMedium tracking-tight dark:text-white text-secondary">
          {data.about.aboutTitle}
        </h1>
        <div className="flex flex-col gap-4 text-[17px] leading-6 text-light-grey-third dark:text-light-grey-third">
          <p>
            {data.about.detailIntro}{" "}
            <a
              href="https://www.thetfpl.com/"
              target="_blank"
              rel="noreferrer"
              className="underline-link cursor-pointer text-secondary dark:text-light-white-second"
            >
              {data.experience.techFlitter}
            </a>{" "}
            {data.about.detail}
          </p>
          <p>{data.about.detailSecond}</p>
          <p>{data.about.detailThird}</p>
          <span className="font-sansMedium text-secondary dark:text-light-white-second pt-2">
            {data.about.skills}
          </span>

          <div className="flex flex-col gap-6">
            {skillGroups.map((group) => {
              return (
                <div key={group.title} className="flex flex-col gap-2.5">
                  <h2 className="font-mono text-xs uppercase tracking-widest text-light-grey-forth">
                    {group.title}
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map(({ name, icon: Icon, color }) => {
                      return (
                        <li
                          key={name}
                          className="inline-flex items-center gap-2 rounded-full border border-seperator dark:border-dark-seperator bg-white dark:bg-light-secondary px-3 py-1.5 text-sm leading-5 text-secondary dark:text-light-white-second shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0"
                            style={color ? { color } : undefined}
                          />
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
