import React, { useRef } from 'react'
import SectionHeader from '@/components/Section-Header'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll } from 'framer-motion';
import { Project } from '@/components/Project';

export default function Projects() {
  return (

    <section className="scroll-mt-28 mb-28"
    id='projects'
    >
        <SectionHeader text={'Projects'} />
        <div>
          {projectsData.map( (project, index) => {
            return (
              
              <React.Fragment key={index}>
              <Project {...project} />
              </React.Fragment>
              )
          })}
          

        </div>
    </section>


    )
}
