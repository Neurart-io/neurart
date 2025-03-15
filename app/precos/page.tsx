"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Twitter, ChevronDown } from "lucide-react"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { Work_Sans } from "next/font/google"
import { T } from "../components/T"
import RegistrationPopup from "../components/RegistrationPopup"

const workSans = Work_Sans({ subsets: ["latin"] })

const pricingFeatures = [
  {
    name: "pricing.features.imageQuantity",
    free: "pricing.free.imageQuantity",
    light: "pricing.light.imageQuantity",
    starter: "pricing.starter.imageQuantity",
    pro: "pricing.pro.imageQuantity",
  },
  {
    name: "pricing.features.maxImagesPerGeneration",
    free: "pricing.free.maxImagesPerGeneration",
    light: "pricing.light.maxImagesPerGeneration",
    starter: "pricing.starter.maxImagesPerGeneration",
    pro: "pricing.pro.maxImagesPerGeneration",
  },
  {
    name: "pricing.features.presets",
    free: "pricing.free.presets",
    light: "pricing.light.presets",
    starter: "pricing.starter.presets",
    pro: "pricing.pro.presets",
  },
  {
    name: "pricing.features.nsfwCensorship",
    free: "pricing.free.nsfwCensorship",
    light: "pricing.light.nsfwCensorship",
    starter: "pricing.starter.nsfwCensorship",
    pro: "pricing.pro.nsfwCensorship",
  },
  {
    name: "pricing.features.commercialUse",
    free: "pricing.free.commercialUse",
    light: "pricing.light.commercialUse",
    starter: "pricing.starter.commercialUse",
    pro: "pricing.pro.commercialUse",
  },
  {
    name: "pricing.features.discordAccess",
    free: "pricing.free.discordAccess",
    light: "pricing.light.discordAccess",
    starter: "pricing.starter.discordAccess",
    pro: "pricing.pro.discordAccess",
  },
  {
    name: "pricing.features.support",
    free: "pricing.free.support",
    light: "pricing.light.support",
    starter: "pricing.light.support",
    pro: "pricing.pro.support",
  },
]

const pricingTiers = [
  {
    name: "pricing.free.name",
    price: "pricing.free.price",
    originalPrice: "pricing.free.originalPrice",
    billing: "pricing.free.billing",
    key: "free",
  },
  {
    name: "pricing.light.name",
    price: "pricing.light.price",
    period: "pricing.light.period",
    originalPrice: "pricing.light.originalPrice",
    billing: "pricing.light.billing",
    key: "light",
  },
  {
    name: "pricing.starter.name",
    price: "pricing.starter.price",
    period: "pricing.starter.period",
    originalPrice: "pricing.starter.originalPrice",
    billing: "pricing.starter.billing",
    isBestChoice: true,
    key: "starter",
  },
  {
    name: "pricing.pro.name",
    price: "pricing.pro.price",
    period: "pricing.pro.period",
    originalPrice: "pricing.pro.originalPrice",
    billing: "pricing.pro.billing",
    key: "pro",
  },
]

const faqItems = [
  {
    question: "faq.trial.question",
    answer: "faq.trial.answer",
  },
  {
    question: "faq.changePlan.question",
    answer: "faq.changePlan.answer",
  },
  {
    question: "faq.models.question",
    answer: "faq.models.answer",
  },
  {
    question: "faq.payment.question",
    answer: "faq.payment.answer",
  },
  {
    question: "faq.support.question",
    answer: "faq.support.answer",
  },
  {
    question: "faq.commercial.question",
    answer: "faq.commercial.answer",
  },
]

