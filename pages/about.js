import React from 'react'
import Toolbox from '@/components/Toolbox'
import Aboutmore from '@/components/Aboutmore'
import Aboutways from '@/components/Aboutways';
import Aboutwhy from '@/components/Aboutwhy';
const about = ({tools}) => {
  return (<>
    <div className='h-full w-full pb-28 bg-[#030a12]'>
        <Aboutmore/>
        <Toolbox tools={tools}/>
        <Aboutways/>
        <Aboutwhy/>
    </div>
    </>
  )
}

export default about

export async function getStaticProps(){
  const {tools} = await import('/data/data.json');
  return {
    props:{
      tools:tools ,
    },
  };
}