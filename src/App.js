import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "../src/components/navbar/navbar.component";
import GlobalStyle from "./styles/global-styles";
import Dropdown from "./components/dropdown/dropdown.component";
import Footer from "./components/footer/footer.component";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Homes from "./pages/Homes";
import Contact from "./pages/Contact";
import Rentals from "./pages/Rentals";
import Aos from "aos"; // Anitmate on Scroll Library
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname, "location!");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // makes sure our pages start at the top of window
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/homes" component={Homes} />
        <Route path="/contact" component={Contact} />
        <Route path="/rentals" component={Rentals} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
