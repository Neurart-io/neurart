"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FeatureOverview from "./FeatureOverview";
import ModelShowcase from "./ModelShowcase";
import NoCensorship from "./NoCensorship";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import { ScrollAnimatedSection } from "./ScrollAnimatedSection";
import RegistrationPopup from "./RegistrationPopup";

export default function HomePage() {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  const handleOpenRegistration = () => {
    setShowRegistrationPopup(true);
  };

  const handleCloseRegistration = () => {
    setShowRegistrationPopup(false);
  };

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'Kode Mono', monospace" }}
    >
      <Header onRegisterClick={handleOpenRegistration} />
      <Hero onRegisterClick={handleOpenRegistration} />
      <FeatureOverview />
      <ScrollAnimatedSection direction="right">
        <ModelShowcase />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection direction="right">
        <NoCensorship />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection direction="right">
        <CallToAction />
      </ScrollAnimatedSection>
      <Footer />
      {showRegistrationPopup && (
        <RegistrationPopup onClose={handleCloseRegistration} />
      )}
    </main>
  );
}
