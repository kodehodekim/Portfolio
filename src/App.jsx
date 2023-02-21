// Imports
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavigationBar from "./components/Nav";
import "./index.css";

function App() {
  return (
    <>
      <div id="gridContainer" className="h-screen w-screen grid">
        <NavigationBar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
