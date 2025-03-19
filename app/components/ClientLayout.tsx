"use client"

import type React from "react"

import { LocalizationProvider } from "../contexts/LocalizationContext"
import ResourceLoader from "./ResourceLoader"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocalizationProvider>
      {children}
      <ResourceLoader />
    </LocalizationProvider>
  )
}

