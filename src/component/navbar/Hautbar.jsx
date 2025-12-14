import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";



export default function Hautbar() {
    return (
        <div className='bg-green-600 justify-center items-center h-10'>
            <div className='flex justify-between pt-1 mx-3 lg:text-[14px] text-[12px] items-center'>
                    <p className='my-1 text-lime-50'>Call Use: +225 05 86 55 0173</p>
                    <p className='my-1 text-lime-50'>Sign up GET 25% OFF your first order. <span className='text-amber-300'>Sign up now</span></p>
                <div className='flex gap-1 lg:gap-10 text-[14px] text-amber-300 mb-'>
                    <IoLogoFacebook />
                    <FaYoutube />
                    <FaTwitter />
                    <FaInstagramSquare />
                    <FaTelegram />
                </div>
            </div>
        </div>
    )
}
