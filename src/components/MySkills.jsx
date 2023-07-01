import React from 'react'
import LineGradient from '../features/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import Skills from '../features/Skills'

const MySkills = ()=>  {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id='skills' className="pt-10 pb-24">
            {/* Header & Image section */}
            <div className=' md:justify-between md:gap-16 mt-32 items-center'>
                <motion.div
                  className='md:w-full items-center'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
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
                    


                    <div className='grid grid-cols-7 gap-5 pt-20 '>
                    <div>
                        <img
                        alt='react'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                        className='h-20'
                        
                        />
                       

                    </div>

                    <div>
                        <img
                        alt='javascript'
                        src='https://www.training-dev.fr/Img/Category/Js.png'
                        className='h-20 '
                        />

                    </div>

                    <div>
                        <img
                        alt='html'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='css'
                        src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='node'
                        src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='typescript'
                        src='https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png'
                        className='h-20 items-center'
                        />

                    </div>

                    <div>
                        <img
                        alt='next js'
                        src='https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='tailwind'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='redux'
                        src='https://miro.medium.com/v2/resize:fit:400/1*0nHtg7jz-cd49KIb-Za8lg.png'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='mongo db'
                        src='https://www.tutorialsteacher.com/Content/images/home/mongodb.svg'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='threejs'
                        src='https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='framer motion'
                        src='https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='java'
                        src='https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png'
                        className='h-20'
                        />

                    </div>

                    <div>
                        <img
                        alt='python'
                        src='https://static-00.iconduck.com/assets.00/python-icon-512x512-48og66bp.png'
                        className='h-20'
                        />

                    </div>


                        

                    </div>

                </motion.div>

            </div>

        </section>
    )
  
}

export default MySkills