"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, Eye, EyeOff, Save, Globe, Moon, Sun } from "lucide-react"
import { useLocalization } from "../contexts/LocalizationContext"
import OffCanvasMenu from "../components/OffCanvasMenu"

export default function SettingsPage() {
  const { language, setLanguage } = useLocalization()
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("account")

  // Password change state
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Profile state
  const [name, setName] = useState("Neurarter")
  const [email, setEmail] = useState("viogoss@hotmail.com")

  // Notification state
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [appNotifications, setAppNotifications] = useState(true)

  // Theme state
  const [darkMode, setDarkMode] = useState(true)

  // Presets data
  const presets = [
    {
      id: "logoMinimalista",
      name: language === "pt" ? "Logo Minimalista" : "Minimalist Logo",
      description: language === "pt" ? "Logos minimalistas em preto e branco" : "Minimalist black and white logos",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-1.jpg-SF6QYu71gOTSHEJGRX0MKkGw1ZoNJA.jpeg",
    },
    {
      id: "anime90s",
      name: language === "pt" ? "Anime 90s" : "90s Anime",
      description: language === "pt" ? "Estilo de anime dos anos 90" : "90s anime style",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-1.jpg-eDHJAON0O5MJN7VTNgfuxAtUKuSL35.jpeg",
    },
    {
      id: "pessoasV2",
      name: language === "pt" ? "Pessoas v2" : "Hyper People v2",
      description: language === "pt" ? "Pessoas hiper-realistas" : "Hyper-realistic people",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-1.jpg-mBa7a1yO0VgeNyq8zM4ZrPAp4Pd8vk.jpeg",
    },
    {
      id: "miniIcones",
      name: language === "pt" ? "Mini Ícones" : "Mini Icons",
      description: language === "pt" ? "Ícones 3D coloridos" : "Colorful 3D icons",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-4.jpg-2OSVWviOAT3b0KqfoLSQxRSXUbfQ87.jpeg",
    },
    {
      id: "cartoon3D",
      name: language === "pt" ? "Cartoon 3D" : "3D Cartoon",
      description: language === "pt" ? "Personagens 3D estilo cartoon" : "3D cartoon style characters",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-8.jpg-BRzjyzJLolX9Ew9rgaNXt5rYTqz5MY.jpeg",
    },
    {
      id: "animeUltra",
      name: language === "pt" ? "Anime Ultra" : "Ultra Anime",
      description: language === "pt" ? "Anime ultra detalhado" : "Ultra detailed anime",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-2.jpg-c6JgUlnqh9VXh83WpTlt7MgGSQYzOi.jpeg",
    },
    {
      id: "paisagens",
      name: language === "pt" ? "Paisagens" : "Hyper Landscapes",
      description: language === "pt" ? "Paisagens hiper-realistas" : "Hyper-realistic landscapes",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%201.jpg-esNnGSo4FORd4AkAuibAckBKVsZLaF.jpeg",
    },
    {
      id: "pixelArt",
      name: language === "pt" ? "Pixel Art" : "Pixel Art",
      description: language === "pt" ? "Arte em pixel estilo retro" : "Retro pixel art style",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%201.jpg-Tm5VtsSyflxdwe8Q8nR24cPwhydTEu.jpeg",
    },
  ]

  // Add a state for selected preset
  const [selectedPreset, setSelectedPreset] = useState<string | null>("logoMinimalista")

  // Success message state
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (newPassword !== confirmPassword) {
      alert(language === "pt" ? "As senhas não coincidem" : "Passwords don't match")
      return
    }

    // Here you would typically send the password change request to your backend
    console.log("Password change requested:", { currentPassword, newPassword })

    // Show success message
    setSuccessMessage(language === "pt" ? "Senha alterada com sucesso!" : "Password changed successfully!")
    setShowSuccess(true)

    // Reset form
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the profile update request to your backend
    console.log("Profile update requested:", { name, email })

    // Show success message
    setSuccessMessage(language === "pt" ? "Perfil atualizado com sucesso!" : "Profile updated successfully!")
    setShowSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the notification preferences to your backend
    console.log("Notification preferences updated:", { emailNotifications, appNotifications })

    // Show success message
    setSuccessMessage(
      language === "pt" ? "Preferências de notificação atualizadas!" : "Notification preferences updated!",
    )
    setShowSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  const handleToggleTheme = () => {
    setDarkMode(!darkMode)

    // Here you would typically update the theme in your application
    console.log("Theme toggled:", { darkMode: !darkMode })

    // Show success message
    setSuccessMessage(language === "pt" ? "Tema atualizado!" : "Theme updated!")
    setShowSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  const handleChangeLanguage = (lang: "pt" | "en") => {
    setLanguage(lang)

    // Show success message
    setSuccessMessage(language === "pt" ? "Idioma atualizado!" : "Language updated!")
    setShowSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#101010] text-white" style={{ fontFamily: "'Kode Mono', monospace" }}>
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
              alt="Neurart Logo"
              width={36}
              height={12}
              className="object-contain"
              priority
            />
            <span className="ml-3 text-white text-lg">Neurart.io</span>
            <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-[#2478ff] rounded-full">Beta</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/gerar-imagem" className="text-gray-400 hover:text-gray-300 transition-colors">
            {language === "pt" ? "Renderizar" : "Render"}
          </Link>
          <Link href="/minhas-imagens" className="text-gray-400 hover:text-gray-300 transition-colors">
            {language === "pt" ? "Minhas Imagens" : "My Images"}
          </Link>
          <Link href="/suporte" className="text-gray-400 hover:text-gray-300 transition-colors">
            {language === "pt" ? "Suporte" : "Support"}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={language === "pt" ? "https://discord.gg/Qf5FeM6t" : "https://discord.gg/7g64e3wH"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#5865F2] text-white hover:bg-[#4752C4] transition-all duration-300 hover:scale-110"
          >
            <svg width="20" height="15" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <button
            onClick={() => setIsOffCanvasOpen(!isOffCanvasOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#242424] text-white hover:bg-[#333333] transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <User size={14} />
            </div>
            <span className="text-sm">My Account</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <path
                d="M8 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">{language === "pt" ? "Configurações" : "Settings"}</h1>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in">
            {successMessage}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-[#181818] rounded-lg p-4">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("account")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeTab === "account" ? "bg-[#b157ff] text-white" : "text-gray-300 hover:bg-[#242424]"
                }`}
              >
                {language === "pt" ? "Conta" : "Account"}
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeTab === "security" ? "bg-[#b157ff] text-white" : "text-gray-300 hover:bg-[#242424]"
                }`}
              >
                {language === "pt" ? "Segurança" : "Security"}
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeTab === "notifications" ? "bg-[#b157ff] text-white" : "text-gray-300 hover:bg-[#242424]"
                }`}
              >
                {language === "pt" ? "Notificações" : "Notifications"}
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#181818] rounded-lg p-6">
            {/* Account Settings */}
            {activeTab === "account" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {language === "pt" ? "Informações da Conta" : "Account Information"}
                </h2>
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      {language === "pt" ? "Nome" : "Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      {language === "pt" ? "Email" : "Email"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#b157ff] text-white rounded-md hover:bg-[#9645d8] transition-colors flex items-center gap-2"
                    >
                      <Save size={16} />
                      <span>{language === "pt" ? "Salvar Alterações" : "Save Changes"}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div>
                <h2 className="text-xl font-medium mb-6">{language === "pt" ? "Alterar Senha" : "Change Password"}</h2>
                <form onSubmit={handleSavePassword} className="space-y-4">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-300 mb-1">
                      {language === "pt" ? "Senha Atual" : "Current Password"}
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        id="current-password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      >
                        {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-300 mb-1">
                      {language === "pt" ? "Nova Senha" : "New Password"}
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        id="new-password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">
                      {language === "pt" ? "Confirmar Nova Senha" : "Confirm New Password"}
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#b157ff] text-white rounded-md hover:bg-[#9645d8] transition-colors flex items-center gap-2"
                    >
                      <Save size={16} />
                      <span>{language === "pt" ? "Atualizar Senha" : "Update Password"}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {language === "pt" ? "Preferências de Notificação" : "Notification Preferences"}
                </h2>
                <form onSubmit={handleSaveNotifications} className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#242424] rounded-md">
                    <div>
                      <h3 className="font-medium">
                        {language === "pt" ? "Notificações por Email" : "Email Notifications"}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {language === "pt"
                          ? "Receba atualizações e novidades por email"
                          : "Receive updates and news via email"}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b157ff]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#242424] rounded-md">
                    <div>
                      <h3 className="font-medium">
                        {language === "pt" ? "Notificações no Aplicativo" : "In-App Notifications"}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {language === "pt"
                          ? "Receba notificações dentro da plataforma"
                          : "Receive notifications within the platform"}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={appNotifications}
                        onChange={() => setAppNotifications(!appNotifications)}
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b157ff]"></div>
                    </label>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#b157ff] text-white rounded-md hover:bg-[#9645d8] transition-colors flex items-center gap-2"
                    >
                      <Save size={16} />
                      <span>{language === "pt" ? "Salvar Preferências" : "Save Preferences"}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Preferences Settings */}
            {activeTab === "preferences" && (
              <div>
                <h2 className="text-xl font-medium mb-6">{language === "pt" ? "Preferências" : "Preferences"}</h2>

                {/* Language Settings */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">{language === "pt" ? "Idioma" : "Language"}</h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleChangeLanguage("pt")}
                      className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                        language === "pt" ? "bg-[#b157ff] text-white" : "bg-[#242424] text-gray-300 hover:bg-[#2d2d2d]"
                      }`}
                    >
                      <Globe size={16} />
                      <span>Português</span>
                    </button>
                    <button
                      onClick={() => handleChangeLanguage("en")}
                      className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                        language === "en" ? "bg-[#b157ff] text-white" : "bg-[#242424] text-gray-300 hover:bg-[#2d2d2d]"
                      }`}
                    >
                      <Globe size={16} />
                      <span>English</span>
                    </button>
                  </div>
                </div>

                {/* Theme Settings */}
                <div>
                  <h3 className="text-lg font-medium mb-4">{language === "pt" ? "Tema" : "Theme"}</h3>
                  <div className="flex items-center justify-between p-4 bg-[#242424] rounded-md">
                    <div>
                      <h3 className="font-medium">{language === "pt" ? "Modo Escuro" : "Dark Mode"}</h3>
                      <p className="text-sm text-gray-400">
                        {language === "pt"
                          ? "Alternar entre tema claro e escuro"
                          : "Toggle between light and dark theme"}
                      </p>
                    </div>
                    <button
                      onClick={handleToggleTheme}
                      className="p-2 bg-[#333333] rounded-md text-white hover:bg-[#444444] transition-colors"
                    >
                      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Presets Settings */}
            {activeTab === "presets" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {language === "pt" ? "Presets Disponíveis" : "Available Presets"}
                </h2>
                <p className="text-gray-300 mb-6">
                  {language === "pt"
                    ? "Explore os diferentes estilos disponíveis para geração de imagens"
                    : "Explore the different styles available for image generation"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {presets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPreset(preset.id)}
                      className={`p-4 rounded-lg border transition-all ${
                        selectedPreset === preset.id
                          ? "border-[#b157ff] bg-[#b157ff]/10"
                          : "border-gray-700 hover:border-gray-500"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden">
                          <Image
                            src={preset.imageUrl || "/placeholder.svg"}
                            alt={preset.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium">{preset.name}</h3>
                          <p className="text-sm text-gray-400">{preset.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedPreset && (
                  <div className="bg-[#242424] p-4 rounded-lg">
                    <h3 className="font-medium mb-3">{language === "pt" ? "Exemplo de Imagem" : "Example Image"}</h3>
                    <div className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden">
                      <Image
                        src={presets.find((p) => p.id === selectedPreset)?.imageUrl || ""}
                        alt={presets.find((p) => p.id === selectedPreset)?.name || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-400 mt-3">
                      {language === "pt"
                        ? "Este é apenas um exemplo do estilo. Os resultados podem variar com base no seu prompt."
                        : "This is just an example of the style. Results may vary based on your prompt."}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <OffCanvasMenu isOpen={isOffCanvasOpen} onClose={() => setIsOffCanvasOpen(false)} />
    </div>
  )
}

