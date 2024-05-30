import React from 'react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sideicons from '@/components/Sideicons'
const Layout = ({children }) => {

      const [isSideiconpresent , setIsSideiconpresent] = useState(true);

  return (
    <div className='bg-[#030a12]'>
      <Header isSideiconpresent={isSideiconpresent} setIsSideiconpresent={setIsSideiconpresent}/>
      {children}
      <Footer/>
      <Sideicons isSideiconpresent={isSideiconpresent} setIsSideiconpresent={setIsSideiconpresent}/>    
    </div>
  )
}

export default Layout
