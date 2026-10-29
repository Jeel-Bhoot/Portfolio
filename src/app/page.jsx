import React from "react";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
