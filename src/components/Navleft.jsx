import svg from "../assets/images/logooni.svg";
import { NavLink } from "react-router-dom";

export default function Navleft() {
  return (
    <nav className="w-2/12 lg:w-1/12 flex flex-col justify-center bg-colorsecond text-white z-50">
      <img src={svg} className="mt-2 h-10 lg:h-14" alt="" />
      <section className="text-white h-full flex flex-col items-center justify-around text-xl">
        <NavLink
          className="text-white aria-[current=page]:text-colorlogo"
          id="side"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-white aria-[current=page]:text-colorlogo"
          id="side"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="text-white aria-[current=page]:text-colorlogo"
          id="side"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className="text-white aria-[current=page]:text-colorlogo"
          id="side"
          to="/projects"
        >
          Projects
        </NavLink>
      </section>
    </nav>
  );
}
