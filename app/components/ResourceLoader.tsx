"use client"

import { useEffect } from "react"

export default function ResourceLoader() {
  useEffect(() => {
    // Função para carregar recursos não críticos após o carregamento da página
    const loadNonCriticalResources = () => {
      // Pré-carregar imagens de fundo
      const preloadImages = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-sing-up.jpg-DEUJ6DDQIqaCJuNseZQpZil211NvKj.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6b8ae00461e0d3c9b9030230613439b-wuNP8X3bgTp9winsVX5ycHBGgELGiO.gif",
      ]

      preloadImages.forEach((url) => {
        const img = new Image()
        img.src = url
      })
    }

    // Usar requestIdleCallback para carregar recursos quando o navegador estiver ocioso
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        ;(window as any).requestIdleCallback(loadNonCriticalResources)
      } else {
        // Fallback para navegadores que não suportam requestIdleCallback
        setTimeout(loadNonCriticalResources, 1000)
      }
    }
  }, [])

  return null
}

