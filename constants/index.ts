import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export const SECTIONS = ["About", "Skills", "Experience", "Projects", "Contact"];

export const EXPERIENCES = [
  {
    icon: React.createElement(GraduationCap),
    title: "Bachelor of Engineering, Software Engineering",
    company: "Carleton University",
    location: "Ottawa, Ontario, Canada",
    period: "September 2021 - June 2024",
    description:
      "Completed coursework in software engineering, algorithms, data structures, databases, and cloud computing. Led and contributed to various team projects, developing strong problem-solving and collaboration skills.",
  },
  {
    icon: React.createElement(Briefcase),
    title: "Software Engineer",
    company: "Gifty",
    location: "Ottawa, Ontario, Canada",
    period: "January 2024 - Present",
    description:
      "Design and implement scalable backend systems using Next.js, the ELK stack, Docker, Redis, Swagger, SQL, and NoSQL. Develop and document RESTful APIs, integrate backend with frontend components, and optimize database performance. Collaborate closely with senior engineers, following Agile and DevOps practices to ensure high-quality and timely software delivery.",
  },
  {
    icon: React.createElement(Briefcase),
    title: "Software Team Lead",
    company: "Blackbird UAV",
    location: "Carleton University",
    period: "September 2021 - June 2024",
    description:
      "Led the software team in developing and optimizing embedded software for Unmanned Aerial Vehicles (UAVs). Designed and implemented flight control algorithms, sensor data processing, and autonomous navigation using ROS and C++. Ensured software reliability and efficiency, focusing on real-time performance and sensor integration.",
  },
  {
    icon: React.createElement(Briefcase),
    title: "Software Developer Intern",
    company: "Reyon Bottling Company",
    location: "Lagos, Nigeria",
    period: "May 2022 - October 2023",
    description:
      "Worked remotely with distributed teams to build software solutions, including a task management system and a customer relationship management (CRM) platform. Contributed to feature design, implementation, and issue resolution, enhancing team productivity and software quality.",
  },
];

export const PROJECTS = [
  {
    title: "Home Lab Infrastructure and Network Management",
    image: "/projects/portainer.png",
    description:
      "Configured a Linux-based home lab to simulate enterprise-level infrastructure, focusing on networking, virtualization, and security management.",
    tags: ["Linux", "Docker", "Ansible", "Grafana", "Prometheus", "Networking"],
  },
  {
    title: "Accessible Autonomous Vehicle",
    image: "/projects/aav.jpg",
    description:
      "Development of a ROS-based autonomous vehicle, implementing perception, localization, and control systems within a Linux environment.",
    tags: [
      "Linux",
      "Python",
      "C++",
      "ROS",
      "Gazebo",
      "CARLA",
      "Machine Learning",
    ],
  },
  {
    title: "Passenger Transport UAV",
    image: "/projects/blackbird.jpg",
    description: [
      "Designed an autonomous UAV for passenger transport, focusing on safety, reliability, and efficiency.",
    ],
    tags: [
      "Python",
      "JavaScript",
      "MATLAB",
      "ROS",
      "YOLO",
      "OpenCV",
      "Networking",
      "Pixhawk",
    ],
  },
  {
    title: "Manga Verse",
    image: "/projects/manga.png",
    description:
      "Developed a web application that allows users to read and share manga in various languages, integrating a custom model to translate foreign text images to desired languages.",
    tags: [
      "Svelte",
      "Tailwind CSS",
      "RESTful API",
      "MongoDB",
      "Vercel",
      "OpenAPI",
    ],
  },
  {
    title: "Reyon Landing Page",
    image: "/projects/reyon.png",
    description:
      "Designed and developed a landing page for Reyon Bottling Company, focusing on user experience and brand identity.",
    tags: ["React", "Tailwind", "Figma", "Responsive Design"],
  },
  {
    title: "LIDAR Data Processing",
    description:
      "Developed a data processing pipeline for LIDAR sensor data, focusing on point cloud visualization, object detection, and mapping.",  
    image: "/projects/lidar.png",
    tags: [
      "Python",
      "C++",
      "ROS",
      "PCL",
    ],
  },
  {
    name: "Home Lab CLI",
    image: "/projects/cli.png",
    description:
      "Developed a command-line interface (CLI) tool to manage and monitor home lab infrastructure, integrating with various services and APIs.",
    tags: ["Python", "Docker", "Prometheus", "Grafana"],
  },
  {
    name: "MSP432P401R Timer & Interrupt",
    image: "/projects/rtos.png",
    description:
      "Implemented a timer and interrupt system for the MSP432P401R microcontroller, focusing on real-time performance and sensor data processing.",
    tags: ["C", "Embedded Systems", "Microcontrollers", "RTOS"],
  },
];

export const SKILLS = [
  "Programming",
  "Design",
  "Software Development",
  "Agile Methodologies",
  "Communication",
  "Problem-Solving",
  "Commitment",
  "Teamwork",
  "Motivated",
  "Reliable",
  "Enthusiastic",
  "Adaptable",
  "Curious",
];