import React from 'react'
import Header from '../header/page'
import VideoPlay from '../videoplay/page'
import Image from 'next/image'
import jack from '../../../public/images/jack.png'
import { SlLike, SlDislike } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import { MdDownload } from "react-icons/md";
import thumbnail2 from '../../../public/images/thumbnail2.png'

const Main  = () => {
  return (
    <div>
      <Header />
      <div className="section pt-20 flex ">
        <div className="leftsection w-[69%] pl-20  ">
          <div className="video   w-full h-full rounded-2xl"><VideoPlay /></div>
          <div className="desc  text-black text-xl "><h2>this is video dec hare the start video dec</h2></div>
          <div className="subscribe flex justify-between text-center">
            <div className="left flex ">
            <div className='rounded-s-3xl cursor-pointer flex text-center  '><Image
                    src={jack}
                    alt='jack'
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] absolute mt-3  '
                    /></div>
                    <div className="22  flex flex-col">
                   <div className=' cursor-pointer text-start text-[20px] pl-10 '>Music chanel for you</div>  
            <p className='cursor-pointer text-start text-[14px] pl-10  text-slate-500'>2.3M subscribe </p> </div>
               <div> <button className='border bg-red-600 text-white m-2 p-1 pl-2 pr-2 rounded-2xl  '>Subscribe</button> </div>

            </div>
            <div className="right pr-20 flex justify-between text-center ">
            <div> <button className='border bg-gray-200 flex text-center   text-black m-2 p-1 pl-2 pr-2 rounded-2xl gap-2  '><SlLike className='text-xl' /> <span>0</span> <hr /> <SlDislike className='text-xl'/> <span>0</span> </button> </div>
            <div> <button className='border bg-gray-200 flex text-center   text-black m-2 p-1 pl-2 pr-2 rounded-2xl gap-2  '><TbShare3 className='text-xl'/> <span>share</span> </button> </div>
            <div> <button className='border bg-gray-200 flex text-center   text-black m-2 p-1 pl-2 pr-2 rounded-2xl gap-2  '><MdDownload className='text-xl'/> <span>Download</span> </button> </div>


            </div>
          </div>

          

        </div>
        <div className="rightsection w-[30%] ">
          <div className="right w-full flex p-3">
        <div className=' '>
                <Image
                src={thumbnail2}
                alt='thumb'
                width={350}
                height={240}
                className=" rounded-xl text-center  "
                />
            
        </div>
        <div className='pl-3'>
  
                <h3 className='cursor-pointer text-start flex-wrap text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            <p className='cursor-pointer text-start text-[10px]  text-slate-500'>Music chanel for you</p>  
            
            <p className='cursor-pointer text-start text-[10px] text-slate-500'>2.3M Viwes . 3 Month ago </p>  
            </div>

        </div>
        <div className="right w-full flex p-3">
        <div className=' '>
                <Image
                src={thumbnail2}
                alt='thumb'
                width={350}
                height={240}
                className=" rounded-xl text-center  "
                />
            
        </div>
        <div className='pl-3'>
  
                <h3 className='cursor-pointer text-start flex-wrap text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            <p className='cursor-pointer text-start text-[10px]  text-slate-500'>Music chanel for you</p>  
            
            <p className='cursor-pointer text-start text-[10px] text-slate-500'>2.3M Viwes . 3 Month ago </p>  
            </div>

        </div>
        <div className="right w-full flex p-3">
        <div className=' '>
                <Image
                src={thumbnail2}
                alt='thumb'
                width={350}
                height={240}
                className=" rounded-xl text-center  "
                />
            
        </div>
        <div className='pl-3'>
  
                <h3 className='cursor-pointer text-start flex-wrap text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            <p className='cursor-pointer text-start text-[10px]  text-slate-500'>Music chanel for you</p>  
            
            <p className='cursor-pointer text-start text-[10px] text-slate-500'>2.3M Viwes . 3 Month ago </p>  
            </div>

        </div>
        <div className="right w-full flex p-3">
        <div className=' '>
                <Image
                src={thumbnail2}
                alt='thumb'
                width={350}
                height={240}
                className=" rounded-xl text-center  "
                />
            
        </div>
        <div className='pl-3'>
  
                <h3 className='cursor-pointer text-start flex-wrap text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            <p className='cursor-pointer text-start text-[10px]  text-slate-500'>Music chanel for you</p>  
            
            <p className='cursor-pointer text-start text-[10px] text-slate-500'>2.3M Viwes . 3 Month ago </p>  
            </div>

        </div>
        
        </div>
        </div> 
    </div>
  )
}

export default Main 
