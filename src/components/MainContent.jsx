// Main content of the page

function MainContent() {
  return (
    <div id="main" className="mainContainer justify-self-center max-w-max">
      <div
        id="intro"
        className="text-left bg-gray-800 bg-opacity-70 rounded-2xl p-2 object-center"
      >
        <h3 className="text-xs">Hi my name is</h3>
        <h1 className="text-5xl">Kim Jensen</h1>
        <h5 className="text-xs text-right">
          I build, design and develope things.
        </h5>
      </div>
      <div
        id="content"
        className="text-left bg-gray-900 bg-opacity-80 rounded-2xl p-3 font-light mt-12"
      >
        <p>I'm a junior Front end developer, based in Norway.</p>
        <br />
        <p>
          Currently attending Kodehode's FrontEnd developer course, learning to
          be a productive developer.
        </p>
        <br />
        <p>Passionate about computer technology, hardware and software.</p>
        {/* <br />
        <p>Well versed in React, Javascript and html</p> */}
      </div>
    </div>
  );
}

export default MainContent;
