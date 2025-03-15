"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { useLocalization } from "../contexts/LocalizationContext"
import Footer from "../components/Footer"
import RegistrationPopup from "../components/RegistrationPopup"

export default function TermsOfServicePage() {
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
        <h1 className="text-3xl font-bold mb-8 text-white">Terms of Service</h1>

        <div className="bg-[#181818] rounded-lg p-6 text-gray-300 space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Neurart ("Service"). These Terms of Service ("Terms") govern your access and use of our
              Service. By accessing or using the Service, you declare that you have read, understood, and agree to
              comply with these Terms. If you do not agree with any part of these Terms, please do not use the Service.
            </p>
            <p>
              Neurart is a web platform that uses artificial intelligence for image creation, including artistic
              content, and operates globally in compliance with laws and regulations in various jurisdictions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">2. Use of the Service</h2>
            <h3 className="text-lg font-semibold mb-2 text-white">a. Eligibility</h3>
            <p className="mb-4">
              You must be at least 18 years old to use the Service. By accessing or using the Service, you represent and
              warrant that you meet this requirement.
            </p>
            <h3 className="text-lg font-semibold mb-2 text-white">b. License to Use</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Service solely
              for personal and non-commercial use, unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">3. User-Generated Content and Responsibility</h2>
            <h3 className="text-lg font-semibold mb-2 text-white">3.1. Content Responsibility</h3>
            <p className="mb-2">
              <strong>Generated Content:</strong> All content (images, texts, data, and other materials) created,
              stored, or distributed through the Service is the sole responsibility of the user who generated it.
            </p>
            <p className="mb-4">
              <strong>Creation Autonomy:</strong> Although the Service offers tools, presets, and, in some cases, access
              to public model databases, the creation and customization of content depend solely on the user's choices.
            </p>
            <h3 className="text-lg font-semibold mb-2 text-white">3.2. Allowed and Prohibited Content</h3>
            <p className="mb-2">
              Although the Service allows the creation of content with adult, violent, or graphic nature, the user
              agrees not to use the Service to generate or distribute material that:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Is illegal, abusive, defamatory, or infringes on third-party rights;</li>
              <li>Incites violence, discrimination, or hatred;</li>
              <li>Contains child pornography or any other content expressly prohibited by law.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 text-white">3.3. Disclaimer of Liability</h3>
            <p className="mb-2">
              <strong>Misuse:</strong> You are solely responsible for any inappropriate use of the Service and for any
              consequences arising from the creation and dissemination of content, even if it is allowed by the
              platform.
            </p>
            <p>
              <strong>Bad Faith:</strong> Neurart is not responsible for legal actions or damages resulting from
              malicious or inappropriate use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">4. Intellectual Property</h2>
            <p className="mb-4">
              <strong>User Rights:</strong> The user retains all intellectual property rights to the content generated
              through the Service.
            </p>
            <p>
              <strong>Use by Neurart:</strong> By using the Service, the user grants Neurart a worldwide, non-exclusive,
              royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative
              works of, display, and perform the generated content in connection with the Service and Neurart's
              business, including, without limitation, for purposes of promoting and redistributing the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">5. Payments and Subscriptions</h2>
            <h3 className="text-lg font-semibold mb-2 text-white">5.1. Subscriptions</h3>
            <p className="mb-4">
              Access to certain features of the Service may require a paid subscription. By purchasing a subscription,
              you agree to pay the applicable fees and renew it automatically unless you cancel your subscription before
              the renewal date.
            </p>
            <h3 className="text-lg font-semibold mb-2 text-white">5.2. Cancellation</h3>
            <p className="mb-4">
              You can cancel your subscription at any time through your account settings. Cancellation will take effect
              at the end of the current billing period.
            </p>
            <h3 className="text-lg font-semibold mb-2 text-white">5.3. Refunds</h3>
            <p>Subscription fees are non-refundable unless otherwise stated in Neurart's refund policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">6. Limitation of Liability</h2>
            <p>
              The Service is provided "as is" and "as available." Neurart does not warrant that the Service will be
              uninterrupted, secure, or error-free. In no event shall Neurart be liable for any direct, indirect,
              incidental, special, consequential, or punitive damages arising out of the use of or inability to use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">7. Changes to the Service</h2>
            <p>
              Neurart reserves the right to modify or discontinue the Service, or any part thereof, at any time, with or
              without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">8. Termination</h2>
            <p>
              Neurart may terminate your access to the Service at any time, with or without cause, including, without
              limitation, if you violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Brazil, without regard to
              its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">10. Dispute Resolution</h2>
            <p>
              Any dispute arising out of or relating to these Terms shall be resolved exclusively through binding
              arbitration in accordance with the rules of the Brazil Mediation and Arbitration Chamber (CAMARB).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">11. General Provisions</h2>
            <p className="mb-4">
              These Terms constitute the entire agreement between you and Neurart regarding the Service and supersede
              all prior or contemporaneous agreements, written or oral.
            </p>
            <p className="mb-4">
              Neurart's failure to exercise or enforce any right or provision of these Terms shall not constitute a
              waiver of such right or provision.
            </p>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white">12. Contact</h2>
            <p>If you have any questions or concerns about these Terms, please contact us at: comercial@neurart.io</p>
          </section>

          <p className="text-right text-sm italic text-gray-400 mt-8">Last revised: February 15, 2025</p>
        </div>
      </main>

      <Footer />
      {showRegistrationPopup && <RegistrationPopup onClose={handleCloseRegistration} />}
    </div>
  )
}

