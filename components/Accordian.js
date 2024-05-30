import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Image from 'next/image';

const Accordian = ({ data }) => {
  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (item) => {
    setOpenAccordions((prevOpenAccordions) => {
      if (prevOpenAccordions.includes(item.name)) {
        // Close the accordion if it's already open
        return prevOpenAccordions.filter((name) => name !== item.name);
      } else {
        // Open the accordion if it's closed
        return [...prevOpenAccordions, item.name];
      }
    });
  };

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.name}
          className={`py-4 mb-2 ${openAccordions.includes(item.name) ? 'bg-gray-800 rounded-3xl' : 'bg-[#030a12]'}`}>
          <button onClick={() => toggleAccordion(item)} className='flex justify-between w-full'>
            <span className='text-xl font4 pb-3 px-3 text-green-400'>👨‍💻 {item.name}</span>
            {openAccordions.includes(item.name) ? (
              <span className='text-white'>
                <RiArrowDropUpLine size={30} />
              </span>
            ) : (
              <span className='text-white'>
                <RiArrowDropDownLine size={30} />
              </span>
            )}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openAccordions.includes(item.name) ? 'grid-rows-[1fr] opacity-100' : 'h-0 opacity-0'
              }`}>
            {item.education && (<div>
              <div className='text-white text-xl font3 px-8 pt-3 overflow-hidden'>{item.title}</div>
              <div className='text-white text-sm font8 px-8 pt-1 overflow-hidden'>{item.title_head}</div>
              <li className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{item.desc1}</li>
              <li className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{item.desc2}</li>
              <div className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{item.desc3}</div>
            </div>
            )}
            {item.job_details && item.job_details.map((ev) => (
              <div key={ev.id} className='py-6'>
                <div className='text-white text-xl font3 px-8 pt-3 overflow-hidden'>{ev.title}</div>
                <div className='text-white text-sm font8 px-8 pt-1 overflow-hidden'>{ev.title_head}</div>
                <li className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{ev.desc1}</li>
                <li className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{ev.desc2}</li>
                <div className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{ev.desc3}</div>
              </div>
            ))}
            {item.frontend && item.frontend.map((ev) => (
              <div key={ev.id} className='py-6'>
                <div className='text-xl font4 pb-3 text-green-400'>👨‍💻 {ev.category}</div>
                <div className='flex flex-wrap justify-center w-full pb-10 gap-4'>
                  {ev.images.map((ev) => (
                    <div className='h-28 px-7 rounded-lg flex flex-col justify-center items-center gap-4 hover:rotate-6 duration-150'>
                      <div><Image src={ev.src} width={45} height={100} ></Image></div>
                      <div className='text-white text-xs font1'>{ev.name}</div>
                    </div>))}
                </div>
              </div>
            ))}
            {item.other && item.other.map((ev) => (
              <div key={ev.id} className='py-6'>
                <div className='text-xl font4 pb-3 text-green-400'>👨‍💻 {ev.category}</div>
                <div className='flex flex-wrap justify-center w-full pb-10 gap-4'>
                  {ev.images.map((ev) => (
                    <div className='h-28 px-7 rounded-lg  flex flex-col justify-center items-center gap-4 hover:rotate-6 duration-150'>
                      <div><Image src={ev.src} width={45} height={100} ></Image></div>
                      <div className='text-white text-xs font1'>{ev.name}</div>
                    </div>))}
                </div>
              </div>
            ))}

            


            {item.achieve_details && item.achieve_details.map((ev) => (
              <div key={ev.id} className='py-6'>
                <div className='text-white text-xl font3 px-8 pt-3 overflow-hidden'>{ev.title}</div>
                <div className='text-white text-sm font8 px-8 pt-1 overflow-hidden'>{ev.title_head}</div>
                <li className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{ev.desc1}</li>
                {ev.desc2 && (<li className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{ev.desc2}</li>)}
                <div className='text-white text-sm font8 px-8 pt-3 overflow-hidden'>{ev.desc3}</div>
              </div>
            ))}


          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
