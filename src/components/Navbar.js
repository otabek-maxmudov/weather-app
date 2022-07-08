import { useState } from "react";
import { connect } from "react-redux";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { setCurrentMode, setDegreeMode } from "../Redux/Actions/Actions";

const Navbar = ({ setDegreeMode, setCurrentMode, degree_C }) => {
  const [isActive, setIsActive] = useState(true);
  const [isDegActive, setIsDegActive] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { pathname } = useLocation();

  const NavButton = ({ title, path, isClicked }) => (
    <Link to={path} className="text-black hover:text-black">
      <button
        type="button"
        className={`text-base md:text-xl font-bold mr-4 border-black dark:border-gray-200 transition-colors ${
          pathname === path
            ? "border-b-2 dark:text-gray-200 transition-colors"
            : `text-gray-300 dark:text-gray-500 border-b-0 transition-colors`
        }`}
        onClick={() => setIsActive(prev => (isClicked ? prev : !prev))}
        clicked={isClicked}>
        {title}
      </button>
    </Link>
  );

  const DegreeButton = ({ degSign, isClicked }) => (
    <button
      type="button"
      className={`text-base md:text-xl font-bold mr-4 rounded-full w-8 h-8 md:w-10 md:h-10 ${
        isClicked
          ? "text-white dark:text-gray-600 bg-black dark:bg-gray-200 transition-colors"
          : "bg-white dark:bg-gray-700 text-black dark:text-gray-200 transition-colors"
      }`}
      onClick={() => {
        setIsDegActive(prev => (isClicked ? prev : !prev));
        setDegreeMode(isClicked ? degree_C : !degree_C);
      }}
      clicked={isClicked}>
      &#176;{degSign}
    </button>
  );

  const onChange = checked => {
    if (checked) {
      setIsDarkMode(true);
      setCurrentMode("dark");
    } else {
      setIsDarkMode(false);
      setCurrentMode("light");
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <NavButton title="Today" path="/today" isClicked={!isActive} />
        <NavButton title="Week" path="/week" isClicked={isActive} />
      </div>

      <div className="w-24 md:w-26 h-10 md:h-12 flex justify-between items-center">
        <DarkModeToggle onChange={onChange} checked={isDarkMode} size={"100%"} className="DarkModeToggle" />
      </div>

      <div>
        <DegreeButton degSign="C" isClicked={isDegActive} />
        <DegreeButton degSign="F" isClicked={!isDegActive} />
      </div>
    </div>
  );
};

export default connect(({ app }) => ({ ...app }), { setCurrentMode, setDegreeMode })(Navbar);
