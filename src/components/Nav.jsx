// Navbar component

// Imports
import gmailColored from "../assets/icons/gmailColored.png";
import githubColored from "../assets/icons/githubColored.png";
import React, { useState } from "react";
import "../index.css";

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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li onClick={toggleDropDown}>
            <a href="#projects">Projects</a>
          </li>
          {/* This is the Menu that's opened when the state changes to true, with a list of the projects I want to show.
              It's not finished, as I want the projects to open in a modal using Hashrouter(BrowseRouter when I dont host it on GH-pages) */}
          {isOpen && (
            <div className="dropdown-menu bg-gray-500 bg-opacity-30 rounded-2xl absolute underline font-bold text-sm text-right p-2">
              <ul className="list-none">
                <li>
                  <a href="#project1" onClick={closeDropDown}>
                    Pokedex
                  </a>
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
            <a href="#contact">Contact</a>
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
