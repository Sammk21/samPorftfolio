import { slideUp } from '@/animation/anim';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

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
    "Using my love for creating websites and apps, I help startups make unique online experiences. I guide projects from ideas to launch, making sure they stand out and work well. It's all about leaving a strong impression in the online worl.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <>
      <section ref={container} className="relative">
        <div className=" flex justify-start gap-x-7 text-[12vw] font-bold sm:text-[8vw]">
          <h1>About me.</h1>
        </div>
        <div className=" mt-14 flex w-full justify-center">
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
                  src="/sam.jpg"
                  fill
                  className="rounded-lg object-cover object-center "
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mb-14 flex">
          <div className="  hidden w-[50%] sm:block"></div>
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
      </section>
    </>
  );
};

export default AboutMe;
