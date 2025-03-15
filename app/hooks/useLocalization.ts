"use client"

import { useState, useEffect } from "react"

interface Localization {
  country: string
  language: "pt" | "en"
}

export function useLocalization() {
  const [localization, setLocalization] = useState<Localization>({ country: "Unknown", language: "en" })

  useEffect(() => {
    const userLang = navigator.language || (navigator as any).userLanguage

    fetch("/api/geo")
      .then((res) => res.json())
      .then((data) => {
        const language = data.country === "BR" ? "pt" : "en"
        setLocalization({
          country: data.country || "Unknown",
          language: language,
        })
      })
      .catch(() => setLocalization({ country: "Not detected", language: "en" }))
  }, [])

  return localization
}

