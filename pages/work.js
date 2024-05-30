import Workmore from '@/components/Workmore'
import React from 'react'

const work = ({project_info}) => {
  return (
    <div className='pt-12 '>
      <Workmore project_info={project_info}/>
    </div>
  )
}
export default work

export async function getStaticProps(){
  const {project_info} = await import('/data/data.json');
  return {
    props:{
      project_info:project_info ,
    },
  };
}


