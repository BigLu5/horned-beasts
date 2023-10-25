import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import beastArr from "./Data";

function App() {
  return (
    <div className="Gallery">
      <Header />
      <main>
        <div className="animals">
          <Gallery beasts={beastArr} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
