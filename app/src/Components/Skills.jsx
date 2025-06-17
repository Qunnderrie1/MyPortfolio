import React, { useState } from 'react'
import Divider from './Divider'
import { InView } from 'react-intersection-observer';

function Skills() {

    const [hasTriggered, setHasTriggered] = useState(false);

    const handleInView = (inView) => {
        if (inView) {
            setHasTriggered(true);
        }

        console.log(hasTriggered)
    };
    return (
        <div className='bg-black'>
            <Divider />
            <div>
                <h1 className='text-white text-[30px] font-light pb-2 text-center'>Professional Skills</h1>
                <p className='text-white text-center text-[24px] font-semibold mb-[100px]'>Top Skills</p>
            </div>


            <div className='container flex flex-col'>
                <InView onChange={(inView) => handleInView(inView)}>
                    <div className={`flex flex-wrap w-full justify-center  ${hasTriggered ? "animate-[moveSkillsSection_3s]" : "animate-none"
                        } `}>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg'>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='react.png' width="50px" alt="ReactJS" />
                                    <p className='text-white text-[20px]'>ReactJS</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='nodejs.png' width="50px" alt="Node.js"/>
                                    <p className='text-white text-[20px]'>Node.js</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='javascript.png' width="50px" alt="JavaScript"/>
                                    <p className='text-white text-[20px]'>JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='mongodb.png' width="50px" alt="MongoDB" />
                                    <p className='text-white text-[20px]'>MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='tailwindcss.png' width="50px" alt="Tailwind CSS" />
                                    <p className='text-white text-[20px]'>Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='git.png' width="50px" alt="git" />
                                    <p className='text-white text-[20px]'>Git</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='bootstrap.png' width="50px" alt="Bootstrap" />
                                    <p className='text-white text-[20px]'>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='figma.png' width="50px" alt="Figma" />
                                    <p className='text-white text-[20px]'>Figma</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='github.png' width="50px" alt="GitHub" />
                                    <p className='text-white text-[20px]'>Github</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='redux.png' width="50px" alt="Redux" />
                                    <p className='text-white text-[20px]'>Redux</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='mysql.png' width="50px" alt="MySQL" />
                                    <p className='text-white text-[20px]'>MySQL</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='reactnative.png' width="50px" alt="React Native" />
                                    <p className='text-white text-[20px]'>React Native</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </InView>
            </div>

        </div>
    )
}

export default Skills