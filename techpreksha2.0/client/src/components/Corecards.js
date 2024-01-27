import React from 'react';
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai';
import ExtendedCards from './ExtendedCards';

const CoreCards = () => {
  return (
    <div className='h-full'>
    <div className="flex justify-end px-12">
        <a href="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </a>
      </div>
    
 <div className='  h-full pb-20 flex flex-col'>
 <h1 className=' text-white  ml-[450px] text-center text-6xl w-[600px]'>CORE TEAM MEMBERS </h1>
<div className="  mt-3 flex justify-center">
    {/* ---parent div--- */}
    
      <div className='flex mt-20  flex-col border-2 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/rishabh.png' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white  text-center'>
          Rishabh Jain<br/>
Chairperson<br/>
Robotics & Automation
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/rishabhjain2010/' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/rishabhjain2010/' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href='http://www.githib.com/rishabhjain2010' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      
                      </div>
        
        </div>
        
        {/* ---parent div--- */}
    
      <div className='flex mt-20  flex-col border-2 ml-20 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/prachi.png' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white  text-center'>
           Prachi Singh<br/>
Vice-Chairperson (Market Team)<br/>
Web Developer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/prachi_09._.7/' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/prachi-singh-3082a620a/' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href='https://github.com/PrachiSingh09' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      </div>
        </div>

        {/* ---parent div--- */}
    
      <div className='flex mt-20  flex-col border-2 ml-20 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/utkarsh-y.png' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white text-center'>
           Utkarsh Jha<br/>
Vice-Chairperson (Tech Team)<br/>
Software Developer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/utkarshjha_/' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/utkarsh-jha-378b36215/' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href='_blank' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' target="_blank"/>
           </a> 
                      </div>
                      </div>
        </div>
        </div>
        <div className="  -mt-10 flex justify-center">
    {/* ---parent div--- */}
    
      <div className='flex mt-20  flex-col border-2 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/tushar.jpeg' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white  text-center'>
           Tushar Patodia<br/>
Technical Head<br/>
Blockchain Developer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/13.tush/' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/tushar-patodia-0150a4235' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href='https://github.com/nerdTushar' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      
                      </div>
        
        </div>
        
        {/* ---parent div--- */}
    
      <div className='flex mt-20  flex-col border-2 ml-20 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/oshank-y.png' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white  text-center'>
           Oshank<br/>
Cyber Security Head<br/>
Cyber Security
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl' >
            <a href='_blank' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer ' />
           </a>
           <a href='https://www.linkedin.com/in/oshank-kashyap-280583201/' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href='https://github.com/OshankKashyap' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      </div>
        </div>

        {/* ---parent div--- */}
    
      <div className='flex mt-20  flex-col border-2 ml-20 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/vineet.jpg' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white text-center'>
           Vineet Bhatt<br/>
Graphics Head<br/>
UI/UX Developer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='http://instagram.com/vineet__bhatt' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/vineet-bhatt-1aaa8a234' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer'  />
           </a>
           <a href='_blank' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      </div>
        </div>
        </div>
        <div className="  -mt-10 flex justify-center">
    {/* ---parent div--- */}
    
      <div className='flex flex-col border-2 mt-20  border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/kushagra.jpg' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white  text-center'>
           Kushagra Singh<br/>
Graphics Head<br/>
UI/UX Developer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/_kushagra_singh_2003/' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/kushagra-singh-705a46239/' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer'  />
           </a>
           <a href='_blank' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer'  />
           </a> 
                      </div>
                      
                      </div>
        
        </div>
        
        {/* ---parent div--- */}
    
      <div className='flex flex-col mt-20  border-2 ml-20 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/chandni.jpg' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white  text-center'>
           Chandni Kumari<br/>
Graphics Head<br/>
UI/UX Developer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/chand__nii/' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href=' http://www.linkedin.com/in/chandniikumari/' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href='https://github.com/chandnii96' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      </div>
        </div>

        {/* ---parent div--- */}
    
      <div className='flex flex-col mt-20  border-2 ml-20 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/meenakshi.png' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white text-center'>
           Meenakshi Panchal<br/>
PR & Anchoring Head<br/>
MERN STACK Developer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/_meenakshi.17/' target="_blank" >
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/meenakshi-panchal-617393242/' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href=' https://github.com/meenakshipanchal17' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      </div>
        </div>
        </div>
        <div className="  -mt-10 flex justify-center">
    {/* ---parent div--- */}
    
      <div className='flex flex-col mt-20  border-2 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/arsh.jpg' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white  text-center'>
           Arsh Kumar<br/>
           Marketing Head<br/>
App Developer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/only._.arshh/' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/arsh-kumar-a12a95224' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href='_blank' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      
                      </div>
        
        </div>
        
        {/* ---parent div--- */}
    
      <div className='flex flex-col border-2 ml-20  mt-20 border-gfgmaincolor  md:w-1/5 hover:shadow-black shadow-2xl  hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        w-full h-min rounded-3xl'>
        <div className='hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] hover:from-black hover:via-black hover:to-blue-800 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-800 via-black to-black border-2 border-white relative h-28 flex justify-center rounded-t-3xl'>
      {/* ---start--- */}
        <div className='rounded-full mt-10 overflow-hidden border-2 border-white shadow-xl h-32 w-32'>
          <img className='object-fill w-full' src='/images/coreteam-images/sejal.png' alt='not valid' />
          
        </div>
        </div>
        {/* ----area after picture---- */}
        <div className='flex flex-col mt-14 items-center py-4 gap-2'>
           {/* <h1 className='text-xl text-gfgmaincolor font-bold'></h1> */}
           <h1 className=' text-white  text-center'>
           Sejal Talwar<br/>
Campus Mantri<br/>
Content Writer
          </h1>
           {/* <h1 className='px-4 text-center'></h1> */}
           <div className='flex gap-8 my-2 text-xl'>
            <a href='https://www.instagram.com/sejaltalwarr/' target="_blank">
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] cursor-pointer'  />
           </a>
           <a href='https://www.linkedin.com/in/sejal-talwar-ba7099222/' target="_blank">
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </a>
           <a href='_blank' target="_blank">
              <BsGithub className='fill-[#1f1f1f]  hover:fill-[#ded9d9] cursor-pointer' />
           </a> 
                      </div>
                      </div>
        </div>


        </div>
        
      </div>

      <div>
        <ExtendedCards/>
      </div>
  
    </div>
  )
}

export default CoreCards;
