import React from 'react'
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { AiOutlineGithub, AiOutlineInstagram, AiFillCaretDown } from "react-icons/ai";

function Hero() {
    return (
        <section className='h-[1000px] bg-gray-200-to-r from-gray-200 to-white' id='home-section'>
            <div className='container mx-auto flex flex-col items-center justify-center gap-[40px] h-full'>
                <h1 className='font-bold text-5xl uppercase tracking-wider lg:text-start text-center'>Hello, I'm Francisco T Sortijas Roncalli</h1>
                <p className='text-2xl text-center font-light'>A dedicated and enthusiastic developer with a strong passion for<br /> coding and problem-solving.</p>
                <button className='uppercase font-semibold bg-blue-500 rounded px-24 py-5 text-xl text-white tracking-wider hover:translate-y-[-0.375rem] transition-all'>Projects</button>
            </div>
            <div className='lg:flex flex-col absolute top-[40%] left-[-0.2%] bg-gray-500 text-4xl gap-2 px-3 py-4 rounded text-white lg:visible hidden'>
                <a className='hover:translate-x-1 transition-all' href='https://www.linkedin.com/in/francisco-roncalli-236ab522b/'><BiLogoLinkedin /></a>
                <a className='hover:translate-x-1 transition-all' href='https://github.com/tylersortijas'><AiOutlineGithub /></a>
                <a className='hover:translate-x-1 transition-all' href='https://www.instagram.com/tylersortijas/'><AiOutlineInstagram /></a>
                <a className='hover:translate-x-1 transition-all' href='mailto: tylersortijas@gmail.com'><BiLogoGmail /></a>
            </div>
        </section>
    )
}

export default Hero