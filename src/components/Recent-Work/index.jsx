// import { easeOut, useInView, useScroll, useTransform } from 'framer-motion';
// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { slideUpTitle } from '@/animation/anim';
// import { PiArrowUpRightThin } from 'react-icons/pi';
// import CustomCursor from '@/components/custom-crusor/Cursor';
// import gsap from 'gsap/dist/gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// const Projects = () => {
//   const containerr = useRef();

//   const { scrollYProgress } = useScroll({
//     target: containerr,
//     offset: ['start end', 'end start'],
//   });

//   const title = useRef(null);
//   const isInViewTitle = useInView(title);
//   const projectTitle = 'Projects';

//   const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

//   const [hoveredProject, setHoveredProject] = useState(null);

//   const handleMouseEnter = (videoSrc) => {
//     setHoveredProject({ scale: 15, videoSrc });
//   };

//   const handleMouseLeave = () => {
//     setHoveredProject(null);
//   };

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     let revealContainers = document.querySelectorAll('.reveal');
//     revealContainers.forEach((container) => {
//       let image = container.querySelector('img');
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           toggleActions: 'restart none none none',
//         },
//       });
//       tl.set(container, { autoAlpha: 1 });
//       tl.from(container, 1.5, {
//         xPercent: -100,
//         duration: 200,
//         stagger: 1,
//         ease: 'power4.out',
//         animationIterationCount: 1,
//       });
//       tl.from(image, 1.5, {
//         xPercent: 100,
//         duration: 200,
//         scale: 1.3,
//         delay: -1.5,
//         ease: 'power4.out',
//         animationIterationCount: 1,
//       });
//     });
//   }, []);

//   return (
//     <>
//       <div
//         ref={containerr}
//         className=" relative mt-12 flex w-full flex-col justify-center overflow-x-hidden "
//       >
//         <div className="title flex items-center justify-between">
//           <div
//             ref={title}
//             className="flex items-center justify-start text-[12vw] font-bold sm:text-[8vw]"
//           >
//             {projectTitle.split('').map((word, index) => {
//               return (
//                 <span
//                   className="relative inline-flex overflow-hidden text-center "
//                   key={index}
//                 >
//                   <motion.span
//                     viewport={{ once: true }}
//                     className="inline-block"
//                     variants={slideUpTitle}
//                     custom={index}
//                     transition={{ ease: [0.16, 1, 0.3, 1] }}
//                   >
//                     {word}
//                   </motion.span>
//                 </span>
//               );
//             })}
//             <span className="text-[4vw] ">
//               (<span className="text-[#ff0000]">2</span>)
//             </span>
//           </div>
//           <div className=" h-[8vw] w-[8vw] -scale-x-[1]">
//             <motion.svg
//               style={{ rotate: y }}
//               width="100%"
//               height="100%"
//               viewBox="0 0 64 64"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 12L52 52M52 52L12 52M52 52L52 12"
//                 stroke="white"
//                 stroke-width="0.2"
//               />
//             </motion.svg>
//           </div>
//         </div>
//         <div className="mx-auto grid grid-cols-2 gap-7 py-10 text-2xl font-medium ">
//           <motion.div
//             viewport={{ once: true }}
//             className="project-container  py-4"
//           >
//             <div className=" relative aspect-square ">
//               <a target="_blank" href="https://github.com/Sammk21/AfStore">
//                 <div class="container ">
//                   <div class="reveal bg-[#ff8800b3]">
//                     <img
//                       className="bottom-0 left-0 right-0 top-0 h-full w-full object-cover "
//                       onMouseEnter={() => handleMouseEnter('/videos/AF.gif')}
//                       onMouseLeave={handleMouseLeave}
//                       src="/videos/IMAGE.PNG"
//                     />
//                   </div>
//                 </div>
//               </a>
//               <div className="project-title absolute bottom-[5%] left-[5%] text-black ">
//                 <div className="flex flex-col gap-y-2">
//                   <div className="flex flex-col gap-y-2  overflow-hidden text-xs"></div>
//                   <a href="">
//                     <div className="group flex w-[100%] items-center justify-between gap-x-3">
//                       <div className=" rounded-full bg-white px-3 py-4 drop-shadow-sm">
//                         AELZEL
//                       </div>
//                       <div className="flex h-fit items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm ">
//                         <PiArrowUpRightThin className="stroke-black " />
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={false}
//             viewport={{ once: true }}
//             className="py-4"
//           >
//             <div className=" relative aspect-square">
//               <a target="_blank" href="https://github.com/Sammk21/dbz-store-of">
//                 <div className="container h-full w-full">
//                   <div className="reveal h-full w-full bg-[#ff8800b3]">
//                     <img
//                       className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-3xl object-cover "
//                       onMouseEnter={() => handleMouseEnter('/Movie.gif')}
//                       onMouseLeave={handleMouseLeave}
//                       src="/images/DBZ2.png"
//                     />
//                   </div>
//                 </div>
//               </a>
//               <div className="absolute bottom-[5%] left-[5%]">
//                 <div className="flex flex-col gap-y-2">
//                   <div className="flex flex-col gap-y-2  text-xs"></div>
//                   <div className="project-title  text-black ">
//                     <a
//                       target="_blank"
//                       href="https://github.com/Sammk21/dbz-store-of"
//                     >
//                       <div className="group flex w-[100%] items-center justify-between gap-x-3">
//                         <motion.div className=" cursor-pointer rounded-full bg-white px-3 py-4 drop-shadow-sm">
//                           Divide by zero
//                         </motion.div>
//                         <motion.div className=" flex h-fit cursor-pointer items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm ">
//                           <PiArrowUpRightThin className="stroke-black " />
//                         </motion.div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//         <CustomCursor
//           s={hoveredProject?.scale || 4}
//           videoSrc={hoveredProject?.videoSrc}
//         />
//       </div>
//     </>
//   );
// };
// export default Projects;

