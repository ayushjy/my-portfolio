import React from 'react';
import Aboutme from '@/components/Aboutme';
import Aboutways from '@/components/Aboutways';
import Aboutwhy from '@/components/Aboutwhy';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import { FaWhatsapp } from "react-icons/fa";
const index = ({card_details}) => {
    
  const handleWhatsappClick = () => {
    const phoneNumber = '9608891616'; 
    const message = 'Hello from My Website!'; 

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };


  return (
    <>
    
    
    <div className=' h-full bg-[#030a12] overflow-x-hidden'>
      <div className='flex flex-col justify-center px-64 py-20 max-2xl:px-48 max-lg:px-20 max-md:px-8'>
      <div className='text-xl font4 pb-5'>
          👋<span className='text-green-400'> Hi,I am</span> 
      </div>
      <div className='text-white text-8xl font5 pb-6 max-lg:text-6xl'>Ayush Jyoti</div>
      <div className='text-gray-400 text-5xl font4 pb-6 max-lg:text-3xl'>I speak in <span className='text-yellow-400'>&lt;code /&gt;</span> so you don't have to</div>
      <div className='text-gray-400 text-2xl font2 pb-6 w-2/3 max-lg:text-base'>I'm your friendly neighborhood <span className='font4'>Front-end Developer.</span> Helping people turn their ideas into sites & apps that work.</div>
      <div className='flex gap-2 max-sm:flex-col'>
        <button onClick={handleWhatsappClick} className=' border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-400 hover:text-white px-4 py-3 text-xs rounded-lg font3 flex justify-center items-center max-sm:w-36 max-sm:flex-wrap'><span className='pr-2'><FaWhatsapp size={20}/></span>CONTACT ME</button>
        <a href="#work"><button className=' border-2 border-green-400 text-green-400 hover:bg-gray-700 hover:text-white hover:border-gray-700 px-4 py-4 text-xs rounded-lg font3 '>CHECTOUT MY WORK</button></a>
      </div>
      </div>
      <Aboutme/>
      <div id='work'><Work card_details={card_details}/></div>     
      <Aboutways/>
      <Aboutwhy/>
      <Contact/>
    </div>

    
    </>
  )
}

export default index;

export async function  getStaticProps(){
  const {card_details} = await import('/data/data.json');
  return {
    props:{
      card_details:card_details,
    },
  };
} 
