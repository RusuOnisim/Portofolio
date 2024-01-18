import { slideInAnimation, SlideInMotion } from "../Animations/Slide";

function Contact() {
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className="bg-colorbg h-screen w-full"
    >
      {/* Your component content */}
      Contact
    </SlideInMotion>
  );
}

export default Contact;
