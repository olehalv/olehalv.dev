import React from 'react'

import { useSpring, animated } from '@react-spring/web'

export default function Wrapper({ children, full = true }) {
    const fadeUp = useSpring({
        from: { opacity: 0, transform: 'translateY(40px)' },
        to: { opacity: 1, transform: 'translateY(0px)' }
    })

    return <animated.div style={{ ...fadeUp }} className='h-screen container mx-auto px-4 flex flex-col justify-center items-center'>{children}</animated.div>
}