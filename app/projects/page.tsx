"use client";

import Template from '@/app/projects/template';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import Image from 'next/image';
import ggjImage from '@/public/projects/ggj.webp'
import newsAppImage from '@/public/projects/news-app.webp'
import { MdLink } from "react-icons/md";

const projectList = [
    {
        title: 'Voice Controlled Gaming Studio | GGJ 2024',
        description: 'A Global Game Jam 2024 project. This project is a voice controlled gaming website. Game Jam 2024 projectGame Jam 2024 projectGame Jam 2024 project ',
        image: ggjImage,
        link: '/project/1'
    },
    {
        title: 'News App',
        description: 'This is a React based News appThis is a React based News appThis is a React based News appThis is a React based News appThis is a React based News appThis is a React based News appThis is a React based News appThis is a React based News app',
        image: newsAppImage,
        link: '/project/2'
    },
]

export default function About() {

    return (
        <section className="flex flex-wrap px-10 items-center justify-center w-full h-[80vh]">
            <Template>
                <div className='flex justify-center flex-wrap gap-8 my-10 sm:mx-5 md:mx-15 lg:mx-20'>
                    {
                        projectList.map((project, idx) => {
                            return (
                                <Card key={idx} className='w-[20em] h-[25em] flex flex-col gap-5 flex-wrap justify-between shadow-[0_0px_35px_-15px_rgba(0,0,0,0.9)] hover:shadow-2xl shadow-primary items-center bg-secondary'>
                                    <CardHeader className='w-full h-40 relative'>
                                        <Image
                                            src={project.image}
                                            alt="Image Not Found"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-md"
                                        />
                                    </CardHeader>
                                    <CardTitle className='text-primary text-xl px-5'>
                                        <a href={project.link} className='flex justify-center items-center gap-1'>
                                            {project.title} <MdLink className='h-6 w-10 text-accent-foreground hover:scale-125 transition-all duration-200'/>
                                        </a>
                                    </CardTitle>
                                    <CardContent className='px-5'>
                                        <CardDescription className='text-accent-foreground px-2'>
                                            {project.description.length > 100 ? project.description.trim().slice(0, 100) + '... Read More' : project.description.trim()}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            )   
                        })
                    }
                </div>
            </Template>
        </section>
    );
}