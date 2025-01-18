"use client";

import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";

const RouteChangeListener = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleStart = () => {
      console.log("Route change started");
      NProgress.start();
    };
    const handleComplete = () => {
      console.log("Route change completed");
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);

    // Cleanup
    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);

  return null;
};

export default RouteChangeListener;
