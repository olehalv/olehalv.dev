import React from 'react'

import NavMan from '../components/Navigation/NavMan'
import HomeWrapper from '../components/Wrappers/HomeWrapper'
import Title from '../components/Typography/Title'
import ParagraphXl from '../components/Typography/ParagraphXl'
import Paragraph2Xl from '../components/Typography/Paragraph2Xl'

import Typewriter from "typewriter-effect/dist/core"
import { useSpring, animated } from '@react-spring/web'

export default function Home() {
    const fadeUp = useSpring({
        from: { opacity: 0, transform: 'translateY(40px)' },
        to: { opacity: 1, transform: 'translateY(0px)' }
    })

    React.useEffect(() => {
        new Typewriter('#more', {
            strings: ['MER', 'PROSJEKTER', 'OM MEG', 'KONTAKT', 'GITHUB'],
            autoStart: true,
            loop: true,
            cursor: '?',
            deleteSpeed: 50,
            skipAddStyles: false,
        })
    }, [])

    return (
        <HomeWrapper>
            <animated.div style={{ ...fadeUp }} className='h-full flex flex-col justify-center'>
                <div className=''>
                    <Title>olehalv.dev</Title>
                </div>
                <div className='mb-4 md:mb-8'>
                    <ParagraphXl>Enkel, men litt kul <span className='font-bold text-xl md:text-2xl text-[#4F48EC]'>PORTEFØLJE</span> for,</ParagraphXl>
                    <Paragraph2Xl>Ole <span className='animate-pulse'>Morten</span> Halvorsen</Paragraph2Xl>
                </div>
                <div className='mb-4 md:mb-8'>
                    <ParagraphXl>Lyst til å se <span className='font-bold text-xl md:text-2xl text-[#4F48EC]' id='more'></span></ParagraphXl>
                    <Paragraph2Xl>Trykk på meg!</Paragraph2Xl>
                </div>
                <p className='text-xs opacity-50'>Vennligst ikke gå på denne nettsiden på mobil ennå :)</p>
                <p className='text-xs opacity-50'>Den er ikke helt responsiv</p>
            </animated.div>
            <div className='h-fit md:h-full flex justify-center items-center'>
                <NavMan />
            </div>
        </HomeWrapper>
    )
}