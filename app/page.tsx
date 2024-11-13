"use client";

import { Projects } from "@/components/Projects";
import Experience from "@/components/Experience";
import { Intro } from "@/components/Intro";
import { Skills } from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
