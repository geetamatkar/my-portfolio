import React from 'react'
import LineGradient from '../features/LineGradient'
import { motion } from 'framer-motion'

const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, href, web }) => {
    const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition transform duration-500 ease-out
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
  
    return (
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className=" text-2xl font-playfair">{title}</p>
          <p className="mt-7">

            <div className='flex gap-6'>
            

            <a
              href={href}
              target="_blank"
              rel="noreferrer"
            >
                <img className="object-scale-down h-7  " alt="github-link" src="../assets/github-2-1-logo.png" />
                
            </a>

            <a
              href={web}
              target="_blank"
              rel="noreferrer"
            >
                <img className="object-scale-down h-7 " alt="deploy-link" src="../assets/link.png" />
                
            </a>

            </div>


          </p>
        </div>
        <img className='h-full w-full' src={`../assets/${projectTitle}.png`} alt={projectTitle} />
      </motion.div>
    );
  };


const Projects = () => {
  return (
    <section id='projects' className='pt-40 pb-40'>
        {/* Headings */}
        <motion.div
            className="md:w-full md:h-full mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
            }}
        >
            <div>
                <p className="font-playfair font-semibold text-4xl">
                    <span className="text-red">PRO</span>JECTS
                </p>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/4" />
                </div>
            </div>
        
        
            <p className="mt-10 mb-10 w-full">
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly 
            described with links to code repositories and its deployed url. It reflects my ability to solve complex problems, work
            with different technologies, and manage projects effectively.
            </p>


            {/* Projects */}
            <div className='flex justify-center'>
                <motion.div
                    className="sm:grid sm:grid-cols-3 gap-5 mb-44"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                 >
                    {/* Row 1 */}
                    {/*<div
                      className='flex justify-center text-center items-center p-10 bg-red
                      max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
                    >
                        USER INTERFACES
                    </div>*/}

                  
                  

                   
                    <Project title="Amazon-Clone" href="https://github.com/geetamatkar/amazon-clone" web="https://web-7747c.web.app" />

                    <Project title="Airbnb-Clone" href="https://github.com/geetamatkar/airbnb" web="https://airbnb-5ck68w2lx-geetamatkar.vercel.app/" />

                    <Project title="AI 3D Product Website" href="https://github.com/geetamatkar/productVR" web="https://threejs-4wm118yxp-geetamatkar.vercel.app/"/>

                    <Project title="Netflix-Clone" href="https://github.com/geetamatkar/netflix-clone" web="https://netflix-clone-tau-lime.vercel.app/"/>

                    <Project title="AI-Image-Generator" href="https://github.com/geetamatkar/ai-image-generator"  />

                    

                     



                </motion.div>

            </div>

        
        
      </motion.div>

    </section>
  )
}

export default Projects