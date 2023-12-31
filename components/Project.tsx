"use client"

import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll } from 'framer-motion';



type ProjectProps = (typeof projectsData)[number];


export function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {

    const ref = useRef(null);
    useScroll({
      target: '',
      offset: ["0 1", "1.33 1"],
    });


  return (
    <section className='group even:pl-8 bg-gray-100 max-w-[42rem] mb-3 sm:mb-8 last:mb-0 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] 
    hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
     
     <div className='group-even:ml-[18rem] pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-grey-700'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2'>
            {tags.map( (tag, index) => (
              <li 
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' 
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
     </div>

      <Image src={imageUrl} alt={`Project title=${title}`} quality={95} 
      className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
      group-hover:-translate-x-3
      group-hover:-translate-y-3
      group-hover:-rotate-2 transition

      group-even:group-hover:translate-x-3
      group-even:group-hover:-translate-y-3
      group-even:group-hover:rotate-2

      group-hover:scale-[1.04]
      group-even:right-[initial] group-even:-left-40' />
    </section>
  )
}