"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, Download, Trash2, Search, Filter, Calendar, SortDesc, ChevronUp } from "lucide-react"
import { useScrollToTop } from "../hooks/useScrollToTop"
import OffCanvasMenu from "../components/OffCanvasMenu"
import { useLocalization } from "../contexts/LocalizationContext"

// Mock data for generated images
const generateMockImages = (count: number) => {
  const presetOptions = [
    { pt: "Logo Minimalista", en: "Minimalist Logo" },
    { pt: "Anime 90s", en: "90s Anime" },
    { pt: "Pessoas v2", en: "Hyper People v2" },
    { pt: "Mini Ícones", en: "Mini Icons" },
    { pt: "Cartoon 3D", en: "3D Cartoon" },
    { pt: "Anime Ultra", en: "Ultra Anime" },
    { pt: "Paisagens", en: "Hyper Landscapes" },
    { pt: "Pixel Art", en: "Pixel Art" },
  ]

  return Array.from({ length: count }, (_, i) => {
    const presetIndex = Math.floor(Math.random() * presetOptions.length)
    return {
      id: `img-${i + 1}`,
      url: `https://picsum.photos/seed/${Math.random() * 1000}/600/600`,
      prompt: `Generated image ${i + 1} with AI`,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      aspectRatio: ["1:1", "4:3", "16:9", "2:3"][Math.floor(Math.random() * 4)],
      model: ["Stable Diffusion", "Midjourney", "DALL-E", "Neurart Custom"][Math.floor(Math.random() * 4)],
      preset: presetOptions[presetIndex],
    }
  })
}

