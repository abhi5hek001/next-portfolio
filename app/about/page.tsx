"use client";

import Typewriter from 'typewriter-effect'
import Template from '@/app/template';
import { AnimatedBlock } from '@/app/animatedBlock';

import { SiNextdotjs, SiMongodb, SiGit, SiPython, SiJavascript, SiReact, SiExpress, SiMysql, SiNodedotjs, SiCanva, SiNumpy, SiPandas, SiTailwindcss, SiShadcnui, SiHtml5, SiCss3, SiFigma, SiLinux, SiC, SiCplusplus, SiTypescript } from "react-icons/si";
import { FaJava } from 'react-icons/fa';
import Image from 'next/image';
import college from '@/public/iiit-sri-city.webp'

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
        <section className="flex flex-wrap px-1 lg:p-6 py-10 items-center justify-around w-full h-[80vh] overflow-x-hidden">
            <Template>
                <AnimatedBlock direction="left">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 rounded-full animate-pulseCustom">
                        </div>
                        <Image
                            src={college}
                            alt='IIIT Sricity'
                            className="rounded-full w-[25em] md:w-[35em] lg:w-[35em] h-[25em] md:h-[35em] lg:h-[35em] object-cover z-10"
                        />
                    </div>
                </AnimatedBlock>

                <AnimatedBlock direction="right">
                    <div className="lg:ml-8 my-10">
                        <h1 className=" text-7xl font-montserrat text-muted-foreground font-bold">Enrolled In<br /><span className='text-primary'>IIIT Sricity</span><span className="text-muted-foreground">, Chittoor</span>
                        </h1>
                        <h1 className="mt-2 text-3xl font-roboto-condensed text-muted-foreground">
                            <Typewriter
                                options={{
                                    strings: ['Pursuing B.Tech', 'Computer Science Engineer', 'Pre-Final Year Student'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 90
                                }}
                            />
                        </h1>
                        <div className="my-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {skillIcons.map(({ icon }, idx) => (
                                <a
                                    key={idx}
                                    className="hover:text-accent-foreground text-primary transition duration-200 flex items-center justify-center"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </AnimatedBlock>

            </Template>
        </section>
    );
}