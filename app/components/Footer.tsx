"use client"

import type React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Twitter, Instagram, Linkedin } from "lucide-react"
import { T } from "./T"
import { useEffect, useState } from "react"

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authToken = localStorage.getItem("authToken")
    setIsAuthenticated(!!authToken)
  }, [])

  return { isAuthenticated }
}

export default function Footer() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const handleFaleConoscoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/contato")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-[#101010] text-white py-11">
      <div className="container mx-auto px-0 sm:px-4 max-w-[1200px]">
        <div className="flex flex-wrap justify-center">
          <div className="w-[30%] sm:w-[15%] mb-6 sm:mb-0 text-left">
            <h3 className="text-xs sm:text-sm font-bold mb-2">
              <T id="footer.quickLinks" />
            </h3>
            <ul className="text-[10px] sm:text-xs space-y-1">
              <li>
                <Link
                  href="/contato"
                  className="hover:text-gray-300 transition-colors"
                  onClick={handleFaleConoscoClick}
                >
                  <T id="footer.contact" />
                </Link>
              </li>
              <li>
                <Link href="/precos" className="hover:text-gray-300 transition-colors">
                  <T id="footer.pricing" />
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos" className="hover:text-gray-300 transition-colors">
                  <T id="footer.aboutUs" />
                </Link>
              </li>
              <li>
                <Link href="/documentacao" className="hover:text-gray-300 transition-colors">
                  <T id="footer.documentation" />
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                  <T id="footer.privacyPolicy" />
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">
                  <T id="footer.termsOfService" />
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link href="/gerar-imagem" className="hover:text-gray-300 transition-colors">
                    <T id="footer.generateImage" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="w-[60%] sm:w-[30%] flex flex-col items-center text-center">
            <h3 className="text-sm sm:text-base font-bold mb-3">
              <T id="footer.contact" />
            </h3>
            <p className="text-xs mb-2">
              <T id="footer.email" />
            </p>
            <div className="flex justify-center space-x-3">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={14} />
              </Link>
              <Link
                href="https://www.instagram.com/neurart.io/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={14} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/neurart-io/?viewAsMember=true"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={14} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Neurart.io. <T id="footer.rights" />
          </p>
        </div>
      </div>
    </footer>
  )
}

