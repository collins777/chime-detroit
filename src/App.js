import React, { useState } from "react";
import Navbar from "../src/components/navbar/navbar.component";
import GlobalStyle from "./styles/global-styles";
import Hero from "./components/hero/hero.component";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/dropdown/dropdown.component";

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
    </>
  );
}

export default App;
