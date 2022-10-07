import { useState, useEffect } from "react";

const checkWidth = (width: number, values: number[]) => {
  return values.map((value) => width > value);
};

const useGreaterThanView = (width: number[]) => {
  const [state, setState] = useState<boolean[]>(
    typeof window === "undefined" ? [].fill(true, 0, width.length) : checkWidth(window.innerWidth, width)
  );

  useEffect(() => {
    const handleResize = () => setState(checkWidth(window.innerWidth, width));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, state]);

  return state;
};

export default useGreaterThanView;
