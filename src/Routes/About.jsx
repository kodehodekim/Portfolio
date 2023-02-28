// About modal
function About() {
  return (
    <div id="main" className="mainContainer justify-self-center">
      <div
        id="intro"
        className="text-left bg-gray-800 bg-opacity-70 rounded-2xl p-2 mb-2 object-center"
      >
        <h3 className="text-xs">About:</h3>
        <h1 className="text-5xl">About me</h1>
      </div>
      <div
        id="content"
        className="text-center bg-gray-900 bg-opacity-80 rounded-2xl p-3 font-light max-w-xl"
      >
        <p>
          I'm a little teapot, short and stout. This is my handle, this is
          my....
        </p>
        <br />
        <p></p>
        <br />
        <p>Oh bugger. I'm a sugar bowl.</p>
      </div>
    </div>
  );
}

export default About;
