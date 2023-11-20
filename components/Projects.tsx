import React from 'react'
import SectionHeader from '@/components/Section-Header'
import { projectsData } from '@/lib/data'
import Image from 'next/image'

export default function Projects() {
  return (

    <section>
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

type ProjectProps = (typeof projectsData)[number];


function Project({ title, description, tags, imageUrl } : ProjectProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map( (tag, index) => (
          <li key={index}>
            {tag}
          </li>
        ))}
      </ul>

      <Image src={imageUrl} alt={title}/>
    </section>
  )
}