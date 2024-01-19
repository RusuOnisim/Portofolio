import { slideInAnimation, SlideInMotion } from "../Animations/Slide";

function Projects() {
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className="bg-colorbg h-[100dvh] w-full"
    >
    
      Projects
    </SlideInMotion>
  );
}

export default Projects;
