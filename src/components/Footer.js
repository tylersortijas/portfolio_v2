import React from 'react'
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

function Footer() {
    return (
        <footer className='bg-black h-[350px]'>
            <div className='container mx-auto h-full flex flex-col justify-center gap-10'>
                <div className='flex justify-around items-start'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white uppercase tracking-wide font-bold text-xl'>Francisco T Sortijas Roncalli</h1>
                        <p className='text-white font-light'>A dedicated and enthusiastic developer with a strong passion for<br /> coding and problem-solving.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='uppercase font-bold text-white tracking-wide text-xl'>Social</h1>
                        <div className='text-white text-2xl flex items-center gap-2'>
                            <a href='https://www.linkedin.com/in/francisco-roncalli-236ab522b/'><BiLogoLinkedin /></a>
                            <a href='https://github.com/tylersortijas'><AiOutlineGithub /></a>
                            <a href='https://www.instagram.com/tylersortijas/'><AiOutlineInstagram /></a>
                            <a href='mailto: tylersortijas@gmail.com'><BiLogoGmail /></a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-8'>
                    <hr className='border-gray-500 w-[1050px]' />
                    <p className='font-light text-xs text-white'>© Copyright 2023. Made by <a className='underline font-semibold tracking-wide' href='https://github.com/tylersortijas'>Francisco Roncalli</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer