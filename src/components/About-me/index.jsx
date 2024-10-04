import { slideUp, slideUpTitle } from '@/animation/anim';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { PiArrowBendRightDownThin } from 'react-icons/pi';
import CustomCursor from '../custom-crusor/Cursor';

export const projects = [
  {
    title: 'Web Application Dev',

    description:
      'I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance,accessibility, and engaging animations for a memorable experience.',

    bullets: [
      {
        1: 'cms integration',
        2: 'Motion & Animations',
        3: 'Static Development',
      },
    ],

    color: '#750E21',
  },

  {
    title: 'Web Design',

    description:
      'I design user-centric websites that enhance your brand and drive business goals. Clean typography and minimal layouts has my full attention to create a compelling online presence.',

    bullets: [
      {
        1: 'Responsive Design',
        2: 'Wireframing',
        3: 'UX Writing',
      },
    ],

    color: '#005B41',
  },

  {
    title: 'Seo',

    description:
      'Beyond crafting visually memorable websites, I also optimize your online presence to elevate your visibility in search rankings so your voices can be heard in the digital landscape.',

    bullets: [
      {
        1: 'Technical SEO',
        2: 'On-Page Optimization',
        3: 'SEO Audits & Analysis',
      },
    ],

    color: '#1B4242',
  },
];

