import React from 'react'

export default function Title({ children, customColor = false }) {
    if(customColor) return <h1 className='text-xl md:text-4xl underline mb-3 md:mb-6 text-[#4F48EC] text-center md:text-start'>{children}</h1>
    return <h1 className='text-2xl md:text-6xl underline mb-5 md:mb-10 text-center md:text-start'>{children}</h1>
}
