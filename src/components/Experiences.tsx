"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";

export default function Experiences() {
  const { ref } = useSectionInView("Expériences");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experiences</SectionHeading>
      <ol className="relative border-l border-blue-200 dark:border-blue-700">
        {experiencesData.map((item, index) => (
          <li className="mb-10 ml-4" key={index}>
              <div className="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue-900 dark:bg-blue-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-blue-400 dark:text-blue-500">{item.date}</time>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-white">{item.title}</h3>
              <h3 className="text-lg font-sm text-blue-900 dark:text-white">{item.company} - {item.location}</h3>
              <p className="mb-4 text-base font-normal text-blue-500 dark:text-blue-400">{item.description}</p>
              <ul className="flex flex-wrap mt-4 gap-2">
                  {item.tags.map((tag, index) => (
                  <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      key={index}
                  >
                      {tag}
                  </li>
                  ))}
              </ul>
          </li>
        ))}                  
    </ol>
    </section>
  );
}