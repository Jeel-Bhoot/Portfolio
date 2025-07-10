import React from "react";
import data from "../Data/Data.json";

export default function Contact() {
  return (
    <>
      <div
        className="flex flex-col lg:justify-center max-w-2xl lg:pt-24 lg:min-h-screen py-10 sm:m-auto sm:pt-20 p-8 gap-8"
        id="contact"
      >
        <span className="font-displayMedium text-3xl sm:text-4xl tracking-tight text-secondary dark:text-white">
          {data.contact.content}
        </span>
        <p className="w-full mt-6 max-w-lg mx-auto text-[17px] text-light-grey-third dark:text-light-grey-forth">
          {data.contact.message}
        </p>
        <button className="w-fit mt-6 px-6 py-1.5 rounded-xl bg-blue">
          <a
            href="mailto:jeelbhoot0jb@gmail.com"
            className="text-white text-lg font-sansMedium tracking-tight"
          >
            {data.contact.hello}
          </a>
        </button>
      </div>
    </>
  );
}
