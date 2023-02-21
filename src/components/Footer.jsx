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
      <footer
        id="footer"
        className="text-xs font-thin text-center max-w-xs items-center justify-self-center"
      >
        <div>
          <div id="footerIcons" className="inline-flex">
            <a href="https://reactjs.org/">
              <img src={reactColored} alt="React icon" />
            </a>
            <a className="-mt-1.5 -ml-2" href="https://www.javascript.com/">
              <img src={javascriptColored} alt="Javascript icon" />
            </a>
            <a
              className="-ml-2"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            >
              <img src={html5Colored} alt="HTML5 icon" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img src={cssColored} alt="CSS3 icon" />
            </a>
            <a className="ml-0.5" href="https://www.figma.com/">
              <img src={figmaColored} alt="Figma icon" />
            </a>
          </div>
          <h4 id="footerText" className="-mt-2">
            NifsWeb development 2023
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
