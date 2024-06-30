import React from "react";
import data from "../Data/Data.json";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col gap-4 justify-center max-w-4xl min-h-screen mx-auto lg:p-0 sm:p-8 sm:pt-20"
        id="#"
      >
        <span className="font-displayMedium lg:text-6xl sm:text-4xl tracking-tight text-secondary dark:text-white">
          {data.app}
        </span>

        <span className="lg:text-3xl sm:text-2xl text-light-grey dark:text-light-white-second">
          {data.role}
        </span>

        <span className="text-[17px] max-w-xl mx-auto text-light-grey dark:text-light-grey-third">
          {data.intro}
        </span>
      </div>
    </>
  );
}
