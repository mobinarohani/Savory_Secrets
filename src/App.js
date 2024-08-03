import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SpecialFoods from "./components/SpecialFoods/SpecialFoods";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Description from "./components/Description/Description";
import Menu from "./components/Menu/Menu";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";
function App() {

  const[playState,setPlayState]=useState(false)
  return (
    <div>
      <div className="app-container">
        <Navbar />
        <Hero />
      </div>
      {/* <div className="container"> */}
      <Title subTitle="Special food" />
      <SpecialFoods />
      <About setPlayState={setPlayState}/>
      <Title subTitle="Savory Secrets photos" />
      <Gallery />
      <Title subTitle="Recipes" />
      <Testimonials />
      <Title subTitle="Foodstuffs " />
      <Description />
      <Title subTitle="Our Menu" />
      <Menu />
      <Title subTitle="Contact us" />
      <Contact />
      <Footer />
      {/* </div> */}
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
