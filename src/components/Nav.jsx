// Navbar component

import gmailColored from "../assets/icons/gmailColored.png";
import githubColored from "../assets/icons/githubColored.png";
import React, { useState } from "react";
// import projectItems from "../assets/projectItems";

import "../index.css";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

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
