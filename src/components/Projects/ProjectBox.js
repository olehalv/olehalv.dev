import React from 'react'

import ProjectWrapper from '../Wrappers/ProjectWrapper'
import Title from '../Typography/Title'
import ParagraphXl from '../Typography/ParagraphXl'
import Paragraph from '../Typography/Paragraph'

export default function ProjectBox({ currentProject, setCurrentProject, index, i, title, description, designDescription, tools, link, image }) {
  return (
    <ProjectWrapper>
      <div className='col-span-1'>
        <div className='text-center md:text-start'>
          <p className='md:mb-2'>PROSJEKT {index}</p>
          <Title customColor={true}>{title}</Title>
        </div>
        <div className='mb-8'>
          <ParagraphXl>PROSJEKTBESKRIVELSE</ParagraphXl>
          <Paragraph>{description}</Paragraph>
        </div>
        <div className='mb-8'>
          <ParagraphXl>VERKTØY/SPRÅK BRUKT</ParagraphXl>
          <ul className='list-disc list-inside'>
            {tools.map((tool, index) => (
              <li key={index} className='text-xs md:text-base'>{tool}</li>
            ))}
          </ul>
        </div>
        <div className='mb-8'>
          <ParagraphXl>BESØK</ParagraphXl>
          {link && <a href={link} className='hover:text-[#4F48EC] transition-colors duration-150 underline text-xs md:text-base'>{link}</a>}
          {!link && <button className='underline' disabled>IKKE TILGJENGELIG</button>}
        </div>
      </div>
      <div className='col-span-1'>
        <div className='mb-8'>
          <ParagraphXl>DESIGNBESKRIVELSE</ParagraphXl>
          <Paragraph>{designDescription}</Paragraph>
        </div>
        <div className='mb-8'>
          {Array.isArray(image) &&
            <div className='grid grid-cols-3 gap-4'>
              {image.map((img, index) => (
                <img src={img} alt="Prosjektbilde" className='border-2 border-white max-h-96 w-full' />
              ))}
            </div>
          }
          {!Array.isArray(image) && <img src={image} alt="Prosjektbilde" className='border-2 border-white max-h-96' />}
        </div>
        {i === 0 &&
          <div className='flex justify-end mb-4'>
            <button onClick={() => setCurrentProject(currentProject + 1)} className='bg-[#4F48EC] text-white px-4 py-2'>NESTE</button>
          </div>
        }
        {i > 0 &&
          <div className='flex justify-between mb-4'>
            <button onClick={() => setCurrentProject(currentProject - 1)} className='bg-[#4F48EC] text-white px-4 py-2'>FORRIGE</button>
            <button onClick={() => setCurrentProject(currentProject + 1)} className='bg-[#4F48EC] text-white px-4 py-2'>NESTE</button>
          </div>
        }
      </div>
    </ProjectWrapper>
  )
}
