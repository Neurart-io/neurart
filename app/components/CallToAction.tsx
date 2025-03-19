"use client"
import { T } from "./T"
import { useState, useRef, useEffect } from "react"
import RegistrationPopup from "./RegistrationPopup"

export default function CallToAction() {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const handleOpenRegistration = () => {
    setShowRegistrationPopup(true)
  }

  const handleCloseRegistration = () => {
    setShowRegistrationPopup(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    // Carregar o vídeo com um pequeno atraso para evitar problemas de renderização
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src =
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Test2-aHSx24zGoJrg1pYKsWg2SguK1CVVHT.webm"
        videoRef.current.load()

        // Adicionar evento de carregamento
        videoRef.current.onloadeddata = () => {
          setIsVideoLoaded(true)
        }

        // Iniciar reprodução
        videoRef.current.play().catch((e) => {
          console.error("Video play failed:", e)
        })
      }
    }, 500) // Atraso maior para este vídeo, já que ele está mais abaixo na página

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        autoPlay
        loop
        muted
        playsInline
      >
        {/* O src será definido dinamicamente pelo useEffect */}
      </video>
      {!isVideoLoaded && <div className="absolute inset-0 bg-[#101010] z-0"></div>}
      <div className="relative z-10 w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
          <T id="cta.title" />
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-8 text-white leading-relaxed drop-shadow-md">
          <T id="cta.description" />
        </p>
        <div className="text-center mb-10">
          <button
            onClick={scrollToTop}
            className="inline-block border-2 border-white text-white text-lg sm:text-xl md:text-2xl py-2 px-4 sm:px-6 rounded-full 
            transition-all duration-300 bg-transparent hover:text-black relative
            hover:border-transparent overflow-hidden group"
          >
            <span className="relative z-10">
              <T id="cta.button" />
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white" />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="flex items-center bg-black bg-opacity-50 rounded-full px-4 py-2">
            <span className="text-yellow-400 text-2xl sm:text-3xl mr-2">⚡</span>
            <span className="text-white text-sm sm:text-base">
              <T id="cta.feature1" />
            </span>
          </div>
          <div className="flex items-center bg-black bg-opacity-50 rounded-full px-4 py-2">
            <span className="text-green-400 text-2xl sm:text-3xl mr-2">🚀</span>
            <span className="text-white text-sm sm:text-base">
              <T id="cta.feature2" />
            </span>
          </div>
          <div className="flex items-center bg-black bg-opacity-50 rounded-full px-4 py-2">
            <span className="text-blue-400 text-2xl sm:text-3xl mr-2">🔒</span>
            <span className="text-white text-sm sm:text-base">
              <T id="cta.feature3" />
            </span>
          </div>
        </div>
      </div>
      {showRegistrationPopup && <RegistrationPopup onClose={handleCloseRegistration} />}
    </section>
  )
}

