import React from 'react'

function Projects({ project }) {
    const { name, image, description, tech, preview, code } = project;

    return (
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-around lg:px-0 px-4'>
            <a href={preview}><img className='w-[600px] rounded cursor-pointer lg:hover:scale-125 transition-all' src={image} alt='Project Preview' /></a>
            <div className='lg:w-[400px] flex flex-col gap-[15px]'>
                <h2 className='text-4xl font-bold tracking-wide'>{name}</h2>
                <p className='text-gray-500 text-xl'>{description}</p>
                <p className='text-gray-700 text-xl font-light tracking-wide'>{tech}</p>
                <div className='flex gap-6 items-center'>
                    <a href={preview}><button className='bg-blue-500 uppercase text-white py-5 px-16 rounded hover:translate-y-[-0.375rem] transition-all'>Preview</button></a>
                    <a href={code}><button className='bg-blue-500 uppercase text-white py-5 px-16 rounded hover:translate-y-[-0.375rem] transition-all'>Source</button></a>
                </div>
            </div>
        </div>
    )
}

export default Projects