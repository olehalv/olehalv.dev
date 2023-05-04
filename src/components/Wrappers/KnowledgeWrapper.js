import React from 'react'

import { useSpring, animated } from '@react-spring/web'

export default function KnowledgeWrapper({ children }) {
    const fadeUp = useSpring({
        from: { opacity: 0, transform: 'translateY(40px)' },
        to: { opacity: 1, transform: 'translateY(0px)' }
    })

    return <animated.div style={{ ...fadeUp }} className='mb-4 container mx-auto grid grid-cols-3 gap-4'>{children}</animated.div>
}