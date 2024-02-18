import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../components/ThemeContext";

const PacmanWithIcon = () => {
  const { isDarkMode } = useTheme();
  const [pacmanSize, setPacmanSize] = useState(40); // Set an initial value
  const [clipPath, setClipPath] = useState("url(#pacman-clip)");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClipPath((prevClipPath) =>
        prevClipPath === "url(#pacman-clip)" ? "" : "url(#pacman-clip)"
      );
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth > 768 ? 40 : 25;
      setPacmanSize(newSize);
    };

    handleResize(); // Initial sizing

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="rotate-45"
      style={{
        position: "relative",
        width: `${pacmanSize}px`,
        height: `${pacmanSize}px`,
      }}
    >
      {/* Pacman mask */}
      <svg
        width={pacmanSize}
        height={pacmanSize}
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", zIndex: "1" }}
      >
        <defs>
          <clipPath id="pacman-clip">
            <path
              d={`M${pacmanSize / 2} 0 A${pacmanSize / 2} ${
                pacmanSize / 2
              } 0 1 0 ${pacmanSize} ${pacmanSize / 2} L${pacmanSize / 2} ${
                pacmanSize / 2
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>

      {/* GitHub icon with dynamic clip-path */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "2",
          clipPath,
        }}
      >
        <FaGithub
          className={`text-${
            isDarkMode ? "colordarklogo" : "colorbrightlogo"
          } rotate-[-45deg]`}
          style={{ fontSize: `${pacmanSize}px` }}
        />
      </div>
    </div>
  );
};

export default PacmanWithIcon;
