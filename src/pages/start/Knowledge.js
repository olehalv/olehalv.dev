import React from 'react'

import NavMan from '../../components/Navigation/NavMan'
import Wrapper from '../../components/Wrappers/Wrapper'
import KnowledgeWrapper from '../../components/Wrappers/KnowledgeWrapper'
import Title from '../../components/Typography/Title'

import { knowledge } from '../../components/data/knowledge'

export default function Knowledge({ page, setPage }) {
    return (
        <div>
            <NavMan arrow={false} explaining={true} style={"absolute w-32 mt-5 right-5"} />
            <Wrapper centered={false}>
                <Title customColor={true}>Mine ferdigheter</Title>
                <KnowledgeWrapper>
                    {Object.keys(knowledge).map((category, index) => {
                        return (
                            <div key={index} className='col-span-1 border-2 border-white p-8'>
                                <h2 className='text-2xl'>{category}</h2>
                                {Object.keys(knowledge[category]).map((skill, index) => {
                                    return (
                                        <ul key={index} className='list-disc list-inside'>
                                            <li>{skill}: <span>{knowledge[category][skill]}/10</span></li>
                                        </ul>
                                    )
                                })}
                            </div>
                        )
                    })}
                </KnowledgeWrapper>
                <div className='flex justify-between'>
                    <button onClick={() => setPage(page - 1)} className='bg-[#4F48EC] text-white px-4 py-2'>FORRIGE</button>
                    <button onClick={() => setPage(page + 1)} className='bg-[#4F48EC] text-white px-4 py-2'>NESTE</button>
                </div>
            </Wrapper>
        </div>
    )
}
