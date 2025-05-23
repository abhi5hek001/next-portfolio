"use client";

import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Button } from '@/app/components/ui/button';
import Template from '@/app/template';
import { AnimatedBlock } from '@/app/animatedBlock';
import Image from 'next/image';
import profile from '@/public/profile.webp'
import {motion} from 'framer-motion'

export default function MobileHome() {
    const socialIcons = [
        {
            id: 1,
            icon: <FaEnvelope className='w-10 h-10' />,
            link: "mailto:sahayabhishek.edu@gmail.com?subject=Hello%20Abhishek!&body=Please%20leave%20us%20a%20feedback.",
        },
        {
            id: 2,
            icon: <FaLinkedin className='w-10 h-10' />,
            link: "https://linkedin.com/in/abhi5hek001",
        },
        {
            id: 3,
            icon: <FaTwitter className='w-10 h-10' />,
            link: "https://twitter.com/sahay_abhi5hek",
        },

        {
            id: 4,
            icon: <FaGithub className='w-10 h-10' />,
            link: "https://github.com/abhi5hek001",
        },
    ];

    const handleResumeDownload = () => {
        window.open(
            "https://drive.google.com/drive/folders/1ZYK56olAMsi0nMtHuws6GsrOunZSw-nX?usp=drive_link",
            "_blank"
        );
    };

    return (
        <>
            <motion.section
            initial={{y:60, opacity:0}}
            animate={{y:0, opacity: 1}}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="flex flex-wrap px-1 lg:p-6 py-10 items-center justify-around w-full overflow-x-hidden"
            >
                <Template>
                    <AnimatedBlock direction="left">
                        <div className="relative inline-block my-10">
                            <div className="absolute inset-0 rounded-full animate-pulseCustom">
                            </div>
                            <Image
                                src={profile}
                                alt='Profile'
                                className='rounded-full w-[25em] md:w-[35em] lg:w-[35em] h-[25em] md:h-[35em] lg:h-[35em] object-cover z-10'
                            />
                        </div>
                    </AnimatedBlock>

                    <AnimatedBlock direction="right">
                        <div className="lg:ml-8">
                            <h1 className="text-7xl font-montserrat text-muted-foreground font-bold">Hey There, I&apos;m <br /> <span className='text-primary'>Abhishek</span><span className="text-muted-foreground"> Sahay</span>
                            </h1>
                            <h1 className="mt-2 font-roboto-condensed text-3xl text-muted-foreground">
                                <Typewriter
                                    options={{
                                        strings: ['A Frontend Developer', 'A Backend Developer'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 90
                                    }}
                                />
                            </h1>
                            <Button
                                className='my-5'
                                onClick={handleResumeDownload}
                            >
                                Resume
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color={`text-accent-foreground`} ><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
                            </Button>
                            <div className="m-4 flex space-x-4">
                                {socialIcons.map(({ id, icon, link }) => (
                                    <a
                                        key={id}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`hover:text-accent-foreground text-primary transition duration-200`}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AnimatedBlock>
                </Template>
            </motion.section>
        </>
    );
}