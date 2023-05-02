import React from 'react'

import Wrapper from '../components/Wrappers/Wrapper'
import Title from '../components/Typography/Title'

export default function Home() {
    return (
        <Wrapper>
            <Title>olehalv.dev</Title>
            <p className='mb-2'>Enkel, men litt kul <span className='font-bold text-xl text-[#4F48EC]'>PORTEFØLJE</span> for,</p>
            <p className='mb-28 font-bold text-xl'>Ole <span className='animate-pulse'>Morten</span> Halvorsen</p>
            <p>Lyst til å se <span className='font-bold text-xl text-[#4F48EC]'>MER?</span> Trykk på den hoppende smilefjeset<br />oppe i høyre hjørne</p>
        </Wrapper>
    )
}