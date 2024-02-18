import { motion } from "framer-motion";

export const slideInAnimation = {
  hidden: { x: "-100vw" },
  visible: { x: 0 , z:0,
    transition: {
        duration: 1.25,
        ease: "easeOut",
      },
},
};

export const SlideInMotion = motion.div;


export const slideInFromRightAnimation = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1,
   
    transition: {
      duration: 1.25,
      ease: "easeInOut",
      delay:1,
    },
  },
};