import React from 'react'

import NavMan from '../components/Navigation/NavMan'
import Wrapper from '../components/Wrappers/Wrapper'
import Title from '../components/Typography/Title'

import Typewriter from 'typewriter-effect/dist/core'

export default function Contact() {
    React.useEffect(() => {
        new Typewriter('#about', {
            strings: ["når som helst!", "om et prosjekt?", "om en jobb?", "om en idé?", "om hva som helst!"],
            autoStart: true,
            loop: true,
            cursor: '_',
            deleteSpeed: 25,
            skipAddStyles: false,
            delay: 50,
        })
    }, [])

    return (
        <div>
            <NavMan arrow={false} style={"absolute w-24 mt-5 right-5"} />
            <Wrapper>
                <Title>Kontakt meg</Title>
                <p className='mb-2'>Kontakt meg <span id='about' className='text-[#4F48EC] text-xl'></span></p>
                <div className='grid grid-cols-3 gap-8 w-full text-center my-4'>
                    <div className='p-4 border-4 border-white col-span-1'>
                        <h2 className='text-2xl mb-2'>Personlig epost</h2>
                        <a href="mailto:ole2005morten@outlook.com" className='text-[#4F48EC] font-bold'>ole2005morten@outlook.com</a>
                    </div>
                    <div className='p-4 border-4 border-white col-span-1'>
                        <h2 className='text-2xl mb-2'>Skole epost</h2>
                        <a href="mailto:olehalv@viken.no" className='text-[#4F48EC] font-bold'>olehalv@viken.no</a>
                    </div>
                    <div className='p-4 border-4 border-white col-span-1'>
                        <h2 className='text-2xl mb-2'>Telefon</h2>
                        <a href="tel:+47 46894546" className='text-[#4F48EC] font-bold'>+47 468 94 546</a>
                    </div>
                    <div className='p-4 border-4 border-white col-span-1'>
                        <h2 className='text-2xl mb-2'>LinkedIn</h2>
                        <a href="https://www.linkedin.com/in/ole-m-halvorsen-a72a0422b/" target='_blank' className='text-[#4F48EC] font-bold'>Ole Morten Halvorsen++</a>
                    </div>
                    <div className='p-4 border-4 border-white col-span-1'>
                        <h2 className='text-2xl mb-2'>GitHub</h2>
                        <a href="https://github.com/olemorten" target='_blank' className='text-[#4F48EC] font-bold'>olemorten++</a>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
