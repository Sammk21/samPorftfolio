"use client"
import MagneticButton from '@/components/Common/magnetic-button';
import React, { useLayoutEffect } from 'react';
import { GiAmmoniteFossil } from 'react-icons/gi';
import { HiArrowLongRight } from 'react-icons/hi2';
import { TbWorld } from 'react-icons/tb';
import gsap from 'gsap';


const Sticker1 = () => {


const t1 = gsap.timeline({ defaults: { duration: 2 } });
const t2 = gsap.timeline({ defaults: { duration: 2 } });
useLayoutEffect(()=>{
  console.log("triggered")
const stickerClassY = document.querySelectorAll('.sticker-y');
const stickerClassX = document.querySelectorAll('.sticker-x');
  t1.to(stickerClassY, {
    y: 0,
    duration: 1.2,
    ease: 'cubic-text',
  });
    t2.to(stickerClassX, {
    x: 0,
    duration: 1.2,
    ease: 'cubic-text',
  });

},[])

  return (
    // parent must be relative
    <div
    data-scroll
    data-scroll-speed="0.1"
    className=" absolute left-10 top-[35%]  hidden  xl:block">
      <MagneticButton>

     <div className='sticker-y -translate-y-96 h-auto w-fit -rotate-[6deg] items-center justify-center rounded-xl bg-[#FFA447] p-2 font-extrabold uppercase text-[#100f0f]'>
       <div className="flex flex-col">
        <div className="flex text-3xl">
          <span className="flex items-center justify-center">E-COMM.</span>
          <span className="flex h-8 w-auto items-center justify-center rounded-2xl bg-black px-5 text-white">
            www
          </span>
        </div>
        <span className="text-4xl">Experience</span>
      </div>
     </div>
      </MagneticButton>
    </div>
  );
};
const Sticker2 = () => {
  return (
    // parent must be relative

 
    <div
    data-scroll
    data-scroll-speed="0.40"
    className="absolute -right-6 top-32  hidden  xl:block"
    >
      <MagneticButton>
      <div className=' sticker-y translate-y-96  rotate-12 h-auto w-fit  items-center justify-center rounded-xl bg-[#B7E5B4] p-2 font-extrabold uppercase text-[#100f0f]'>
      <div className="flex flex-col">
        <div className="flex flex-col text-4xl">
          <span className="flex ">Branding &</span>
          <span className="flex ">Identity</span>
        </div>
        <span className="text-3xl">©'2024</span>
      </div>
      </div>
       </MagneticButton>
    </div>
  );
};
const Sticker3 = () => {
  return (
    // parent must be relative

 
    <div
    data-scroll
    data-scroll-speed="0.25"
    className="absolute top-[10rem] right-[23rem]  hidden  xl:block">
      <MagneticButton>
      <div className='sticker-x -translate-x-96  h-auto w-fit -rotate-12 items-center justify-center rounded-xl p-2  text-4xl font-extrabold uppercase text-white'>
      <div className="flex flex-col items-center justify-center">
        <span className="rounded-t-lg bg-[#eb3e65] px-2">User </span>
        <span className="gap-[-1] rounded-l-lg rounded-r-lg  bg-[#eb3e65] px-2">
          Experience
        </span>
        <span className="rounded-b-lg bg-[#eb3e65] px-2">Design©</span>
      </div>
      </div>
       </MagneticButton>
    </div>
  );
};
const Sticker4 = () => {
  return (
    // parent must be relative
    <div
    data-scroll
    data-scroll-speed="0.11"
    className="absolute left-[10%] bottom-[15%] hidden  xl:block">
      <MagneticButton>
      <div className="sticker-x translate-x-96  flex flex-col h-auto w-fit -rotate-[18deg] items-center justify-center p-3 text-4xl font-extrabold uppercase text-[#100f0f]">
        <span className="w-fit rounded-lg bg-[#f2d20a] px-1">Motion & </span>
        <span className="w-fit rounded-lg bg-[#f2d20a] px-1">Interactive</span>
        <div className="flex w-fit rounded-lg bg-[#f2d20a] px-1">
          <span className="flex items-start justify-center  text-4xl">
            <HiArrowLongRight />
          </span>
          <span className="text-center">Design</span>
        </div>
      </div>
     </MagneticButton>
    </div>
  );
};
const Sticker5 = () => {
  return (
    // parent must be relative
    <div
    data-scroll
    data-scroll-speed="0.12"
    className="absolute -top-6 left-96 hidden xl:block" id="circle">
      <MagneticButton>
      <div className="relative sticker-y translate-y-96">
        <svg width="150" height="150" viewBox="0 0 400 400">
          <defs>
            <path
              id="circlePath"
              d="M 200, 200 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
            />
          </defs>
          <g>
            <circle cx="200" cy="200" r="200" fill="#a5dc73" />
            <use xlinkHref="#circlePath" fill="none" />
            <text fill="#00000" textAnchor="middle">
              <textPath
                className="text-5xl font-extrabold "
                xlinkHref="#circlePath"
              >
                User Friendly • User Friendly • User Friendly • User Friendly •{' '}
                <HiArrowLongRight />
              </textPath>
            </text>
          </g>
        </svg>
        <div className="icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 transform rounded-full bg-black p-1 text-5xl text-[#a5dc73]">
          <TbWorld />
        </div>
      </div>
    </MagneticButton>
    </div>
  );
};
const Sticker6 = () => {
  return (
    // parent must be relative

   
    <div
    data-scroll
    data-scroll-speed={0.1}
    className="absolute right-[30%] bottom-10 hidden   xl:block">
      <MagneticButton>
      <div className="sticker-y -translate-y-96 flex flex-col items-center justify-center h-48 w-48 rounded-full bg-[#FFA447] p-6 text-3xl font-extrabold uppercase text-[#100f0f]">
        
        <span>
          <GiAmmoniteFossil />
        </span>
        <span>Design</span>
        <span>Strategy</span>
        <span className="text-center text-xs font-medium">
          <p> Aligning your business as user needs</p>
        </span>

      </div>
     </MagneticButton>
    </div>
  );
};

export { Sticker1, Sticker2, Sticker3, Sticker4, Sticker5, Sticker6 };
