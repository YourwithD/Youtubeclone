import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
const Footer = () => {
  return (
    <div>
       <div className="footer flex md:hidden   shadow fixed w-[100%] bottom-0 h-16 p-3  bg-white  justify-between ">
        <div className="first flex flex-col   text-center text-xl  ">
                <div className='cursor-pointer flex text-2xl text-center justify-center  '><IoMdHome /></div>
                <div className='cursor-pointer flex text-[12px]  text-start text-slate-600 '>Home</div>
            </div>
            <div className="first  text-center text-xl  ">
                <div className='cursor-pointer flex text-2xl text-center justify-center  '><SiYoutubeshorts /></div>
                <div className='cursor-pointer flex text-[12px] text-center  text-slate-600 '>Shorts</div>
            </div>
            <div className="first text-center text-xl  ">
                <div className='cursor-pointer flex text-2xl text-center justify-center  '><MdSubscriptions /></div>
                <div className='cursor-pointer flex text-[14px] text-center text-slate-600 '>Subscribetion</div>
            </div>
            <div className="first  text-center text-xl  ">
                <div className='cursor-pointer flex text-2xl text-center justify-center '><IoMdHome /></div>
                <div className='cursor-pointer flex text-[14px] text-center text-slate-600 '>You</div>
            </div>
            <div className="first  text-center text-xl">
                <div className='cursor-pointer flex text-2xl text-center justify-center  '><IoMdHome /></div>
                <div className='cursor-pointer flex text-[14px] text-center text-slate-600 '>Histary</div>
            </div>

        </div>
    </div>
  )
}

export default Footer