import { PiArrowUpRightThin } from 'react-icons/pi';
import BlurFade from '../ui/blur-fade';
import Safari from '../ui/safari';

const Projects = () => {
  return (
    <section className=" gap  my-16 grid-cols-2 flex-col gap-x-3 gap-y-6 sm:grid">
      <BlurFade key={1} delay={0.25 + 1 * 0.05} inView>
        <div className="relative flex flex-col justify-start">
          <Safari
            src={'/videos/AF.gif'}
            url="aelzel.com"
            className="size-full"
          />
          <div className="">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2  text-xs"></div>
              <div className="project-title  text-black ">
                <a target="_blank" href="https://github.com/Sammk21/AfStore">
                  <div className="group flex w-[100%] items-center  gap-x-3">
                    <div className=" cursor-pointer rounded-full bg-white px-3 py-4 drop-shadow-sm">
                      AELZEL
                    </div>
                    <div className=" flex h-fit cursor-pointer items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm ">
                      <PiArrowUpRightThin className="stroke-black " />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
      <BlurFade key={2} delay={0.25 + 2 * 0.05} inView>
        <div className="relative mt-5 flex flex-col justify-start sm:mt-0">
          <Safari
            src={'/Movie.gif'}
            url="dividebyzero.com"
            className="size-full"
          />
          <div className="">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2  text-xs"></div>
              <div className="project-title  text-black ">
                <a
                  target="_blank"
                  href="https://github.com/Sammk21/dbz-store-of"
                >
                  <div className="group flex w-[100%] items-center  gap-x-3">
                    <div className=" cursor-pointer rounded-full bg-white px-3 py-4 drop-shadow-sm">
                      Divide by zero
                    </div>
                    <div className=" flex h-fit cursor-pointer items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm ">
                      <PiArrowUpRightThin className="stroke-black " />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
      <BlurFade key={2} delay={0.25 + 2 * 0.05} inView>
        <div className="relative mt-5 flex flex-col justify-start sm:mt-0">
          <Safari
            src={'/images/onlyeducation.webp'}
            url="dividebyzero.com"
            className="size-full"
          />
          <div className="">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2  text-xs"></div>
              <div className="project-title  text-black ">
                <a target="_blank" href="https://onlyeducation.in">
                  <div className="group flex w-[100%] items-center  gap-x-3">
                    <div className=" cursor-pointer rounded-full bg-white px-3 py-4 drop-shadow-sm">
                      Only Education
                    </div>
                    <div className=" flex h-fit cursor-pointer items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm ">
                      <PiArrowUpRightThin className="stroke-black " />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
export default Projects;
