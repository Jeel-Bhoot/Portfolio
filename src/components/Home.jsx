import React from "react";
import data from "../Data/Data.json";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col gap-4 justify-center max-w-4xl min-h-screen mx-auto lg:p-0 sm:p-8 sm:pt-20"
        id="#"
      >
        <code className="font-medium text-sm tracking-tight text-secondary dark:text-white">
          {data.greetings}
        </code>

        <span className="font-displayMedium lg:text-6xl sm:text-4xl tracking-tight text-secondary dark:text-white">
          {data.app}
        </span>

        <span className="lg:text-3xl sm:text-2xl text-light-grey dark:text-light-white-second">
          <Typewriter
            options={{
              strings: data.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </span>

        <span className="text-[17px] max-w-xl mx-auto text-light-grey dark:text-light-grey-third">
          {data.intro}
        </span>
      </div>
    </>
  );
}
