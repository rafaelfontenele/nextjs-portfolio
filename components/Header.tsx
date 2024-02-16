"use client";

import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { sections } from '@/lib/data'
import clsx from 'clsx';
import Link from 'next/link'


export default function Header() {
  
  const [currentSection, setCurrentSection] = useState<string>('Home');

    const dftClasses = "flex w-full items-center justify-center px-3 py-3 hover:text-gray-800 transition";
 
    return (
    
    <header className='z-[999] relative'>


        <motion.div 
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:-top-6 sm:h-[5.25rem] sm:w-[36rem] sm:rounded-b-[3rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{y: -100, opacity: 0, x: "-50%"}}
        animate={{y: 0, opacity: 1, x: "-50%"}}
        >

        </motion.div>
        
        <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[0.5rem] sm:h-[initial] sm:py-0'>
          
          <ul className='flex w-[22rem] flex-nowrap items-center justify-center md:gap-8 gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {sections.map( section => (
              <motion.li 
              key={section.hash}
              className='h-3/4 flex items-center justify-center relative'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
               >
                <Link 
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-700 transition",
                    {
                      'text-gray-800': section.name === currentSection,
                    }
                  )}

                  href={section.hash}>
                    {section.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        
    </header>


    )
}
