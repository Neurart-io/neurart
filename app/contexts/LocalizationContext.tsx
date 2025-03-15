"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface LocalizationContextType {
  language: "pt" | "en"
  country: string
  setLanguage: (lang: "pt" | "en") => void
}

const LocalizationContext = createContext<LocalizationContextType>({
  language: "en",
  country: "Unknown",
  setLanguage: () => {},
})

export const useLocalization = () => useContext(LocalizationContext)

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [localization, setLocalization] = useState<Omit<LocalizationContextType, "setLanguage">>({
    language: "en",
    country: "Unknown",
  })

  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferredLanguage") as "pt" | "en" | null

    fetch("/api/geo")
      .then((res) => res.json())
      .then((data) => {
        const detectedLanguage = data.country === "BR" ? "pt" : "en"
        const language = storedLanguage || detectedLanguage
        setLocalization({
          country: data.country || "Unknown",
          language: language,
        })
        if (!storedLanguage) {
          localStorage.setItem("preferredLanguage", language)
        }
      })
      .catch(() => {
        const language = storedLanguage || "en"
        setLocalization({ country: "Not detected", language: language })
        if (!storedLanguage) {
          localStorage.setItem("preferredLanguage", language)
        }
      })
  }, [])

  const setLanguage = (lang: "pt" | "en") => {
    setLocalization((prev) => ({ ...prev, language: lang }))
    localStorage.setItem("preferredLanguage", lang)
  }

  return (
    <LocalizationContext.Provider value={{ ...localization, setLanguage }}>{children}</LocalizationContext.Provider>
  )
}

