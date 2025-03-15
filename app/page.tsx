"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import FeatureOverview from "./components/FeatureOverview"
import ModelShowcase from "./components/ModelShowcase"
import NoCensorship from "./components/NoCensorship"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import { ScrollAnimatedSection } from "./components/ScrollAnimatedSection"
import RegistrationPopup from "./components/RegistrationPopup"

export default function Home() {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false)

  const handleOpenRegistration = () => {
    setShowRegistrationPopup(true)
  }

  const handleCloseRegistration = () => {
    setShowRegistrationPopup(false)
  }

  return (
    <main className="min-h-screen flex flex-col" style={{ fontFamily: "'Kode Mono', monospace" }}>
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
        <CallToAction onRegisterClick={handleOpenRegistration} />
      </ScrollAnimatedSection>
      <Footer />
      {showRegistrationPopup && <RegistrationPopup onClose={handleCloseRegistration} />}
    </main>
  )
}

