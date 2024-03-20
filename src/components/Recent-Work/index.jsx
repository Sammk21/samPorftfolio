import { easeOut, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpTitle } from '@/animation/anim';
import { PiArrowUpRightThin } from 'react-icons/pi';
import CustomCursor from '@/components/custom-crusor/Cursor';
const Projects = () => {
  const containerr = useRef();

  const { scrollYProgress } = useScroll({
    target: containerr,
    offset: ['start end', 'end start'],
  });

  const title = useRef(null);
  const isInViewTitle = useInView(title);
  const projectTitle = 'Projects';

  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const img1transform = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 50px, rgba(0,0,0,1) 50px, rgba(0,0,0,1) 50px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const [isInView, setIsInView] = useState(false);
  const [isInView1, setIsInView1] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (videoSrc) => {
    setHoveredProject({ scale: 15, videoSrc });
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <>
      <div
        ref={containerr}
        className=" relative mt-12 flex w-full flex-col justify-center overflow-x-hidden "
      >
        <div className="title flex items-center justify-between">
          <div
            ref={title}
            className="flex items-center justify-start text-[12vw] font-bold sm:text-[8vw]"
          >
            {projectTitle.split('').map((word, index) => {
              return (
                <span
                  className="relative inline-flex overflow-hidden text-center "
                  key={index}
                >
                  <motion.span
                    className="inline-block"
                    variants={slideUpTitle}
                    custom={index}
                    animate={isInViewTitle ? 'open' : 'closed'}
                    transition={{ ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
            <span className="text-[4vw] ">
              (<span className="text-[#ff0000]">2</span>)
            </span>
          </div>
          <div className=" h-[8vw] w-[8vw] -scale-x-[1]">
            <motion.svg
              style={{ rotate: y }}
              width="100%"
              height="100%"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12L52 52M52 52L12 52M52 52L52 12"
                stroke="white"
                stroke-width="0.2"
              />
            </motion.svg>
          </div>
        </div>
        <div className="mx-auto grid-cols-10 grid-rows-10 flex-col items-center gap-7 py-10  text-2xl font-medium lg:grid lg:h-[120vh]">
          <motion.div
            initial={false}
            animate={
              isInView1
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView1(true)}
            onMouseEnter={() => handleMouseEnter('/videos/websites.mp4')}
            onMouseLeave={handleMouseLeave}
            className="col-span-4 row-span-4 py-4"
          >
            <div className="relative aspect-square h-[70vw] w-[70vw] overflow-hidden rounded-3xl lg:h-[30vw] lg:w-[30vw]">
              <motion.img
                style={{ scale: img1transform }}
                src="/dddepth-249.jpg"
                fill
                className="bottom-0 left-0 right-0 top-0 h-full w-full object-cover "
              />
              <div className="project-title absolute bottom-[5%] left-[5%] text-black ">
                <div className="flex w-[100%] items-center justify-between gap-x-3">
                  <div className=" rounded-full bg-white px-3 py-4 drop-shadow-sm">
                    Afstrore
                  </div>
                  <div className="flex h-fit items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm">
                    <PiArrowUpRightThin className="stroke-black" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={false}
            animate={
              isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, ease: easeOut }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            className="col-span-6 row-span-8 py-4"
            onMouseEnter={() => handleMouseEnter('/videos/apps.mp4')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative aspect-square h-[70vw] w-[70vw] overflow-hidden rounded-3xl lg:h-[40vw] lg:w-[40vw]">
              <motion.img
                style={{ scale: img1transform }}
                src="https://abhishekjha.me/aeizei.7edf201c.png"
                fill
                className="bottom-0 left-0 right-0 top-0 h-full w-full object-cover "
              />
              <div className="project-title absolute bottom-[5%] left-[5%] text-black ">
                <div className="flex w-[100%] items-center justify-between gap-x-3">
                  <div className=" rounded-full bg-white px-3 py-4 drop-shadow-sm">
                    Combi
                  </div>
                  <div className="flex h-fit items-center justify-center rounded-full bg-white p-4 text-2xl drop-shadow-sm">
                    <PiArrowUpRightThin className="stroke-black" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CustomCursor
        s={hoveredProject?.scale || 4}
        videoSrc={hoveredProject?.videoSrc}
      />
    </>
  );
};
export default Projects;
