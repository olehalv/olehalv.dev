import React from 'react'

import ProjectWrapper from '../Wrappers/ProjectWrapper'
import Title from '../Typography/Title'

export default function ProjectBox({ currentProject, setCurrentProject, index, i, title, description, designDescription, tools, link, image }) {
  return (
    <ProjectWrapper>
      <div className='col-span-1'>
        <p className='mb-2'>PROSJEKT {index}</p>
        <Title customColor={true}>{title}</Title>
        <div className='mb-8'>
          <h2 className='text-2xl'>PROSJEKTBESKRIVELSE</h2>
          <p>{description}</p>
        </div>
        <div className='mb-8'>
          <h2 className='text-2xl'>VERKTØY/SPRÅK BRUKT</h2>
          <ul className='list-disc list-inside'>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
        <div className='mb-8'>
          <h2 className='text-2xl'>BESØK</h2>
          {link && <a href={link} className='hover:text-[#4F48EC] transition-colors duration-150 underline'>{link}</a>}
          {!link && <button className='underline' disabled>IKKE TILGJENGELIG</button>}
        </div>
      </div>
      <div className='col-span-1'>
        <div className='mb-8'>
          <h2 className='text-2xl'>DESIGNBESKRIVELSE</h2>
          <p className='mb-2'>{designDescription}</p>
        </div>
        <div className='mb-8'>
          {Array.isArray(image) &&
            <div className='grid grid-cols-3 gap-4'>
              {image.map((img, index) => (
                <img src={img} alt="Prosjektbilde" className='border-2 border-white max-h-96' />
              ))}
            </div>
          }
          {!Array.isArray(image) && <img src={image} alt="Prosjektbilde" className='border-2 border-white max-h-96' />}
        </div>
        {i === 0 &&
          <div className='flex justify-end'>
            <button onClick={() => setCurrentProject(currentProject + 1)} className='bg-[#4F48EC] text-white px-4 py-2'>NESTE</button>
          </div>
        }
        {i > 0 && 
          <div className='flex justify-between'>
            <button onClick={() => setCurrentProject(currentProject - 1)} className='bg-[#4F48EC] text-white px-4 py-2'>FORRIGE</button>
            <button onClick={() => setCurrentProject(currentProject + 1)} className='bg-[#4F48EC] text-white px-4 py-2'>NESTE</button>
          </div>
        }
      </div>
    </ProjectWrapper>
  )
}
