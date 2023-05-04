import React from 'react'

export default function PageNavigation({ page, setPage }) {
    return (
        <div className='flex gap-2 mb-2'>
            <button onClick={() => setPage(page - 1)} className='hover:text-[#4F48EC] transition-colors duration-150 text-2xl'>TILBAKE</button>
            <p className='text-2xl'>|</p>
            <button onClick={() => setPage(page + 1)} className='hover:text-[#4F48EC] transition-colors duration-150 text-2xl'>NESTE</button>
        </div>
    )
}