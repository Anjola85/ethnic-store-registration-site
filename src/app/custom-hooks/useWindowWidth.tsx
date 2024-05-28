"use client";
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize(); // Set the initial width

    window.addEventListener("resize", handleWindowResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleWindowResize); // Clean up
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return windowWidth;
}

export default useWindowWidth;
