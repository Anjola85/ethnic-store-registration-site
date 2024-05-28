"use client";
import useWindowWidth from "./useWindowWidth";
import {
  DESKTOP,
  LARGE_DESKTOP,
  LARGE_PHONE,
  LARGE_TABLET,
  PHONE,
  SMALL_PHONE,
  TABLET,
} from "../constants/windowConstants";
import { useEffect } from "react";

function useScreenType() {
  const windowWidth = useWindowWidth();

  useEffect(() => {}, [windowWidth]); // Empty dependency array means this effect runs once on mount

  if (windowWidth && windowWidth < 375) {
    return SMALL_PHONE;
  } else if (windowWidth && windowWidth < 425) {
    return PHONE;
  } else if (windowWidth && windowWidth < 550) {
    return LARGE_PHONE;
  } else if (windowWidth && windowWidth < 768) {
    return TABLET;
  } else if (windowWidth && windowWidth < 1024) {
    return LARGE_TABLET;
  } else if (windowWidth && windowWidth <= 1440) {
    return DESKTOP;
  } else if (windowWidth && windowWidth > 1440) {
    return LARGE_DESKTOP;
  }
}

export default useScreenType;
