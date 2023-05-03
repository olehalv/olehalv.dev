import React from 'react'

import NavMan from '../components/Navigation/NavMan'
import HomeWrapper from '../components/Wrappers/HomeWrapper'
import Title from '../components/Typography/Title'

import Typewriter from "typewriter-effect/dist/core"
import {useSpring, animated} from '@react-spring/web'

export default function Home() {
    const fadeUp = useSpring({
        from: {opacity: 0, transform: 'translateY(40px)'},
        to: {opacity: 1, transform: 'translateY(0px)'}
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
            <animated.div style={{...fadeUp}} className='h-full flex flex-col justify-center'>
                <Title>olehalv.dev</Title>
                <p className='mb-2 text-xl'>Enkel, men litt kul <span className='font-bold text-2xl text-[#4F48EC]'>PORTEFØLJE</span> for,</p>
                <p className='mb-8 font-bold text-2xl'>Ole <span className='animate-pulse'>Morten</span> Halvorsen</p>
                <p className='mb-2 text-xl'>Lyst til å se <span className='font-bold text-2xl text-[#4F48EC]' id='more'></span></p>
                <p className='mb-8 font-bold text-2xl'>Trykk på meg!</p>
            </animated.div>
            <div className='h-full flex justify-center items-center'>
                <NavMan />
            </div>
        </HomeWrapper>
    )
}