"use client";

import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Button } from './ui/button';

const RESUME_FILE_ID = '13EL39XKZ_qra4jWqZ_gBW2lY-lQrRmFs' 
const RESUME_LINK = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`

export default function Hero() {
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

    return (
        <section className="flex flex-wrap px-10 items-center justify-around w-full h-[90vh]">
            <div className="relative inline-block mt-10 mb-10">
                <div className="absolute inset-0 rounded-full animate-pulseCustom">
                </div>
                <img
                    src="https://i.postimg.cc/Pxy7p6Fp/profile.jpg"
                    alt="Abhishek Sahay"
                    className="rounded-full h-[35rem] w-[35rem] object-cover z-10"
                />
            </div>

            <div className="ml-12">
                <h1 className=" text-7xl text-muted-foreground font-bold">Hey There, I'm <br /> <span className='text-primary'>Abhishek</span><span className="text-muted-foreground"> Sahay</span>
                </h1>
                <h1 className="mt-2 text-3xl text-muted-foreground">
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
                onClick={() => {
                    window.open(
                        RESUME_LINK,
                      '_blank'
                    );
                  }}
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
        </section>
    );
}
