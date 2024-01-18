import { slideInAnimation, SlideInMotion } from "../Animations/Slide";

function App() {
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className="bg-colorbg h-screen w-full"
    >
      {/* Your component content */}
      dadadadadd
    </SlideInMotion>
  );
}

export default App;
