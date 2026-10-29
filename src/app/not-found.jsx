import React from "react";
import data from "@/data/data.json";

export default function NotFound() {
  return (
    <>
      <div className="h-screen flex flex-auto items-center justify-center text-center px-8 flex-col sm:flex-row p-5">
        <h2 className="mt-2 lg:text-5xl md:text-3xl sm:text-2xl text-secondary dark:text-dark-grey sm:mt-0">
          {data.notFound.nfMessage}
        </h2>
      </div>
    </>
  );
}