const AccordionItem = ({ question, answer }: { question: React.ReactNode; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-3 text-left text-base hover:text-[#2478ff] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="pb-3 text-sm text-gray-300">{answer}</div>}
    </div>
  )
}

const globalStyles = `
  .group:hover .group-hover\\:translate-x-0 {
    transform: translateX(0);
  }
`

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false)
  useScrollToTop()

  const handleOpenRegistration = () => {
    setShowRegistrationPopup(true)
  }

  const handleCloseRegistration = () => {
    setShowRegistrationPopup(false)
  }

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#101010]" style={{ fontFamily: "'Kode Mono', monospace" }}>
        {/* Navigation */}
        <header className="py-4 bg-[#101010]/80 backdrop-blur-sm">
          <div className="flex justify-between items-center px-[5%]">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={46}
                height={16}
                className="object-contain"
                priority
              />
              <span className="ml-3 text-white text-lg">Neurart.io</span>
              <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-[#2478ff] rounded-full">Beta</span>
            </Link>
            <nav>
              <Link href="/contato" className="text-white hover:text-gray-300 transition-colors">
                <T id="footer.contact" />
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className={`flex-grow flex flex-col ${workSans.className}`}>
          {/* Pricing Table */}
          <div className="flex-grow flex flex-col items-center justify-center px-4 mt-[10vh]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4 text-white" style={{ textShadow: "0 0 1px #fff, 0 0 2px #fff" }}>
                <T id="pricing.header" />
              </h2>
              <p className="text-[1.032rem]">
                Enjoy <span className="text-[#2478ff] font-bold">20% off</span> on all plans during the Beta version!
              </p>
            </div>
            <div className="flex justify-center items-stretch gap-3 flex-wrap">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="relative flex flex-col bg-[#181818] rounded-[1.38rem] p-6 transition-all duration-300 hover:transform hover:scale-105 w-[345px] overflow-hidden"
                >
                  {tier.name !== "pricing.free.name" && (
                    <div className="absolute top-0 right-0 bg-[#2478ff] text-white text-xs font-bold px-6 py-1 transform rotate-45 translate-x-[30%] translate-y-[10%] shadow-md">
                      BETA
                    </div>
                  )}
                  <div className="flex flex-col h-full">
                    {/* Plan Name */}
                    <div className="mb-4">
                      <h3 className="text-[1.15rem] font-bold text-white">
                        <T id={tier.name} />
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-6 flex flex-col items-start">
                      <div className="flex items-baseline">
                        <div className="text-[2.3rem] text-white">
                          <T id={tier.price} />
                        </div>
                        {tier.period && (
                          <div className="text-sm text-gray-400 ml-1">
                            <T id={tier.period} />
                          </div>
                        )}
                      </div>
                      {tier.name === "pricing.free.name" ? (
                        <div className="text-[1rem] text-gray-400 mt-1">
                          <T id={tier.originalPrice} />
                        </div>
                      ) : (
                        <div className="text-[1rem] text-gray-400 line-through mt-1">
                          <T id={tier.originalPrice} />
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex-grow flex flex-col gap-3">
                      {pricingFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center justify-between text-[0.86rem]">
                          <span className="text-white">
                            <T id={feature.name} />
                          </span>
                          <span>
                            {feature[tier.key as keyof typeof feature] === "✓" ? (
                              <span className="text-green-500">✓</span>
                            ) : feature[tier.key as keyof typeof feature] === "X" ? (
                              <span className="text-red-500">X</span>
                            ) : (
                              <span className="text-gray-400">
                                {feature[tier.key as keyof typeof feature] === "pricing.pro.support" ? (
                                  "Discord community/Email"
                                ) : (
                                  <T id={feature[tier.key as keyof typeof feature]} />
                                )}
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Spacer for Free Plan */}
                    {tier.name === "pricing.free.name" && <div className="flex-grow"></div>}

                    {/* Subscribe Button */}
                    <div className="relative w-full mt-6 overflow-hidden">
                      <button
                        onClick={handleOpenRegistration}
                        className="group w-full bg-[#4a4a4a] text-white py-2.5 px-3.5 rounded-md text-[13.2px] transition-all duration-300 ease-in-out hover:text-black inline-block text-center relative z-10 overflow-hidden"
                      >
                        <span className="relative z-10">
                          <T id={tier.name === "pricing.free.name" ? "pricing.cta.free" : "pricing.cta.paid"} />
                        </span>
                        <div className="absolute inset-0 bg-white w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-12">
                <T id="faq.title" />
              </h2>
              <div className="grid gap-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} question={<T id={item.question} />} answer={<T id={item.answer} />} />
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-4" style={{ fontFamily: "'Kode Mono', monospace" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex justify-center items-center gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                  alt="Neurart Logo"
                  width={32}
                  height={11}
                  className="object-contain"
                  priority
                />
                <span className="text-lg font-bold ml-2 text-white">Neurart.io</span>
              </Link>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/neurart.io/"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/neurart-io/?viewAsMember=true"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {showRegistrationPopup && <RegistrationPopup onClose={handleCloseRegistration} />}
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

