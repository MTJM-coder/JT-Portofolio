import React from 'react'
import imageHtml from '../assets/imgHtml.png'
import imageCss from '../assets/imageCss.png'
import imageJs from '../assets/imageJs.png'
import imageReact from '../assets/imageReac.png'
import imageTailwind from '../assets/imageTailwind.png'
import imageBootstrap from '../assets/imageBoo.png'
import imagePhp from '../assets/imagePHP.png'
import imageLaravel from '../assets/imageLaravel.png'
import imageVb from '../assets/imageVb.png'
import imageSql from '../assets/imageSql.png'
import SkillCircle from './cicleProgressBar';




const Skills = () => {
    return (
        <div id='skills' className='p-10'>
            <h2 className='font-bold text-3xl text-blue-400 mb-2'>Com<span className='border-b-2 pb-3'>peten</span>ces</h2>
            <div className='flex flex-col md:flex-row py-10'>
                <div className='h-max my-5 w-full hover:scale-110 hover:border-blue-400 hover:border-2 shadow-white md:w-[30%] md:mx-5  dark:bg-slate-800 rounded justify-center items-center lg:text-2xl font-bold p-5 '>
                    <h2 className='text-xl font-bold text-center text-blue-400'><span className='dark:text-white'>01.</span>Web frontend</h2>
                    <ul className='list-inside mt-2'>
                        <li className='text-sm'>
                            <div className="flex justify-between text-sm dark:text-white mb-1">
                                <span><img src={imageHtml} alt="HTML5" className="inline-block w-5 h-4 rounded-full mr-1" />HTML5</span>
                                <span>98%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                                <div className="bg-orange-500 h-2.5 rounded-full w-[98%]" ></div>
                            </div>
                        </li>
                        <li className='text-sm'>
                            <div className='flex justify-between text-sm dark:text-white mb-1'>
                                <span><img src={imageCss} alt="CSS3" className="inline-block w-5 h-4 rounded-full mr-1" />CSS3</span>
                                <span>70%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                                <div className="bg-blue-500 h-2.5 rounded-full w-[70%]" ></div>
                            </div>
                        </li>
                        <li className='text-sm'>
                            <div className="flex justify-between text-sm dark:text-white mb-1">
                                <span><img src={imageJs} alt="JavaScript" className="inline-block w-5 h-4 rounded-full mr-1" />JavaScript</span>
                                <span>75%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full w-[75%]" ></div>
                            </div>
                        </li>
                        <li className='text-sm'>
                            <div className="flex justify-between text-sm dark:text-white mb-1">
                                <span><img src={imageReact} alt="React" className="inline-block w-5 h-4 rounded-full mr-1" />React</span>
                                <span>70%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                                <div className="bg-cyan-400 h-2.5 rounded-full w-[70%]" ></div>
                            </div>
                        </li>
                        <li className='text-sm'>
                            <div className="flex justify-between text-sm dark:text-white mb-1">
                                <span><img src={imageTailwind} alt="Tailwind CSS" className="inline-block w-5 h-4 rounded-full mr-1" />Tailwind CSS</span>
                                <span>90%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                                <div className="bg-teal-400 h-2.5 rounded-full w-[90%]" ></div>
                            </div>
                        </li>
                        <li className='text-sm'>
                            <div className="flex justify-between text-sm dark:text-white mb-1">
                                <span><img src={imageBootstrap} alt="Bootstrap" className="inline-block w-5 h-4 rounded-full mr-1" />Bootstrap</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                                <div className="bg-purple-500 h-2.5 rounded-full w-[85%]" ></div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className='my-5 w-full h-max hover:scale-110 hover:border-blue-400 hover:border-2  shadow-white md:w-[30%] md:mx-5  dark:bg-slate-800 rounded justify-center items-center lg:text-2xl font-bold p-5 '>
                    <h2 className='text-xl font-bold text-center text-blue-400'><span className='dark:text-white'>02.</span>Web backend</h2>
                    <ul className='mt-2'>
                        <li className='text-sm flex-row mb-10'>
                            <span >
                                <img src={imagePhp} alt="" className="inline-block w-5 h-4 rounded-full mr-1" />PHP
                            </span>
                            <span className='inline-block float-right'>
                                <SkillCircle label="" percentage={80} color="#4F5B93" className="inline-block" />
                            </span>
                        </li>
                        <li className='text-sm flex-row mb-10'>
                            <span>
                                <img src={imageLaravel} alt="" className="inline-block w-5 h-4 rounded-full mr-1" />Laravel
                            </span>
                            <span className='inline-block float-right'>
                                <SkillCircle label="" percentage={70} color="#F05340" className="inline-block" />
                            </span>
                        </li>

                        <li className='text-sm flex-row'>
                            <span>
                                <img src={imageSql} alt="" className="inline-block w-5 h-4 rounded-full mr-1" />SQL
                            </span>
                            <span className='inline-block float-right'>
                                <SkillCircle label="" percentage={80} color="#00758F" className="inline-block" />
                            </span>
                        </li>

                    </ul>
                </div>

                <div className='h-max my-5 w-full hover:scale-110 hover:border-blue-400 hover:border-2 shadow-white md:w-[32%] md:mx-5 sm:mr-10 h-[30vh] dark:bg-slate-800 rounded justify-center items-center lg:text-2xl font-bold p-5 '>
                    <h2 className='text-xl font-bold text-center text-blue-400'><span className='dark:text-white'>03.</span>Programmation generale</h2>
                    <ul className='list-inside mt-2 space-y-1'>
                        <li className='text-sm py-1'>➤ Python</li>
                        <li className='text-sm py-1'>➤ C</li>
                        <li className='text-sm py-1'>➤ Java</li>
                        <li className='text-sm py-1'>➤ Visual Basic</li>
                    </ul>
                </div>

                <div className='h-max my-5 w-full hover:scale-110 hover:border-blue-400 hover:border-2 shadow-white md:w-[32%] md:mx-5 sm:mr-10 dark:bg-slate-800 rounded justify-center items-center lg:text-2xl font-bold p-5 '>
                    <h2 className='text-xl font-bold text-center text-blue-400'><span className='dark:text-white'>04.</span> Modélisation & Outils</h2>
                    <ul className='list-inside mt-2 space-y-1'>
                        <li className='text-sm py-1'>➤ UML</li>
                        <li className='text-sm py-1'>➤ Merise</li>
                        <li className='text-sm py-1'>➤ MySQL</li>
                        <li className='text-sm py-1'>➤ PostgreSQL</li>
                        <li className='text-sm py-1'>➤ SQLite</li>
                        <li className='text-sm py-1'>➤ GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills