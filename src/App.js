import React, { useState } from "react";
import Navbar from "../src/components/navbar/navbar.component";
import GlobalStyle from "./styles/global-styles";
import Hero from "./components/hero/hero.component";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/dropdown/dropdown.component";
import InfoSection from "./components/info-section/info-section.component";
import { InfoDataOne, InfoDataTwo } from "./data/InfoData";
import Listings from "./components/listings/listings.component";
import Features from "./components/features/features.component";
import Footer from "./components/footer/footer.component";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoDataOne} />
      <Listings />
      <Features />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </>
  );
}

export default App;
