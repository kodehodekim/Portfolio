// Imports
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavigationBar from "./components/Nav";
import "./index.css";

function App() {
  return (
    <>
      {/* Had to wrap the whole of the content in a div with a set ID to get my grid to work as intended. */}
      <div id="gridContainer" className="h-screen w-screen grid">
        <NavigationBar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
