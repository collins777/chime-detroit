import React from "react";
import Features from "../components/features/features.component";
import Hero from "../components/hero/hero.component";
import Listings from "../components/listings/listings.component";
import InfoSection from "../components/info-section/info-section.component";
import { InfoDataOne, InfoDataTwo } from "../data/InfoData";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoDataOne} />
      <Listings />
      <Features />
      <InfoSection {...InfoDataTwo} />
    </>
  );
};

export default Home;
