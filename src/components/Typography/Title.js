import React from 'react'

export default function Title({ children, customColor = false }) {
    if(customColor) return <h1 className='text-4xl underline mb-6 text-[#4F48EC]'>{children}</h1>
    return <h1 className='text-6xl underline mb-10'>{children}</h1>
}
