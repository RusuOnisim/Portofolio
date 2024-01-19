import { motion } from "framer-motion";

export const slideInAnimation = {
  hidden: { x: "-100vw" },
  visible: { x: 0 ,
    transition: {
        duration: 1.25,
        ease: "easeOut",
      },
},
};

export const SlideInMotion = motion.div;
