import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SpecialFoods from "./components/Foods/SpecialFoods";
import Title from "./components/Title/Title";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <div className="app-container">
        <Navbar />
        <Hero />
      </div>
      <div className="container">
        <Title subTitle='Special food'/>
        <SpecialFoods />
        <About/>
      </div>
    </div>
  );
}

export default App;
