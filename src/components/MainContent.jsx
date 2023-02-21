// Main content of the page

function MainContent() {
  return (
    <>
      <div id="main" className="mainContainer justify-self-start">
        <div
          id="intro"
          className="text-left bg-gray-500 rounded-2xl p-2 mb-6 max-w-md bg-opacity-80"
        >
          <h3 className="text-xs">Hi my name is</h3>
          <h1 className="text-4xl">Kim Jensen</h1>
          <h5 className="text-xs">
            I build, design and develope things for the internet
          </h5>
        </div>
        <div
          id="content"
          className="text-left bg-gray-500 rounded-2xl p-2 text-sm font-light max-w-xl  bg-opacity-80"
        >
          <p>
            I'm a junior Front end developer, based in stavanger, Norway. <br />
            Currently attending Kodehode's FrontEnd developer course, learning
            to be a productive developer.
          </p>
          <p>Passionate about computer technology, hardware and software.</p>
        </div>
      </div>
    </>
  );
}

export default MainContent;
