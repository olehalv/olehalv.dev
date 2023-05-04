import React from 'react'

import Wrapper from '../../components/Wrappers/Wrapper'
import NavMan from '../../components/Navigation/NavMan'

import Projects from './Projects'
import Knowledge from './Knowledge'

import { Navigate } from 'react-router-dom'

export default function Start() {
    const [page, setPage] = React.useState(0)

    return (
        <>
            {page === 0 && (
                <div>
                    <NavMan arrow={false} style={"absolute w-24 mt-5 right-5"} />
                    <Wrapper>
                        <button className='text-6xl hover:text-[#4F48EC] transition-colors duration-150 animate-bounce' onClick={() => setPage(page + 1)}>START</button>
                    </Wrapper>
                </div>
            )}
            {page === 1 && <Projects page={page} setPage={setPage} />}
            {page === 2 && <Knowledge page={page} setPage={setPage} />}
            {page === 3 && <Navigate to='/contact' />}
        </>
    )
}
