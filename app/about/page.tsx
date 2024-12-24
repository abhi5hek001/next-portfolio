"use client";

import Typewriter from 'typewriter-effect'
import Template from '../template';
import { AnimatedBlock } from '../animatedBlock';

import { SiNextdotjs, SiMongodb, SiGit, SiPython, SiJavascript, SiReact, SiExpress, SiMysql, SiNodedotjs, SiCanva, SiNumpy, SiPandas, SiTailwindcss, SiShadcnui, SiHtml5, SiCss3, SiFigma, SiLinux, SiC, SiCplusplus, SiTypescript } from "react-icons/si";
import { FaJava } from 'react-icons/fa';

export default function About() {

    const skillIcons = [
        { icon: <SiMongodb className='w-10 h-10' /> },
        { icon: <SiExpress className='w-10 h-10' /> },
        { icon: <SiReact className='w-10 h-10' /> },
        { icon: <SiNextdotjs className='w-10 h-10' /> },
        { icon: <SiJavascript className='w-10 h-10' /> },
        { icon: <SiTypescript className='w-10 h-10' /> },
        { icon: <SiNodedotjs className='w-10 h-10' /> },
        { icon: <SiGit className='w-10 h-10' /> },
        { icon: <SiMysql className='w-10 h-10' /> },
        { icon: <SiNumpy className='w-10 h-10' /> },
        { icon: <SiPandas className='w-10 h-10' /> },
        { icon: <SiPython className='w-10 h-10' /> },
        { icon: <FaJava className='w-10 h-10' /> },
        { icon: <SiC className='w-10 h-10' /> },
        { icon: <SiCplusplus className='w-10 h-10' /> },
        { icon: <SiHtml5 className='w-10 h-10' /> },
        { icon: <SiCss3 className='w-10 h-10' /> },
        { icon: <SiTailwindcss className='w-10 h-10' /> },
        { icon: <SiShadcnui className='w-10 h-10' /> },
        { icon: <SiLinux className='w-10 h-10' /> },
        { icon: <SiFigma className='w-10 h-10' /> },
        { icon: <SiCanva className='w-10 h-10' /> },
    ];

    return (
        <section className="flex flex-wrap px-10 items-center justify-around w-full h-[80vh] overflow-x-hidden">
            <Template>
                <AnimatedBlock direction="left">
                    <div className="my-10">
                        <h1 className=" text-7xl text-muted-foreground font-bold">I'm enrolled<br /><span className='text-primary'>IIIT</span><span className="text-muted-foreground"> Sricity, Chittoor</span>
                        </h1>
                        <h1 className="mt-2 text-3xl text-muted-foreground">
                            <Typewriter
                                options={{
                                    strings: ['Pursuing B.Tech', 'Computer Science Engineer', 'Pre-Final Year Student'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 90
                                }}
                            />
                        </h1>
                        <div className="my-4 gap-x-16 gap-y-4 w-96 grid grid-cols-6 flex-wrap">
                            {skillIcons.map(({ icon }, idx) => (
                                <a
                                    key={idx}
                                    className="hover:text-accent-foreground text-primary transition duration-200"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </AnimatedBlock>

                <AnimatedBlock direction="right">
                    <div className="relative inline-block mx-4">
                        <div className="absolute inset-0 rounded-full animate-pulseCustom">
                        </div>
                        <img
                           src="https://i.ibb.co/fxM6fFD/iiit-sri-city.jpg"
                            alt="IIIT Sri City"
                            className="rounded-full h-[35rem] w-[35rem] object-cover z-10"
                        />
                    </div>
                </AnimatedBlock>
            </Template>
        </section>
    );
}