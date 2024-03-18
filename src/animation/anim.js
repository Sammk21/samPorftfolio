import { cubicBezier } from 'framer-motion';
const easing = cubicBezier(0.16, 1, 0.3, 1);

export const slideUp = {
  initial: {
    y: '100%',
  },
  open: (i) => ({
    y: '0%',
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
export const height = {
  initial: {
    height: '0%',
  },
  open: {
    height: '100%',
    transition: { duration: 0.5, ease: easing },
  },
  closed: {
    height: 0,
    transition: { duration: 0.5, ease: easing },
  },
};
