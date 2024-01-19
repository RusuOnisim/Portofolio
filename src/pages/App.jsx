import { slideInAnimation, SlideInMotion } from "../Animations/Slide";
import svg1 from "../assets/images/myphoto.svg";
import TextSpan from "../components/TextSpan";
function App() {
  const sentence = "Front-End Developer".split("");
  const sentence2 = "Based in Belgium".split("");
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className="bg-colorbg  w-full overflow-hidden"
    >
      {/* Your component content */}
      <main className="h-[100dvh] w-full bg-colorbg flex lg:flex-row flex-col-reverse">
        {/* Photo section */}

        <section className="sm:w-2/3 lg:h-full w-full h-auto flex flex-col justify-end self-end">
          <img
            src={svg1}
            className="w-full opacity-80 overflow-hidden"
            alt=""
          />
        </section>

        {/* Description section */}

        <section className="lg:w-1/2 lg:h-full pt-5 h-1/2 justify-center w-full flex flex-col lg:justify-center px-5">
          <div className="flex flex-col w-full h-1/2 items-start">
          <span className="flex flex-row items-center justify-start">
            <h1 className="2xl:text-5xl md:text-4xl lg:text-3xl text-xl  text-colorlogo">
              {sentence.map((letter,index)=>{
                return (
                  <TextSpan className="" key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                )
              })}
            </h1>
            <div className="h-[2px] lg:px-5 ml-2 lg:mt-2 mt-1 px-3 bg-colorlogo"></div>
          </span>
          <h2 className="2xl:text-7xl md:text-5xl text-3xl text-gray-300 pt-3">
          {sentence2.map((letter,index)=>{
                return (
                  <TextSpan className="w-full" key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                )
              })}
          </h2>
          <p className="text-gray-300/70 text-[14px] md:text-xl pt-4 pr-[10%]">
          Excited to bring fresh perspectives to the web development scene! As
            a newcomer to the market, I&apos;m passionate about creating innovative
            and user-friendly experiences. Let&apos;s build something amazing
            together!
          </p>
          <p className="pt-4 text-lg md:text-2xl text-colorlogo">onyrusu@gmail.com</p></div>
        </section>
      </main>
    </SlideInMotion>
  );
}

export default App;
