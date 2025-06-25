import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-mx dark:bg-slate-800 dark:text-white flex items-center justify-center py-5'>
        <div className='text-sm md:text-xl text-center '>
            <p className=' mt-5 md:mb-5'>Designé et développé avec passion par <span className='text-blue-400 font-semibold font-serif'>Jaudel Tiogning</span></p>
             <p className='mb-15'><span className='text-blue-400 font-semibold font-serif'>&copy;</span> 2025 Mon Portfolio. Tous droits réservés.</p>
        </div>
    </div>
  )
}

export default Footer