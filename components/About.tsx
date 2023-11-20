"use client";

import React from 'react'
import SectionHeader from '@/components/Section-Header'
import { motion } from 'framer-motion';

export default function About() {
  return (

        <motion.section 
        initial={ {opacity: 0, y: 100} }
        animate={ {opacity: 1, y: 0} }
        transition= { {delay: 3, duration: 2} }
        id='about'
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 mx-[2rem] sm:mx-[4rem]'>
            <SectionHeader text={`About me`} />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat ratione praesentium facere ipsum. Eveniet cum ullam dignissimos, iusto pariatur eos ad totam alias veniam eum, ut sint nisi maxime necessitatibus facilis, debitis tempora laborum porro hic? Consectetur, ut aut.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, corporis.</p>

        </motion.section>

    )
}
