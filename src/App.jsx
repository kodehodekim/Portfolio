// Imports
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavigationBar from "./components/Nav";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import ProjectOne from "./Routes/Projects/Project1";
import ProjectTwo from "./Routes/Projects/Project2";

function App() {
  return (
    <>
      {/* Had to wrap the whole of the content in a div with a set ID to get my grid to work as intended. */}
      <div id="gridContainer" className="h-screen w-screen grid">
        <NavigationBar />
        <Routes>
          <Route path="*" element={<MainContent />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project1" element={<ProjectOne />} />
          <Route path="/Project2" element={<ProjectTwo />} />
          <Route
            path="/Error"
            element={
              <div id="main" className="mainContainer justify-self-start">
                <div
                  id="intro"
                  className="text-left bg-gray-500 rounded-2xl p-4 mb-6 w-max max-w-md bg-opacity-80"
                >
                  <h3 className="text-xs">Uh-oh</h3>
                  <h1 className="text-4xl">404</h1>
                  <h5 className="text-xs">Page not found</h5>
                </div>
                <div
                  id="content"
                  className="text-left bg-gray-500 rounded-2xl p-3 text-sm font-light w-max max-w-3xl  bg-opacity-80"
                >
                  <p>The matrix is broken</p>
                </div>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
