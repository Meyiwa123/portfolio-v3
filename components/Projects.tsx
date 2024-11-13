"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
  return (
    <section id="projects">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden flex flex-col h-full">
                <Image
                  src={project.image}
                  alt={project.title || "Project image"}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <span className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 p-1 rounded-full text-gray-500 hover:text-pink-600"
                        title="Visit project link"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                      </Link>
                    )}
                  </span>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};
