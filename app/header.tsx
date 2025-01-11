"use client";

import { useState } from "react";

import { ThemeToggle } from "@/app/components/theme-toggle";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";

import { isMobile } from "react-device-detect";
import MobileHeader from "./MobilePages/MobileHeader";

const navItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Projects", url: "/projects" },
  { label: "Hackathons", url: "/hackathons" },
  { label: "Contact", url: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Conditional Layout in Mobiles */}
      {isMobile ?
        // Mobile Header
        <MobileHeader />
        :
        // Desktop Header
        <div>
          <section className="px-5 h-[10vh] floating top-10 flex justify-between items-center gap-5 bg-secondary bg-opacity-10">
            <h1 className="text-4xl text-primary font-bold">Abhishek
              <span className="text-muted-foreground"> Sahay</span>
            </h1>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                <GoSidebarExpand className="text-primary h-7 w-7" />
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

          <div className={`fixed top-0 right-0 w-64 h-full bg-secondary shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-20`}>
            <div className="flex flex-col p-5">
              <button onClick={toggleMenu} className="self-end mb-4">
                <GoSidebarCollapse className="text-primary h-7 w-7" />
              </button>
              {navItems.map((item) => (
                <a
                  key={item.label.toLowerCase()}
                  href={`${item.url}`}
                  className="relative text-lg hover:scale-110 left-3 transition-transform duration-300 ease-in-out text-accent-foreground font-bold group p-2"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bottom-0 h-[2px] bg-accent opacity-0 scale-x-0 origin-center transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
                </a>
              ))}
              <div className="mt-4 ml-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
