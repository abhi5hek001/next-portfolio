"use client";

import Template from '@/app/projects/template';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import Image from 'next/image';
import ggjImage from '@/public/projects/ggj.webp';
import chatClone from '@/public/projects/chatgpt-clone.webp';
import quotesWebsiteImage from '@/public/projects/quotes-website.webp';
import portfolioImage from '@/public/projects/portfolio.webp';
import { MdLink } from "react-icons/md";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiScratch, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbApi } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { GrDeploy } from "react-icons/gr";

const projectList = [
    {
        title: 'Voice Controlled Gaming Studio | GGJ 2024',
        description: 'This project is a voice controlled gaming website where you can control games with your voice.',
        image: ggjImage,
        link: 'https://abhi5hek001.github.io/Gaming-Hub/',
        icons: [
            SiScratch,
            SiJavascript,
            SiHtml5,
            SiCss3,
            SiTailwindcss,
        ],
        status: { text: "Completed" },
    },
    {
        title: 'Daily Quotes Website',
        description: 'A Quote Generator website which uses API to fetch quotes such as motivational and daily quotes.',
        image: quotesWebsiteImage,
        link: 'https://abhi5hek001.github.io/Quote-Generator/',
        icons: [
            TbApi,
            SiJavascript,
            SiHtml5,
            SiCss3,
            SiTailwindcss,
        ],
        status: { text: "Completed" },
    },
    {
        title: 'Personal Portfolio Website',
        description: 'A Next.js-based personal portfolio website that highlights my skills, projects, and achievements.',
        image: portfolioImage,
        link: 'https://next-portfolio-zeta-five.vercel.app/',
        icons: [
            SiNextdotjs,
            SiTypescript,
            SiJavascript,
            SiShadcnui,
            SiTailwindcss,
        ],
        status: { text: "Completed" },
    },
    {
        title: 'Google Gemini Based ChatGPT Clone',
        description: 'A Next.js based conversational AI interface similar to ChatGPT, powered by Google Gemini.',
        image: chatClone,
        link: '', 
        icons: [
            SiNextdotjs,
            SiTypescript,
            SiShadcnui,
            SiTailwindcss,
        ],
        status: { text: "Undergoing"},
    },
];

export default function About() {
    return (
        <section className="flex flex-wrap px-2 items-center justify-center w-full h-[80vh]">
            <Template>
                <div className='flex justify-center flex-wrap gap-8 my-10 sm:mx-5 md:mx-15 lg:mx-20'>
                    {projectList.map((project, idx) => (
                        <Card
                            key={idx}
                            className="relative w-[25em] h-[32em] flex flex-col gap-5 justify-between shadow-[0_0px_35px_-15px_rgba(0,0,0,0.9)] hover:shadow-2xl shadow-primary items-center bg-secondary"
                        >
                            <div
                                className={`absolute -top-3 -left-2 z-10 flex items-center gap-1 px-3 py-1 text-sm font-medium text-secondary bg-accent-foreground before:z-5 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:border-l-8 before:border-l-transparent before:border-t-8 before:border-t-accent-foreground`}
                            >
                                {
                                    project.status.text === 'Completed' ? <GrDeploy className="mr-1" /> : <VscServerProcess className="mr-1" />
                                }
                                {project.status.text}
                            </div>
                            <CardHeader className="w-full h-64 relative">
                                <Image
                                    src={project.image}
                                    alt="Image Not Found"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-md"
                                />
                            </CardHeader>
                            <CardTitle className="text-primary text-xl px-5">
                                <a key={project.title} href={project.link} className="flex justify-center items-center gap-1">
                                    {project.title} 
                                    {
                                        project.status.text === "Completed" ? <MdLink className="h-6 w-10 text-accent-foreground hover:scale-125 transition-all duration-200" /> : ""
                                    }
                                </a>
                            </CardTitle>
                            <CardContent className="px-5">
                                <CardDescription className="text-accent-foreground px-2">
                                    {project.description.length > 100
                                        ? project.description.trim().slice(0, 100) + '... Read More'
                                        : project.description.trim()}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex flex-wrap gap-2">
                                {project.icons.map((Icon, i) => (
                                    <Icon key={i} className="w-7 h-7 text-primary" />
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Template>
        </section>
    );
}