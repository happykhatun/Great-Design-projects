import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Navbar = () => {
    return (
        <>
            <nav className='bg-[#202020] py-8'>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <div className='text-secondary font-normal text-[38px]'>
                            P
                        </div>
                        <div className='flex gap-4 text-white'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                        <ul className='flex items-center gap-16 text-secondary font-normal text-[14px]'>
                            <li>HOME</li>
                            <li>PROJECTS</li>
                            <li>AWWARDS</li>
                            <li>TESTIMONIAL</li>
                            <li>BLOG</li>
                            <li>CONTACT</li>
                        </ul>

                    </div>
                </div>
                <hr className='border-b-secondary/30 border' />
            </nav>

        </>
    )
}

export default Navbar
