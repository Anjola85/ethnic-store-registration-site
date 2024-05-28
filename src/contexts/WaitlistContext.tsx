"use client"
import React, { createContext, useContext, useState } from 'react';

interface ProviderProps {
    children: React.ReactNode;
}

// Create a context with an empty object, the actual value will be provided later
const WaitlistContext = createContext({
  isCustomerWaitlistVisible: false,
  isDriverWaitlistVisible: false,
  toggleCustomerWaitlist: () => {},
  toggleDriverWaitlist: () => {},
});

export const useWaitlist = () => useContext(WaitlistContext);

export const WaitlistProvider = ({ children }:ProviderProps) => {
  const [isCustomerWaitlistVisible, setIsCustomerWaitlistVisible] = useState(false);
  const [isDriverWaitlistVisible, setIsDriverWaitlistVisible] = useState(false);

  const toggleCustomerWaitlist = () => {
    setIsCustomerWaitlistVisible(!isCustomerWaitlistVisible);
    document.documentElement.classList.toggle('html-no-scroll', !isCustomerWaitlistVisible);

    const currentOverflowY = document.documentElement.style.overflowY;

    // Toggle the overflow-y property based on its current state
    if (currentOverflowY !== 'hidden') {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }
  };

  const toggleDriverWaitlist = () => {
    setIsDriverWaitlistVisible(!isDriverWaitlistVisible);
    document.documentElement.classList.toggle('html-no-scroll', !isDriverWaitlistVisible);

    const currentOverflowY = document.documentElement.style.overflowY;

    // Toggle the overflow-y property based on its current state
    if (currentOverflowY !== 'hidden') {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }
  };

  return (
    <WaitlistContext.Provider 
      value={{ 
        isCustomerWaitlistVisible: isCustomerWaitlistVisible,
        isDriverWaitlistVisible: isDriverWaitlistVisible,
        toggleCustomerWaitlist: toggleCustomerWaitlist,
        toggleDriverWaitlist: toggleDriverWaitlist 
      }}>
      {children}
    </WaitlistContext.Provider>
  );
};
