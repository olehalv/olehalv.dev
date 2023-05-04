import React from 'react'

import { useSpring, animated } from '@react-spring/web'

export default function ProjectWrapper({ children }) {
    const fadeUp = useSpring({
        from: { opacity: 0, transform: 'translateY(40px)' },
        to: { opacity: 1, transform: 'translateY(0px)' }
    })

    return <animated.div style={{ ...fadeUp }} className='h-screen max-w-screen items-center container mx-auto px-4 py-4 grid md:grid-cols-2 gap-10'>{children}</animated.div>
}