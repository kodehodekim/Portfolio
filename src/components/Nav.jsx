// Navbar component

// Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

//Icons imported
import gmailColored from "../assets/icons/gmailColored.png";
import githubColored from "../assets/icons/githubColored.png";

// Component

function NavigationBar() {
  // Using useState to set the project list as open, and generating the list of projects on an onclick.
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function closeDropDown() {
    setIsOpen(false);
  }

  return (
    <nav
      id="navigationContainer"
      className=".w-1/4 flex flex-row justify-self-start -ml-20 z-1"
    >
      <div className="underline font-bold ">
        <ul>
          <li>
            <Link to="/#">
              <a onClick={closeDropDown}>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <a onClick={closeDropDown}>About</a>
            </Link>
          </li>
          <li onClick={toggleDropDown}>
            <a>Projects</a>
          </li>
          {/* This is the Menu that's opened when the state changes to true, with a list of the projects I want to show.
              It's not finished, as I want the projects to open in a modal using Hashrouter(BrowseRouter when I dont host it on GH-pages) */}
          {isOpen && (
            <div className="dropdown bg-gray-500 bg-opacity-30 rounded-2xl absolute underline font-bold text-xs text-right p-2">
              <ul className="list-none">
                <li>
                  <Link to="/project1">
                    <a onClick={closeDropDown}>Pokedex</a>
                  </Link>
                </li>
                <li>
                  <a href="#project2" onClick={closeDropDown}>
                    Christmas Countdown
                  </a>
                </li>
                <li>
                  <a href="#project3" onClick={closeDropDown}>
                    Autumn Project
                  </a>
                </li>
                <li>
                  <a href="#project4" onClick={closeDropDown}>
                    Unit Converter
                  </a>
                </li>
              </ul>
            </div>
          )}
          <li>
            <Link to="/Contact">
              <a href="#contact">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* Icons to the right of the Navigation */}
      <div id="navIcons" className="ml-4">
        <a href="mailto:kim.kodehode@gmail.com">
          <img src={gmailColored} alt="Gmail icon" />
        </a>
        <a href="http://github.com/kodehodekim">
          <img src={githubColored} alt="GitHub icon" />
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
