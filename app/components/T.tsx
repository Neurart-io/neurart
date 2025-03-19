"use client"

import type React from "react"
import { useLocalization } from "../contexts/LocalizationContext"
import { translations } from "../translations"

interface TProps {
  id: string
}

export const T: React.FC<TProps> = ({ id }) => {
  const { language } = useLocalization()

  // Verificar se a tradução existe para o idioma atual
  const translatedText = translations[language]?.[id] || id

  return <>{translatedText}</>
}

export default T

