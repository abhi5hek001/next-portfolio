"use client";

import Template from '@/app/projects/template';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import Image from 'next/image';
import { MdLink } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { GrDeploy } from "react-icons/gr";
import projectList from '@/data/projectList.json'
import { iconsMap } from '../icons';

export default function Projects() {
    return (
        <section id='projects' className="flex flex-wrap px-2 items-center justify-center w-full">
            <Template>
                <div className='flex justify-center flex-wrap gap-8 my-20 sm:mx-5 md:mx-15 lg:mx-20'>
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
                                {project.icons.map((icon, i) => {
                                    const Icon = iconsMap[icon];
                                    return Icon ? <Icon key={i} className="w-10 h-10 text-primary" /> : null;
                                })}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Template>
        </section>
    );
}