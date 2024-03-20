'use client';
import { createContext, useState } from 'react';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [
    hoveredProject,
    setHoveredProject,
    handleMouseEnter,
    handleMouseLeave,
  ] = useState(null);

  const cursorHandleMouseEnter = (videoSrc) => {
    setHoveredProject({ scale: 15, videoSrc });
  };
  const cursorHandleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <Context.Provider
      value={{
        hoveredProject,
        setHoveredProject,
        cursorHandleMouseEnter,
        cursorHandleMouseLeave,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
