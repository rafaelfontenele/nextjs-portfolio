import React from 'react'

type props = {
  text: string,
  classes?: string
}

export default function SectionHeader(props: props) {
  return (
    <div className={props.classes || 'text-3xl font-medium capitalize mb-8 text-center'}>
      {props.text || 'no text'}
    </div>
  )
}
