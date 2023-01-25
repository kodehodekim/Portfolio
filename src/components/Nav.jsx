// Navbar component

import gmailColored from "../assets/icons/gmailColored.png";
import githubColored from "../assets/icons/githubColored.png";

import "../index.css";

function NavigationBar() {
  return (
    <>
      <div id="navigation" className="navContainer">
        <nav>
          <div className="underline font-bold">
            <h3>Home</h3>
            <h3>Projects</h3>
            <h3>Info</h3>
            <h3>Contact</h3>
          </div>
          <div id="navIcons" className="ml-8">
            <a href="mailto:kim.kodehode@gmail.com">
              <img src={gmailColored} alt="Gmail icon" />
            </a>
            <a href="http://github.com/kodehodekim">
              <img src={githubColored} alt="GitHub icon" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavigationBar;
