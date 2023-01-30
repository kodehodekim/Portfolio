// Imports
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavigationBar from "./components/Nav";
import "./index.css";

function App() {
  return (
    <>
      <div id="gridContainer">
        <NavigationBar />
        <MainContent />
        <Footer />
        {/* <div id="navComponent">
          <NavigationBar />
        </div>
        <div id="mainComponent">
          <MainContent />
        </div>
        <div id="footerComponent">
          <Footer />
        </div> */}
      </div>
    </>
  );
}

export default App;
