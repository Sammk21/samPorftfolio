import React from 'react';

export const Header = () => {
  return (
    <div className="header fixed  left-0 top-0 z-50 w-screen  px-3 text-white  mix-blend-difference transition-all duration-500 ease-out">
      <div className="flex items-center justify-between py-5">
        <div className="nav relative flex">
          <div className="text-3xl font-bold">sam</div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 280 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.000488281"
              width="280"
              height="280"
              rx="32"
              fill="#none"
            />
            <path
              d="M40 40.0005H88.5597C115.378 40.0005 137.119 61.7414 137.119 88.5602C137.119 115.379 115.378 137.12 88.5597 137.12H40V40.0005Z"
              fill="white"
            />
            <path
              d="M40 195.556C40 166.464 63.5833 142.881 92.6749 142.881H137.119V240H40V195.556Z"
              fill="white"
            />
            <path
              d="M142.881 191.441C142.881 164.622 164.622 142.881 191.44 142.881H240V240H191.44C164.622 240 142.881 218.26 142.881 191.441Z"
              fill="white"
            />
            <path
              d="M142.881 40.0005H240V84.445C240 113.536 216.417 137.12 187.325 137.12H142.881V40.0005Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex gap-x-5 text-[3vw] sm:text-lg ">
          <span className="nav -mr-3 h-3 w-3 self-center rounded-full bg-green"></span>
          <h1 className="nav">
            <span>Available for freelance work</span>
          </h1>
          <h1 className="nav"> ©2024</h1>
        </div>
      </div>
    </div>
  );
};
