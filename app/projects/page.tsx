"use client";

import Template from '../template';
import { AnimatedBlock } from '../animatedBlock';

export default function Hero() {
    
    return (
        <section className="flex flex-wrap px-10 items-center justify-around w-full h-[80vh]">
            <Template>
                <AnimatedBlock direction="left">
                    <div className='w-50 h-50 bg-background'>
                        Hello
                    </div>
                </AnimatedBlock>

                <AnimatedBlock direction="right">
                    <div className='w-50 h-50 bg-background'>
                        Abhishek
                    </div>
                </AnimatedBlock>
            </Template>
        </section>
    );
}