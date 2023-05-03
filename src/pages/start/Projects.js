import React from 'react'

import Wrapper from '../../components/Wrappers/Wrapper'
import Title from "../../components/Typography/Title"
import ProjectBox from '../../components/Projects/ProjectBox'

import DrikkeKalkulatoren from '../../assets/projects/drikkekalkulatoren.png'
import Portifolio from '../../assets/projects/portifolio.png'
import Rongve from '../../assets/projects/rongve.png'

export default function Projects({ page, setPage }) {
  return (
    <Wrapper>
      <Title>PROSJEKTER</Title>
      <div className='gap-6 grid grid-cols-3 mb-4'>
        <ProjectBox title={"DRIKKEKALKULATOREN"} description={"PRIS OG PROMILLEKALKULATOR"} image={DrikkeKalkulatoren} />
        <ProjectBox title={"RONGVE APP"} description={"SPORTSBUTIKK APP FOR MEDLEMMER"} image={Rongve} />
        <ProjectBox title={"PORTEFØLJE"} description={"PORTFOLIO FOR OLEHALV.DEV"} image={Portifolio} link={"https://olehalv.dev"} />
      </div>
      <div className='flex gap-2 mb-2'>
        <button onClick={() => setPage(page - 1)} className='hover:text-[#4F48EC] transition-colors duration-150'>TILBAKE</button>
        |
        <button onClick={() => setPage(page + 1)} className='hover:text-[#4F48EC] transition-colors duration-150'>NESTE</button>
      </div>
    </Wrapper>
  )
}