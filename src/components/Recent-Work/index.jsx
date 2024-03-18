import { useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { PiArrowUpRightThin } from 'react-icons/pi';
import CustomCursor from '@/components/custom-crusor/Cursor';
import AboutMe from '../About-me';

const Projects = () => {
  const containerr = useRef();

  const { scrollYProgress } = useScroll({
    target: containerr,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const img1transform = useTransform(scrollYProgress, [0, 1], [2, 1]);

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
        className=" relative flex w-full flex-col justify-center overflow-x-hidden "
      >
        <div className="title flex items-center justify-between">
          <div className="flex items-center justify-start  gap-x-2 text-[12vw] font-bold sm:text-[8vw]">
            <span>Projects</span>{' '}
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
        <div className="relative flex h-[120vh] flex-col items-center justify-center gap-y-7  text-2xl font-medium">
          <motion.div
            initial={false}
            animate={
              isInView1
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView1(true)}
            onMouseEnter={() => handleMouseEnter('/videos/websites.mp4')}
            onMouseLeave={handleMouseLeave}
            className="left-[10%] top-[5%] lg:absolute"
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
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            className="right-[10%] top-[35%] lg:absolute"
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
