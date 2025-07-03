import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import { faArrowRight, faArrowUpRightFromSquare, faComputer, faDownload, faEnvelope, faMobileAndroid, faPen, faPenFancy, faPhone, faSquareArrowUpRight, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Skills() {

    const [hasTriggered, setHasTriggered] = useState(false);

    const handleInView = (inView) => {
        if (inView) {
            setHasTriggered(true);
        }

        console.log(hasTriggered)
    };
    return (
        <div className='bg-black mt-20'>

            <div>
                <h1 className='text-white text-[30px] font-normal pb-2 text-center '> <span className="text-purple-500">My</span>Skills</h1>            </div>


            <div className='container flex flex-col'>
                <InView onChange={(inView) => handleInView(inView)}>
                    <div className="mt-[150px] flex flex-wrap gap-4 ">
                        <div className="bg-[#171717] w-[400px] h-[200px] rounded-lg shadow-lg container  animate-[moveHeroText_1s]">
                            <FontAwesomeIcon icon={faComputer} className="text-white text-xl bg-purple-600 p-2 rounded-full mt-3" />
                            <p className="text-white font-normal text-1xl text-left  pt-3">Frontend Development</p>
                            <div className='mt-4 flex gap-4'>
                                <img src='react.png' width="30px" />
                                <img src='javascript.png' width="30px" />
                                <img src='redux.png' width="30px" />
                                <img src='bootstrap.png' width="30px" />
                                <img src='tailwindcss.png' width="30px" />
                                <img src='reactnative.png' width="30px" />
                            </div>
                        </div>
                        <div className="bg-[#171717] w-[400px] h-[200px] rounded-lg shadow-lg container animate-[moveHeroText_1s]">
                            <FontAwesomeIcon icon={faMobileAndroid} className="text-white text-xl bg-purple-600 p-2 rounded-full mt-3" />
                            <p className="text-white font-normal text-1xl text-left  pt-3">Backend Development</p>
                            <div className='mt-4 flex gap-4'>
                                <img src='nodejs.png' width="30px" />
                                <img src='mongodb.png' width="30px" />
                                <img src='mysql.png' width="30px" />
                                <img src='bootstrap.png' width="30px" />
                            </div>
                        </div>
                        <div className="bg-[#171717] w-[400px] h-[200px] rounded-lg shadow-lg container animate-[moveHeroText_1s]">
                            <FontAwesomeIcon icon={faPenFancy} className="text-white text-xl bg-purple-600 p-2 rounded-full mt-3" />
                            <p className="text-white font-normal text-1xl text-left  pt-3">Other Tools</p>
                            <div className='mt-4 flex gap-4'>
                                <img src='git.png' width="30px" />
                                <img src='github.png' width="30px" />
                            </div>
                        </div>

                    </div>
                    {/* <div className={`flex flex-wrap w-full   ${hasTriggered ? "animate-[moveSkillsSection_3s]" : "animate-none"
                        } `}>
                        <p className='text-white text-2xl'>Frontend Technologies</p>
                        <div className='flex'>

                            <div className=' flex items-center flex-col justify-center p-4'>
                                <div className='bg-neutral-950 p-4 w-[200px] rounded-lg'>
                                    <div className='flex items-center justify-center gap-4  '>
                                        <img src='react.png' width="50px" />
                                        <p className='text-white text-[20px]'>ReactJS</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex items-center flex-col justify-center p-4'>
                                <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                    <div className='flex items-center justify-center gap-4  '>
                                        <img src='javascript.png' width="50px" />
                                        <p className='text-white text-[20px]'>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex items-center flex-col justify-center p-4'>
                                <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                    <div className='flex items-center justify-center gap-4  '>
                                        <img src='tailwindcss.png' width="50px" />
                                        <p className='text-white text-[20px]'>Tailwind </p>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex items-center flex-col justify-center p-4'>
                                <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                    <div className='flex items-center justify-center gap-4  '>
                                        <img src='bootstrap.png' width="50px" />
                                        <p className='text-white text-[20px]'>Bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex items-center flex-col justify-center p-4'>
                                <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                    <div className='flex items-center justify-center gap-4  '>
                                        <img src='redux.png' width="50px" />
                                        <p className='text-white text-[20px]'>Redux</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex items-center flex-col justify-center p-4'>
                                <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                    <div className='flex items-center justify-center gap-4  '>
                                        <img src='reactnative.png' width="50px" />
                                        <p className='text-white text-[20px]'>React Native</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text-white text-2xl'>Backend Technologies</p>


                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='nodejs.png' width="50px" />
                                    <p className='text-white text-[20px]'>Node </p>
                                </div>
                            </div>
                        </div>

                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='mongodb.png' width="50px" />
                                    <p className='text-white text-[20px]'>MongoDB</p>
                                </div>
                            </div>
                        </div>

                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='git.png' width="50px" />
                                    <p className='text-white text-[20px]'>Git</p>
                                </div>
                            </div>
                        </div>

                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='figma.png' width="50px" />
                                    <p className='text-white text-[20px]'>Figma</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='github.png' width="50px" />
                                    <p className='text-white text-[20px]'>Github</p>
                                </div>
                            </div>
                        </div>

                        <div className=' flex items-center flex-col justify-center p-4'>
                            <div className='bg-neutral-950 p-4 w-[200px] rounded-lg '>
                                <div className='flex items-center justify-center gap-4  '>
                                    <img src='mysql.png' width="50px" />
                                    <p className='text-white text-[20px]'>My SQL</p>
                                </div>
                            </div>
                        </div>

                    </div> */}

                </InView>
            </div>

        </div>
    )
}

export default Skills