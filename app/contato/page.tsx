"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Twitter } from "lucide-react"
import { T } from "../components/T"

export default function ContactPage() {
  return (
    <div
      className="min-h-screen overflow-hidden font-kode-mono flex flex-col bg-[#101010]"
      style={{ fontFamily: "Kode Mono, monospace" }}
    >
      {/* Navigation */}
      <header className="py-5 bg-transparent absolute top-0 left-0 right-0">
        <div className="flex justify-between items-center">
          <div className="pl-[5%] flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={46}
                height={16}
                className="object-contain"
                priority
              />
              <span className="ml-2 text-white text-lg">Neurart.io</span>
            </Link>
          </div>
          <nav>{/* Navigation items removed */}</nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <Link
            href="https://www.linkedin.com/company/neurart-io/?viewAsMember=true"
            className="text-white hover:text-gray-300 transition-colors p-3"
          >
            <Linkedin size={32} />
          </Link>
          <Link
            href="https://www.instagram.com/neurart.io/"
            className="text-white hover:text-gray-300 transition-colors p-3"
          >
            <Instagram size={32} />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors p-3">
            <Twitter size={32} />
          </Link>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          <T id="contact.title" />
        </h1>

        <p className="text-center mb-12 text-gray-300">
          <T id="contact.subtitle" />
        </p>

        {/* Contact Sections */}
        <div className="space-y-8 mb-16">
          <div>
            <h2 className="text-xl font-bold mb-2">
              <T id="contact.generalContact" />
            </h2>
            <p className="text-gray-300">
              <T id="contact.email" />
            </p>
            <p className="text-gray-300">
              <T id="contact.phone" />
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={46}
                height={16}
                className="object-contain mx-auto"
                priority
              />
              <h2 className="text-2xl font-bold mt-2">Neurart.io</h2>
            </Link>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="space-y-2">
                <p>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    <T id="contact.termsAndPrivacy" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

