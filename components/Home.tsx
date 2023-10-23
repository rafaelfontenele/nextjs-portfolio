"use client"

import React from 'react'
import Image from 'next/image';
import randomGuyImage from '../public/randomGuy.jpg'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai'

export default function Home() {
    const githubURL = 'https://github.com/rafaelfontenele';
    let linkedinURL = 'https://www.linkedin.com/in/rafael-fontenele-76913216a';
    const contactIconStyle = { color: "white" }
  return (
    <section id='#home' className='mb-28 max-w-[50rem] text-center sm:mb-0 flex items-center justify-center flex-col'>
        
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
         className='flex flex-wrap justify-center items-center text-center mt-4 mb-4 sm:mb-10 px-4 flex-col text-xl sm:text-l font-medium 
         gap-1 sm:gap-2 sm:max-w-[85%]'>
            <span className='font-bold'>Hello, I&apos;m <span className='font-bold'>Rafael</span>.</span> 
            <span>I&apos;m a software developer who enjoys building <span className='italic'>web apps.</span></span> 
            <span>Currently, my focus is <span className='underline'>React (Next.js)</span></span>

        </motion.p>

        <motion.div 
        initial={ {opacity: 0, y: 0, scale: 0.4} }
        animate={ {opacity: 1, y:0, scale: 1} }
        transition={ {delay: 3.5, duration: 0.8} }
        className='flex flex-row sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
                <div className='flex flex-col sm:flex-row gap-2 max-w-[100%] font-medium'>
                    <Link href='#contact'
                    className='group bg-gray-900 text-white px-4 py-2 sm:px-7 sm:py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                    >
                        Contact me <AiOutlineMail className='sm:opacity-70 group-hover:translate-x-1 transition'/>
                    </Link>

                    <a href='/JPG_Test.jpg' download
                    className='group bg-white px-4 py-2 sm:px-7 sm:py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
                    >
                        Download CV <HiDownload className='opacity-70 group-hover:translate-x-1 transition'/>
                    </a>
                </div>

                <div className='flex flex-col sm:flex-row gap-[1.3rem] sm:gap-4'>
                    <a target="_blank" rel="noopener noreferrer" href={linkedinURL} className='rounded-full bg-white w-8 h-8 flex items-center justify-center scale-125 outline-none focus:scale-[1.5] hover:scale-[1.5] active:scale-[1.5] transition'><BsLinkedin /></a>
                    <a target="_blank" rel="noopener noreferrer" href={githubURL} className='rounded-full bg-white w-8 h-8 flex items-center justify-center scale-125 outline-none focus:scale-[1.5] hover:scale-[1.5] active:scale-[1.5] transition '><FaGithubSquare /></a>
                </div>
                
        </motion.div>

    </section>
    )
}
