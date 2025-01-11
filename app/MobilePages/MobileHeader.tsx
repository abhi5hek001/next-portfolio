"use client";

import { useState } from "react";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { ThemeToggle } from "../components/theme-toggle";

const navItemsForMobile = [
    { label: "Home", url: "#home" },
    { label: "About", url: "#about" },
    { label: "Projects", url: "#projects" },
    { label: "Hackathons", url: "#hackathons" },
    { label: "Contact", url: "#contact" },
];

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div id="home">
                <section className="px-5 h-[10vh] fixed w-[100%] z-50 flex justify-between items-center gap-5 bg-secondary bg-opacity-10">
                    <h1 className="text-4xl text-primary font-bold">
                        Abhishek<span className="text-muted-foreground"> Sahay</span>
                    </h1>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <GoSidebarExpand className="text-primary h-7 w-7" />
                        </button>
                    </div>
                </section>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                <div
                    className={`fixed z-50 top-0 right-0 w-64 h-full bg-secondary shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        } z-20`}
                >
                    <div className="flex flex-col p-5">
                        <button onClick={toggleMenu} className="self-end mb-4">
                            <GoSidebarCollapse className="text-primary h-7 w-7" />
                        </button>
                        {navItemsForMobile.map((item) => (
                            <a
                                key={item.label.toLowerCase()}
                                href={item.url}
                                className="relative text-lg hover:scale-110 left-3 transition-transform duration-300 ease-in-out text-accent-foreground font-bold group p-2"
                                onClick={() => setIsOpen(false)} // Close the menu
                            >
                                <span className="relative z-10">{item.label}</span>
                                <span className="absolute inset-0 bottom-0 h-[2px] bg-accent opacity-0 scale-x-0 origin-center transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
                            </a>
                        ))}
                        <div className="pl-5 pt-3">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}