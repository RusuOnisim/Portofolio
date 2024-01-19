import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isplaying, setIsPlaying] = useState(false);
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale(1 , 1)",
        "scale(1.4 , .55)",
        "scale(.75 , 1.25)",
        "scale(1.25 , .85)",
        "scale(.9 , 1.05)",
        "scale(1 , 1)",
      ],
      transition:{
        times: [0,.8, .9 , 1, ]
      }
    });
    setIsPlaying(true)
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
    if(!isplaying)
         rubberBand()
    }}
    onAnimationComplete={() => setIsPlaying(false)}
    className="inline-block"
    >
  {children}
    </motion.span>



  )
}
export default TextSpan;
