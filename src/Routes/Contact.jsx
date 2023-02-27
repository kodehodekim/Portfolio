// Contact Route

function Contact() {
  return (
    <>
      {/* Contact information */}
      <div id="main" className="mainContainer justify-self-start">
        <div
          id="contact"
          className="text-left bg-gray-500 rounded-2xl p-2 mb-6 max-w-md bg-opacity-80"
        >
          <h3 className="text-xs">Here you can find</h3>
          <h1 className="text-4xl">Contact info</h1>
        </div>
        <div
          id="content"
          className="text-left bg-gray-500 rounded-2xl p-2 text-sm font-light max-w-xl  bg-opacity-80"
        >
          <p>
            aboutme <br /> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Omnis commodi vitae amet esse, dignissimos eum provident quasi
            illum aliquid minima sunt mollitia, architecto expedita dolorem fuga
            autem odit possimus laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
