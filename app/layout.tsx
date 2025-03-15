import "./globals.css"
import { Kode_Mono, Maven_Pro } from "next/font/google"
import type React from "react"
import { LocalizationProvider } from "./contexts/LocalizationContext"

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata = {
  title: "Faca Qualquer Imagem",
  description: "Landing page for image creation service",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="dark">
      <body className={`${kodeMono.className} ${mavenPro.className} custom-scrollbar`}>
        <LocalizationProvider>{children}</LocalizationProvider>
      </body>
    </html>
  )
}



import './globals.css'