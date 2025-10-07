import React from "react";
import HeroSection from "../Components/HeroSection";
import OurServices from "../Components/OurServices";
import { WorksSection } from "../Components/WorkSection";
import Ourclients from "../Components/Ourclients";
import TeamMembersSection from "../Components/TeamMemberSection";
import FAQ from "../Components/FAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <WorksSection />
      <Ourclients />
      <TeamMembersSection />
      <FAQ />
    </>
  );
}