const AboutMe = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const yPosAnim = useTransform(scrollYProgress, [0, 1], [-180, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [1, 100]);
  const rotateNeg = useTransform(scrollYProgress, [0, 1], [-1, -100]);
  const y = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const text =
    "Using my love for creating websites and apps, I help startups make unique online experiences. I guide projects from ideas to launch, making sure they stand out and work well. It's all about leaving a strong impression in the online world.";
  const About = 'AboutMe.';

  const whatIdotext = 'WhatIdo.';
  const description = useRef(null);
  const aboutMe = useRef(null);
  const whatIdoref = useRef(null);
  const isInView = useInView(description);
  const aboutInView = useInView(aboutMe);
  const whatIdoInView = useInView(whatIdoref);


  return (
    <>
      <section ref={container} className="relative ">
        <div
          ref={aboutMe}
          className=" flex justify-start text-[12vw] font-bold sm:text-[8vw]"
        >
          {About.split('').map((word, index) => {
            return (
              <span
                className="relative inline-flex overflow-hidden text-center "
                key={index}
              >
                <motion.span
                  className="inline-block"
                  variants={slideUpTitle}
                  custom={index}
                  animate={aboutInView ? 'open' : 'closed'}
                  transition={{ ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </div>
        <div className=" flex w-full justify-center sm:mt-14">
          <div className="relative  flex justify-center sm:gap-x-24   ">
            <motion.svg
              style={{ rotate: rotateNeg }}
              width="600"
              height="600"
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="280" height="280" rx="32" fill="none" />
              <g clipPath="url(#clip0_501_1832)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M140 140C140 140 152.5 106.527 152.5 82.8571C152.5 59.1878 146.904 40 140 40C133.096 40 127.5 59.1878 127.5 82.8571C127.5 106.527 140 140 140 140ZM140 140C140 140 154.831 172.508 171.567 189.245C188.304 205.982 205.829 215.592 210.711 210.711C215.592 205.829 205.982 188.304 189.245 171.567C172.508 154.831 140 140 140 140ZM140 140C140 140 173.474 127.5 197.143 127.5C220.812 127.5 240 133.096 240 140C240 146.904 220.812 152.5 197.143 152.5C173.474 152.5 140 140 140 140ZM140 140C140 140 107.492 154.831 90.755 171.567C74.0183 188.304 64.4077 205.829 69.2893 210.711C74.1709 215.592 91.696 205.982 108.433 189.245C125.17 172.508 140 140 140 140ZM140 140C140.028 140.074 152.5 173.5 152.5 197.143C152.5 220.812 146.904 240 140 240C133.096 240 127.5 220.812 127.5 197.143C127.5 173.474 140 140 140 140ZM140 140C140 140 106.527 127.5 82.8571 127.5C59.1878 127.5 40 133.096 40 140C40 146.904 59.1878 152.5 82.8571 152.5C106.527 152.5 140 140 140 140ZM140 140C140 140 172.508 125.169 189.245 108.433C205.982 91.6959 215.592 74.1708 210.711 69.2893C205.829 64.4077 188.304 74.0183 171.567 90.755C154.831 107.492 140 140 140 140ZM108.433 90.755C125.17 107.492 140 140 140 140C140 140 107.492 125.17 90.7551 108.433C74.0183 91.696 64.4078 74.1709 69.2893 69.2893C74.1709 64.4078 91.696 74.0183 108.433 90.755Z"
                  className="fill-low"
                />
              </g>
              <defs></defs>
            </motion.svg>
            <motion.svg
              style={{ rotate: rotate, y: y }}
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="280" height="280" rx="32" fill="none" />
              <g clip-path="url(#clip0_501_1832)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M140 140C140 140 152.5 106.527 152.5 82.8571C152.5 59.1878 146.904 40 140 40C133.096 40 127.5 59.1878 127.5 82.8571C127.5 106.527 140 140 140 140ZM140 140C140 140 154.831 172.508 171.567 189.245C188.304 205.982 205.829 215.592 210.711 210.711C215.592 205.829 205.982 188.304 189.245 171.567C172.508 154.831 140 140 140 140ZM140 140C140 140 173.474 127.5 197.143 127.5C220.812 127.5 240 133.096 240 140C240 146.904 220.812 152.5 197.143 152.5C173.474 152.5 140 140 140 140ZM140 140C140 140 107.492 154.831 90.755 171.567C74.0183 188.304 64.4077 205.829 69.2893 210.711C74.1709 215.592 91.696 205.982 108.433 189.245C125.17 172.508 140 140 140 140ZM140 140C140.028 140.074 152.5 173.5 152.5 197.143C152.5 220.812 146.904 240 140 240C133.096 240 127.5 220.812 127.5 197.143C127.5 173.474 140 140 140 140ZM140 140C140 140 106.527 127.5 82.8571 127.5C59.1878 127.5 40 133.096 40 140C40 146.904 59.1878 152.5 82.8571 152.5C106.527 152.5 140 140 140 140ZM140 140C140 140 172.508 125.169 189.245 108.433C205.982 91.6959 215.592 74.1708 210.711 69.2893C205.829 64.4077 188.304 74.0183 171.567 90.755C154.831 107.492 140 140 140 140ZM108.433 90.755C125.17 107.492 140 140 140 140C140 140 107.492 125.17 90.7551 108.433C74.0183 91.696 64.4078 74.1709 69.2893 69.2893C74.1709 64.4078 91.696 74.0183 108.433 90.755Z"
                  className="fill-low"
                />
              </g>
              <defs></defs>
            </motion.svg>

            <div className="absolute bottom-0 aspect-square h-[84vw] w-[65vw] sm:h-[50vw] sm:w-[38vw] lg:h-[30vw] lg:w-[25vw]">
              <motion.div
                style={{ y: yPosAnim }}
                className="from-black-500 relative h-full w-full  "
              >
                <Image
                  src="/sam2.png"
                  fill
                  className="rounded-lg object-cover object-center "
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mb-14 flex">
          <div className="hidden w-[50%] sm:block">
            <motion.svg
              style={{ rotate: rotate, y: y }}
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.000366211"
                width="280"
                height="280"
                rx="32"
                fill="none"
              />
              <g clip-path="url(#clip0_501_1864)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40 40.0004C40 95.2289 84.7715 140 140 140C84.7715 140 40 184.772 40 240H52C52 191.399 91.3989 152 140 152C188.601 152 228 191.399 228 240H240C240 184.772 195.228 140 140 140C195.228 140 240 95.2289 240 40.0004H228C228 88.6015 188.601 128 140 128C91.3989 128 52 88.6015 52 40.0004H40ZM64 40.0004C64 81.974 98.0264 116 140 116C181.974 116 216 81.974 216 40.0004H204C204 75.3466 175.346 104 140 104C104.654 104 76 75.3466 76 40.0004H64ZM88 40.0004C88 68.7192 111.281 92.0004 140 92.0004C168.719 92.0004 192 68.7192 192 40.0004H180C180 62.0918 162.091 80.0004 140 80.0004C117.909 80.0004 100 62.0918 100 40.0004H88ZM140 164C181.974 164 216 198.026 216 240H204C204 204.654 175.346 176 140 176C104.654 176 76 204.654 76 240H64C64 198.026 98.0264 164 140 164ZM140 188C168.719 188 192 211.281 192 240H180C180 217.909 162.091 200 140 200C117.909 200 100 217.909 100 240H88C88 211.281 111.281 188 140 188Z"
                  className="fill-low opacity-50"
                />
              </g>
              <defs>
                <clipPath id="clip0_501_1864">
                  <rect
                    width="200"
                    height="200"
                    fill="white"
                    transform="translate(40 40.0004)"
                  />
                </clipPath>
              </defs>
            </motion.svg>
          </div>
          <p
            ref={description}
            className=" w-full gap-2  font-medium leading-[1.3] sm:-mt-12 sm:w-[50%]"
          >
            {text.split(' ').map((word, index) => {
              return (
                <span
                  className="relative inline-flex overflow-hidden text-center lg:text-[2vw]"
                  key={index}
                >
                  <motion.span
                    className="mr-1 lg:mr-[10px]"
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? 'open' : 'closed'}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
        <div className="flex flex-col justify-between sm:flex-row">
          <div ref={whatIdoref} className=" flex ">
            {whatIdotext.split('').map((word, index) => {
              return (
                <span
                  className="relative inline-flex overflow-hidden text-center text-[12vw] font-bold sm:text-[8vw] "
                  key={index}
                >
                  <motion.span
                    className="inline-block"
                    variants={slideUpTitle}
                    custom={index}
                    animate={whatIdoInView ? 'open' : 'closed'}
                  >
                    {word}
                  </motion.span>{' '}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-x-5 text-xl sm:flex-row">
            <h1>i can help you with</h1>
            <span className="text-3xl">
              <PiArrowBendRightDownThin />
            </span>
          </div>
        </div>
        <div class="mt-12 w-full">
          <div class="relative flex flex-col justify-between gap-y-16">
            <div class=" sticky top-[15%] overflow-hidden rounded-3xl border bg-[#000] px-2 sm:px-10">
              <div class="flex items-center gap-x-4 md:gap-x-6">
                <img
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  class="h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"
                  src="//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"
                />
                <h3 class="text-accent-500 3xl:py-9 py-7 text-left text-[6vw] font-bold  sm:py-5 sm:text-[5vw] md:py-4 md:text-[4vw]  lg:text-[3w] ">
                  Web Development
                </h3>
              </div>
              <div class="relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 ">
                <p class=" text-secondary-75 md:text-h6 2xl:text-h5 col-span-12 max-w-[40ch] pt-2 text-base font-medium lg:col-span-6">
                  I create unique, custom-coded websites that are tailored to
                  your brand. I focus on scalability, performance,
                  accessibility, and engaging animations for a memorable
                  experience.
                </p>
                <div class="text-h5 md:text-h4 2xl:text-h3 col-span-6 flex w-full flex-col gap-y-4 pt-8 lg:pt-0">
                  <span class="text-accent-500 font-bold">CMS Integration</span>
                  <span class="text-accent-500 font-bold">
                    Motion &amp; Animations
                  </span>
                  <span class="text-accent-500 font-bold">3D Development</span>
                </div>
                <span
                  data-scroll
                  data-scroll-speed="0.1"
                  class="text-number leading-tighter  text-secondary-300 absolute  bottom-0 -z-10 flex  w-full items-end justify-end font-extrabold opacity-30 "
                >
                  <svg
                    width="280"
                    height="280"
                    viewBox="0 0 280 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="280" height="280" rx="32" fill="#none" />
                    <g clip-path="url(#clip0_501_1384)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M82.6761 198.014C90.4721 222.368 113.296 240 140.237 240C167.239 240 190.105 222.289 197.85 197.85C222.289 190.104 240 167.239 240 140.237C240 113.295 222.368 90.472 198.014 82.676C190.432 57.9656 167.433 40 140.237 40C113.102 40 90.1449 57.8855 82.5107 82.5106C57.8855 90.1447 40 113.102 40 140.237C40 167.433 57.9657 190.432 82.6761 198.014ZM146.442 146.442C144.412 146.713 142.341 146.853 140.237 146.853C137.966 146.853 135.733 146.69 133.549 146.375C133.284 144.367 133.147 142.318 133.147 140.237C133.147 137.989 133.307 135.778 133.616 133.616C135.778 133.307 137.989 133.147 140.237 133.147C142.318 133.147 144.367 133.284 146.375 133.549C146.69 135.733 146.853 137.966 146.853 140.237C146.853 142.341 146.713 144.412 146.442 146.442ZM142.049 160.826C141.447 160.844 140.843 160.853 140.237 160.853C139.469 160.853 138.704 160.839 137.943 160.81C138.573 162.083 139.26 163.323 140 164.526C140.737 163.328 141.421 162.094 142.049 160.826ZM149.453 175.568C153.234 170.331 156.197 164.463 158.153 158.153C164.463 156.197 170.331 153.234 175.568 149.453C182.487 157.561 186.664 168.079 186.664 179.573C186.664 181.822 186.504 184.032 186.195 186.195C184.032 186.504 181.822 186.664 179.574 186.664C168.08 186.664 157.561 182.487 149.453 175.568ZM130.547 175.568C126.733 170.285 123.752 164.36 121.796 157.987C115.685 156.031 109.998 153.129 104.906 149.453C97.9874 157.561 93.8106 168.079 93.8106 179.573C93.8106 181.845 93.9736 184.078 94.2887 186.261C96.297 186.527 98.3458 186.664 100.427 186.664C111.921 186.664 122.439 182.487 130.547 175.568ZM98.856 200.643C99.3779 200.657 99.9014 200.664 100.427 200.664C115.562 200.664 129.398 195.099 140 185.903C150.602 195.099 164.438 200.664 179.574 200.664C180.26 200.664 180.944 200.652 181.625 200.629C173.95 215.687 158.298 226 140.237 226C122.182 226 106.534 215.694 98.856 200.643ZM79.8533 181.868C79.8249 181.107 79.8106 180.342 79.8106 179.573C79.8106 164.438 85.3754 150.602 94.5707 140C85.3754 129.398 79.8106 115.562 79.8106 100.427C79.8106 99.8203 79.8195 99.2161 79.8372 98.6141C64.5261 106.203 54 121.99 54 140.237C54 158.49 64.5335 174.282 79.8533 181.868ZM94.2216 94.2215C93.9505 96.2513 93.8106 98.3226 93.8106 100.427C93.8106 111.92 97.9874 122.439 104.906 130.547C110.044 126.838 115.787 123.917 121.96 121.96C123.917 115.787 126.838 110.043 130.547 104.906C122.439 97.9873 111.921 93.8104 100.427 93.8104C98.3226 93.8104 96.2514 93.9504 94.2216 94.2215ZM140 115.948C139.354 116.998 138.748 118.077 138.185 119.181C138.866 119.158 139.55 119.147 140.237 119.147C140.762 119.147 141.286 119.154 141.808 119.167C141.247 118.068 140.644 116.994 140 115.948ZM149.453 104.906C153.129 109.998 156.031 115.685 157.988 121.796C164.361 123.752 170.285 126.733 175.568 130.547C182.487 122.439 186.664 111.92 186.664 100.427C186.664 98.3457 186.527 96.2969 186.261 94.2886C184.078 93.9735 181.845 93.8104 179.574 93.8104C168.08 93.8104 157.561 97.9873 149.453 104.906ZM160.81 137.943C162.083 138.573 163.323 139.26 164.526 140C163.328 140.737 162.094 141.421 160.826 142.049C160.844 141.447 160.853 140.843 160.853 140.237C160.853 139.469 160.839 138.704 160.81 137.943ZM140 94.5706C150.602 85.3753 164.438 79.8104 179.574 79.8104C180.342 79.8104 181.107 79.8248 181.868 79.8532C174.283 64.5334 158.49 54 140.237 54C121.991 54 106.203 64.526 98.6143 79.8371C99.2162 79.8194 99.8203 79.8104 100.427 79.8104C115.562 79.8104 129.398 85.3753 140 94.5706ZM119.147 140.237C119.147 140.762 119.154 141.286 119.167 141.808C118.068 141.247 116.994 140.644 115.948 140C116.999 139.354 118.077 138.748 119.181 138.185C119.158 138.866 119.147 139.55 119.147 140.237ZM200.664 100.427C200.664 99.9014 200.657 99.3778 200.644 98.8559C215.694 106.534 226 122.182 226 140.237C226 158.297 215.687 173.949 200.629 181.625C200.652 180.944 200.664 180.26 200.664 179.573C200.664 164.438 195.099 150.602 185.904 140C195.099 129.398 200.664 115.562 200.664 100.427Z"
                        fill="#3b3b3b"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_501_1384">
                        <rect
                          width="200"
                          height="200"
                          fill="white"
                          transform="translate(40 40)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <div class="sticky top-[25%] overflow-hidden rounded-3xl border bg-[#000] px-2 sm:px-10">
              <div class="flex items-center gap-x-4 md:gap-x-6">
                <img
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  class="h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"
                  src="//images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"
                />
                <h3 class="text-accent-500 3xl:py-9 py-7 text-left text-[6vw] font-bold  sm:py-5 sm:text-[5vw] md:py-4 md:text-[4vw]   ">
                  Web Design
                </h3>
              </div>
              <div class="relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 ">
                <p class=" text-secondary-75 md:text-h6 2xl:text-h5 col-span-12 max-w-[40ch] pt-2 text-base font-medium lg:col-span-6">
                  I design user-centric websites that enhance your brand and
                  drive business goals. Clean typography and minimal layouts has
                  my full attention to create a compelling online presence.
                </p>
                <div class="text-h5 md:text-h4 2xl:text-h3 col-span-6 flex w-full flex-col gap-y-4 pt-8 lg:pt-0">
                  <span class="text-accent-500 font-bold">
                    Responsive Design
                  </span>
                  <span class="text-accent-500 font-bold">Wireframing</span>
                  <span class="text-accent-500 font-bold">UX Writing</span>
                </div>
                <span
                  data-scroll
                  data-scroll-speed="0.1"
                  class="text-number leading-tighter  text-secondary-300 absolute  bottom-0 -z-10 flex  w-full items-end justify-end font-extrabold opacity-30 "
                >
                  <svg
                    width="280"
                    height="280"
                    viewBox="0 0 280 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.000366211"
                      width="280"
                      height="280"
                      rx="32"
                      fill="none"
                    />
                    <g clip-path="url(#clip0_501_1868)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M140 73.6453C132.774 73.6453 126.916 79.5032 126.916 86.7294H93.271C93.271 60.9217 114.192 40.0004 140 40.0004C165.808 40.0004 186.729 60.9217 186.729 86.7294C186.729 112.537 165.808 133.458 140 133.458V99.8135C147.226 99.8135 153.084 93.9555 153.084 86.7294C153.084 79.5032 147.226 73.6453 140 73.6453ZM206.355 140C206.355 132.774 200.497 126.916 193.271 126.916V93.2714C219.079 93.2714 240 114.193 240 140C240 165.808 219.079 186.729 193.271 186.729C167.463 186.729 146.542 165.808 146.542 140H180.187C180.187 147.226 186.045 153.084 193.271 153.084C200.497 153.084 206.355 147.226 206.355 140ZM86.729 153.084C79.5028 153.084 73.6449 147.226 73.6449 140C73.6449 132.774 79.5028 126.916 86.729 126.916C93.9551 126.916 99.8131 132.774 99.8131 140H133.458C133.458 114.193 112.537 93.2714 86.729 93.2714C60.9213 93.2714 40 114.193 40 140C40 165.808 60.9213 186.729 86.729 186.729V153.084ZM140 206.355C147.226 206.355 153.084 200.497 153.084 193.271H186.729C186.729 219.079 165.808 240 140 240C114.192 240 93.271 219.079 93.271 193.271C93.271 167.463 114.192 146.542 140 146.542V180.187C132.774 180.187 126.916 186.045 126.916 193.271C126.916 200.497 132.774 206.355 140 206.355Z"
                        fill="#3b3b3b"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_501_1868">
                        <rect
                          width="200"
                          height="200"
                          fill="white"
                          transform="translate(40 40.0004)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <div class="sticky top-[45%] overflow-hidden rounded-3xl  border bg-[#000] px-2  sm:px-10">
              <div class="flex items-center gap-x-4 md:gap-x-6">
                <img
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  class="h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"
                  src="//images.ctfassets.net/fwy0yv14lkat/4tOmYgqGG5ImynJhHuG6k6/bfdee331cc56aa0f1ab40a4c83510a28/L9.svg"
                />
                <h3 class="text-accent-500 3xl:py-9 py-7 text-left text-[6vw] font-bold  sm:py-5 sm:text-[5vw] md:py-4 md:text-[4vw]   ">
                  SEO
                </h3>
              </div>
              <div class="relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 ">
                <p class=" text-secondary-75 md:text-h6 2xl:text-h5 col-span-12 max-w-[40ch] pt-2 text-base font-medium lg:col-span-6">
                  Beyond crafting visually memorable websites, I also optimize
                  your online presence to elevate your visibility in search
                  rankings so your voices can be heard in the digital landscape.
                </p>
                <div class="text-h5 md:text-h4 2xl:text-h3 col-span-6 flex w-full flex-col gap-y-4 pt-8 lg:pt-0">
                  <span class="text-accent-500 font-bold">Technical SEO</span>
                  <span class="text-accent-500 font-bold">
                    On-Page Optimization
                  </span>
                  <span class="text-accent-500 font-bold">
                    SEO Audits &amp; Analysis
                  </span>
                </div>
                <span
                  data-scroll
                  data-scroll-speed="0.1"
                  class="text-number leading-tighter  text-secondary-300 absolute  bottom-0 -z-10 flex  w-full items-end justify-end font-extrabold opacity-30 "
                >
                  <svg
                    width="280"
                    height="280"
                    viewBox="0 0 280 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="280" height="280" rx="32" fill="#none" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M140 240C195.228 240 240 195.228 240 140C240 84.7715 195.228 40 140 40C84.7715 40 40 84.7715 40 140C40 195.228 84.7715 240 140 240ZM140 228C188.601 228 228 188.601 228 140C228 91.3989 188.601 52 140 52C91.3989 52 52 91.3989 52 140C52 188.601 91.3989 228 140 228ZM140 216C181.974 216 216 181.974 216 140C216 98.0264 181.974 64 140 64C98.0264 64 64 98.0264 64 140C64 181.974 98.0264 216 140 216ZM140 204C175.346 204 204 175.346 204 140C204 104.654 175.346 76 140 76C104.654 76 76 104.654 76 140C76 175.346 104.654 204 140 204ZM192 140C192 168.719 168.719 192 140 192C111.281 192 88 168.719 88 140C88 111.281 111.281 88 140 88C168.719 88 192 111.281 192 140ZM180 140C180 162.091 162.091 180 140 180C117.909 180 100 162.091 100 140C100 117.909 117.909 100 140 100C162.091 100 180 117.909 180 140Z"
                      fill="#3b3b3b"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
