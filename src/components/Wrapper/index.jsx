import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className=" relative z-20 flex h-full min-h-screen w-full flex-col overflow-x-clip rounded-b-3xl rounded-t-3xl bg-[black] px-10 py-16 sm:h-[300vh]">
      {children}
    </div>
  );
};

export default Wrapper;
