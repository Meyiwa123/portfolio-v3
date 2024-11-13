import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 pb-5">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Temile. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Shadcn, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
