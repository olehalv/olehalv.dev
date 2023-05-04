import React from 'react'

export default function HomeWrapper({ children }) {
    return <div className='h-screen container mx-auto px-4 grid md:grid-cols-2'>{children}</div>
}