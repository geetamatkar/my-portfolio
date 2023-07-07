import React from 'react'
import LineGradient from '../features/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { fadeIn } from '../utils/motion'


const About = () => {
  return (
    <div id='about' className='flex flex-col relative h-screen md:text-left md-flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mb-20 '>
        <p className='absolute top-10 font-playfair font-semibold text-4xl mb-30 pb-30 pt-5 bottom-20'>
            ABOUT <span className="text-red">ME</span>
        </p>

        <Tilt className='xs:w-[250px] w-full'>

              
            <motion.img
                initial={{
                    x:-200,
                    opacity:0,
                }}
                variants={fadeIn("right", "spring", 0.5, 0.75)}
                transition={{duration:1.2}}
                whileInView={{opacity:1, x:0}}
                viewport={{once: true}}
                src='../assets/portfolio-img2.jpeg'
                className='-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg 
                md:w-[300px] md:h-[400px] mt-10 pt-15'
            
            />
        </Tilt>

            <div className='space-y-10 px-0 md:px-10'>
                <p className='text-center'>
                I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React.js for front-end 
                development, and Node.js for back-end development. I have a strong aptitude for learning and a passion for crafting efficient,
                scalable, and user-friendly solutions that effectively address real-world problems. Let's work together to bring ideas to 
                life!

                </p>

            </div>
        </div>

        
  )
}

export default About