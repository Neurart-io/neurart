"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Eye, EyeOff, Save, Globe, Moon, Sun } from "lucide-react";
import { useLocalization } from "../contexts/LocalizationContext";
import AuthenticatedHeader from "../components/AuthenticatedHeader";

export default function SettingsPage() {
  const { language, setLanguage } = useLocalization();
  const [activeTab, setActiveTab] = useState("account");

  // Password change state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Profile state
  const [name, setName] = useState("Neurarter");
  const [email, setEmail] = useState("viogoss@hotmail.com");

  // Notification state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [appNotifications, setAppNotifications] = useState(true);

  // Theme state
  const [darkMode, setDarkMode] = useState(true);

  // Presets data
  const presets = [
    {
      id: "logoMinimalista",
      name: language === "pt" ? "Logo Minimalista" : "Minimalist Logo",
      description:
        language === "pt"
          ? "Logos minimalistas em preto e branco"
          : "Minimalist black and white logos",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-1.jpg-SF6QYu71gOTSHEJGRX0MKkGw1ZoNJA.jpeg",
    },
    {
      id: "anime90s",
      name: language === "pt" ? "Anime 90s" : "90s Anime",
      description:
        language === "pt" ? "Estilo de anime dos anos 90" : "90s anime style",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-1.jpg-eDHJAON0O5MJN7VTNgfuxAtUKuSL35.jpeg",
    },
    {
      id: "pessoasV2",
      name: language === "pt" ? "Pessoas v2" : "Hyper People v2",
      description:
        language === "pt"
          ? "Pessoas hiper-realistas"
          : "Hyper-realistic people",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-1.jpg-mBa7a1yO0VgeNyq8zM4ZrPAp4Pd8vk.jpeg",
    },
    {
      id: "miniIcones",
      name: language === "pt" ? "Mini Ícones" : "Mini Icons",
      description:
        language === "pt" ? "Ícones 3D coloridos" : "Colorful 3D icons",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-4.jpg-2OSVWviOAT3b0KqfoLSQxRSXUbfQ87.jpeg",
    },
    {
      id: "cartoon3D",
      name: language === "pt" ? "Cartoon 3D" : "3D Cartoon",
      description:
        language === "pt"
          ? "Personagens 3D estilo cartoon"
          : "3D cartoon style characters",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-8.jpg-BRzjyzJLolX9Ew9rgaNXt5rYTqz5MY.jpeg",
    },
    {
      id: "animeUltra",
      name: language === "pt" ? "Anime Ultra" : "Ultra Anime",
      description:
        language === "pt" ? "Anime ultra detalhado" : "Ultra detailed anime",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-2.jpg-c6JgUlnqh9VXh83WpTlt7MgGSQYzOi.jpeg",
    },
    {
      id: "paisagens",
      name: language === "pt" ? "Paisagens" : "Hyper Landscapes",
      description:
        language === "pt"
          ? "Paisagens hiper-realistas"
          : "Hyper-realistic landscapes",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%201.jpg-esNnGSo4FORd4AkAuibAckBKVsZLaF.jpeg",
    },
    {
      id: "pixelArt",
      name: language === "pt" ? "Pixel Art" : "Pixel Art",
      description:
        language === "pt"
          ? "Arte em pixel estilo retro"
          : "Retro pixel art style",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%201.jpg-Tm5VtsSyflxdwe8Q8nR24cPwhydTEu.jpeg",
    },
  ];

  // Add a state for selected preset
  const [selectedPreset, setSelectedPreset] = useState<string | null>(
    "logoMinimalista"
  );

  // Success message state
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (newPassword !== confirmPassword) {
      alert(
        language === "pt" ? "As senhas não coincidem" : "Passwords don't match"
      );
      return;
    }

    // Here you would typically send the password change request to your backend
    console.log("Password change requested:", { currentPassword, newPassword });

    // Show success message
    setSuccessMessage(
      language === "pt"
        ? "Senha alterada com sucesso!"
        : "Password changed successfully!"
    );
    setShowSuccess(true);

    // Reset form
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the profile update request to your backend
    console.log("Profile update requested:", { name, email });

    // Show success message
    setSuccessMessage(
      language === "pt"
        ? "Perfil atualizado com sucesso!"
        : "Profile updated successfully!"
    );
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the notification preferences to your backend
    console.log("Notification preferences updated:", {
      emailNotifications,
      appNotifications,
    });

    // Show success message
    setSuccessMessage(
      language === "pt"
        ? "Preferências de notificação atualizadas!"
        : "Notification preferences updated!"
    );
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);

    // Here you would typically update the theme in your application
    console.log("Theme toggled:", { darkMode: !darkMode });

    // Show success message
    setSuccessMessage(
      language === "pt" ? "Tema atualizado!" : "Theme updated!"
    );
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleChangeLanguage = (lang: "pt" | "en") => {
    setLanguage(lang);

    // Show success message
    setSuccessMessage(
      language === "pt" ? "Idioma atualizado!" : "Language updated!"
    );
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div
      className="min-h-screen bg-[#101010] text-white"
      style={{ fontFamily: "'Kode Mono', monospace" }}
    >
      <AuthenticatedHeader />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">
          {language === "pt" ? "Configurações" : "Settings"}
        </h1>

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
                  activeTab === "account"
                    ? "bg-[#b157ff] text-white"
                    : "text-gray-300 hover:bg-[#242424]"
                }`}
              >
                {language === "pt" ? "Conta" : "Account"}
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeTab === "security"
                    ? "bg-[#b157ff] text-white"
                    : "text-gray-300 hover:bg-[#242424]"
                }`}
              >
                {language === "pt" ? "Segurança" : "Security"}
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeTab === "notifications"
                    ? "bg-[#b157ff] text-white"
                    : "text-gray-300 hover:bg-[#242424]"
                }`}
              >
                {language === "pt" ? "Notificações" : "Notifications"}
              </button>
              <Link
                href="/assinatura"
                className="w-full text-left block px-4 py-2 rounded-md transition-colors text-gray-300 hover:bg-[#242424]"
              >
                {language === "pt" ? "Assinatura" : "Subscription"}
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#181818] rounded-lg p-6">
            {/* Account Settings */}
            {activeTab === "account" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {language === "pt"
                    ? "Informações da Conta"
                    : "Account Information"}
                </h2>
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
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
                      <span>
                        {language === "pt"
                          ? "Salvar Alterações"
                          : "Save Changes"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {language === "pt" ? "Alterar Senha" : "Change Password"}
                </h2>
                <form onSubmit={handleSavePassword} className="space-y-4">
                  <div>
                    <label
                      htmlFor="current-password"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
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
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                      >
                        {showCurrentPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
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
                        {showNewPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      {language === "pt"
                        ? "Confirmar Nova Senha"
                        : "Confirm New Password"}
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
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#b157ff] text-white rounded-md hover:bg-[#9645d8] transition-colors flex items-center gap-2"
                    >
                      <Save size={16} />
                      <span>
                        {language === "pt"
                          ? "Atualizar Senha"
                          : "Update Password"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {language === "pt"
                    ? "Preferências de Notificação"
                    : "Notification Preferences"}
                </h2>
                <form onSubmit={handleSaveNotifications} className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#242424] rounded-md">
                    <div>
                      <h3 className="font-medium">
                        {language === "pt"
                          ? "Notificações por Email"
                          : "Email Notifications"}
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
                        onChange={() =>
                          setEmailNotifications(!emailNotifications)
                        }
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b157ff]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#242424] rounded-md">
                    <div>
                      <h3 className="font-medium">
                        {language === "pt"
                          ? "Notificações no Aplicativo"
                          : "In-App Notifications"}
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
                      <span>
                        {language === "pt"
                          ? "Salvar Preferências"
                          : "Save Preferences"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Preferences Settings */}
            {activeTab === "preferences" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {language === "pt" ? "Preferências" : "Preferences"}
                </h2>

                {/* Language Settings */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">
                    {language === "pt" ? "Idioma" : "Language"}
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleChangeLanguage("pt")}
                      className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                        language === "pt"
                          ? "bg-[#b157ff] text-white"
                          : "bg-[#242424] text-gray-300 hover:bg-[#2d2d2d]"
                      }`}
                    >
                      <Globe size={16} />
                      <span>Português</span>
                    </button>
                    <button
                      onClick={() => handleChangeLanguage("en")}
                      className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                        language === "en"
                          ? "bg-[#b157ff] text-white"
                          : "bg-[#242424] text-gray-300 hover:bg-[#2d2d2d]"
                      }`}
                    >
                      <Globe size={16} />
                      <span>English</span>
                    </button>
                  </div>
                </div>

                {/* Theme Settings */}
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    {language === "pt" ? "Tema" : "Theme"}
                  </h3>
                  <div className="flex items-center justify-between p-4 bg-[#242424] rounded-md">
                    <div>
                      <h3 className="font-medium">
                        {language === "pt" ? "Modo Escuro" : "Dark Mode"}
                      </h3>
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
                  {language === "pt"
                    ? "Presets Disponíveis"
                    : "Available Presets"}
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
                          <p className="text-sm text-gray-400">
                            {preset.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedPreset && (
                  <div className="bg-[#242424] p-4 rounded-lg">
                    <h3 className="font-medium mb-3">
                      {language === "pt"
                        ? "Exemplo de Imagem"
                        : "Example Image"}
                    </h3>
                    <div className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden">
                      <Image
                        src={
                          presets.find((p) => p.id === selectedPreset)
                            ?.imageUrl || ""
                        }
                        alt={
                          presets.find((p) => p.id === selectedPreset)?.name ||
                          ""
                        }
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
    </div>
  );
}
