"use client";

import Typewriter from 'typewriter-effect'
import Template from '@/app/template';
import { AnimatedBlock } from '@/app/animatedBlock';
import Image from 'next/image';
import college from '@/public/iiit-sri-city.webp'
import skillIconsData from '@/data/skillIcons.json';
import { FallbackIcon, iconsMap } from '@/app/icons';

export default function About() {
    return (
        <section id='about' className="flex flex-wrap px-1 lg:p-6 py-10 items-center justify-around w-full overflow-x-hidden">
            <h1 className='mb-10 text-5xl font-montserrat font-bold text-foreground'>About Me</h1>
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
                        <h1 className="text-7xl font-montserrat text-muted-foreground font-bold">Enrolled In<br /><span className='text-primary'>IIIT Sricity</span><span className="text-muted-foreground">, Chittoor</span>
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
                            {skillIconsData.skillIcons.map((iconName, idx) => {
                                const IconComponent = iconsMap[iconName] || FallbackIcon;
                                return (
                                    <a
                                        key={idx}
                                        className="hover:text-accent-foreground text-primary transition duration-200 flex items-center justify-center"
                                    >
                                        <IconComponent className="w-10 h-10" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </AnimatedBlock>
            </Template>
        </section>
    );
}