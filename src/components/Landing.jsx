import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMediaIcons from '../features/SocialMediaIcons'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Resume from '../features/Resume'



const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const [text, count] = useTypewriter({
      words:["Software Engineer","Full Stack Developer"],
      loop: true,
      delaySpeed: 2000,
    })

    return (
        <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
            {/* Image */}
            <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
                {isAboveMediumScreens ? (
                    <div
                      className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                      before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-brown-500 before:z-[-1]'
                    
                    > 
                        <img
                          alt="profile"
                          className="hover:filter hover:saturate-200 object-scale-down h-80 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                          src="assets/profile.png"
                        
                        />
                    </div>

                ): (
                    <img
                          alt="profile"
                          className="hover:filter hover:saturate-200 object-scale-down h-80 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                          src="assets/profile.png"
                        
                    />
                    
                )}

            </div>


                {/* Main section */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* Headings */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Geeta {""}

                            <span
                              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                            >
                                Matkar
                            </span>

                        </p>

                        <h5 className='pt-20 text-xl text-center md:text-start '>
                        <span className='pt-20 text-xl text-center md:text-start '>I'm a {text}</span>
                        <Cursor cursorColor='yellow'></Cursor>
                        </h5>

                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                            
                        
                         Aspiring MERN developer passionate about crafting robust and dynamic web applications.

                        </p>

                    </motion.div>


                    {/* Call to actions */}
                    <motion.div
                      className='flex mt-5 justify-center md:justify-start'
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay:0.2, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                        <AnchorLink
                          className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                          hover:bg-blue hover:text-white transition duration-500"
                          onClick={() => setSelectedPage("contact")}
                          href="#contact"
                        >
                            Contact Me
                        </AnchorLink>


                        <a
                          className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                          target="_blank"
                          href="https://calendly.com/geetassmatkar"
                        >
                            <div
                              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair"
                            >
                                Schedule Meeting
                            </div>
                        </a>

                    </motion.div>

                    <motion.div
                      className='flex mt-5 justify-center md:justify-start'
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay:0.4, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                        <SocialMediaIcons />

                    </motion.div>

                </div>

            

        </section>
    )

}

export default Landing