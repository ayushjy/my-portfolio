import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Aboutmore = () => {
    const handleWhatsappClick = () => {
        const phoneNumber = '9608891616'; 
        const message = 'Hello from My Website!'; 
    
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
      };

    return (
        <div className='py-8 max-lg:pb-4 px-52 max-2xl:px-48 max-lg:px-20 max-md:px-8 flex flex-col'>
            <div className=' pb-8 max-xl:hidden'>
                <div className='text-9xl font4 text-black text-center text_transparent'>&lt;About /&gt;</div>
                <div className='text-9xl font5 text-white text-center -mt-20'>Ayush Jyoti</div>
            </div>
            <div className='w-11/12 flex flex-col justify-center pt-6'>
                <div className='text-xl font4 pb-4'>
                    😎<span className='text-green-400'> About me</span>
                </div>
                <div className='text-gray-400 text-2xl max-lg:text-xl font1 pb-5'>I am a Full-stack creative developer based in Biharsharif, India. I am a Computer Science graduated from Chandigarh University and also did some coursework in Designing and Visual Arts.</div>
                <div className='text-gray-400 text-2xl max-lg:text-xl font1 pb-5'> I enjoy using my skill-set to empower people to accomplish their goals. My development stack is focused on converting ideas into sites & apps that work. I create lighting fast WebApps and Websites using <span className='text-green-400 font4'>MERN</span> Stack with the help of NextJS.</div>
            </div>
            <div>
                <div className='text-lg font4 text-yellow-400 pb-3'>Want to Chat?</div>
                <button onClick={handleWhatsappClick} className=' border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-400 hover:text-white px-4 py-3 text-xs rounded-lg font3 flex justify-center items-center'><span className='pr-2'><FaWhatsapp size={20} /></span>CONTACT ME</button>
            </div>
        </div>
    )
}

export default Aboutmore
