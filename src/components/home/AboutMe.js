import React from 'react'

function AboutMe() {
    return (
        <section className='lg:h-[800px] py-0 lg:px-0 px-4' id='about'>
            <div className='container mx-auto flex items-center justify-center flex-col gap-[70px] h-full'>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-5xl uppercase font-bold tracking-wider'>About Me</h1>
                    <hr className='w-[20px] border-[2px] rounded-full border-blue-500' />
                    <p className='text-2xl text-gray-500 text-center font-light'>Here you will find more information about me, what I do, and my current skills<br /> related to programming and technology.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-start justify-center gap-[150px]'>
                    <div className='flex flex-col items-start justify-center gap-5'>
                        <h2 className='font-bold text-3xl tracking-wider'>Get to know me!</h2>
                        <p className='text-gray-500 text-lg'>I'm a 22 yr old Filipino American <span className='text-gray-700 font-bold'>Frontend Web Developer</span> who enjoys building the Front-End<br /> of websites and Web Applications that represents companies
                            and brings the overall success of<br /> the product through its digital real estate.</p>
                        <p className='text-gray-500 text-lg'>Aside from being a Developer, I have a passion for Cars, Video games, and Clothing. I have<br /> 8 years of
                            experience in dancing and my <span className='text-gray-700 font-bold'>family/loved ones</span> are very dear to me. I hope to one<br /> day inspire my siblings
                            and anyone that I can that it's possible to find success in doing things that<br /> we love.</p>
                        <p className='text-gray-500 text-lg'>I'm open to <span className='text-gray-700 font-bold'>Job</span> opportunities where I can contribute, learn, and grow. If you have a good<br /> opportunity that matches my skills and experience
                            then feel free to <span className='text-gray-700 font-bold'>contact me.<br /> tylersortijas@gmail.com</span>(or click the button below)</p>
                        <a href='mailto: tylersortijas@gmail.com'><button className='uppercase bg-blue-500 text-white py-4 rounded px-14 tracking-wide text-xl font-light hover:translate-y-[-0.375rem] transition-all'>Contact</button></a>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-5'>
                        <h2 className='font-bold text-3xl tracking-wider'>My Skills</h2>
                        <div className='flex flex-col gap-2'>
                            <ul className='flex items-center text-gray-700 gap-4 text-xl'>
                                <li className='bg-gray-300 rounded px-4 py-2'>HTML</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>CSS</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>Javascript</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>Java</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>Python</li>
                            </ul>
                            <ul className='flex items-center text-gray-700 gap-4 text-xl'>
                                <li className='bg-gray-300 rounded px-4 py-2'>React</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>Tailwind</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>Django</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>Flask</li>
                            </ul>
                            <ul className='flex items-center text-gray-700 gap-4 text-xl'>
                                <li className='bg-gray-300 rounded px-4 py-2'>NodeJs</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>Express Basics</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>MongoDB Basics</li>
                            </ul>
                            <ul className='flex items-center text-gray-700 gap-4 text-xl'>
                                <li className='bg-gray-300 rounded px-4 py-2'>Bootstrap</li>
                                <li className='bg-gray-300 rounded px-4 py-2'>APIs</li>
                            </ul>
                            <ul className='flex items-center text-gray-700 gap-4 text-xl'>
                                <li className='bg-gray-300 rounded px-4 py-2'>Command Line</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe