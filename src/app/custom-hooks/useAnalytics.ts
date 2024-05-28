"use client";
import router from "next/router";
import { useEffect } from "react";

const useAnalytics = () => {
  //   const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // analytics tracking code goes here
      
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Call handleRouteChange immediately to track the initial page load
    handleRouteChange(window.location.pathname);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

export default useAnalytics;
