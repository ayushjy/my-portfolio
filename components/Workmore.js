import React from 'react'
import Link from 'next/link';
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

const Workmore = ({project_info}) => {
    return (
        <div className=' px-64 pb-24 max-lg:px-20 max-sm:px-6 max-md:px-10 max-2xl:px-48 flex flex-col'>
            <div className='w-full pb-24 max-xl:hidden'>
                <div className='text-9xl font4 text-black text-center text_transparent'>&lt;Work /&gt;</div>
                <div className='text-9xl font5 text-white text-center -m-20'>More Projects</div>
            </div>
            <div className='flex flex-col justify-center pt-10 pb-4'>
                <div className='text-xl font4 pb-4'>
                    😎<span className='text-green-400'> All Projects</span>
                </div>
                <div className='text-gray-400 text-2xl max-lg:text-lg max-md:text-base font1 pb-6 w-full'> A collection of front-end coding. These are a mix of freelance, contest, practice and side projects. This list also contains some project that are not completed yet.</div>
            </div>
            <div className='w-full grid grid-cols-2 grid-rows-3 gap-4 max-md:grid-cols-1'>
                {project_info.map((ev)=>(
                <div key={ev.id} className='bg-gray-900 border border-gray-400 rounded-xl h-full max-sm:px-4 px-5 hover:border hover:border-green-500'>
                    <div className='border-b w-full flex justify-between items-center h-[70px]'>
                        <div className='flex gap-1'>
                            <div className='w-4 h-4 rounded-full bg-red-500  '></div>
                            <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                            <div className='w-4 h-4 rounded-full bg-green-500'></div>
                        </div>
                        <div className='text-gray-400 font3 text-base flex gap-2'>
                            <Link href={`${ev.weblink}`} target={ev.target}><div className='cursor-pointer'><GoLinkExternal size={25} /></div></Link>
                            <Link href={`${ev.gitlink}`} target='_blank'><div className='cursor-pointer'><FiGithub size={25} /></div></Link>
                        </div>
                    </div>
                    <div className='flex flex-col h-full py-6 '>
                        <a href={ev.link} target='blank' className='text-2xl text-white font4 px-5 pb-7 lg:pb-4 hover:text-yellow-400 hover:underline'>{ev.title}</a>
                        <div className='w-11/12 flex flex-wrap  gap-3 '>
                            {ev.tech.map((tech)=>(
                            <div className='flex  justify-center items-center bg-[#030a12] text-white text-xs font7 px-3 py-1 border border-gray-400 rounded-lg'>{tech}</div>
                            ))}                            
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Workmore
