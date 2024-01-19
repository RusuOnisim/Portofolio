import { slideInAnimation, SlideInMotion } from "../Animations/Slide";

function Contact() {
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className="bg-colorbg h-[100dvh] w-full"
    >
      {/* Your component content */}
      Contactt
    </SlideInMotion>
  );
}

export default Contact;
