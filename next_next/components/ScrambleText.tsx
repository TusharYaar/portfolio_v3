import { useState, useEffect } from "react";
import { motion, useAnimate } from "motion/react";

type Props = {
  text: string;
  duration?: number;
  delay?: number;
};

const Frames = 10;
const ScrambleText = ({ text, duration = 0.8, delay = 0 }: Props) => {
  const [displayedText, setDisplayedText] = useState("");
  const [, animate] = useAnimate();
  const characters =
    "!@#$%^&*()_□▪▫●○◆◇◈†‡aBWENDOJKウエオカキクケコuqwozxbvt░▒▓█▀▄■□";

  useEffect(() => {
    // 1. Create a motion value to track progress (0 to 1)
    let currentProgress = 0;
    const count = animate(0, Frames, {
      duration: duration,
      delay: delay,
      ease: "easeInOut",
      onComplete: () => (currentProgress = 0),
      onUpdate: (latest) => {
        if (latest == 0) return;
        const progress = Math.floor(latest);
        if (progress <= currentProgress) return;
        else currentProgress = progress;
        const result = text
          .split("")
          .map((char) => {
            if (latest == Frames) {
              return char; // Show actual letter
            }
            // Show random character for the rest
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");
        setDisplayedText(result);
      },
    });

    return () => count.stop();
  }, [text, duration, delay, animate]);

  return <motion.span>{displayedText}</motion.span>;
};

export default ScrambleText;
