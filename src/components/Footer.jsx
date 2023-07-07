import React from 'react'
import SocialMediaIcons from '../features/SocialMediaIcons'

const Footer = () => {
  return (
    <footer className="h-30 bg-red ">
        <div className="pt-2 pb-5 w-10/12 mx-auto">
            <SocialMediaIcons />
            <div className="md:flex pt-2 pb-10 justify-center md:justify-between text-center ">
                <p className="font-playfair font-semibold text-xl text-yellow">GEETA MATKAR</p>
                <p className="font-playfair text-md text-yellow">©2023. All Rights Reserved</p>
            </div>

        </div>

    </footer>
  )
}

export default Footer