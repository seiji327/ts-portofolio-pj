import Header from "./components/Header";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <About />
      <Introduction />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
