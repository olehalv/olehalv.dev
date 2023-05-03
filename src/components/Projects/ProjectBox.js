import React from 'react'

export default function ProjectBox({title, description, link, image}) {
  return (
    <div className='bg-[#4F48EC] p-5 text-center border-black border-4'>
        <h1 className='text-2xl mb-2'>{title}</h1>
        <p className='text-sm mb-2'>{description}</p>
        <img src={image} alt={title} className='w-full h-60 object-fit mb-4 border-4 border-black' />
        {link && <a href={link} target='_blank' rel='noreferrer' className='text-sm hover:underline mb-2 text-neutral-400'>BESØK++</a>}
        {!link && <button className='text-sm text-neutral-400' disabled>LINK IKKE TILGJENGELIG</button>}
    </div>
  )
}
