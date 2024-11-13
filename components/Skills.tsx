"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
