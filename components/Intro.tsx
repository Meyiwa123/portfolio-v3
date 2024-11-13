import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Intro = () => {
  return (
    <section id="about" className="text-center mb-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-32 h-32 mx-auto mb-6 relative">
          <Image
            src="/grad.png"
            alt="Meyiwa Temile"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Hi, I&apos;m Meyiwa
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
          Passionate Software Engineer & Robotics Enthusiast
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          With over four years of hands-on experience, I thrive on building
          efficient, scalable systems and enjoy bringing digital solutions to
          life. I&apos;m driven to develop innovative applications and
          streamline complex processes to solve real-world challenges.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#contact">
            <Button className="gap-2">
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="/Oritsemeyiwa_Jordan_Temile_Resume.pdf" download>
            <Button variant="outline" className="gap-2">
              Download CV
              <Download className="h-4 w-4" />
            </Button>
          </a>
          <Link href="https://linkedin.com/in/meyiwa-temile" target="_blank">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://github.com/Meyiwa123" target="_blank">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
