import React, { useState } from 'react'
import LineGradient from '../features/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import Skills from '../features/Skills'


const MySkills = ()=>  {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
      };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
      };

    return (
        <section id='skills' className="pt-10 pb-24">
            {/* Header & Image section */}
            <div className=' md:justify-between md:gap-16 mt-32 items-center'>
                <motion.div
                  className='md:w-full items-center'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                    <p className='font-playfair font-semibold text-4xl mb-5 text-center'>
                        MY <span className="text-red">SKILLS</span>
                    </p>

                    <div className="flex justify-center mt-5">
                       <LineGradient width="w-1/4" />
                    </div>
                    


                    <div className='grid grid-cols-4 md:grid-cols-5 gap-y-20 gap-5 pt-20 '>
                    <motion.div className='relative'>
                        <img
                        alt='react'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                        className='h-20 w-20 '
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                          
                        />
                            
                        {isHovered && (
                            <div className="absolute pl-4 pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>React</span>
                            </div>
                        )}
                       

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='javascript'
                        //src='https://www.training-dev.fr/Img/Category/Js.png'
                        src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
                        className='h-20 w-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />

       
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>JavaScript</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='html'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'
                        className='h-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md justify-center font-playfair'>HTML</span>
                            </div>
                        )}


                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='css'
                        //src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'
                        src='https://cdn.worldvectorlogo.com/logos/css-3.svg'
                        className='h-20 w-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />

                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>CSS</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='node'
                        src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                        className='h-20 w-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Node JS</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='typescript'
                        src='https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png'
                        className='h-20 items-center'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>TypeScript</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='next js'
                        src='https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp'
                        className='h-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Next JS</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='tailwind'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
                        className='h-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Tailwind</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='redux'
                        src='https://miro.medium.com/v2/resize:fit:400/1*0nHtg7jz-cd49KIb-Za8lg.png'
                        className='h-20 w-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Redux</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='mongo db'
                        src='https://www.tutorialsteacher.com/Content/images/home/mongodb.svg'
                        className='h-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Mongo DB</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='threejs'
                        src='https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png'
                        className='h-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Three JS</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='framer motion'
                        src='https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png'
                        className='h-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Framer Motion</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='java'
                        src='https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png'
                        className='h-20 w-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Java</span>
                            </div>
                        )}

                    </motion.div>

                    <motion.div className='relative'>
                        <img
                        alt='python'
                        src='https://static-00.iconduck.com/assets.00/python-icon-512x512-48og66bp.png'
                        className='h-20'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && (
                            <div className="absolute  pt-6 items-center justify-center bg-opacity-500 text-white
                            ">
                                  <span className='text-md font-playfair'>Python</span>
                            </div>
                        )}

                    </motion.div>


                        

                    </div>

                </motion.div>

            </div>

        </section>
    )
  
}

export default MySkills