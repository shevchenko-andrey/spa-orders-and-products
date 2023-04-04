import { useState, useLayoutEffect, useCallback, useMemo } from "react";

enum Breakpoints {
  sm = 480,
  md = 768,
  lg = 976,
}

export const useCheckBreakpoint = () => {
  const [windowWidth, setWindowWidth] = useState(() => window?.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const result = useMemo(() => {
    return {
      isMobile: windowWidth <= Breakpoints.sm,
      isTablet: windowWidth <= Breakpoints.md,
      isDesktop: windowWidth <= Breakpoints.lg,
    };
  }, [windowWidth]);

  return result;
};
