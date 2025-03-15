"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { useLocalization } from "../contexts/LocalizationContext"
import { Search, Filter, ChevronDown } from "lucide-react"

interface Preset {
  id: string
  name: string
  imageUrl: string
  prompt: string
  category?: string
}

interface PresetPopupProps {
  isOpen: boolean
  onClose: () => void
  onApply: (preset: Preset) => void
  searchQuery?: string
  setSearchQuery?: (query: string) => void
  selectedCategory?: string | null
  setSelectedCategory?: (category: string | null) => void
  filterOpen?: boolean
  setFilterOpen?: (open: boolean) => void
  title?: string
  categories?: Array<{ id: string; name: string }>
}

export default function PresetPopup({
  isOpen,
  onClose,
  onApply,
  searchQuery = "",
  setSearchQuery = () => {},
  selectedCategory = null,
  setSelectedCategory = () => {},
  filterOpen = false,
  setFilterOpen = () => {},
  title = "Select Preset",
  categories = [],
}: PresetPopupProps) {
  const { language } = useLocalization()
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null)

  if (!isOpen) return null

  const presets: Preset[] = [
    {
      id: "logoMinimalista",
      name: language === "pt" ? "Logo Minimalista" : "Minimalist Logo",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-1.jpg-SF6QYu71gOTSHEJGRX0MKkGw1ZoNJA.jpeg",
      prompt:
        language === "pt"
          ? "Logo minimalista em preto e branco com design limpo e elegante"
          : "Minimalist black and white logo with clean and elegant design",
      category: "logos",
    },
    {
      id: "anime90s",
      name: language === "pt" ? "Anime 90s" : "90s Anime",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-1.jpg-eDHJAON0O5MJN7VTNgfuxAtUKuSL35.jpeg",
      prompt:
        language === "pt"
          ? "Personagem de anime em estilo anos 90 com cores vibrantes"
          : "Anime character in 90s style with vibrant colors",
      category: "characters",
    },
    {
      id: "pessoasV2",
      name: language === "pt" ? "Pessoas v2" : "Hyper People v2",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-1.jpg-mBa7a1yO0VgeNyq8zM4ZrPAp4Pd8vk.jpeg",
      prompt:
        language === "pt"
          ? "Retrato hiper-realista de pessoa com detalhes precisos"
          : "Hyper-realistic portrait of a person with precise details",
      category: "characters",
    },
    {
      id: "miniIcones",
      name: language === "pt" ? "Mini Ícones" : "Mini Icons",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-4.jpg-2OSVWviOAT3b0KqfoLSQxRSXUbfQ87.jpeg",
      prompt:
        language === "pt"
          ? "Ícone 3D colorido com design moderno e minimalista"
          : "Colorful 3D icon with modern and minimalist design",
      category: "logos",
    },
    {
      id: "cartoon3D",
      name: language === "pt" ? "Cartoon 3D" : "3D Cartoon",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-8.jpg-BRzjyzJLolX9Ew9rgaNXt5rYTqz5MY.jpeg",
      prompt:
        language === "pt"
          ? "Personagem 3D em estilo cartoon com cores vibrantes"
          : "3D character in cartoon style with vibrant colors",
      category: "characters",
    },
    {
      id: "animeUltra",
      name: language === "pt" ? "Anime Ultra" : "Ultra Anime",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-2.jpg-c6JgUlnqh9VXh83WpTlt7MgGSQYzOi.jpeg",
      prompt:
        language === "pt"
          ? "Personagem de anime ultra detalhado com efeitos visuais impressionantes"
          : "Ultra detailed anime character with impressive visual effects",
      category: "characters",
    },
    {
      id: "paisagens",
      name: language === "pt" ? "Paisagens" : "Hyper Landscapes",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%201.jpg-esNnGSo4FORd4AkAuibAckBKVsZLaF.jpeg",
      prompt:
        language === "pt"
          ? "Paisagem hiper-realista com detalhes impressionantes e iluminação dramática"
          : "Hyper-realistic landscape with impressive details and dramatic lighting",
      category: "landscapes",
    },
    {
      id: "pixelArt",
      name: language === "pt" ? "Pixel Art" : "Pixel Art",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%201.jpg-Tm5VtsSyflxdwe8Q8nR24cPwhydTEu.jpeg",
      prompt:
        language === "pt" ? "Arte em pixel com estilo retro de jogos 8-bit" : "Pixel art with retro 8-bit game style",
      category: "art",
    },
  ]

  // Filter presets based on search query and selected category
  const filteredPresets = presets.filter((preset) => {
    const matchesSearch =
      preset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.prompt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === null || selectedCategory === "all" || preset.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleApply = () => {
    const preset = presets.find((p) => p.id === selectedPreset)
    if (preset) {
      onApply(preset)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#181818] rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === "pt" ? "Buscar presets..." : "Search presets..."}
              className="w-full px-4 py-2 pl-10 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white hover:bg-[#333333] transition-colors"
            >
              <Filter size={16} />
              <span>{language === "pt" ? "Filtros" : "Filters"}</span>
              <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
            </button>

            <div className="text-sm text-gray-400">
              {filteredPresets.length} {language === "pt" ? "presets encontrados" : "presets found"}
            </div>
          </div>

          {filterOpen && (
            <div className="p-4 bg-[#242424] border border-gray-700 rounded-md">
              <h3 className="text-sm font-medium mb-3">{language === "pt" ? "Categorias" : "Categories"}</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? "bg-[#b157ff] text-white"
                        : "bg-[#333333] text-gray-300 hover:bg-[#444444]"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {filteredPresets.map((preset) => (
            <button
              key={preset.id}
              className={`p-3 rounded-lg border ${
                selectedPreset === preset.id
                  ? "border-[#b157ff] bg-[#b157ff]/10"
                  : "border-gray-700 hover:border-gray-600"
              } transition-all flex flex-col items-center`}
              onClick={() => setSelectedPreset(preset.id)}
            >
              <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-md">
                <Image src={preset.imageUrl || "/placeholder.svg"} alt={preset.name} fill className="object-cover" />
              </div>
              <p className="text-sm text-center">{preset.name}</p>
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleApply}
            disabled={!selectedPreset}
            className={`px-4 py-2 rounded-md font-medium ${
              !selectedPreset
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-[#b157ff] text-white hover:bg-[#9645d8] transition-colors"
            }`}
          >
            {language === "pt" ? "Aplicar" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  )
}

