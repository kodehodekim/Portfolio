// Fooooter component

// Importing Icons
import reactColored from "../assets/icons/reactColored.png";
import javascriptColored from "../assets/icons/javascriptColored.png";
import html5Colored from "../assets/icons/html5Colored.png";
import cssColored from "../assets/icons/cssColored.png";
import figmaColored from "../assets/icons/figmaColored.png";

function Footer() {
  return (
    <>
      <footer id="footer" className="footerContainer">
        <div>
          <div id="footerIcons" className="inline-flex">
            <a href="">
              <img src={reactColored} alt="React icon" />
            </a>
            <a href="">
              <img src={javascriptColored} alt="Javascript icon" />
            </a>
            <a href="">
              <img src={html5Colored} alt="HTML5 icon" />
            </a>
            <a href="">
              <img src={cssColored} alt="CSS3 icon" />
            </a>
            <a href="">
              <img src={figmaColored} alt="Figma icon" />
            </a>
          </div>
          <h4 id="footerText" className="text-xs">
            NifsWeb development 2023
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
