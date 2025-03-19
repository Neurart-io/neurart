"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface LocalizationContextType {
  language: "pt" | "en"
  country: string
  setLanguage: (lang: "pt" | "en") => void
}

const defaultLanguage: "pt" | "en" = "en"

const LocalizationContext = createContext<LocalizationContextType>({
  language: defaultLanguage,
  country: "Unknown",
  setLanguage: () => {},
})

export const useLocalization = () => useContext(LocalizationContext)

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [localization, setLocalization] = useState<Omit<LocalizationContextType, "setLanguage">>({
    language: defaultLanguage,
    country: "Unknown",
  })

  useEffect(() => {
    let storedLanguage: "pt" | "en" | null = null

    // Verificar se estamos no navegador antes de acessar localStorage
    if (typeof window !== "undefined") {
      storedLanguage = localStorage.getItem("preferredLanguage") as "pt" | "en" | null
    }

    // Simplificar a detecção de idioma para evitar chamadas de API desnecessárias
    const browserLanguage = typeof navigator !== "undefined" ? navigator.language : null
    const detectedLanguage = browserLanguage && browserLanguage.startsWith("pt") ? "pt" : "en"

    const language = storedLanguage || detectedLanguage

    setLocalization({
      country: "Unknown",
      language,
    })

    if (typeof window !== "undefined" && !storedLanguage) {
      localStorage.setItem("preferredLanguage", language)
    }
  }, [])

  const setLanguage = (lang: "pt" | "en") => {
    setLocalization((prev) => ({ ...prev, language: lang }))
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", lang)
    }
  }

  return (
    <LocalizationContext.Provider value={{ ...localization, setLanguage }}>{children}</LocalizationContext.Provider>
  )
}

