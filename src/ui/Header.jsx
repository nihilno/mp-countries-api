import Light from "../../src/images/light-mode-icon.png";
import Dark from "../../src/images/dark-mode-icon.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useMain } from "../contexts/MainContext";

function Header() {
  const { mode, setMode } = useMain();

  useEffect(
    function () {
      const body = document.body;
      if (mode) {
        body.classList.remove("bg-gray-800", "text-white");
        body.classList.add("bg-zinc-50", "text-neutral-900");
      } else {
        body.classList.remove("bg-zinc-50", "text-neutral-900");
        body.classList.add("bg-gray-800", "text-white");
      }
    },
    [mode]
  );

  return (
    <div className="flex items-center justify-between border-b-2 px-4 py-7.5 border-zinc-200/50 sm:px-10 sm:py-5 md:text-2xl md:px-16 lg:px-24">
      <Link to="/">
        <h1 className="font-extrabold">🌎 Where in the world?</h1>
      </Link>
      <div
        className="flex items-center gap-3 cursor-pointer hoverScale"
        onClick={() => setMode((prev) => !prev)}
      >
        <button className="w-3 md:w-5 cursor-pointer">
          <img src={mode ? Light : Dark} alt="Mode Switch" />
        </button>
        <span className="font-semibold text-xs md:text-base">
          {mode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}

export default Header;
