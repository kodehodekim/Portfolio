// Fooooter component

// Importing Icons
import IconReact from "../assets/icons/react.png";
import IconFigma from "../assets/icons/figma.png";
import IconJs from "../assets/icons/js.png";
import IconHtml from "../assets/icons/html.png";
import IconCss from "../assets/icons/css.png";

function Footer() {
  return (
    <>
      {/* Footer icons need changed, as these are to large. */}
      <footer
        id="footer"
        className="text-xs font-thin text-center max-w-xs items-center justify-self-center"
      >
        <div>
          <div id="footerIcons" className="inline-flex opacity-30">
            <a href="https://reactjs.org/">
              <img src={IconReact} alt="React icon" />
            </a>
            <a href="https://www.javascript.com/">
              <img src={IconJs} alt="Javascript icon" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <img src={IconHtml} alt="HTML5 icon" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img src={IconCss} alt="CSS3 icon" />
            </a>
            <a href="https://www.figma.com/">
              <img src={IconFigma} alt="Figma icon" />
            </a>
          </div>
          <h4 id="footerText" className="opacity-40 text-xs">
            NifsWeb development 2023
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
