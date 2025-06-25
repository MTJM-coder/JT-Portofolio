import React from 'react'
import Image from '../assets/image.jpg' // Assurez-vous que le chemin est correct

const About = () => {
    return (
        <div id='about' className='flex flex-col md:flex-row'>
            <div className='h-full w-full md:w-3/4 p-10 flex flex-col justify-center'>
                <h2 className="text-3xl font-bold mb-4  pb-2 text-blue-500">À <span className='border-b-2 pb-3'>propos</span> de moi</h2>
                <p className="max-w-3xl text-lg leading-7">
                    Je m'appelle <strong>Jaudel Tiogning</strong>, développeur Full-stack passionné par la création d'applications web modernes, performantes et utiles.
                    Depuis mes débuts, je prends plaisir à transformer des idées en solutions digitales concrètes, en alliant logique, design et performance.
                    <br /><br />
                    Je suis une personne curieuse, rigoureuse et toujours motivée à apprendre de nouvelles choses. J'aime relever des défis techniques,
                    collaborer en équipe, et proposer des expériences utilisateur fluides et intuitives.
                    <br /><br />
                    En dehors du code, je suis un passionné de sport, de mathématiques, de jeux de logique, et bien sûr... de football ⚽ !
                    Ces activités m'aident à garder l'esprit vif, créatif, et structuré — des qualités que je retrouve aussi dans le développement web.
                    <br /><br />
                    Ce portfolio est un aperçu de mon univers. N'hésite pas à me contacter si tu veux échanger ou collaborer sur un projet.
                </p>
            </div>
            <div className=' w-[300px] md:w-[500px] h-[300px] p-2 flex justify-center items-center  md:mr-[100px] md:mt-[150px] rounded'>
                <img
                    src={Image}
                    alt="Mon image"
                    className="w-full h-full rounded object-cover sm:ml-20"
                />
            </div>

        </div>
    )
}

export default About