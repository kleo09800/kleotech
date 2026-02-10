"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "services", "about", "contact"];

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    `pb-1 ${
      active === id
        ? "text-primary border-b border-primary"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO = HOME */}
        <a href="#home" className="flex items-center">
  <img
    src="/logo.svg"
    alt="KleoTech logo"
    className="h-28 w-auto"
  />
</a>


        <div className="space-x-8 text-sm">
          <a href="#services" className={linkClass("services")}>Services</a>
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
