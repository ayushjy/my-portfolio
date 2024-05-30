import React from 'react'

const Aboutways = () => {
  return (
    <div className='px-64 pt-36 pb-48 flex flex-col max-2xl:px-48 max-lg:px-20 max-md:px-8'>
            <div className='pb-24 max-xl:hidden'>
                <div className='text-9xl font4 text-black text-center text_transparent'>&lt;About /&gt;</div>
                <div className='text-8xl font5 text-white text-center -m-16'>Ways I can help you</div>
            </div>
            <div className='w-11/12'>
            <div className='flex flex-col justify-center pt-10'>
                <div className='text-xl font4 pb-3 text-green-400'>1. Want cool website?</div>               
                <div className='text-gray-400 text-2xl font1  max-lg:text-xl'>Okay, I can help you by designing, building, and hosting a beautiful site that'll grow your business.</div>
            </div>
            <div className='flex flex-col justify-center pt-10'>
                <div className='text-xl font4 pb-3 text-green-400'>2. Want to convert your idea into reality?</div>               
                <div className='text-gray-400 text-2xl font1  max-lg:text-xl'>Got a next million dollor idea, Well, I'm here to help you in converting that idea to reality by my developement skills. I provide a powerful Web Application that fits your exact needs and can scale to millions.</div>
            </div>
            <div className='flex flex-col justify-center pt-10'>
                <div className='text-xl font4 pb-3 text-green-400'>3. Want to sell online?</div>               
                <div className='text-gray-400 text-2xl font1  max-lg:text-xl'>Cool, that is why I'm here to help you set up an e-commerce store that looks amazing, fast and makes you money.</div>
            </div>
            </div>
    </div>
  )
}

export default Aboutways
