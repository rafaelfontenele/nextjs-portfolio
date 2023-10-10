"use client"

import React from 'react'
import Image from 'next/image';
import randomGuyImage from '../public/randomGuy.jpg'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

export default function Home() {
    const contactIconStyle = { color: "white" }
  return (
    <section id='#home' className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        
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

        <motion.p
        initial={ {y:100,  opacity: 0} }
        animate={ {y: 0, opacity: 1} }
        transition={ {delay: 3, duration: 1} }
         className='flex flex-wrap justify-center items-center text-center mt-4 mb-10 px-4 flex-col text-2xl sm:text-l font-medium gap-2 sm:max-w-[30rem]'>
            <span className='font-bold'>Hello, I&apos;m <span className='font-bold'>Rafael</span>.</span> 
            <span>I&apos;m a brazilian software developer who enjoys building <span className='italic'>web apps.</span></span> 
            <span>Currently, my focus is <span className='underline'>React (Next.js)</span></span>

        </motion.p>

        <div className='flex flex-row max-h-min'>
                <Link href='#contact'
                className='bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full'
                >
                    Contact me <BsArrowRight className='scale-2'/>
                </Link>
                
                <Link href='#resume'
                 className='flex gap-2 font-bold items-center justify-center bg-blue-400 max-w-[30%] border-2 round-4 px-2 py-2' 
                 >
                    Download CV <HiDownload/>
                </Link>
        </div>

    </section>
    )
}
