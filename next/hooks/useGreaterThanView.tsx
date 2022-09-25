import { useState, useEffect } from "react";

const checkWidth = (width: number, values: number | number[]) => {
  if (typeof values === "number") {
    return width > values;
  } else {
    return values.map((value) => width > value);
  }
};

const useGreaterThanView = (width: number | number[]) => {
  const [state, setState] = useState<boolean | boolean[]>(true);

  useEffect(() => {
    // console.log(width);
    setState(checkWidth(window.innerWidth, width));
    window.addEventListener("resize", (event) => {
      setState(checkWidth(window.innerWidth, width));
    });
    // return () => window.removeEventListener("resize")
  }, []);

  return state;
};

export default useGreaterThanView;
