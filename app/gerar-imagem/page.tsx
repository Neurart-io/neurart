"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Info, User } from "lucide-react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import OffCanvasMenu from "../components/OffCanvasMenu";
import PresetPopup from "../components/PresetPopup";
import { useLocalization } from "../contexts/LocalizationContext";
import AuthenticatedHeader from "../components/AuthenticatedHeader";

// Add custom styles
const customStyles = `
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #181818;
  border-radius: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #333333;
  border-radius: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #444444;
}
`;

export default function GerarImagemPage() {
  useScrollToTop();
  const [prompt, setPrompt] = useState("");
  const [imageCount, setImageCount] = useState(4);
  const [aspectRatio, setAspectRatio] = useState<string>("1:1");
  const [dimensions, setDimensions] = useState<string>("1024x1024");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  // Always using commands tab since presets tab was removed
  const [activeTab, setActiveTab] = useState("commands");
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isPresetPopupOpen, setIsPresetPopupOpen] = useState(false);
  const { language } = useLocalization();
  const [isInfoOverlayOpen, setIsInfoOverlayOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"generate" | "presets">(
    "generate"
  );
  const presets = [
    {
      id: "logoMinimalista",
      name: language === "pt" ? "Logo Minimalista" : "Minimalist Logo",
      examples: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-1.jpg-SF6QYu71gOTSHEJGRX0MKkGw1ZoNJA.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Logo%20Minimalista%202.jpg-zyuZsJBjAy6zjqPiA2UECopDswi3IA.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Logo%20Minimalista%204%20%281%29.jpg-xzfOeryB37AKV8aKaz9EFnSeDvy9gZ.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-5.jpg-oeC4jILdGYp3dJJwaNPP3YOGT3s18Z.jpeg",
      ],
    },
    {
      id: "anime90s",
      name: language === "pt" ? "Anime 90s" : "90s Anime",
      examples: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-1.jpg-eDHJAON0O5MJN7VTNgfuxAtUKuSL35.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-5.jpg-ONvY8dCUzTWz8W2k1sK8DJ7im0Pyye.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-4.jpg-c5xk1AO25tNFRAQaqMx0E6wyn6MmTr.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-2.jpg-hHJerjs4iMw677uDrpsy5D5rmmUotY.jpeg",
      ],
    },
    {
      id: "pessoasV2",
      name: language === "pt" ? "Pessoas v2" : "Hyper People v2",
      examples: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Pessoasv2%202.jpg-26smTqpXZ9plEIT8R29wtXPsTpD2mT.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-1.jpg-mBa7a1yO0VgeNyq8zM4ZrPAp4Pd8vk.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Pessoasv2%203.jpg-x9l5rKyS4Kit168JYW3zzEL9YRNNOx.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-4.jpg-XThc9eeI1uIkt73G975QZxQ60GgN2j.jpeg",
      ],
    },
    {
      id: "miniIcones",
      name: language === "pt" ? "Mini Ícones" : "Mini Icons",
      examples: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-4.jpg-2OSVWviOAT3b0KqfoLSQxRSXUbfQ87.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Icones%203D%203-XBwM0wmgqaqL5l63zxyIV5FbpdEFPF.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-3.jpg-YqnPXqPyw8UvR3qPomo77H1u1MYiqY.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons-3D-1.jpg-QC8qnqb11MHXLFkNn9ATYYyY0I29rh.jpeg",
      ],
    },
    {
      id: "cartoon3D",
      name: language === "pt" ? "Cartoon 3D" : "3D Cartoon",
      examples: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-8.jpg-BRzjyzJLolX9Ew9rgaNXt5rYTqz5MY.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-7.jpg-bKyv4XbA7geUxot3FhRnKdR8l0hA21.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-5.jpg-A3xGz9PY2KSJh9AyqVR0VdxlYbHyXl.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-1.jpg-8fBHSqgO6ZtwNR6pdsjLnrj4RTw7Z5.jpeg",
      ],
    },
    {
      id: "animeUltra",
      name: language === "pt" ? "Anime Ultra" : "Ultra Anime",
      examples: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-2.jpg-c6JgUlnqh9VXh83WpTlt7MgGSQYzOi.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-6.jpg-b7C6X8P0jJjNvYqbjCJFz7HNJlgEdi.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-1.jpg-zlqPzNiXX55I6zAxsEomWncqI0jI7t.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-5.jpg-7UoxG6c8olnYU7XtgjpCLiQHIGw79B.jpeg",
      ],
    },
    {
      id: "paisagens",
      name: language === "pt" ? "Paisagens" : "Hyper Landscapes",
      examples: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%201.jpg-esNnGSo4FORd4AkAuibAckBKVsZLaF.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%202.jpg-zi6l8ri1kuDoZzkRTjpyUxnV7YG4bp.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%203.jpg-MDA4p4rXerqTlr9NbfgS7jI3T6CIAU.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%204.jpg-GWsfqTgYTGGTc9HOXu2UqpusnVnYjI.jpeg",
      ],
    },
    {
      id: "pixelArt",
      name: language === "pt" ? "Pixel Art" : "Pixel Art",
      examples: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%201.jpg-Tm5VtsSyflxdwe8Q8nR24cPwhydTEu.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%202.jpg-KYPA9ua6pHqBdjWM6NvcxN7UZexBED.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%203.jpg-I25kSiLfAoMdVeblvIJZCPcieBYbkx.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%204.jpg-cmYRuWnS11igUsqdrjNGR5jDfrBzak.jpeg",
      ],
    },
  ];
  const [selectedPreset, setSelectedPreset] = useState<string | null>(
    presets[0].id
  );

  const getGridColumns = () => {
    switch (aspectRatio) {
      case "1:1":
      case "4:3":
        return "grid-cols-2";
      case "16:9":
        return "grid-cols-1";
      case "2:3":
        return "grid-cols-3";
      default:
        return "grid-cols-2";
    }
  };

  const calculateDimensions = (
    ratio: string,
    size: "small" | "medium" | "large" | "extraLarge"
  ): string => {
    const [width, height] = ratio.split(":").map(Number);
    const baseSizes = {
      small: 512,
      medium: 768,
      large: 1024,
      extraLarge: 1280,
    };
    const baseSize = baseSizes[size];

    if (width === height) {
      return `${baseSize}x${baseSize}`;
    } else if (width > height) {
      return `${baseSize}x${Math.round(baseSize * (height / width))}`;
    } else {
      return `${Math.round(baseSize * (width / height))}x${baseSize}`;
    }
  };

  const updateDimensions = (
    ratio: string,
    size: "small" | "medium" | "large" | "extraLarge"
  ) => {
    setAspectRatio(ratio);
    setDimensions(calculateDimensions(ratio, size));
  };

  const handleGenerate = () => {
    if (!prompt) return;

    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handlePresetSelect = (preset: { id: string; prompt: string }) => {
    setSelectedPreset(preset.id);
    setPrompt(preset.prompt);
    setIsPresetPopupOpen(false);
  };

  // First, let's add state variables for the new popup features
  // Add these state variables after the other useState declarations:
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#101010] text-white"
      style={{ fontFamily: "'Kode Mono', monospace" }}
    >
      <style jsx global>
        {customStyles}
      </style>
      <AuthenticatedHeader
        onOpenOffCanvas={() => setIsOffCanvasOpen(true)}
        isOffCanvasOpen={isOffCanvasOpen}
      />

      <div className="flex flex-col md:flex-row h-[calc(100vh-73px)]">
        <div className="w-full md:w-40 bg-[#101010] border-r border-gray-800 flex flex-col">
          <button
            onClick={() => setActiveSection("generate")}
            className={`py-4 px-6 w-full text-left ${
              activeSection === "generate"
                ? "text-white font-medium bg-[#181818] border-l-4 border-[#b157ff]"
                : "text-gray-400 hover:text-gray-300 border-l-4 border-transparent"
            } transition-colors`}
          >
            {language === "pt" ? "Gerar" : "Generate"}
          </button>
          <button
            onClick={() => setActiveSection("presets")}
            className={`py-4 px-6 w-full text-left ${
              activeSection === "presets"
                ? "text-white font-medium bg-[#181818] border-l-4 border-[#b157ff]"
                : "text-gray-400 hover:text-gray-300 border-l-4 border-transparent"
            } transition-colors`}
          >
            {language === "pt" ? "Presets" : "Presets"}
          </button>
          <Link
            href="#"
            className="py-4 px-6 text-gray-400 hover:text-gray-300 transition-colors"
          >
            {language === "pt" ? "Atualizações" : "Updates"}
          </Link>
        </div>

        <div className="flex-1 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-2/5 p-0 border-r border-gray-800 overflow-hidden bg-[#101010]">
            <div className="h-full flex flex-col">
              {activeSection === "generate" ? (
                <>
                  {/* Sidebar Header */}
                  <div className="p-6 border-b border-gray-800 bg-gradient-to-r from-[#101010] to-[#151515]">
                    <div className="mb-4 flex">
                      <button
                        className={`text-lg transition-colors ${
                          activeTab === "commands"
                            ? "text-white"
                            : "text-gray-400 hover:text-gray-300"
                        }`}
                        onClick={() => setActiveTab("commands")}
                      >
                        {language === "pt" ? "Comandos" : "Commands"}
                      </button>
                    </div>

                    {/* Now, let's modify the button that opens the preset popup to pass these new props */}
                    {/* Replace the existing button with this enhanced version: */}
                    <button
                      onClick={() => setIsPresetPopupOpen(true)}
                      className="w-full py-3 px-4 bg-[#181818] text-white rounded-md hover:bg-[#242424] transition-colors flex items-center justify-between"
                    >
                      <span>
                        {language === "pt"
                          ? "Selecionar Preset"
                          : "Select Preset"}
                      </span>
                      <span className="bg-[#242424] px-3 py-1 rounded-md text-sm">
                        {selectedPreset || "None"}
                      </span>
                    </button>
                  </div>

                  {/* Sidebar Content - Scrollable Area */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                    <div>
                      <label className="text-sm font-medium flex items-center mb-2">
                        {language === "pt"
                          ? "Prompt Positivo"
                          : "Positive Prompt"}
                        <button
                          onClick={() => setIsInfoOverlayOpen(true)}
                          className="ml-1 flex items-center"
                        >
                          <Info size={14} className="text-gray-400" />
                        </button>
                      </label>
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full h-24 bg-[#181818] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
                        placeholder={
                          language === "pt"
                            ? "Um papagaio (roxo) e uma (cerveja)"
                            : "A parrot (purple) and a (beer)"
                        }
                      />
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium">
                          {language === "pt"
                            ? "Quantidade de Imagens"
                            : "Image Count"}
                        </label>
                        <span className="text-gray-400 bg-[#181818] px-2 py-1 rounded-md">
                          {imageCount}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="8"
                        value={imageCount}
                        onChange={(e) =>
                          setImageCount(Number.parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-[#181818] rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium">
                          {language === "pt" ? "Proporção" : "Aspect Ratio"}
                        </label>
                        <span className="text-gray-400 bg-[#181818] px-2 py-1 rounded-md">
                          {dimensions}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                        {[
                          ["1:1", "Square"],
                          ["4:3", "Standard"],
                          ["16:9", "Widescreen"],
                          ["2:3", "Portrait"],
                        ].map(([ratio, label]) => (
                          <button
                            key={ratio}
                            onClick={() =>
                              updateDimensions(
                                ratio,
                                dimensions.includes("1024") ? "large" : "medium"
                              )
                            }
                            className={`p-3 rounded-lg border ${
                              aspectRatio === ratio
                                ? "border-[#b157ff] bg-[#b157ff]/10"
                                : "border-gray-700 bg-[#181818] hover:border-gray-600"
                            } transition-all group relative`}
                          >
                            <div
                              className={`w-full aspect-[${ratio.replace(
                                ":",
                                "/"
                              )}] border border-gray-600 rounded flex items-center justify-center`}
                            >
                              <span className="text-sm">{ratio}</span>
                            </div>
                            <span className="text-xs text-gray-400 mt-1 block">
                              {label}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="space-y-2">
                        {[
                          ["small", "Small"],
                          ["medium", "Medium"],
                          ["large", "Large"],
                          ["extraLarge", "Extra Large"],
                        ].map(([size, label]) => (
                          <button
                            key={size}
                            onClick={() =>
                              updateDimensions(
                                aspectRatio,
                                size as
                                  | "small"
                                  | "medium"
                                  | "large"
                                  | "extraLarge"
                              )
                            }
                            className={`w-full p-3 rounded-lg border ${
                              dimensions ===
                              calculateDimensions(
                                aspectRatio,
                                size as
                                  | "small"
                                  | "medium"
                                  | "large"
                                  | "extraLarge"
                              )
                                ? "border-[#b157ff] bg-[#b157ff]/10"
                                : "border-gray-700 bg-[#181818] hover:border-gray-600"
                            } transition-all flex justify-between items-center`}
                          >
                            <span>{label}</span>
                            <span className="text-gray-400">
                              {calculateDimensions(
                                aspectRatio,
                                size as
                                  | "small"
                                  | "medium"
                                  | "large"
                                  | "extraLarge"
                              )}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Footer */}
                  <div className="p-6 border-t border-gray-800 bg-gradient-to-r from-[#101010] to-[#151515]">
                    <button
                      onClick={handleGenerate}
                      disabled={!prompt || isGenerating}
                      className={`w-full py-3 rounded-md font-medium ${
                        !prompt || isGenerating
                          ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#b157ff] to-[#9645d8] text-white hover:opacity-90 transition-opacity"
                      }`}
                    >
                      {isGenerating
                        ? language === "pt"
                          ? "Gerando..."
                          : "Generating..."
                        : language === "pt"
                        ? "Gerar"
                        : "Generate"}
                    </button>
                  </div>
                </>
              ) : (
                // Presets Section
                <>
                  <div className="p-6 border-b border-gray-800 bg-gradient-to-r from-[#101010] to-[#151515]">
                    <h2 className="text-xl font-bold mb-4">
                      {language === "pt"
                        ? "Presets Disponíveis"
                        : "Available Presets"}
                    </h2>
                    <p className="text-sm text-gray-400 mb-4">
                      {language === "pt"
                        ? "Selecione um preset para ver exemplos de imagens geradas"
                        : "Select a preset to see example images"}
                    </p>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="p-4">
                      {presets
                        .slice() // Create a copy to avoid mutating the original array
                        .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name
                        .map((preset) => (
                          <button
                            key={preset.id}
                            onClick={() => setSelectedPreset(preset.id)}
                            className={`w-full text-left p-4 mb-2 rounded-lg transition-all flex items-center gap-3 ${
                              selectedPreset === preset.id
                                ? "bg-[#b157ff]/10 border border-[#b157ff]"
                                : "bg-[#181818] border border-gray-700 hover:border-gray-500"
                            }`}
                          >
                            <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={preset.examples[0] || "/placeholder.svg"}
                                alt={preset.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium">{preset.name}</span>
                          </button>
                        ))}
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-800 bg-gradient-to-r from-[#101010] to-[#151515]">
                    <button
                      onClick={() => {
                        setActiveSection("generate");
                        const selectedPresetObj = presets.find(
                          (p) => p.id === selectedPreset
                        );
                        if (selectedPresetObj) {
                          setPrompt(
                            `Using ${selectedPresetObj.name} style to create an image of `
                          );
                        }
                      }}
                      className="w-full py-3 rounded-md font-medium bg-gradient-to-r from-[#b157ff] to-[#9645d8] text-white hover:opacity-90 transition-opacity"
                    >
                      {language === "pt"
                        ? "Usar Este Preset"
                        : "Use This Preset"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5 p-6 bg-[#121212] overflow-y-auto">
            <div className="flex justify-end items-center mb-6">
              <div className="flex items-center">
                <span className="text-white font-medium mr-2">
                  {language === "pt" ? "Imagens" : "Images"}
                </span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </div>
            </div>

            {activeSection === "generate" ? (
              <div
                className={`grid gap-4 ${
                  aspectRatio === "1:1"
                    ? "grid-cols-2"
                    : aspectRatio === "4:3"
                    ? "grid-cols-2"
                    : aspectRatio === "16:9"
                    ? "grid-cols-1"
                    : aspectRatio === "2:3"
                    ? "grid-cols-3"
                    : "grid-cols-2"
                }`}
              >
                {Array.from({ length: imageCount }).map((_, index) => (
                  <div
                    key={index}
                    className={`bg-gray-700 rounded-md flex items-center justify-center ${
                      aspectRatio === "1:1"
                        ? "aspect-square"
                        : aspectRatio === "4:3"
                        ? "aspect-[4/3]"
                        : aspectRatio === "16:9"
                        ? "aspect-[16/9]"
                        : aspectRatio === "2:3"
                        ? "aspect-[2/3]"
                        : "aspect-square"
                    }`}
                  >
                    {isGenerating ? (
                      <div className="animate-pulse w-8 h-8 rounded-full bg-gray-600"></div>
                    ) : (
                      <span className="text-gray-500 text-sm">
                        {language === "pt" ? "Área da imagem" : "Image area"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {selectedPreset && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      {presets.find((p) => p.id === selectedPreset)?.name}{" "}
                      {language === "pt" ? "Exemplos" : "Examples"}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {presets
                        .find((p) => p.id === selectedPreset)
                        ?.examples.map((img, index) => (
                          <div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-lg"
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`${
                                presets.find((p) => p.id === selectedPreset)
                                  ?.name
                              } example ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-gray-400">
                      {language === "pt"
                        ? "Estas são apenas algumas das imagens que você pode criar com este preset."
                        : "These are just a few of the images you can create with this preset."}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <OffCanvasMenu
        isOpen={isOffCanvasOpen}
        onClose={() => setIsOffCanvasOpen(false)}
      />
      {/* Now, update the PresetPopup component to pass the new props */}
      {/* Replace the existing PresetPopup component with this enhanced version: */}
      <PresetPopup
        isOpen={isPresetPopupOpen}
        onClose={() => setIsPresetPopupOpen(false)}
        onApply={handlePresetSelect}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        title={language === "pt" ? "Selecione um Preset" : "Select a Preset"}
        categories={[
          { id: "all", name: language === "pt" ? "Todos" : "All" },
          { id: "logos", name: language === "pt" ? "Logos" : "Logos" },
          {
            id: "characters",
            name: language === "pt" ? "Personagens" : "Characters",
          },
          {
            id: "landscapes",
            name: language === "pt" ? "Paisagens" : "Landscapes",
          },
          { id: "art", name: language === "pt" ? "Arte" : "Art" },
        ]}
      />
      {isInfoOverlayOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#181818] rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setIsInfoOverlayOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="text-lg font-bold mb-4">
              {language === "pt" ? "Dicas de Prompt" : "Prompt Tips"}
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                {language === "pt"
                  ? "Prompt Positivo: Descreva o que você quer ver na imagem."
                  : "Positive Prompt: Describe what you want to see in the image."}
              </p>
              <p>
                {language === "pt"
                  ? "Prompt Negativo: Use [colchetes] para especificar o que você não quer ver. Exemplo: [pessoas] [animais]"
                  : "Negative Prompt: Use [brackets] to specify what you don't want to see. Example: [people] [animals]"}
              </p>
              <p>
                {language === "pt"
                  ? "Use parênteses para dar ênfase. Exemplo: Um papagaio (roxo) e uma (cerveja)"
                  : "Use parentheses for emphasis. Example: A parrot (purple) and a (beer)"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
