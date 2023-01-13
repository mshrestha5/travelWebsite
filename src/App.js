import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Carousel from "./components/Caraousel";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
