"use client"

import Header from "./Header"
import Hero from "./Hero"
import FeatureOverview from "./FeatureOverview"
import ModelShowcase from "./ModelShowcase"
import NoCensorship from "./NoCensorship"
import CallToAction from "./CallToAction"
import Footer from "./Footer"
import { ScrollAnimatedSection } from "./ScrollAnimatedSection"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FeatureOverview />
      <ScrollAnimatedSection direction="right">
        <ModelShowcase />
      </ScrollAnimatedSection>
      <div className="my-16 sm:my-24">
        <ScrollAnimatedSection direction="right">
          <NoCensorship />
        </ScrollAnimatedSection>
      </div>
      <div className="mt-16 sm:mt-24">
        <ScrollAnimatedSection direction="right">
          <CallToAction />
        </ScrollAnimatedSection>
      </div>
      <Footer />
    </main>
  )
}

