// Navbar component

import gmailColored from "../assets/icons/gmailColored.png";
import githubColored from "../assets/icons/githubColored.png";

function NavigationBar() {
  return (
    <>
      <div
        id="navBar"
        className="object-right fixed right-80 top-32 underline font-bold"
      >
        <h3>Home</h3>
        <h3>Projects</h3>
        <h3>Info</h3>
        <h3>Contact</h3>
      </div>
      <div
        id="navIcons"
        className="flex-col object-right fixed right-64 top-32 underline font-bold"
      >
        <a href="mailto:kim.kodehode@gmail.com">
          <img src={gmailColored} alt="Gmail icon" />
        </a>
        <a href="http://github.com/kodehodekim">
          <img src={githubColored} alt="GitHub icon" />
        </a>
      </div>
    </>
  );
}

export default NavigationBar;
