"use client";

import { FaArrowCircleUp } from "react-icons/fa";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import MobileHome from "@/app/MobilePages/MobileHome";
import MobileAbout from "@/app/MobilePages/MobileAbout";
import MobileProjects from "@/app/MobilePages/MobileProjects";
import MobileHackathons from "@/app/MobilePages/MobileHackathons";
import MobileContact from "@/app/MobilePages/MobileContact";

export default function MobileSPA() {
    const { theme } = useTheme();

    const animationProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { amount: 0.05 },
        transition: { duration: 0.5 },
    };

    return (
        <>
            <div className="pt-[6vh] space-y-8">
                <motion.div {...animationProps}>
                    <MobileHome />
                </motion.div>
                <motion.div {...animationProps}>
                    <MobileAbout />
                </motion.div>
                <motion.div {...animationProps}>
                    <MobileProjects />
                </motion.div>
                <motion.div {...animationProps}>
                    <MobileHackathons />
                </motion.div>
                <motion.div {...animationProps}>
                    <MobileContact />
                </motion.div>
            </div>

            <div className="fixed z-50 bottom-5 right-5">
                <a href="#home">
                    <FaArrowCircleUp
                        className={`w-8 h-8 bg-white rounded-full animate-bounce ${theme === "dark" || theme === "system" ? "text-background" : "text-accent-foreground"}`}
                    />
                </a>
            </div>
        </>
    );
}
