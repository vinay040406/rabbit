import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/Hero";
import Better from "./components/Better";
import Behind from "./components/Behind";
import Results from "./components/Results";
import Worked from "./components/Worked";
import Funding from "./components/Funding";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Better />
      <Behind />
      <Results />
      <Worked />
      <Funding />
      <Footer />
    </>
  );
}

export default App;
