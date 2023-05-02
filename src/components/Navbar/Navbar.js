import React from 'react'

import Nav from './Nav'

export default function Navbar() {
    const [active, setActive] = React.useState(false)

    return (
        <>
            <ul className='container mx-auto py-10 flex px-4'>
                <div className='ms-auto flex'>
                    <button className='hover:underline text-4xl animate-bounce' onClick={() => setActive(true)}>:)</button>
                </div>
            </ul>
            {active && <Nav setActive={setActive} />}
        </>
    )
}
