import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import { faArrowRight, faArrowUpRightFromSquare, faComputer, faDownload, faEnvelope, faMobileAndroid, faPen, faPenFancy, faPhone, faServer, faSquareArrowUpRight, faTools, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
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
        <div className='bg-black mt-20 container'>

            <div>
                <h1 className='text-white text-[30px] font-normal pb-2 text-left max-md:text-center '> <span className="text-purple-500">My</span>Skills</h1>            </div>


            <div id='skills' className='container flex flex-col'>
                <InView onChange={(inView) => handleInView(inView)}>
                    <div className="mt-[50px] flex flex-wrap gap-4 ">
                        <div className="bg-[#171717] w-[400px] h-[200px] rounded-lg shadow-lg container  animate-[moveHeroText_1s]">
                            <FontAwesomeIcon icon={faComputer} className="text-white text-xl bg-purple-600 p-2 rounded-full mt-3 w-[25px] flex" />
                            <p className="text-white font-normal text-1xl text-left  pt-3">Frontend Development</p>
                            <div className='mt-4 flex gap-4'>
                                <img alt='reactIcon' src='react.png' width="30px" />
                                <img alt='javasciptIcon' src='javascript.png' width="30px" />
                                <img alt='reduxIcon' src='redux.png' width="30px" />
                                <img alt='bootstrapIcon' src='bootstrap.png' width="30px" />
                                <img alt='tailwindcssIcon' src='tailwindcss.png' width="30px" />
                            </div>
                        </div>
                        <div className="bg-[#171717] w-[400px] h-[200px] rounded-lg shadow-lg container animate-[moveHeroText_1s]">
                            <FontAwesomeIcon icon={faServer} className="text-white text-xl bg-purple-600 p-2 rounded-full mt-3 w-[25px] flex" />
                            <p className="text-white font-normal text-1xl text-left  pt-3">Backend Development</p>
                            <div className='mt-4 flex gap-4'>
                                <img alt='nodejsIcon' src='nodejs.png' width="30px" />
                                <img alt='mongodbIcon' src='mongodb.png' width="30px" />
                                <img alt='mysqlIcon' src='mysql.png' width="30px" />
                            </div>
                        </div>
                        <div className="bg-[#171717] w-[400px] h-[200px] rounded-lg shadow-lg container animate-[moveHeroText_1s]">
                            <FontAwesomeIcon icon={faTools} className="text-white text-xl bg-purple-600 p-2 rounded-full mt-3 w-[25px] flex" />
                            <p className="text-white font-normal text-1xl text-left  pt-3">Other Tools</p>
                            <div className='mt-4 flex gap-4'>
                                <img alt='gitIcon' src='gitImage.png' width="30px" />
                                <img alt='gitHubIcon' src='gitHubImage.png' width="30px" />
                                <img alt='vsCodeIcon' src='vsCodeImage.png' width="30px" />
                            </div>
                        </div>

                    </div>


                </InView>
            </div>

        </div>
    )
}

export default Skills