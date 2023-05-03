import React from 'react'

import Wrapper from '../../components/Wrappers/Wrapper'
import NavMan from '../../components/Navigation/NavMan'

import Projects from './Projects'

export default function Start() {
    const [page, setPage] = React.useState(0)

    const handleNextPage = () => {
        setPage(page + 1)
    }

    const handlePrevPage = () => {
        setPage(page - 1)
    }

    return (
        <>
            <NavMan arrow={false} style={"absolute w-16 mt-5 right-5"} />
            {page === 0 && (
                <Wrapper>
                    <button className='text-6xl hover:text-[#4F48EC] transition-colors duration-150' onClick={() => handleNextPage()}>START</button>
                </Wrapper>
            )}
            {page === 1 && <Projects page={page} setPage={setPage} />}
        </>
    )
}
