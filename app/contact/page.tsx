"use client";

import Template from '@/app/template';
import { AnimatedBlock } from '@/app/animatedBlock';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
    
        const emailData = {
            title: (formData.get("title") as string) || "",
            message: (formData.get("message") as string) || "",
        };
    
        const mailtoLink = `mailto:sahayabhishek.edu@gmail.com?subject=${encodeURIComponent(emailData.title)}&body=${encodeURIComponent(emailData.message)}`;
        window.location.href = mailtoLink;
    };    

    return (
        <section className="flex flex-wrap px-10 my-10 items-center justify-around w-full h-[80vh]">
            <Template>
                <AnimatedBlock direction="left">
                    <Card className="w-full relative rounded-lg shadow-[0_0px_35px_-15px_rgba(0,0,0,0.9)] hover:shadow-2xl shadow-primary inline-block mt-10 mb-10">
                        {/* <div className="absolute inset-0 rounded-lg animate-pulseCustom">
                        </div> */}
                        <CardHeader>
                            <CardTitle className='text-2xl font-bold'>Feedback Form</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col w-96 md:flex-row">
                            <form onSubmit={handleSubmit} className="flex-1 p-4">
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                                        Title
                                    </label>
                                    <Input type="text" name="title" id="title" placeholder="Enter title" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <Textarea
                                        name="message"
                                        id="message"
                                        rows={5}
                                        placeholder="Enter your message"
                                        required
                                    ></Textarea>
                                </div>

                                <Button type="submit" variant="default" className="w-full">
                                    Send Feedback
                                </Button>
                            </form>

                        </CardContent>
                    </Card>
                </AnimatedBlock>

                <AnimatedBlock direction="right">
                    <div className="flex-1 p-4 w-96 rounded-md">
                        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
                        <a className="flex items-center mb-2 text-primary underline-offset-4 hover:underline cursor-pointer">
                            <FaEnvelope className="mr-2 text-accent-foreground" /> sahayabhishek.edu@gmail.com
                        </a>
                        <a className="flex items-center mb-2 text-primary underline-offset-4 hover:underline cursor-pointer">
                            <FaPhone className="mr-2 text-accent-foreground" /> +91 96967 88599
                        </a>
                        <a className="flex items-center mb-2 text-primary underline-offset-4 hover:underline cursor-pointer">
                            <FaMapMarkerAlt className="mr-2 text-accent-foreground" /> Boys Hostel 3, IIIT Sri City, Andhra Pradesh
                        </a>
                    </div>
                </AnimatedBlock>
            </Template>
        </section>
    );
}
