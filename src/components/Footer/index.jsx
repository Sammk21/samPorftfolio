import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import BorderButton from '../Common/button';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import MagneticButton from '../Common/magnetic-button';
import Link from 'next/link';

export default function Footer() {
  const container = useRef();
  const paths = useRef([]);
  const paths2 = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  useEffect(() => {
    scrollYProgress.on('change', (e) => {
      paths2.current.forEach((path, i) => {
        path.setAttribute('startOffset', -30 + i * 10 + e * 30 + '%');
      });
      paths.current.forEach((path, i) => {
        path.setAttribute('startOffset', -30 + i * 10 + e * 30 + '%');
      });
    });
  }, []);

  return (
    <div className="relative" ref={container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 400"
      >
        <path
          d="M1.7937219142913818,383.85650634765625C47.428998784224184,332.49028793334963,82.97160036802292,208.84305282592774,194.61883544921875,166.81614685058594C306.2660705304146,124.78924087524413,331.7548571777344,242.3617383257548,473.5426025390625,206.2780303955078C615.3303479003906,170.19432246526083,717.9461977132162,59.77279568354289,793.7219848632812,14.349775314331055"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="0 0"
          id="curve"
        ></path>
        <text className="text-XL bg-white uppercase" style={{ fill: 'red' }}>
          {[...Array(30)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => (paths.current[i] = ref)}
                startOffset={i * 40 + '%'}
                href="#curve"
              >
                WEB DEV *
              </textPath>
            );
          })}
        </text>
      </svg>
      <svg
        className="absolute top-0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 400"
      >
        <path
          d="M797.3093872070312,397.3094177246094C698.9147723388672,373.999997253418,476.9775619506836,360.941690826416,369.5067138671875,295.964111328125C262.0358657836914,230.986531829834,414.6188184714317,182.66367009997367,330.0448303222656,114.79820251464844C245.47084217309953,46.9327349293232,77.29147684812546,27.09416951537132,1.7937219142913818,0.8968609571456909"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="0 0"
          id="curve2"
        ></path>
        <text className="text-XL bg-white uppercase" style={{ fill: 'red' }}>
          {[...Array(30)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => (paths2.current[i] = ref)}
                startOffset={i * 40 + '%'}
                href="#curve2"
              >
                WEB DEV *
              </textPath>
            );
          })}
        </text>
      </svg>
      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
}

const Logos = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);

  return (
    <div className="relative h-auto overflow-hidden bg-black">
      <motion.div
        style={{ y }}
        className="z-20 flex h-[90vh] flex-col justify-between  gap-10 bg-black px-10 py-16   sm:px-16  sm:py-28 "
      >
        <div className="z-50 flex h-full w-full flex-col">
          <div className="flex hidden flex-col text-center text-[6vw] leading-none tracking-tight sm:block sm:flex">
            <span>LET'S GET</span>{' '}
            <span>
              YOU IN <span className="text-[#ff0000]">CREATIVE</span>{' '}
            </span>
            <span>SPACE</span>
          </div>
          <div className="flex  flex-col text-center text-[30vw] leading-none tracking-tight sm:hidden">
            <span>LET'S</span>
            <span>
              <span className="text-[#ff0000]">Talk</span>{' '}
            </span>
          </div>

          <div className="my-10 flex flex-col justify-around sm:flex-row">
            <MagneticButton>
              <button className=" mb-5 w-full rounded-full border  border-[#b9bcc147] px-[3vw] py-[2vw] text-[7vw] sm:w-[45%] sm:text-[3vw]">
                <span className="text-[80%]">05sameerk@gmail.com</span>
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className=" mb-5 w-full rounded-full border  border-[#b9bcc147] px-[3vw] py-[2vw] text-[7vw] sm:w-[45%] sm:text-[3vw]">
                <span className="text-[80%]">+91 9321818850</span>
              </button>
            </MagneticButton>
          </div>
          <div className="socials mt-16 flex  items-center  justify-between gap-y-5">
            <Socialbutton>Instagram</Socialbutton>
            <Socialbutton>Linkdin</Socialbutton>
            <Socialbutton>Github</Socialbutton>
          </div>
          <div className="py-3 text-sm sm:text-lg">
            <p>©2024 Sam, All Rights Reserved • Credits</p>
          </div>
        </div>
      </motion.div>
      <Svg scrollProgress={scrollProgress} />
    </div>
  );
};

function Socialbutton({ children }) {
  return (
    <>
      <Link href="/" className="cta font-base  ">
        <span className="hover-underline-animation">{children}</span>
      </Link>
    </>
  );
}
function Svg({ scrollProgress }) {
  const y = useTransform(scrollProgress, [0, 1], [200, 1]);
  const scale = useTransform(scrollProgress, [0, 1], [2, 1]);

  return (
    <>
      <motion.svg
        style={{ y, scale: scale }}
        className="absolute top-0 z-10 w-[200%] "
        id="c-circle"
        viewBox="0 0 1254 1254"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="627"
          cy="627"
          r="627"
          fill="url(#paint0_radial_3260_3)"
        ></circle>
        <defs>
          <radialGradient
            id="paint0_radial_3260_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(627) rotate(90) scale(813)"
          >
            <stop stopColor="#F3F3F3" stopOpacity="0.45"></stop>{' '}
            <stop offset="1" stop-color="white" stopOpacity="0"></stop>{' '}
          </radialGradient>
        </defs>
      </motion.svg>
    </>
  );
}
  

