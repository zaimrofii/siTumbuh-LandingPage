// components/Navbar.tsx
"use client";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-999 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="  mx-auto px-5 md:px-20 py-4 flex items-center justify-between">
        <h1
          className={`text-sm md:text-2xl font-bold transition-all text-[color:var(--green)] `}
        >
          siTumbuh
        </h1>
        <ul
          className={`hidden md:flex w-auto h-6  gap-5 text-xl font-semibold ${
            isScrolled ? "text-[color:var(--green)]" : "text-white"
          }`}
        >
          <li>
            <a href="#home">Beranda</a>
          </li>
          <li>
            <a href="#feature">Fitur</a>
          </li>
        </ul>
        <Menu
          className={`block md:hidden text-[color:var(--green)]`}
          onClick={() => setActive(!active)}
        />
      </div>
      <div
        className={`${
          active ? "h-40" : "h-0"
        } w-full  bg-[color:var(--green)] transition-all`}
      >
        <ul
          className={`${
            active ? "block" : "hidden"
          } text-white p-5 text-lg font-semibold flex flex-col gap-2`}
        >
          <li>
            <a href="#home">Beranda</a>
          </li>
          <li>
            <a href="#feature">Fitur</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
