"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import jack from '../../../public/images/jack.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline, IoVideocam } from "react-icons/io5";
import { FaMicrophone, FaYoutube } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io"
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
  return (
    <div>
        <div className="header flex justify-between text-center p-3 shadow fixed w-[100%] bg-white ">
            <div className={`left  gap-5 text-center ${showFullWidthSearch ? "hidden" : "flex"} `}>
                <div className="manu text-2xl justify-center cursor-pointer pt-2 text-center "><RxHamburgerMenu /></div>
                <Link href='/'><div className="logo pt-1 flex">
                    <span><FaYoutube className='text-4xl text-[red] font-extrabold '/></span><span className='text-xl p-1 font-bold'>Youtube</span>
                </div></Link>
            </div>
            <form className={` md:flex flex-grow midle gap-4  text-center justify-center ${showFullWidthSearch ? "flex" : "hidden"}  `}>
                <div onClick={() => {setShowFullWidthSearch(false)}} className='text-2xl cursor-pointer flex text-center md:hidden pt-2 ' > <FaArrowLeft /> </div>
                <div className="search flex flex-grow text-center max-w-[600px]  ">
                <input id='search' className='search flex-grow rounded-l-full  border px-2 py-2 ' type='text' placeholder='Search ...'></input>
                <button className=" border border-l-0 rounded-r-full px-2 py-2 "><IoSearchOutline /></button>
                
                </div>
                <div className="mic flex p-2 cursor-pointer hover:bg-red-200   text-center justify-center  text-xl border rounded-full ">
                    <FaMicrophone />
                </div>
            </form>
            <div className={`right flex gap-5 justify-center text-center ${showFullWidthSearch ? "hidden" : "flex"} `}>
                <span onClick={() => setShowFullWidthSearch(true)} className='text-2xl cursor-pointer flex text-center pt-2  md:hidden ' ><IoSearchOutline /></span>
                <span className='text-2xl cursor-pointer flex text-center pt-2  md:hidden ' ><FaMicrophone /></span>
                <span className='text-2xl cursor-pointer flex text-center pt-2 ' ><IoIosNotificationsOutline /></span>
                <span className='text-2xl cursor-pointer flex text-center pt-2 ' ><IoVideocam /></span>
                <span className='rounded-2xl cursor-pointer flex text-center'><Image
                    src={jack}
                    alt='jack'
                    width={35}
                    height={25}
                    borderRadius={200}
                    className='rounded-[50%] '
                    
                    /></span>

                
            </div>
        </div>
      
    </div>
  )
}

export default Header
