"use client"

import Template from '../template';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import Image from 'next/image';
import { MdLink } from 'react-icons/md';
import hackathonList from '@/data/hackathonList.json'
import { iconsMap } from '../icons';

export default function hackathons() {
    return (
        <section id='hackathons' className="flex flex-wrap px-2 items-center justify-center w-full">
            <Template>
                <div className='flex justify-center flex-wrap gap-8 my-20 sm:mx-5 md:mx-15 lg:mx-20'>
                    {hackathonList.map((hackathon, idx) => (
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
                                    {
                                        hackathon.link && <MdLink className="h-6 w-10 text-accent-foreground hover:scale-125 transition-all duration-200" />
                                    }
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
                                {hackathon.icons.map((icon,i)=>{
                                    const Icon = iconsMap[icon];
                                    return Icon ? <Icon key={i} className='w-7 h-7 text-primary' /> : null;
                                })}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Template>
        </section>
    )
}