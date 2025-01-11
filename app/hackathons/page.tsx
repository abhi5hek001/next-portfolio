"use client"

import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiScratch, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Template from '../template';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import Image from 'next/image';
import { MdLink } from 'react-icons/md';
import ggjImage from '@/public/hackathons/ggj.webp';
import sihImage from '@/public/hackathons/sih.webp';

const HackathonsList = [
    {
        title: 'SafeSky v2.0 | Runner-up in Smart India Hackathon | SIH 2023',
        description: 'This project is based on ariel recognition of hazardous atmosphere near industries.',
        image: sihImage,
        link: '',
        icons: [
            SiReact,
            SiJavascript,
            SiHtml5,
            SiCss3,
            SiTailwindcss,
        ]
    },
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
        ]
    },
];

export default function hackathons(){
    return(
        <section className="flex flex-wrap px-2 items-center justify-center w-full h-[80vh]">
            <Template>
                <div className='flex justify-center flex-wrap gap-8 my-10 sm:mx-5 md:mx-15 lg:mx-20'>
                    {HackathonsList.map((hackathon, idx) => (
                        <Card
                            key={idx}
                            className="relative w-[25em] h-[32em] flex flex-col gap-5 justify-between shadow-[0_0px_35px_-15px_rgba(0,0,0,0.9)] hover:shadow-2xl shadow-primary items-center bg-secondary"
                        >
                            <CardHeader className="w-full h-64 relative">
                                <Image
                                    src={hackathon.image}
                                    alt="Image Not Found"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-md"
                                />
                            </CardHeader>
                            <CardTitle className="text-primary text-xl px-5">
                                <a key={hackathon.title} href={hackathon.link} className="flex justify-center items-center gap-1">
                                    {hackathon.title} 
                                    <MdLink className="h-6 w-10 text-accent-foreground hover:scale-125 transition-all duration-200" />
                                </a>
                            </CardTitle>
                            <CardContent className="px-5">
                                <CardDescription className="text-accent-foreground px-2">
                                    {hackathon.description.length > 100
                                        ? hackathon.description.trim().slice(0, 100) + '... Read More'
                                        : hackathon.description.trim()}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex flex-wrap gap-2">
                                {hackathon.icons.map((Icon, i) => (
                                    <Icon key={i} className="w-7 h-7 text-primary" />
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Template>
        </section>
    )
}