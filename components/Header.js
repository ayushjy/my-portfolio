import React from 'react'
import { useState } from 'react'
import Navlink from '@/components/Navlink';
import Image from 'next/image'
import Link from 'next/link'

const Header = ({isSideiconpresent,setIsSideiconpresent}) => {    

    const [isopen , setIsopen ] = useState(false);


  const openmenubar = () =>{
          setIsopen(!isopen);
          setIsSideiconpresent(!isSideiconpresent);
  }
  const offmenubar = () =>{
          setIsopen(false)
  }

  return (
    <>
    
    <div className={`flex justify-between sticky top-0 lg:px-32 md:px-20  px-10  pt-14 bg-[#030a12] ${isopen ? 'z-50' : 'z-10'}`}>
    <div><Link href={"/"}>
      <Image src={"/assets/logo1.png"} width={52} height={100} onClick={offmenubar} ></Image></Link>
    </div>
    <div>
      <button className=' text-white font2 text-xs w-[71px] h-[48px]  border-2 border-white rounded-lg hover:border-yellow-400 hover:text-yellow-400 hover:bg-slate-800' onClick={openmenubar}>{isopen?<span>CLOSE</span>:<span>MENU</span>}</button>
    </div>
   </div>

      {
        isopen && (
          <div className='fixed w-full z-100 bg-[#030a12]'><Navlink isopen={isopen} setIsopen= {setIsopen}/></div>
        )
      }

   </>
  )
}

export default Header
