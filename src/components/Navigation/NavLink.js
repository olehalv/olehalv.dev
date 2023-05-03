import React from 'react'

import { Link } from 'react-router-dom'

export default function NavLink({ text, to, link, setActive }) {
    if (to) return <li className='mb-4'><Link to={to} className='hover:text-[#FFBF18] transition-colors duration-150 text-5xl' onClick={() => setActive(false)}>{text}</Link></li>
    if (link) return <li className='mb-4'><a href={link} target='_blank' rel='noreferrer' className='hover:text-[#FFBF18] transition-colors duration-150 text-5xl'>{text}++</a></li>
}
