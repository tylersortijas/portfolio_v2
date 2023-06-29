import React, { useState, useEffect } from 'react'

import headshot from "../images/headshot.png";

function Nav() {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <nav className={`${isActive ? "bg-blue-500 py-4 shadow-md" : "bg-none py-5"} w-full fixed px-[70px] z-10 flex items-center justify-between transition-all`}>
      <div className='flex items-center gap-2'>
        <img src={headshot} alt='My headshot circa 2018' className={`${isActive ? "w-[40px]" : "w-[50px]"} rounded-full`} />
        <h1 className={`${isActive ? "text-white font-light" : "text-black font-bold"} uppercase tracking-wider`}>Francisco T Sortijas Roncalli</h1>
      </div>
      <div className='lg:visible hidden'>
        <ul className='flex gap-[50px] uppercase tracking-wider'>
          <li className={`${isActive ? "text-white font-light" : "text-black"} hover:underline transition-all cursor-pointer`}><a href='./'>Home</a></li>
          <li className={`${isActive ? "text-white font-light" : "text-black"} hover:underline transition-all cursor-pointer`}><a href='./#about'>About</a></li>
          <li className={`${isActive ? "text-white font-light" : "text-black"} hover:underline transition-all cursor-pointer`}><a href='./#projects'>Projects</a></li>
        </ul >
      </div >
    </nav >
  )
}

export default Nav