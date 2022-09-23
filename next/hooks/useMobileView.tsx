import { useState, useEffect } from "react";

const MOBILE_WIDTH = 480;

const useMobileView = () => {
  const [state, setState] = useState(true);

  useEffect(() => {
    setState(window.innerWidth <= MOBILE_WIDTH);
    window.addEventListener("resize", (event) => {
      setState(window.innerWidth <= MOBILE_WIDTH);
    });
    // return () => window.removeEventListener("resize")
  }, []);

  return state;
};

export default useMobileView;
