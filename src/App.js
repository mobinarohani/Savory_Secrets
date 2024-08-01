import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SpecialFoods from "./components/Foods/SpecialFoods";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
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
        <Title subTitle='Savory Secrets photos'/>
        <Gallery/>
        <Title subTitle='What Customer says'/>
        <Testimonials/>
        <Title subTitle='Contact us'/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
