import { slideInAnimation, SlideInMotion } from "../Animations/Slide";

function About() {
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className="bg-colorbg h-screen w-full"
    >
     
     About
    </SlideInMotion>
  );
}

export default About;
