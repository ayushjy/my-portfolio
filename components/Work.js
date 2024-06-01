import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
const Work = ({ card_details}) => {

    return (
        <div className='pt-24 px-64 pb-10 max-xl:pt-8 flex flex-col max-2xl:px-48 max-lg:px-20 max-md:px-8'>
            <div className='pb-24 max-xl:hidden'>
                <div className='text-9xl font4 text-black text-center text_transparent'>&lt;Work /&gt;</div>
                <div className='text-9xl font5 text-white text-center -m-20'>Featured</div>
            </div>
            <div className='flex flex-col  pt-10'>
                <div className='text-xl font4 pb-6 text-green-400'>Some Selected Projects</div>
                <div className='w-full grid grid-cols-3 grid-rows-1 gap-3  max-lg:grid-cols-2 max-md:grid-cols-1'>

                    {card_details && card_details.map((ev) => (
                        <div key={ev.id} className='border border-gray-400 rounded-lg h-full px-5  hover:border hover:border-green-500 hover:animate-pulse cursor-pointer'>
                            <div className='border-b w-full flex justify-between items-center h-[60px]'>
                                <div className='flex gap-1'>
                                    <div className='w-4 h-4 rounded-full bg-red-500  '></div>
                                    <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                                    <div className='w-4 h-4 rounded-full bg-green-500'></div>
                                </div>
                                <div className='text-md text-white font4'>{ev.category}</div>
                            </div>
                            <div className='flex flex-col h-full py-2'>
                                <div className='text-lg text-white font4'>{ev.title}</div>
                                <div className='flex justify-between pt-1'>
                                    <div className='text-gray-400 font4 text-base'>{ev.year}</div>
                                    <div className='text-gray-400 font3 text-base flex gap-2'>
                                        <Link href={`${ev.weblink}`} target='blank'><div className=''><GoLinkExternal size={18} /></div></Link>
                                        <Link href={`${ev.gitlink}`} target='_blank'><div className=''><FiGithub size={18} /></div></Link>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 py-2'>
                                    {ev.tech.map((techItem, index) => (
                                        <div key={index}>

                                            <Image width={20} height={20} style={{
                                                        filter: techItem.color === 'black' ? 'invert(100%)' : 'none',
                                                    }}  src={techItem.pngimg} ></Image>
                                        </div>
                                    ))}
                                </div>
                                <img src={ev.image} alt="alternative-text" className='rounded-2xl py-1 w-full'/>

                                <div className='text-lg font3 text-gray-400 pt-3 max-lg:pt-1'>{ev.type}</div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex flex-col gap-3 pt-6'>
                    <div className='text-green-500 text-xl font4'>Want to see more projects?</div>
                   <Link href={"/work"}><button className='w-[128px] border-2 border-green-400 text-green-400 hover:bg-gray-700 hover:text-white hover:border-gray-700 px-4 py-4 text-xs rounded-lg font3'>VIEW ARCHIEVE</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Work;


