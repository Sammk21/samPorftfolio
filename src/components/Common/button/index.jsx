import React from 'react';
import MagneticButton from '../magnetic-button';
import { cn } from '@/util/cn';

const BorderButton = ({ content, className }) => {
  return (
    <MagneticButton>
      <button
        className={cn(
          'about relative cursor-pointer overflow-hidden  border border-[#b9bcc147]  text-white',
          className
        )}
      >
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">{content}</span>
      </button>
    </MagneticButton>
  );
};

export default BorderButton;
