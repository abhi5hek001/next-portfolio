"use client"

import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiRedux,
    SiPython,
    SiJavascript,
    SiMysql,
    SiGit,
    SiC,
    SiCplusplus,
    SiNodedotjs,
    SiLinux,
    SiFigma,
    SiCanva
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


export default function About() {

    const skillItems = [
        { label: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
        { label: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
        { label: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
        { label: "Python", icon: <SiPython size={40} color="#3776AB" /> },
        { label: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
        { label: "ExpressJS", icon: <SiExpress size={40} color="#000000" /> },
        { label: "React", icon: <SiReact size={40} color="#61DAFB" /> },
        { label: "Node.js", icon: <SiNodedotjs size={40} color="#339933" /> },
        { label: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
        { label: "Java", icon: <FaJava size={40} color="#007396" /> },
        { label: "C", icon: <SiC size={40} color="#A8B9CC" /> },
        { label: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
        { label: "Framer Motion", icon: <SiFramer size={40} color="#0055FF" /> },
        { label: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
        { label: "Git", icon: <SiGit size={40} color="#F05032" /> },
        { label: "Numpy", icon: <SiPython size={40} color="#3776AB" /> },
        { label: "Pandas", icon: <SiPython size={40} color="#150458" /> }, 
        { label: "Matplotlib", icon: <SiPython size={40} color="#D62728" /> }, 
        { label: "Linux", icon: <SiLinux size={40} color="#FCC624" /> },
        { label: "Figma", icon: <SiFigma size={40} color="#F24E1E" /> },
        { label: "Canva", icon: <SiCanva size={40} color="#00C4CC" /> },
    ];


    return (
        <h1>About</h1>
    );
}
