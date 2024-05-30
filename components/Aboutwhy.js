import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Aboutwhy = () => {
  const handleWhatsappClick = () => {
    const phoneNumber = '9608891616'; 
    const message = 'Hello from My Website!'; 

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className='px-64  flex flex-col max-2xl:px-48 max-lg:px-20 max-md:px-8'>
            <div className='pb-24 max-xl:hidden '>
                <div className='text-9xl font4 text-black text-center text_transparent'>&lt;About /&gt;</div>
                <div className='text-9xl font5 text-white text-center -m-16'>Why ME?</div>
            </div>
            <div className='w-11/12 flex flex-col justify-center pt-10'>
                <div className='text-xl font4 pb-3 text-green-400'>😎Why me?</div>               
                <div className='text-gray-400 text-2xl font1 pb-4  max-lg:text-xl'>There's nothing I enjoy more than developing good websites and webApps for Cool people. I believe that people should do things they are good at or in which their <span className='text-pink-400 font4'>Hearts ❤</span> lie. That's why I choose freelance web development as my career.</div>
                <div className='text-gray-400 text-2xl font1 pb-4  max-lg:text-xl'>I've spent many years trying to perfect what I do and while I'll never be perfect, I do my best to come close.</div>
                <div className='text-white text-2xl font4  max-lg:text-xl '>If you've got a project you'd like to work on with me just get in touch and we can get to work!</div>
            </div> 
            <div className='pt-4'>
            <button onClick={handleWhatsappClick}  className=' border-2 border-green-400 text-green-400 hover:bg-gray-700 hover:text-white hover:border-gray-700 px-4 py-3 text-xs rounded-lg font3 flex justify-center items-center'><span className='pr-2'><FaWhatsapp size={20}/></span>CONTACT ME</button>
            </div>
    </div>
  )
}

export default Aboutwhy
