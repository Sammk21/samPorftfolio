import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import PreLoader from '@/components/pre-loader/index';

export default function Page({ children }) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  console.log(scaleX);
  return (
    <>
      <motion.div className="progress z-[9999]" style={{ scaleX }} />
      <div ref={container} className="h-auto w-auto">
        <PreLoader />
        <Header />
        <main className="py-2">{children}</main>
        <Footer />
      </div>
    </>
  );
}
