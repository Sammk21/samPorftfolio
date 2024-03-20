
"use client"
import '@/styles/globals.css';
import { PageProvider } from '../context/pageContext';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import PreLoader from '@/components/pre-loader';
// import LocomotiveScroll from "locomotive-scroll";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div key={router.pathname}>
        <Component {...pageProps} />
        {/* <PageTranstion /> */}
      </div>
    </AnimatePresence>
  );
}

const PageTranstion = () => {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
      ></motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
      ></motion.div>
    </>
  );
};
