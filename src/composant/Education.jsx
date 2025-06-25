import React from 'react'

const Education = () => {
    return (
        <div id='education' className='p-10'>
            <h2 className=' font-bold text-3xl text-blue-400 mb-2'>Ed<span className='border-b-2 pb-3'>ucati</span>on</h2>
            <div className='flex flex-col md:flex-row py-10'>
                <div className='my-5 w-full hover:scale-110 hover:border-blue-400 hover:border-2 dark:shadow-white md:w-[30%] md:mx-5 h-[30vh] dark:bg-slate-800 rounded justify-center items-center lg:text-2xl font-bold p-5 '>
                    <div className='text-center mb-5'>
                        <span className='inline-block border-2 border-blue-400 w-[20%] lg:w-[30%]'></span>
                        <p className='inline-block text-center px-5'>2025</p>
                        <span className='inline-block border-2 border-blue-400 w-[20%] lg:w-[30%]'></span>
                    </div>
                    <p className='md:text-end lg:mb-10 mb-5'>BTS Genie Logiciel(En cours)</p>
                    <h5 className='text-xs font-normal text-center'>Institut Universitaire du Golfe de Guinee</h5>
                </div>
                <div className='my-5 w-full hover:scale-110 hover:border-blue-400 hover:border-2 dark:shadow-white md:w-[30%] md:mx-5 h-[30vh] dark:bg-slate-800 rounded justify-center items-center lg:text-2xl font-bold p-5 '>
                    <div className='text-center mb-5'>
                        <span className='inline-block border-2 border-blue-400 w-[20%] lg:w-[30%]'></span>
                        <p className='inline-block text-center px-5'>2024</p>
                        <span className='inline-block border-2 border-blue-400 w-[20%] lg:w-[30%]'></span>
                    </div>
                    <p className='md:text-end lg:mb-10 mb-5'>L1(Genie Logiciel)</p>
                    <h5 className='text-xs font-normal text-center'>Institut Universitaire du Golfe de Guinee</h5>
                </div>
                 <div className='my-5 w-full hover:scale-110 hover:border-blue-400 hover:border-2 dark:shadow-white md:w-[32%] md:mx-5 sm:mr-10 h-[30vh] dark:bg-slate-800 rounded justify-center items-center lg:text-2xl font-bold p-5 '>
                    <div className='text-center mb-5'>
                        <span className='inline-block border-2 border-blue-400 w-[20%] md:w-[30%]'></span>
                        <p className='inline-block text-center px-5'>2023</p>
                        <span className='inline-block border-2 border-blue-400 w-[20%] md:w-[30%]'></span>
                    </div>
                    <p className='md:text-end lg:mb-10 mb-5'>Baccalaureat C(Maths & physique)</p>
                    <h5 className='text-xs font-normal text-center'>LY.BI.NGO.BA</h5>
                </div>
            </div>
        </div>
    )
}

export default Education