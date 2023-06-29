import React from 'react';

import projects from "../data/projects";

import Nav from "../components/Nav";
import Hero from "../components/home/Hero";
import AboutMe from "../components/home/AboutMe";
import Projects from "../components/home/Projects";
import Footer from "../components/Footer";

function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <AboutMe />
            <section className='lg:h-[2500px] py-10 mt-10' id='projects'>
                <div className='container mx-auto h-full flex flex-col gap-[100px]'>
                    <div className='flex flex-col items-center gap-5'>
                        <h1 className='text-5xl uppercase font-bold tracking-wider'>Projects</h1>
                        <hr className='w-[20px] border-[2px] rounded-full border-blue-500' />
                        <p className='text-2xl text-gray-500 text-center font-light'>Below you will find a variety of my past work that consist of either<br /> personal projects or client projects</p>
                    </div>
                    {projects.map((project) => {
                        return <Projects project={project} key={project.id} />
                    })}
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Home