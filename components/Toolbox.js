import Image from 'next/image';
import React from 'react'
import { GiCrossedSwords } from "react-icons/gi";
const Toolbox = ({tools}) => {
  return (
    <div className='px-64 max-2xl:px-48 max-lg:px-20 max-md:px-8 pt-36 pb-10 flex flex-col'>
            <div className=' pb-16 max-xl:hidden '>
                <div className='text-9xl font4 text-black text-center text_transparent'>&lt;Toolbox /&gt;</div>
                <div className='text-9xl font5 text-white  text-center -mt-[70px] flex items-center gap-4'><GiCrossedSwords size={100}/>My Weapons</div>
            </div>
            <div className='flex flex-col '>
                {tools.map((ev)=>( 
                    <div key={ev.category}>
                <div className='text-xl font4 pb-3 text-green-400'>👨‍💻 {ev.category}</div>
                <div className='grid grid-cols-8 w-full gap-4 pb-10  max-xl:flex  max-xl:flex-wrap'>
                    {ev.images.map((skills)=>(
                  <div className='h-28 max-md:h-24 px-8 max-md:px-7 rounded-lg bg-gray-800 flex flex-col justify-center items-center gap-4 hover:rotate-6 duration-150'>
                      <div><Image src={skills.src} width={42} height={100} ></Image></div>
                      <div className='text-white text-xs font1 uppercase'>{skills.name}</div>
                  </div>  ))}                                                
                </div>
                </div>  
                ))}            
            </div> 
    </div>
  )
}

export default Toolbox