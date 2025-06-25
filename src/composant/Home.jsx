import React from 'react'
import image from '../assets/image.jpg'

const Home = () => {
    return (
        <div id='home' className='h-[100vh] w-full p-3 flex flex-row '>

            <div className='w-full md:w-3/4 h-full p-3 flex flex-col justify-center '>
                <h1 className='md:text-4xl text-3xl dark:text-white font-bold mt-20'><span className='animate__animated animate__fadeInLeft animate__delay-1s animate__slow'>Hello,</span>je suis Jaudel Tiogning</h1>
                <p className=' mt-2 text-blue-400 md:text-3xl text-2xl font-bold'>
                    <span className='animate__animated animate__fadeInLeft animate__delay-0.2s animate__slow animate__infinite'>D</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-0.4s animate__slow animate__infinite'>é</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-0.6s animate__slow animate__infinite'>v</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-0.8s animate__slow animate__infinite'>e</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-1s animate__slow animate__infinite'>l</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-1.2s animate__slow animate__infinite'>o</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-1.4s animate__slow animate__infinite'>p</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-1.6s animate__slow animate__infinite'>p</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-1.8s animate__slow animate__infinite'>e</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-2s animate__slow animate__infinite'>u</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-2.2s animate__slow animate__infinite'>r</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-2.4s animate__slow animate__infinite'> F</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-2.6s animate__slow animate__infinite'>u</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-2.8s animate__slow animate__infinite'>l</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-3s animate__slow animate__infinite'>l</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-3.2s animate__slow animate__infinite'>-</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-3.4s animate__slow animate__infinite'>s</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-3.6s animate__slow animate__infinite'>t</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-3.8s animate__slow animate__infinite'>a</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-4s animate__slow animate__infinite'>c</span>
                    <span className='animate__animated animate__fadeInLeft animate__delay-4.2s animate__slow animate__infinite'>k</span>
                </p>
                <p className='dark:text-white mt-4  md:text-2xl text-1.5xl '>
                    Passionné par la création d’applications modernes et performantes, je transforme les idées en solutions digitales concrètes. Découvrez mes projets et compétences ici !
                </p>
                <div className='flex flex-col md:flex-row md:mt-10'>
                    <button className='bg-blue-400 text-gray-800 px-4 py-2 mt-10 rounded-lg hover:bg-transparent hover:text-white hover:border-blue-400 hover:border-2 transition duration-300 ease-in-out'>
                        <a href="#contact">
                            Me contacter
                        </a>
                    </button>
                    <button className='border-blue-400 border-2 mx-5 dark:text-white px-4 py-2 mt-10 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out'>
                        <a href="/CV.pdf" download="CV_Jaudel_Tiogning.pdf">
                            Telecharger mon CV
                        </a>
                    </button>
                </div>
            </div>
            {/* <div
                className='hidden md:flex w-[20%] mt-20 h-[60vh] p-3 border-blue-400 border-2 justify-center items-center bg-cover bg-center'
                style={{ backgroundImage: `url(${image})` }}>

            </div> */}
        </div>
    )
}

export default Home