
"use client"
import '@/styles/globals.css';
import { PageProvider } from '../context/pageContext';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
// import LocomotiveScroll from "locomotive-scroll";

export default function App({ Component, pageProps }) {
  const router = useRouter();

    useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll(
          );
      }
    )()
  }, [])

  return (
    <AnimatePresence mode="wait">
      <div key={router.pathname}>
        <Component {...pageProps} />
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
      </div>
    </AnimatePresence>
  );
}
