"use client"

import React from 'react'
import Image from 'next/image';
import randomGuyImage from '../public/randomGuy.jpg'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id='#home'>
        
        <motion.div className="flex items-center justify-center"
        initial={ {opacity: 0, y: 0, x: 0} }
        animate={ {opacity: 1, y: 0, x: 0} }
        transition={{ delay: 1, duration: 2}}
        >
            <motion.div className='relative'
            initial={ {rotate: 0, opacity: 1} }
            animate={ {rotate: 0, opacity: 1} }
            transition={ {delay: 1} }
            >
                <motion.div className='rounded-full border-black border-dotted border-4'
                initial={{rotate: 0}}
                animate={{rotate: 360}}
                >
                    <motion.div>
                        <Image 
                        src={randomGuyImage}
                        alt='Personal profile picture'
                        className='w-24 h-24 rounded-full object-cover shadow-xl relative'
                        width='192'
                        height='192'
                        quality='20'
                        priority={true}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>


        </motion.div>        

    </section>
    )
}
