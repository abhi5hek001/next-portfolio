"use client";

import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Projects", url: "/projects" },
  { label: "Contact", url: "/contact" },
];


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="px-5 h-[10vh] floating top-10 flex justify-between items-center gap-5 bg-secondary bg-opacity-10">
        <h1 className="text-3xl text-primary font-bold">Abhishek
          <span className="text-muted-foreground"> Sahay</span>
        </h1>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className={`hidden md:flex flex-row md:items-center gap-4`}>
          {navItems.map((item) => (
            <div
              key={item.label.toLowerCase()}
              className="relative group mb-2"
              onClick={() => setIsOpen(false)}
            >
              <a
                href={`${item.url}`}
                className="text-lg text-primary font-bold underline-offset-10 transition-transform duration-300 group-hover:-translate-y-2"
              >
                {item.label}
              </a>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-primary rounded-md transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </div>
          ))}
          <ThemeToggle />
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setIsOpen(false)} />
      )}

      <div className={`fixed top-0 right-0 w-64 h-full bg-muted-foreground shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-20`}>
        <div className="flex flex-col p-5">
          <button onClick={toggleMenu} className="self-end mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navItems.map((item) => (
            <a
              key={item.label.toLowerCase()}
              href={`${item.url}`}
              className="relative text-lg text-primary font-bold group p-2"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {item.label}
              </span>
              <span className="absolute left-0 right-0 bottom-[-4px] h-full bg-primary transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
            </a>
          ))}
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
