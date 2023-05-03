import React from 'react'

import Navigation from './Navigation'

import PixelArt from "../../assets/pixelart.png"

export default function NavMan({arrow = true, style}) {
    const [active, setActive] = React.useState(false)

    return (
        <>
            <button onClick={() => {
                if (active) setActive(false)
                else setActive(true)
            }} className={style}>
                {arrow && <p className='animate-bounce mb-4 text-4xl'>&darr;</p>}
                <img src={PixelArt} alt="Pixel art" className='w-48' />
            </button>
            {active && <Navigation setActive={setActive} />}
        </>
    )
}
