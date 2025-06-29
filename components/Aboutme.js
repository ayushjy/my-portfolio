import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import FAQ from './FAQ';
import { FaYoutube } from "react-icons/fa6";
const Aboutme = () => {

    const data = [
        {
            id: 1,
            name: 'Education',
            education: 'Education',
            title: 'Chandigarh University',
            title_head: 'Computer Science Engineering | 2021 - 2025',
            desc1: 'Completed relevant coursework in data structures and algorithms, software engineering, operating systems, and database systems',
            desc2: 'Volunteered juniors to Up-skill in programming and Web Development'
        },
        {
            id: 3,
            name: 'Skills',
            frontend: [
                {
                    category: "FRONTEND",
                    images: [
                        { name: "Javascript", src: "/assets/javascript.png" },
                        { name: "React", src: "/assets/react.png" },
                        { name: "Redux", src: "/assets/redux.png" },
                        { name: "Tailwind", src: "/assets/tailwind.png" },
                        { name: "Text", src: "/assets/nextjs.png" },
                        { name: "Html", src: "/assets/html.png" },
                        { name: "Css", src: "/assets/css.png" }
                    ]
                },

            ],
            backend: [
                {
                    category: "BACKEND",
                    images: [
                        { name: "Node.js", src: "/assets/node.png" },
                        { name: "Express.js", src: "/assets/express.png" },
                        { name: "Rest API", src: "/assets/restAPI.png" },
                        { name: "Langchain.js", src: "/assets/Langchain.png"},
                    ]
                },

            ],
            other: [
                {
                    category: "OTHER",
                    images: [
                        { name: "OpenAI", src: "/assets/openai.png" },
                        { name: "Pinecone", src: "/assets/pinecone.png" },
                        { name: "Redis", src: "/assets/redis.png" },
                        { name: "S3", src: "/assets/S3.png" },
                        { name: "Ollama", src: "/assets/ollama.png" },
                        { name: "SerpAPI", src: "/assets/serpAPI.png" },
                        { name: "Github", src: "/assets/github.png" },
                        { name: "Mongodb", src: "/assets/mongo.png" },
                        { name: "Firebase", src: "/assets/firebase.png" },
                        { name: "Framer", src: "/assets/framer.png" },
                        // { name: "Vscode", src: "/assets/vscode.png" },
                        // { name: "Vercel", src: "/assets/vercel.png" },
                        // { name: "Render", src: "/assets/render.png" }
                    ]
                }
            ]

        },


        {
            id: 4,
            name: 'Achievements',
            achieve_details: [
                {
                    id: 1,
                    title: '30DC Challenge winner',
                    title_head: 'Among top 4 winners | June 2024',
                    desc1: 'Secured a prestigious top 5 ranking in an 30 Day Coding Challenge by Aryan Singh',
                    desc3: 'https://www.youtube.com/watch?v=JCUFQWefAfs',
                },
                {
                    id: 2,
                    title: 'CU Tackethon runnerup',
                    title_head: 'Top 5 among 120 participants | march 2022',
                    desc1: 'Developed Skillsphere, a web application that provides users with hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them, resulting in a win at the Hashnode Hackathon and recognition in the tech community.',
                    desc2: 'The project currently has 20+ registered users and has been praised for its innovative approach to online learning.',
                },
                // {
                //     id: 3,
                //     title: 'LinkedIn',
                //     title_head: '150+ Followers',
                //     desc1: 'Grew LinkedIn following to 150+ followers through consistent and engaging content creation, establishing myself as a thought leader in the software development community and building a strong professional network.'
                // }
            ]
        },


        {
            id: 5,
            name: 'Resume',
            resume: "/assets/Ayush_resume.pdf",
            description: 'Description for Item 2'
        },
    ];
    const [selectedItem, setSelectedItem] = useState(data[0]);
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className='pt-48 pb-24 max-md:py-8 max-xl:py-20 max-lg:py-16 px-64 flex flex-col max-lg:px-20 max-md:px-8  max-2xl:px-48'>
            <div className=' pb-24 max-xl:hidden'>
                <div className='text-9xl font4 text-black text-center text_transparent'>&lt;About /&gt;</div>
                <div className='text-9xl font5 text-white text-center -m-20'>Ayush Jyoti</div>
            </div>
            <div className='flex flex-col justify-center pt-10'>
                <div className='text-xl font4 pb-4'>
                    😎<span className='text-green-400'> About me</span>
                </div>
                <div className='text-gray-400 text-2xl font1 max-lg:text-xl'>Welcome to my portfolio!</div>
                <div className='text-gray-400 text-2xl font1 pb-6 w-5/6 max-lg:text-xl'> <span className='font4'>In Short:</span> I'm a passionate and experienced developer with a deep love for all tech things.</div>
            </div>

            <div className='text-white border border-gray-400 hover:border-green-500 flex flex-col  w-full rounded-xl max-lg:hidden'>
                <div className='flex justify-between items-center h-[60px] px-6'>
                    <div className='flex gap-1'>
                        <div className='w-4 h-4 rounded-full bg-red-500  '></div>
                        <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                        <div className='w-4 h-4 rounded-full bg-green-500'></div>
                    </div>

                    {selectedItem && (<div className='text-white text-md font4'>{selectedItem.name}</div>)}
                </div>
                <div className='text-white border-b border-gray-400'></div>

                <div className='flex'>

                    {/* sideitems - left*/}
                    <div className='flex flex-col w-1/3'>
                        {data.map((item) => (
                            <div className='flex justify-center items-center text-gray-400 text-lg font8 border-b border-r border-gray-400 py-4 cursor-pointer  hover:font-normal hover:text-white key={item.id} rounded-bl-xl' onClick={() => handleItemClick(item)}>{item.name}</div>
                        ))}
                    </div>
                    {/* right section */}
                    <div className='w-full flex flex-col px-6 py-7 gap-4'>
                        {/* {selectedItem && (<div className='text-xl font4 text-green-400'>👨‍💻 {selectedItem.name}</div>)} */}
                        {selectedItem.frontend ? selectedItem.frontend.map((item) => (<div className='text-xl font4 text-green-400'>👨‍💻 {item.category}</div>)) : <div className='text-xl font4 text-green-400'>👨‍💻 {selectedItem.name}</div>}
                        <div className=' w-full'>
                            {/* for education */}
                            {selectedItem.education && (
                                <div className='px-6 py-4 bg-gray-900 flex flex-col justify-center rounded-lg'>
                                    {selectedItem.title && (<div className='text-xl font3 text-white'>{selectedItem.title}</div>)}
                                    {selectedItem.title_head && (<div className='text-md font8 text-gray-400'>{selectedItem.title_head}</div>)}
                                    {selectedItem.desc1 && (<li className='text-md font8 text-gray-400 pt-3'>{selectedItem.desc1}</li>)}
                                    {selectedItem.desc2 && (<li className='text-md font8 text-gray-400 pt-3'>{selectedItem.desc2}</li>)}
                                    {selectedItem.desc3 && (<li className='text-md font8 text-gray-400'>{selectedItem.desc3}</li>)}
                                </div>)}
                            {/* for experience */}
                            {selectedItem.job_details && selectedItem.job_details.map((ev) => (
                                <div key={ev.id} className='bg-gray-900 flex flex-col justify-center w-full  mb-5  px-6 py-4 rounded-lg'>
                                    {ev.title && (<div className='text-xl font3 text-white pb-1'>{ev.title}</div>)}
                                    {ev.title_head && (<div className='text-md font8 text-gray-400 pb-3'>{ev.title_head}</div>)}
                                    {ev.desc1 && (<li className='text-md font8 text-gray-400 pb-1'>{ev.desc1}</li>)}
                                    {ev.desc2 && (<li className='text-md font8 text-gray-400 pb-1'>{ev.desc2}</li>)}
                                    {ev.desc3 && (<li className='text-md font8 text-gray-400 '>{ev.desc3}</li>)}
                                </div>
                            ))}

                            {/* for skills */}
                            {/* for frontend */}
                            {selectedItem.frontend && selectedItem.frontend.map((frontend) => (
                                <div className='grid grid-cols-5 w-full pb-10 gap-4'>
                                    {frontend.images.map((ev) => (
                                        <div className='h-28 rounded-lg bg-gray-800 flex flex-col justify-center items-center gap-4 hover:rotate-6 duration-150'>
                                            <div><Image src={ev.src} width={45} height={100} ></Image></div>
                                            <div className='text-white text-xs font1'>{ev.name}</div>
                                        </div>))}
                                </div>
                            ))}
                            {/* for backend */}
                            <div className='pb-10'>
                                {selectedItem.backend && (selectedItem.backend.map((ev) => (
                                    <div className='text-xl font4 pb-3 text-green-400'>👨‍💻 {ev.category}</div>
                                )))}
                                {selectedItem.backend && selectedItem.backend.map((backend) => (
                                    <div className='grid grid-cols-5 w-full gap-4'>
                                        {backend.images.map((ev) => (
                                            <div className='h-28 rounded-lg bg-gray-800 flex flex-col justify-center items-center gap-4 hover:rotate-6 duration-150'>
                                                <div><Image src={ev.src} width={45} height={100} ></Image></div>
                                                <div className='text-white text-xs font1'>{ev.name}</div>
                                            </div>))}
                                    </div>
                                ))}
                            </div>
                            {/* for other */}

                            <div>
                                {selectedItem.other && (selectedItem.other.map((ev) => (
                                    <div className='text-xl font4 pb-3 text-green-400'>👨‍💻 {ev.category}</div>
                                )))}
                                {selectedItem.other && selectedItem.other.map((other) => (
                                    <div className='grid grid-cols-5 w-full gap-4'>
                                        {other.images.map((ev) => (
                                            <div className='h-28 rounded-lg bg-gray-800 flex flex-col justify-center items-center gap-4 hover:rotate-6 duration-150'>
                                                <div><Image src={ev.src} width={45} height={100} ></Image></div>
                                                <div className='text-white text-xs font1'>{ev.name}</div>
                                            </div>))}
                                    </div>
                                ))}
                            </div>

                            {/* for achievements */}
                            {selectedItem.achieve_details &&  selectedItem.achieve_details.map((ev) => (
                                <div key={ev.id} className='bg-gray-900 flex flex-col justify-center w-full  mb-5  px-6 py-4 rounded-lg'>
                                    {ev.title && (<div className='text-xl font3 text-white pb-1'>{ev.title}</div>)}
                                    {ev.title_head && (<div className='text-md font8 text-gray-400 pb-3'>{ev.title_head}</div>)}
                                    {ev.desc1 && (<li className='text-md font8 text-gray-400 pb-1'>{ev.desc1}</li>)}
                                    {ev.desc2 && (<li className='text-md font8 text-gray-400 pb-1'>{ev.desc2}</li>)}
                                    {ev.desc3 && (<li className='text-md font8 text-gray-400  items-center '>Check out the YouTube Link <Link href={ev.desc3}><FaYoutube size={30} className='inline-block ml-1 text-red-700'/></Link></li>)}
                                </div>
                            ))}
                            {selectedItem.name === 'Resume' ? (
                                <iframe src={selectedItem.resume} width="100%" height="600px"></iframe>
                            ) : null}
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full lg:hidden">
                <FAQ data={data} />
            </div>

            <div className='flex flex-col gap-3 pt-10'>
                <div className='text-green-500 text-xl font4'>Want to know more?</div>
                <Link href={"/about"}> <button className='w-[112px] border-2 border-green-500 text-green-400 hover:bg-gray-700 hover:text-white hover:border-gray-700 px-4 py-4 text-xs rounded-lg font3'>KNOW MORE</button></Link>
            </div>
        </div>

    )
}

export default Aboutme
