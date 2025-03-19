"use client"

import { T } from "./T"
import { useEffect, useRef, useState } from "react"

interface HeroProps {
  onRegisterClick: () => void
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Carregar o vídeo com um pequeno atraso para evitar problemas de renderização
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src =
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freecompress-weep-Mw2yaVzr2HbghDdfms5co5EUL3VThW.mp4"
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
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex flex-col justify-between items-center min-h-[calc(100vh-60px)] sm:min-h-screen overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ objectPosition: "center center" }}
        autoPlay
        loop
        muted
        playsInline
      >
        {/* O src será definido dinamicamente pelo useEffect */}
      </video>
      {!isVideoLoaded && <div className="absolute top-0 left-0 w-full h-full bg-[#101010] z-0"></div>}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-[1200px] mx-auto">
        <div className="text-center w-full px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-white max-w-3xl mx-auto"
            style={{
              fontWeight: 700,
              fontOpticalSizing: "auto",
              fontStyle: "normal",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <T id="hero.title" />
          </h1>
          <div className="mb-6">
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
            >
              <T id="hero.subtitle" />
            </p>
          </div>
          <button
            onClick={onRegisterClick}
            className="inline-block border-2 border-white text-white text-lg sm:text-xl md:text-2xl lg:text-3xl py-2 px-4 sm:px-6 rounded-full 
            transition-all duration-300 bg-transparent hover:text-black relative
            hover:border-transparent overflow-hidden group mt-4 shadow-md hover:shadow-lg"
          >
            <span className="relative z-10">
              <T id="hero.cta" />
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

