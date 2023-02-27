// About modal
function About() {
  return (
    <>
      {/* Home content, short intro */}
      <div id="main" className="mainContainer justify-self-start">
        <div
          id="intro"
          className="text-left bg-gray-500 rounded-2xl p-2 mb-6 max-w-md bg-opacity-80"
        >
          <h3 className="text-xs">Heres some information</h3>
          <h1 className="text-4xl">About me</h1>
        </div>
        <div
          id="content"
          className="text-left bg-gray-500 rounded-2xl p-2 text-sm font-light max-w-xl  bg-opacity-80"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            alias.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