export default function MinhasImagensPage() {
  useScrollToTop()
  const { language } = useLocalization()
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
  const [images, setImages] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<any | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [filterModel, setFilterModel] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest")
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [imageToDelete, setImageToDelete] = useState<string | null>(null)

  // Adicione o estado para controlar a visibilidade do botão de scroll to top após os outros estados
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const observer = useRef<IntersectionObserver | null>(null)
  const lastImageElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prevPage) => prevPage + 1)
          }
        },
        { threshold: 0.5 },
      )

      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

  // Load initial images
  useEffect(() => {
    setLoading(true)
    // Simulate API call with timeout
    setTimeout(() => {
      setImages(generateMockImages(20))
      setLoading(false)
    }, 1000)
  }, [])

  // Load more images when page changes
  useEffect(() => {
    if (page === 1) return

    setLoading(true)
    // Simulate API call with timeout
    setTimeout(() => {
      const newImages = generateMockImages(20)
      setImages((prev) => [...prev, ...newImages])
      setLoading(false)

      // Stop after 5 pages (100 images) for demo purposes
      if (page >= 5) {
        setHasMore(false)
      }
    }, 1000)
  }, [page])

  // Adicione este useEffect após os outros useEffects para detectar o scroll
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão quando o usuário rolar mais de 500px
      setShowScrollToTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter images based on search term and filters
  const filteredImages = images.filter((image) => {
    const matchesSearch = searchTerm === "" || image.prompt.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesModel = filterModel === null || image.model === filterModel

    return matchesSearch && matchesModel
  })

  // Sort images
  const sortedImages = [...filteredImages].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()

    return sortBy === "newest" ? dateB - dateA : dateA - dateB
  })

  const handleImageClick = (image: any) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleDeleteImage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setImageToDelete(id)
    setShowDeleteConfirmation(true)
  }

  const handleDownloadImage = (url: string, e: React.MouseEvent) => {
    e.stopPropagation()
    // In a real app, this would trigger a download
    console.log("Downloading image:", url)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const calculateMemoryUsage = () => {
    // Simulando uso de memória baseado no número de imagens (aproximadamente 0.7MB por imagem)
    const memoryInMB = Math.round(images.length * 0.7)
    return `${memoryInMB}mb`
  }

  const confirmDelete = () => {
    if (imageToDelete) {
      setImages((prev) => prev.filter((img) => img.id !== imageToDelete))

      // Se a imagem que está sendo excluída é a que está sendo visualizada, feche o modal
      if (selectedImage && selectedImage.id === imageToDelete) {
        setSelectedImage(null)
      }

      // Feche o modal de confirmação
      setShowDeleteConfirmation(false)
      setImageToDelete(null)
    }
  }

  // Adicione esta função após as outras funções de manipulação
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
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
          <Link href="/minhas-imagens" className="text-white font-medium hover:text-gray-300 transition-colors">
            {language === "pt" ? "Minhas Imagens" : "My Images"}
          </Link>
          <Link href="/assinatura" className="text-gray-400 hover:text-gray-300 transition-colors">
            {language === "pt" ? "Assinatura" : "Subscription"}
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">{language === "pt" ? "Minhas Imagens" : "My Images"}</h1>
            {images.length > 0 && (
              <div className="mt-2 bg-[#181818] px-3 py-1 rounded-md inline-flex items-center text-sm">
                <span className="font-medium">
                  {images.length} {language === "pt" ? "imagens" : "images"}
                </span>
                <span className="mx-2 text-gray-500">|</span>
                <span className="text-gray-300">{calculateMemoryUsage()}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder={language === "pt" ? "Buscar por prompt..." : "Search by prompt..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#181818] border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-[#181818] border border-gray-700 rounded-md p-2 text-white hover:bg-[#242424] transition-colors"
              >
                <Filter size={20} />
              </button>

              <button
                onClick={() => setSortBy(sortBy === "newest" ? "oldest" : "newest")}
                className="bg-[#181818] border border-gray-700 rounded-md p-2 text-white hover:bg-[#242424] transition-colors flex items-center gap-2"
              >
                <SortDesc size={20} />
                <span className="hidden sm:inline">
                  {sortBy === "newest"
                    ? language === "pt"
                      ? "Mais recentes"
                      : "Newest"
                    : language === "pt"
                      ? "Mais antigas"
                      : "Oldest"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {showFilters && (
          <div className="mb-6 p-4 bg-[#181818] border border-gray-700 rounded-md">
            <h3 className="text-lg font-medium mb-3">{language === "pt" ? "Filtros" : "Filters"}</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => setFilterModel(null)}
                className={`p-2 rounded-md text-sm ${
                  filterModel === null ? "bg-[#b157ff] text-white" : "bg-[#242424] text-gray-300 hover:bg-[#2d2d2d]"
                }`}
              >
                {language === "pt" ? "Todos" : "All"}
              </button>

              {["Stable Diffusion", "Midjourney", "DALL-E", "Neurart Custom"].map((model) => (
                <button
                  key={model}
                  onClick={() => setFilterModel(model)}
                  className={`p-2 rounded-md text-sm ${
                    filterModel === model ? "bg-[#b157ff] text-white" : "bg-[#242424] text-gray-300 hover:bg-[#2d2d2d]"
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>
        )}

        {sortedImages.length === 0 && !loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-[#181818] p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-2">
                {language === "pt" ? "Nenhuma imagem encontrada" : "No images found"}
              </h3>
              <p className="text-gray-400 mb-6">
                {language === "pt"
                  ? "Você ainda não gerou nenhuma imagem ou nenhuma corresponde aos seus filtros."
                  : "You haven't generated any images yet or none match your filters."}
              </p>
              <Link
                href="/gerar-imagem"
                className="bg-[#b157ff] text-white py-2 px-4 rounded-md hover:bg-[#9645d8] transition-colors"
              >
                {language === "pt" ? "Gerar Imagens" : "Generate Images"}
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedImages.map((image, index) => {
              const isLastElement = index === sortedImages.length - 1

              return (
                <div
                  key={image.id}
                  ref={isLastElement ? lastImageElementRef : null}
                  onClick={() => handleImageClick(image)}
                  className="bg-[#181818] border border-gray-700 rounded-lg overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.prompt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => handleDownloadImage(image.url, e)}
                          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Download size={18} />
                        </button>
                        <button
                          onClick={(e) => handleDeleteImage(image.id, e)}
                          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="text-sm text-gray-300 line-clamp-2 mb-2">{image.prompt}</p>
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{formatDate(image.createdAt)}</span>
                      </div>
                      <span className="bg-[#242424] px-2 py-1 rounded">{image.preset[language]}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {loading && (
          <div className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#b157ff]"></div>
          </div>
        )}

        {!hasMore && images.length > 0 && (
          <p className="text-center text-gray-400 mt-8">
            {language === "pt" ? "Você chegou ao fim" : "You've reached the end"}
          </p>
        )}
      </main>

      {/* Image Detail Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#181818] rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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

            <div className="flex flex-col lg:flex-row h-[90vh]">
              {/* Image container - takes 2/3 of the space on large screens */}
              <div className="relative flex-1 lg:w-2/3 h-[40vh] sm:h-[50vh] lg:h-full bg-black/30">
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.prompt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 50vw"
                  priority
                />
              </div>

              {/* Details container - takes 1/3 of the space on large screens */}
              <div className="lg:w-1/3 p-6 border-t lg:border-t-0 lg:border-l border-gray-700 overflow-y-auto">
                <h3 className="text-lg font-medium mb-4">{selectedImage.prompt}</h3>

                <div className="flex flex-wrap gap-3 mb-6">
                  <button
                    onClick={(e) => handleDownloadImage(selectedImage.url, e)}
                    className="bg-[#242424] text-white py-2 px-3 rounded-md hover:bg-[#2d2d2d] transition-colors flex items-center gap-2"
                  >
                    <Download size={16} />
                    <span>{language === "pt" ? "Baixar" : "Download"}</span>
                  </button>
                  <button
                    onClick={(e) => {
                      handleDeleteImage(selectedImage.id, e)
                      handleCloseModal()
                    }}
                    className="bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    <span>{language === "pt" ? "Excluir" : "Delete"}</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#242424] p-4 rounded-lg">
                    <p className="text-gray-400 mb-1">{language === "pt" ? "Data de criação" : "Created on"}</p>
                    <p className="font-medium">{formatDate(selectedImage.createdAt)}</p>
                  </div>
                  <div className="bg-[#242424] p-4 rounded-lg">
                    <p className="text-gray-400 mb-1">{language === "pt" ? "Modelo" : "Model"}</p>
                    <p className="font-medium">{selectedImage.model}</p>
                  </div>
                  <div className="bg-[#242424] p-4 rounded-lg">
                    <p className="text-gray-400 mb-1">{language === "pt" ? "Preset" : "Preset"}</p>
                    <p className="font-medium">{selectedImage.preset[language]}</p>
                  </div>
                  <div className="bg-[#242424] p-4 rounded-lg">
                    <p className="text-gray-400 mb-1">{language === "pt" ? "Proporção" : "Aspect Ratio"}</p>
                    <p className="font-medium">{selectedImage.aspectRatio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setShowDeleteConfirmation(false)}
        >
          <div className="bg-[#181818] rounded-xl max-w-md w-full p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-medium mb-4">
              {language === "pt" ? "Confirmar exclusão" : "Confirm deletion"}
            </h3>
            <p className="text-gray-300 mb-6">
              {language === "pt"
                ? "Tem certeza que deseja excluir esta imagem? Esta ação não pode ser desfeita."
                : "Are you sure you want to delete this image? This action cannot be undone."}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="px-4 py-2 bg-[#242424] text-white rounded-md hover:bg-[#2d2d2d] transition-colors"
              >
                {language === "pt" ? "Cancelar" : "Cancel"}
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                {language === "pt" ? "Excluir" : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#b157ff] text-white rounded-full shadow-lg hover:bg-[#9645d8] transition-all duration-300 z-40 animate-fade-in"
          aria-label={language === "pt" ? "Voltar ao topo" : "Back to top"}
        >
          <ChevronUp size={24} />
        </button>
      )}

      <OffCanvasMenu isOpen={isOffCanvasOpen} onClose={() => setIsOffCanvasOpen(false)} />
    </div>
  )
}

