"use client"

import React from 'react'
import Image from 'next/image';
import randomGuyImage from '../public/randomGuy.jpg'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id='#home'>
        
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div className='w-[9rem] h-[9rem] rounded-full border-gray-900 border-dashed border-4 absolute'
                initial={ {rotate: 0, x: 0, y: 0, opacity: 0.6, scale: 0.7} }
                animate={ {rotate: 360, x: -2, y: -2, opacity: 0, scale: 1.05} }
                transition={ {duration:5} }

                >
                    </motion.div>
                    <motion.div
                    initial={ { opacity: 0} }
                    animate={ { opacity: 1, scale: 1} }
                    transition={ {delay:3, duration: 3} }
                    >
                        <Image 
                        src={randomGuyImage}
                        alt='Personal profile picture'
                        className='w-[9rem] h-[9rem]  rounded-full border-2 border-gray-300 object-cover shadow-2xl relative'
                        width='192'
                        height='192'
                        quality='20'
                        priority={true}
                        />
                    </motion.div>
            </div>


        </div>        

        <p className='flex flex-wrap justify-center items-center text-center mt-4 mb-10 px-4 flex-col text-2xl sm:text-l font-medium gap-2'>
            <span className='font-bold'>Hello, I&apos;m <span className='font-bold'>Rafael</span>.</span> 
            <span>I&apos;m a brazilian software developer<br></br> who enjoys building <span className='italic'>web apps.</span></span> 
            <span>Currently, my focus is <span className='underline'>React (Next.js)</span></span>

        </p>

    </section>
    )
}
