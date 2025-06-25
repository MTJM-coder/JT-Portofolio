import React from 'react'
import casino from '../assets/casino.png'
import mageMF from '../assets/mf.png'
import Bridge from '../assets/bridge.png'
import lc from '../assets/lc.png'
import wbshop from '../assets/wbshop.png'
import ghub from '../assets/github.png'

const Project = () => {
    return (
        <div id='projects' className='p-10'>
            <h2 className='font-bold text-3xl text-blue-400 mb-2'>
                Pr<span className='border-b-2 dark:border-white'>oje</span>ts
            </h2>

            <div className='flex flex-col lg:flex-row flex-wrap gap-6 mt-10'>
                {/* Projet 1 */}
                <div className='dark:bg-slate-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-[48%] lg:w-[30%] p-4'>
                    <div className='w-full h-48 overflow-hidden rounded-md mb-4'>
                        <img src={casino} alt="Projet Casino" className='w-full h-full object-cover' />
                    </div>
                    <h3 className='text-xl font-semibold text-blue-400 mb-2'>Game Casino</h3>
                    <p className='text-sm dark:text-gray-300'>
                        Une application de jeux de casino consistant à miser une somme, choisir un nombre,
                        puis faire tourner la roue pour déterminer le résultat.
                    </p>
                    <p className='inline-block px-5 rounded dark:bg-slate-600 mt-5 text-blue-400'>Python</p>
                     <div className='text-end'>
                        <a href=""><button className='px-5 py-2 rounded bg-blue-600'>Voir </button></a>
                    </div>
                </div>

                <div className='dark:bg-slate-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-[48%] lg:w-[30%] p-4'>
                    <div className='w-full h-48 overflow-hidden rounded-md mb-4'>
                        <img src={mageMF} alt="Projet Casino" className='w-full h-full object-cover' />
                    </div>
                    <h3 className='text-xl font-semibold text-blue-400 mb-2 '>MeetFlirt</h3>
                    <p className='text-sm dark:text-gray-300'>
                        Une application web de rencontre qui permet aux utilisateurs de créer des profils,
                        de discuter et de planifier des rencontres.
                    </p>
                    
                    <div className='flex flex-wrap gap-2 mt-3'>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>HTML</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>Bootstrap</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>JavaScript</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>PHP</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>MySQL</p>
                    </div>
                     <div className='text-end'>
                        <a href=""><button className='px-5 py-2 rounded bg-blue-600'>Voir </button></a>
                    </div>
                </div>
                 <div className='dark:bg-slate-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-[48%] lg:w-[30%] p-4'>
                    <div className='w-full h-48 overflow-hidden rounded-md mb-4'>
                        <img src={Bridge} alt="Projet Casino" className='w-full h-full object-cover' />
                    </div>
                    <h3 className='text-xl font-semibold text-blue-400 mb-2 '>BridgeDrive</h3>
                    <p className='text-sm dark:text-gray-300'>
                        Une application web de reservation des billets de bus qui permet aux voyageurs du cameroun de rechercher des itinéraires,
                        de réserver des sièges et de payer en ligne. Et aux agences de voyage de gérer leurs itinéraires et réservations.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>HTML</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>CSS</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>JavaScript</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>Laravel</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>MySQL</p>
                    </div>
                    <div className='text-end'>
                        <a href="https://github.com/MTJM-coder/-BridgeDrive"><button className='px-5 py-2 rounded bg-blue-600'>Voir <img src={ghub} alt="GitHub" className='inline-block ml-2 h-[30px] w-[30px]' /> </button></a>
                    </div>
                </div>

                 <div className='dark:bg-slate-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-[48%] lg:w-[30%] p-4'>
                    <div className='w-full h-48 overflow-hidden rounded-md mb-4'>
                        <img src={wbshop} alt="Projet Casino" className='w-full h-full object-cover' />
                    </div>
                    <h3 className='text-xl font-semibold text-blue-400 mb-2'>WB-shop</h3>
                    <p className='text-sm dark:text-gray-300'>
                        Une application web de vente des pieces automobiles en ligne qui permet aux utilisateurs de parcourir et d'acheter des produits.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>HTML</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>Bootstrap</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>JavaScript</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>PHP</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>MySQL</p>
                    </div>
                     <div className='text-end'>
                        <a href=""><button className='px-5 py-2 rounded dark:bg-blue-600'>Voir </button></a>
                    </div>
                </div>

                 <div className='dark:bg-slate-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-[48%] lg:w-[30%] p-4'>
                     <div className='w-full h-48 overflow-hidden rounded-md mb-4'>
                        <img src={lc} alt="Projet Casino" className='w-full h-full object-cover' />
                    </div>
                    <h3 className='text-xl font-semibold text-blue-400 mb-2'>Site vitrine</h3>
                    <p className='text-sm dark:text-gray-300'>
                        Un site vitrine simple qui présente les services d'une entreprise evenementielle.
                        Il permet aux visiteurs de découvrir les offres et de contacter l'entreprise.
                        Il est conçu pour être responsive et facile à naviguer.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>HTML</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>CSS</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600  text-blue-400 text-sm'>JavaScript</p>

                    </div>
                     <div className='text-end'>
                        <a href="https://github.com/MTJM-coder/SiteVitrine_Laura_Compagnie_Sarl"><button className='px-5 py-2 rounded bg-blue-600'>Voir <img src={ghub} alt="GitHub" className='inline-block ml-2 h-[30px] w-[30px]' /> </button></a>
                    </div>
                </div>
                {/* pour mon portfolio */}
                <div className='dark:bg-slate-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-[48%] lg:w-[30%] p-4'>
                    <div className='w-full h-48 overflow-hidden rounded-md mb-4 text-center'>
                        <p  className='w-full h-full text-[100px] text-blue-500'>🖥️</p>
                    </div>
                    <h3 className='text-xl font-semibold text-blue-400 mb-2'>Mon Portfolio</h3>
                    <p className='text-sm dark:text-gray-300'>
                        Un portfolio simple qui présente mes projets et mes compétences en développement web.
                        Il est conçu pour être responsive et facile à naviguer.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600 text-blue-400 text-sm'>React.js</p>
                        <p className='inline-block px-4 py-1 rounded dark:bg-slate-600 text-blue-400 text-sm'>Tailwind CSS</p>


                    </div>
                     <div className='text-end'>
                        <a href=""><button className='px-5 py-2 rounded bg-blue-600'>Voir <img src={ghub} alt="GitHub" className='inline-block ml-2 h-[30px] w-[30px]' /> </button></a>
                    </div>


                </div>
               

            </div>
        </div>

    )
}

export default Project