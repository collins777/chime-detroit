import React from "react";
import Navbar from "../src/components/navbar/navbar.component";
import GlobalStyle from "./styles/global-styles";
import Hero from "./components/hero/hero.component";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
