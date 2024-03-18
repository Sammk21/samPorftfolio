import {
  useScroll,
  useTransform,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import React, { useRef } from 'react';

const Hero2 = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [5, 2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <section
      ref={container}
      id="hero"
      class="mb-[-100svh] overflow-x-hidden py-0"
    >
      <div class="section-padding sticky top-0 flex h-svh w-full justify-center sm:items-center ">
        <motion.svg
          width="1186"
          height="1186"
          viewBox="0 0 1186 1186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute -bottom-[70%] z-0 w-[70%] opacity-15 sm:w-3/5 lg:w-2/5"
          style={{ y, scale: scale }}
        >
          <circle
            cx="593"
            cy="593"
            r="593"
            fill="url(#paint0_linear_4949_267)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_4949_267"
              x1="593"
              y1="0"
              x2="593"
              y2="1186"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DDDDD5"></stop>
              <stop offset="1" stop-color="#DDDDD5" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </motion.svg>
        <div className="flex h-full w-full items-center justify-center">
          <Text scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <div></div>
      <div class="h-svh"></div>
    </section>
  );
};

export default Hero2;

const Text = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.8], [3, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 1], [1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.8], [3, 1]);
  return (
    <motion.div style={{ opacity: opacity, scale }} class=" z-10  ">
      <div class="flex h-full w-full flex-col gap-y-3 text-[12vw] sm:mb-0 sm:items-center sm:gap-y-8 sm:text-[10vw] lg:text-[8vw]">
        <motion.h1 style={{ y }} className="font-medium">
          Hi there, i'm sam{' '}
        </motion.h1>
        <p class="text-secondary-100 xl:text-h6 2xl:text-h5 max-w-[38ch] pl-1 text-start text-base font-medium sm:pl-0 sm:text-center">
          A passionate web developer & web designer Let's collaborate to &amp;
          elevate your digital footprint with style and innovation
        </p>
      </div>
    </motion.div>
  );
};
