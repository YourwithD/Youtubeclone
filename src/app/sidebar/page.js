"use client"
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import Image from 'next/image';
import jack from '../../../public/images/jack.png'

import Categarypoint from '../component/categarypoint/page';

import thumbnail1 from '../../../public/images/thumbnail1.png'
import HomeVideo from "../component/homeVideo.js/page";



const API = "AIzaSyA8x2f7e-aQ4pgfh7fsM0RQYxbPimItcaA"

const Sidebar = () => {
    
  return (
    <div>
   

    
    <div className=' flex  flex-grow-1 overflow-auto pt-14'>
        <div className="sidebar md:p-5 left-0 bottom-0 right-0  ">
            <div className="first hidden md:flex text-center text-xl md:gap-5 md:pb-3 ">
                <div className='cursor-pointer text-2xl text-center justify-center pl-3 '><IoMdHome /></div>
                <div className='cursor-pointer sm:text-[16px] text-start text-slate-600 '>Home</div>
            </div>
            <div className="first hidden md:flex text-center text-xl md:gap-5 md:pb-3 ">
                <div className='cursor-pointer text-2xl text-center justify-center pl-3 '><SiYoutubeshorts /></div>
                <div className='cursor-pointer sm:text-[16px] text-start text-slate-600 '>Shorts</div>
            </div>
            <div className="first hidden md:flex text-center text-xl md:gap-5 md:pb-3 ">
                <div className='cursor-pointer text-2xl text-center justify-center pl-3 '><MdSubscriptions /></div>
                <div className='cursor-pointer sm:text-[16px] text-start text-slate-600 '>Subscribetion</div>
            </div>
            
            <hr 
            className='hidden md:block'
            />
            <div className='text-xl text-black pb-5 hidden md:flex '>Subscribe</div>
            <div className="first text-center text-xl gap-5 pb-3 hidden md:flex  ">
            <span className='rounded-s-3xl cursor-pointer flex text-center'><Image
                    src={jack}
                    alt="jack"
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] '
                    /></span>
                <span className='cursor-pointer text-center text-slate-600'>Coad with</span>
            </div>
            <div className="first text-center text-xl gap-5 pb-3 hidden md:flex ">
            <span className='rounded-s-3xl cursor-pointer flex text-center'><Image
                    src={jack}
                    alt="jack"
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] '
                    /></span>
                <span className='cursor-pointer text-center text-slate-600'>wabdovelper</span>
            </div>
            <hr 
            className='hidden md:block'
            />
            <div className='text-xl text-black pb-5 hidden md:flex'>Explore</div>
            <div className="first hidden md:flex text-center text-xl gap-5 pb-3 ">
                <span className='cursor-pointer text-center'><IoMdHome /></span>
                <span className='cursor-pointer text-center text-slate-600 '>Tranding</span>
            </div>
            <div className="first hidden md:flex text-center text-xl gap-5 pb-3 ">
                <span className='cursor-pointer text-center'><SiYoutubeshorts /></span>
                <span className='cursor-pointer text-center text-slate-600'>Shooping</span>
            </div>
            <div className="first hidden md:flex text-center text-xl gap-5 pb-3 ">
                <span className='cursor-pointer text-center'><MdSubscriptions /></span>
                <span className='cursor-pointer text-center text-slate-600'>Music</span>
            </div>
            <hr 
            className='hidden md:block'
            />
            <div className='text-xl text-black pb-5 hidden md:flex '>More from you tube</div>
            <div className="first hidden md:flex text-center text-xl gap-5 pb-3 ">
                <span className='cursor-pointer text-center'><IoMdHome /></span>
                <span className='cursor-pointer text-center text-slate-600 '>Tranding</span>
            </div>
            <div className="first hidden md:flex text-center text-xl gap-5 pb-3 ">
                <span className='cursor-pointer text-center'><SiYoutubeshorts /></span>
                <span className='cursor-pointer text-center text-slate-600'>Shooping</span>
            </div>
            <div className="first hidden md:flex text-center text-xl gap-5 pb-3 ">
                <span className='cursor-pointer text-center'><MdSubscriptions /></span>
                <span className='cursor-pointer text-center text-slate-600'>Histry</span>
            </div>
                  
      </div>
   




      <div className="secstionright  md:p-5   ">
        <div className=' '> <Categarypoint /> </div>
        
        <div className="cart  grid md:grid-cols-4 sm:grid-cols-2  ">
            <div className='m-3 '>
              <Image
                src={thumbnail1}
                alt="thumbnail1"
                width={350}
                height={240}
                className="mt-3 rounded-xl text-center w-full  "
                />
            
            <div className="first flex text-center gap-3 pb-1 ">
            <span className='rounded-s-3xl cursor-pointer flex text-center  '><Image
                    src={jack}
                    alt="jack"
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] absolute mt-3  '
                    /></span>
                <h3 className='cursor-pointer text-start flex-wrap pl-7 pt-2 text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            </div>
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>Music chanel for you</div>  
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>2.3M Viwes . 3 Month ago </div>  

            </div>
            <div className='m-3 '>
              <Image
                src={thumbnail1}
                alt="thumbnail1"
                width={350}
                height={240}
                className="mt-3 rounded-xl text-center w-full  "
                />
            
            <div className="first flex text-center gap-3 pb-1 ">
            <span className='rounded-s-3xl cursor-pointer flex text-center  '><Image
                    src={jack}
                    alt="jack"
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] absolute mt-3  '
                    /></span>
                <h3 className='cursor-pointer text-start flex-wrap pl-7 pt-2 text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            </div>
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>Music chanel for you</div>  
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>2.3M Viwes . 3 Month ago </div>  

            </div>
            <div className='m-3 '>
              <Image
                src={thumbnail1}
                alt="thumbnail1"
                width={350}
                height={240}
                className="mt-3 rounded-xl text-center w-full  "
                />
            
            <div className="first flex text-center gap-3 pb-1 ">
            <span className='rounded-s-3xl cursor-pointer flex text-center  '><Image
                    src={jack}
                    alt="jack"
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] absolute mt-3  '
                    /></span>
                <h3 className='cursor-pointer text-start flex-wrap pl-7 pt-2 text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            </div>
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>Music chanel for you</div>  
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>2.3M Viwes . 3 Month ago </div>  

            </div>
            <div className='m-3 '>
              <Image
                src={thumbnail1}
                alt="thumbnail1"
                width={350}
                height={240}
                className="mt-3 rounded-xl text-center w-full  "
                />
            
            <div className="first flex text-center gap-3 pb-1 ">
            <span className='rounded-s-3xl cursor-pointer flex text-center  '><Image
                    src={jack}
                    alt="jack"
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] absolute mt-3  '
                    /></span>
                <h3 className='cursor-pointer text-start flex-wrap pl-7 pt-2 text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            </div>
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>Music chanel for you</div>  
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>2.3M Viwes . 3 Month ago </div>  

            </div>
            <div className='m-3 '>
              <Image
                src={thumbnail1}
                alt="thumbnail1"
                width={350}
                height={240}
                className="mt-3 rounded-xl text-center w-full  "
                />
            
            <div className="first flex text-center gap-3 pb-1 ">
            <span className='rounded-s-3xl cursor-pointer flex text-center  '><Image
                    src={jack}
                    alt="jack"
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] absolute mt-3  '
                    /></span>
                <h3 className='cursor-pointer text-start flex-wrap pl-7 pt-2 text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            </div>
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>Music chanel for you</div>  
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>2.3M Viwes . 3 Month ago </div>  

            </div>
            <div className='m-3 '>
              <Image
                src={thumbnail1}
                alt="thumbnail1"
                width={350}
                height={240}
                className="mt-3 rounded-xl text-center w-full  "
                />
            
            <div className="first flex text-center gap-3 pb-1 ">
            <span className='rounded-s-3xl cursor-pointer flex text-center  '><Image
                    src={jack}
                    alt="jack"
                    width={30}
                    height={30}
                    borderRadius={200}
                    className='rounded-[50%] absolute mt-3  '
                    /></span>
                <h3 className='cursor-pointer text-start flex-wrap pl-7 pt-2 text-[14px]'>Coad Lorem  lor rry this is for you baby </h3>
            </div>
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>Music chanel for you</div>  
            <div className='cursor-pointer text-start text-[10px] pl-10  text-slate-500'>2.3M Viwes . 3 Month ago </div>  

            </div>
            
            
        </div>
        <div><HomeVideo /></div>
        
       
        
       
        </div> 
       
    
    </div>


</div>
)}
export default Sidebar
