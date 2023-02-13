import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

function Tagline() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  const taglines = [
    "Effortless understanding",
    "Revolutionize your learning",
    "Unlock your potential",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
      setTimeout(() => {
        setIndex((index + 1) % taglines.length);
        controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
      }, 3000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [index, controls]);

  return (
    <motion.div className="tagline">
      <motion.h1 key={index} initial={{ opacity: 0 }} animate={controls}>
        {taglines[index]}
      </motion.h1>
    </motion.div>
  );
}

export default Tagline;
