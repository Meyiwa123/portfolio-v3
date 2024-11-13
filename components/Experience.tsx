"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "@/constants";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-3xl font-bold text-center mb-10">My Experience</h2>
      <VerticalTimeline>
        {EXPERIENCES.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.period}
            iconStyle={{ background: "white", color: "black" }}
            icon={exp.icon}
            className="vertical-timeline-element--work"
          >
            <h3 className="vertical-timeline-element-subtitle font-bold text-lg text-black">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm text-muted-foreground">
              {exp.company}
            </h4>
            <h5 className="text-sm text-muted-foreground">{exp.location}</h5>
            <p className="mt-2 text-sm text-muted-foreground">
              {exp.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
