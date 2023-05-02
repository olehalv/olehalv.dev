import React from 'react'

import NavLink from './NavLink'

export default function Nav({ setActive }) {
    return (
        <div className='absolute top-0 left-0 m-0 p-0 z-10'>
            <div className='flex flex-col h-screen w-screen justify-center items-center bg-[#4F48EC]'>
                <button onClick={() => setActive(false)} className='hover:underline text-xl mb-4 animate-bounce'>x</button>
                <ul className='text-center'>
                    <NavLink text={"HJEM"} to={"/"} setActive={setActive} />
                    <NavLink text={"PROSJEKTER"} to={"/projects"} setActive={setActive} />
                    <NavLink text={"MEG"} to={"/about"} setActive={setActive} />
                    <NavLink text={"KONTAKT"} to={"/contact"} setActive={setActive} />
                    <NavLink text={"GITHUB"} link={"https://github.com/olemorten"} setActive={setActive} />
                </ul>
            </div>
        </div>
    )
}
