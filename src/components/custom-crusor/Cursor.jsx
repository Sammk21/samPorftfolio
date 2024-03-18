import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = ({ s, videoSrc }) => {
  const cursorRef = useRef(null);
  //   const [content, setContent] = useState(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Animation duration
        ease: 'power2.out', // Easing function
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    // Animate the scale whenever the scale prop changes
    gsap.to(cursorRef.current, {
      scale: s,
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [s]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor overflow-hidden bg-white"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${s}px`,
        height: `${s}px`,
        borderRadius: '50%',
        pointerEvents: 'none', // So that the cursor doesn't interfere with other elements
        zIndex: 9999, // Ensure cursor is on top
        transform: 'translate(-50%, -50%)',
        mixBlendMode: videoSrc ? 'normal' : 'difference',
      }}
    >
      {videoSrc && (
        <video
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          autoPlay
          loop
          src={videoSrc}
        />
      )}
    </div>
  );
};

export default CustomCursor;
