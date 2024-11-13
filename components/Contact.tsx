"use client";
import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/lib/sendEmail";
import SubmitBtn from "./email/submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center mb-20 sm:mb-28 w-full max-w-4xl mx-auto text-center px-4"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-700 dark:text-white/80 mb-8">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:contact@meyiwatemile.com">
          contact@meyiwatemile.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="flex flex-col gap-4 w-full"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none text-black"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 px-4 py-3 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none text-black"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="flex justify-center w-full">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
