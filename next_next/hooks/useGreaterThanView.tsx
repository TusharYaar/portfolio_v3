import { useState, useEffect } from "react";

const checkWidth = (width: number, values: number[]) => {
  return values.map((value) => width > value);
};

const useGreaterThanView = (width: number[]) => {
  const widthKey = width.join(",");

  // Keep initial render identical on server and client; read window only after mount.
  const [state, setState] = useState<boolean[]>(() =>
    new Array(width.length).fill(true),
  );

  useEffect(() => {
    const breakpoints = widthKey.split(",").map(Number);
    const handleResize = () =>
      setState(checkWidth(window.innerWidth, breakpoints));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [widthKey]);

  return state;
};

export default useGreaterThanView;
