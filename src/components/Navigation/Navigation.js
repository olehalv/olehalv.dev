import React from 'react'

import NavLink from './NavLink'

import { useSpring, animated } from "@react-spring/web"

export default function Navigation({ setActive }) {
    const slideInFromLeft = useSpring({
        from: { transform: "translateX(-100%)", opacity: 0 },
        to: { transform: "translateX(0%)", opacity: 1 }
    })

    const slideInFromRight = useSpring({
        from: { transform: "translateX(100%)", opacity: 0 },
        to: { transform: "translateX(0%)", opacity: 1 }
    })

    const backgroundFadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    })

    return (
        <div className='absolute top-0 left-0 m-0 p-0 z-10'>
            <animated.div style={{...backgroundFadeIn}} className='flex flex-col h-screen w-screen justify-center items-center bg-[#4F48EC]'>
                <button onClick={() => setActive(false)} className='hover:underline text-xl mb-4 animate-bounce'>x</button>
                <ul className='text-center'>
                    <animated.div style={{...slideInFromLeft}}><NavLink text={"HJEM"} to={"/"} setActive={setActive} /></animated.div>
                    <animated.div style={{...slideInFromRight}}><NavLink text={"START"} to={"/start"} setActive={setActive} /></animated.div>
                    <animated.div style={{...slideInFromLeft}}><NavLink text={"KONTAKT"} to={"/contact"} setActive={setActive} /></animated.div>
                    <animated.div style={{...slideInFromRight}}><NavLink text={"GITHUB"} link={"https://github.com/olemorten"} setActive={setActive} /></animated.div>
                    <animated.div style={{...slideInFromLeft}}><NavLink text={"LINKEDIN"} link={"https://www.linkedin.com/in/ole-m-halvorsen-a72a0422b/"} setActive={setActive} /></animated.div>
                </ul>
            </animated.div>
        </div>
    )
}
