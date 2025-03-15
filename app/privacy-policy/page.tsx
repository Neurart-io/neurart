"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { useLocalization } from "../contexts/LocalizationContext"
import Footer from "../components/Footer"
import RegistrationPopup from "../components/RegistrationPopup"

export default function PrivacyPolicyPage() {
  useScrollToTop()
  const { language } = useLocalization()
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false)

  const handleOpenRegistration = () => {
    setShowRegistrationPopup(true)
  }

  const handleCloseRegistration = () => {
    setShowRegistrationPopup(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#101010]" style={{ fontFamily: "'Kode Mono', monospace" }}>
      {/* Simplified Header with only Logo and Sign Up */}
      <header className="py-4 bg-[#101010]/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center px-4 sm:px-[5%] max-w-[1200px] mx-auto w-full">
          <div className="flex items-center py-2 sm:py-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={36}
                height={12}
                className="object-contain"
                priority
              />
              <span className="ml-2 sm:ml-3 text-white text-base sm:text-lg">Neurart.io</span>
              <span className="ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold text-white bg-[#2478ff] rounded-full">
                Beta
              </span>
            </Link>
          </div>
          <button
            onClick={handleOpenRegistration}
            className="text-sm sm:text-[15px] bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white active:bg-gray-300 relative z-50"
          >
            {language === "pt" ? "Registre-se" : "Sign Up"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl mt-16">
        <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>

        <div className="bg-[#181818] rounded-lg p-6 text-gray-300 space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">1. Introduction</h2>
            <p className="mb-4">
              This Privacy Policy governs the collection, use, processing, and sharing of information from users of the
              Neurart service ("Service"). By accessing or using our Service, you agree to the practices described
              herein. If you do not agree with any of these terms, please refrain from using the Service.
            </p>
            <p>
              This document applies to users from any country, taking into account applicable local data protection laws
              and, when necessary, the specific rules for international data transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">2. Collection of Information</h2>
            <h3 className="text-lg font-semibold mb-2 text-white">2.1. Personal Information</h3>
            <p className="mb-4">To create and manage your account, we collect personal data which may include:</p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Full name;</li>
              <li>Email address;</li>
              <li>
                Login information (including authentication data via Google, Apple, or other providers, when
                applicable);
              </li>
              <li>Contact details.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 text-white">2.2. Technical and Browsing Information</h3>
            <p className="mb-4">
              We automatically collect technical data and information about your device and your use of the Service,
              such as:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>IP address;</li>
              <li>Browser type and version;</li>
              <li>Cookie data and similar technologies;</li>
              <li>
                Usage and performance data (e.g., pages visited, time spent on the Service, and interactions performed).
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 text-white">2.3. Usage Data and Preferences</h3>
            <p className="mb-4">We may record your preferences and interactions with the platform to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Personalize your experience;</li>
              <li>Perform analyses and improve the performance and functionality of the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">3. Use of Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Provision and Improvement of the Service:</strong> To provide, operate, and optimize the
                Service, including content personalization and the offering of features that enhance the user
                experience.
              </li>
              <li>
                <strong>Communications:</strong> To send updates, notifications, support information, and, when
                applicable, promotional communications, always respecting your communication preferences.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To meet legal and regulatory obligations and to cooperate with
                authorities in investigations or legal proceedings.
              </li>
              <li>
                <strong>Analytics and Statistics:</strong> To analyze the usage of the Service, identify usage patterns,
                and implement continuous improvements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">4. Sharing and Disclosure</h2>
            <h3 className="text-lg font-semibold mb-2 text-white">4.1. Sharing with Third Parties</h3>
            <p className="mb-4">
              We do not share your personal information with third parties, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>
                <strong>Service Providers:</strong> We share data with partners and service providers (e.g., hosting, AI
                servers, payment processing) strictly for the operation and maintenance of the Service.
              </li>
              <li>
                <strong>Legal Requirement:</strong> When required by law, regulation, or court order.
              </li>
              <li>
                <strong>Protection of Rights:</strong> To protect the rights, property, or safety of Neurart, its users,
                or third parties.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 text-white">4.2. International Data Transfers</h3>
            <p>
              When your data is transferred to servers or processed outside your country of residence, we will take the
              necessary measures to ensure that such transfers comply with applicable data protection laws (such as the
              General Data Protection Regulation – GDPR in the European Union, or other local regulations). By using the
              Service, you consent to the transfer and processing of your data to countries or regions that may offer
              different levels of protection, provided that adequate safeguards are implemented.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">5. Security of Information</h2>
            <p className="mb-4">
              We employ advanced technical and administrative measures to protect your information against unauthorized
              access, disclosure, alteration, or destruction. These measures include, but are not limited to:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Data encryption;</li>
              <li>Use of firewalls and security protocols;</li>
              <li>Continuous monitoring and access controls.</li>
            </ul>
            <p>
              However, please note that no electronic transmission or storage method is 100% secure, and therefore,
              absolute security cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">6. Users' Rights</h2>
            <p className="mb-4">
              In accordance with applicable laws, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Access and Correction:</strong> Request access to and correction of your personal data.
              </li>
              <li>
                <strong>Anonymization or Deletion:</strong> Request the anonymization, blocking, or deletion of
                unnecessary or excessive data.
              </li>
              <li>
                <strong>Withdrawal of Consent:</strong> Withdraw your consent for data processing without affecting the
                legality of processing based on previously given consent.
              </li>
              <li>
                <strong>Data Portability:</strong> Request the portability of your data to another service provider or
                product, when applicable.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">7. Response to Security Incidents</h2>
            <p className="mb-4">
              In the event of incidents that may compromise your personal data, Neurart will follow internal procedures
              to:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Detect and assess the nature and extent of the incident;</li>
              <li>Implement measures to mitigate the damage;</li>
              <li>
                Notify affected users and, when required, the appropriate authorities in accordance with legal deadlines
                and regulations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">8. Use of Cookies and Similar Technologies</h2>
            <p className="mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Enhance your browsing experience;</li>
              <li>Analyze the use of the Service;</li>
              <li>Personalize content and advertisements.</li>
            </ul>
            <p>
              You can manage your cookie preferences through your browser settings. For more information, please consult
              our [Cookie Policy] (if a dedicated page exists).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">9. Changes to the Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page
              and, if significant, users will be notified via email or through a notice on the Service. We recommend
              that you review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">10. Contact</h2>
            <p>For any questions or concerns regarding this Policy, please contact us at: comercial@neurart.io</p>
          </section>

          <p className="text-right text-sm italic text-gray-400 mt-8">Last Revised: February 15, 2025</p>
        </div>
      </main>

      <Footer />
      {showRegistrationPopup && <RegistrationPopup onClose={handleCloseRegistration} />}
    </div>
  )
}

