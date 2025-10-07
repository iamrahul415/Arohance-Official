// src/Pages/About.jsx
import React from "react";
import AboutOurStory from "../Components/About-OurStory";
import AboutHeroSection from "../Components/About-HeroSection";
import AboutOurStory1 from "../Components/About-OurStory1";
import AboutDesignThinker from "../Components/About-DesignThinker";

export default function About() {
  return (
    <div >
      <AboutHeroSection />
      <AboutOurStory />
      <AboutOurStory1 />
      <AboutDesignThinker />
    </div>
  );
}
