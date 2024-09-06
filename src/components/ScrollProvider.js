import React, { createContext, useContext, useRef } from 'react';

// Create a context to hold the scroll reference
const ScrollContext = createContext();

// Create a provider component
export const ScrollProvider = ({ children }) => {
  const contactRef = useRef(null); // Reference for the "Contact Us" component

  return (
    <ScrollContext.Provider value={{ contactRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the ScrollContext
export const useScroll = () => useContext(ScrollContext);
