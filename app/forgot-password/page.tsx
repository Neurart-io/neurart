"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { Work_Sans } from "next/font/google"
import { T } from "../components/T"

const workSans = Work_Sans({ subsets: ["latin"] })

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  useScrollToTop()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would implement the password recovery logic
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  return (
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
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-grow flex items-center justify-center px-4 ${workSans.className}`}>
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            <T id="forgotPassword.title" />
          </h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="text-gray-300 mb-4">
                  <T id="forgotPassword.instruction" />
                </p>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  <T id="forgotPassword.email" />
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-[#181818] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#b157ff] text-white py-2 px-4 rounded-md hover:bg-[#9645d8] transition-colors duration-300"
                >
                  <T id="forgotPassword.submit" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-green-400 mb-4">
                <T id="forgotPassword.successMessage" />
              </p>
              <Link href="/login" className="text-[#b157ff] hover:text-[#9645d8]">
                <T id="forgotPassword.backToLogin" />
              </Link>
            </div>
          )}
          <p className="mt-8 text-center text-sm text-gray-400">
            <T id="login.lembrar" />{" "}
            <Link href="/login" className="font-medium text-[#b157ff] hover:text-[#9645d8]">
              <T id="forgotPassword.backToLogin" />
            </Link>
          </p>
        </div>
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
  )
}

