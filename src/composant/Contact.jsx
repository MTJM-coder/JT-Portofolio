import React from 'react'
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
    return (
      <div id='contact' className='w-full h-full p-5'>
  <h2 className='text-3xl text-blue-400 font-bold mb-10'>
    C<span className='border-b-2 border-white'>ontac</span>t
  </h2>

  <div className='flex flex-col md:flex-row gap-6'>

    {/* Formulaire de contact */}
    <div className='w-full md:w-[50%] dark:bg-slate-800 rounded-lg p-5 shadow-md'>
      <h3 className='text-2xl font-semibold text-blue-400 mb-6 text-center'>Laissez un message</h3>
      <form className='space-y-4' action="https://formspree.io/f/xpwroroy" method="POST">
        <div>
          <label htmlFor="email" className='block mb-1 dark:text-white'>Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='exemple@gmail.com'
            className='w-full h-10 rounded px-3 outline-none  text-black'
          />
        </div>
        <div>
          <label htmlFor="message" className='block mb-1 dark:text-white'>Message :</label>
          <textarea
            id="message"
            name="message"
            placeholder='Votre message...'
            className='w-full h-28 rounded px-3 py-2 outline-none  text-black resize-none'
          ></textarea>
        </div>
        <button className='w-full bg-blue-600 dark:text-white font-semibold py-2 rounded hover:bg-blue-700 transition'>
          Envoyer
        </button>
      </form>
    </div>

    {/* Infos de contact */}
    <div className='w-full md:w-[50%] rounded-lg p-5 shadow-md mt-10'>
      <h3 className='text-2xl font-semibold text-blue-400 mb-6 text-center'>Contactez-moi</h3>
      <p className='dark:text-white mb-6 leading-relaxed'>
  Vous avez une question, une proposition ou simplement envie d’échanger ? N’hésitez pas à me contacter par e-mail, sur les réseaux sociaux ou directement par téléphone via les liens ci-dessous.
</p>

      <div className=" w-full flex flex-wrap items-center gap-5 dark:text-white text-3xl justify-center   md:justify-start">
        <a href="https://github.com/MTJM-coder" target="_blank" rel="noopener noreferrer">
          <Github className="hover:text-blue-400 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/rotorxp2.0?igsh=ZXpqcmRjb21tajhz&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <Instagram className="hover:text-pink-500 cursor-pointer" />
        </a>
        <a href="https://wa.me/+237650090589" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-600 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/jaudel-tiogning-873ba12a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <Linkedin className="hover:text-blue-500 cursor-pointer" />
        </a>
        <a href="mailto:jaudelmerlando@gmail.com">
          <Mail className="hover:text-red-400 cursor-pointer" />
        </a>
        <a href="tel:+237650090589">
          <Phone className="hover:text-green-500 cursor-pointer" />
        </a>
      </div>
    </div>

  </div>
</div>

    )
}

export default Contact