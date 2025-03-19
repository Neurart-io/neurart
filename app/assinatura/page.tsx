"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Twitter, CheckCircle, CreditCard, AlertCircle, User } from "lucide-react"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { Work_Sans } from "next/font/google"
import { T } from "../components/T"
import OffCanvasMenu from "../components/OffCanvasMenu"
import { useLocalization } from "../contexts/LocalizationContext"

const workSans = Work_Sans({ subsets: ["latin"] })

// Reutilizando os mesmos dados de planos da página de preços
const pricingFeatures = [
  {
    name: "pricing.features.imageQuantity",
    free: "pricing.free.imageQuantity",
    light: "pricing.light.imageQuantity",
    starter: "pricing.starter.imageQuantity",
    pro: "pricing.pro.imageQuantity",
  },
  {
    name: "pricing.features.maxImagesPerGeneration",
    free: "pricing.free.maxImagesPerGeneration",
    light: "pricing.light.maxImagesPerGeneration",
    starter: "pricing.starter.maxImagesPerGeneration",
    pro: "pricing.pro.maxImagesPerGeneration",
  },
  {
    name: "pricing.features.presets",
    free: "pricing.free.presets",
    light: "pricing.light.presets",
    starter: "pricing.starter.presets",
    pro: "pricing.pro.presets",
  },
  {
    name: "pricing.features.nsfwCensorship",
    free: "pricing.free.nsfwCensorship",
    light: "pricing.light.nsfwCensorship",
    starter: "pricing.starter.nsfwCensorship",
    pro: "pricing.pro.nsfwCensorship",
  },
  {
    name: "pricing.features.commercialUse",
    free: "pricing.free.commercialUse",
    light: "pricing.light.commercialUse",
    starter: "pricing.starter.commercialUse",
    pro: "pricing.pro.commercialUse",
  },
  {
    name: "pricing.features.discordAccess",
    free: "pricing.free.discordAccess",
    light: "pricing.light.discordAccess",
    starter: "pricing.starter.discordAccess",
    pro: "pricing.pro.discordAccess",
  },
  {
    name: "pricing.features.support",
    free: "pricing.free.support",
    light: "pricing.light.support",
    starter: "pricing.light.support",
    pro: "pricing.pro.support",
  },
]

const pricingTiers = [
  {
    name: "pricing.free.name",
    price: "pricing.free.price",
    originalPrice: "pricing.free.originalPrice",
    billing: "pricing.free.billing",
    key: "free",
  },
  {
    name: "pricing.light.name",
    price: "pricing.light.price",
    period: "pricing.light.period",
    originalPrice: "pricing.light.originalPrice",
    billing: "pricing.light.billing",
    key: "light",
  },
  {
    name: "pricing.starter.name",
    price: "pricing.starter.price",
    period: "pricing.starter.period",
    originalPrice: "pricing.starter.originalPrice",
    billing: "pricing.starter.billing",
    isBestChoice: true,
    key: "starter",
  },
  {
    name: "pricing.pro.name",
    price: "pricing.pro.price",
    period: "pricing.pro.period",
    originalPrice: "pricing.pro.originalPrice",
    billing: "pricing.pro.billing",
    key: "pro",
  },
]

// Simulando dados do usuário
const mockUserData = {
  currentPlan: "free",
  nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias a partir de hoje
  imagesGenerated: 42,
  imagesRemaining: 58,
  paymentMethod: null,
}

export default function SubscriptionPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
  const { language } = useLocalization()
  useScrollToTop()

  // Formatar data para exibição
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const handleUpgrade = (planKey: string) => {
    if (planKey === mockUserData.currentPlan) {
      return // Já está no plano atual
    }

    setSelectedTier(planKey)

    if (planKey === "free") {
      // Downgrade para plano gratuito não precisa de pagamento
      setShowConfirmation(true)
    } else {
      // Upgrade para plano pago precisa de pagamento
      setShowPaymentForm(true)
    }
  }

  const handleConfirmUpgrade = () => {
    // Simulação de upgrade
    alert(`Plano alterado com sucesso para: ${selectedTier}`)
    setShowConfirmation(false)
    setShowPaymentForm(false)
  }

  const handleCancelUpgrade = () => {
    setShowConfirmation(false)
    setShowPaymentForm(false)
    setSelectedTier(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#101010]" style={{ fontFamily: "'Kode Mono', monospace" }}>
      {/* Header simplificado para usuário logado */}
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

      <OffCanvasMenu isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />

      {/* Main Content */}
      <main className={`flex-grow flex flex-col ${workSans.className}`}>
        {/* Resumo da assinatura atual */}
        <div className="bg-[#181818] py-8 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-2xl font-bold mb-6">
              <T id="subscription.title" />
            </h1>

            <div className="bg-[#222222] p-6 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    <T id={`pricing.${mockUserData.currentPlan}.name`} />
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">
                    <T id="subscription.nextBilling" /> {formatDate(mockUserData.nextBillingDate)}
                  </p>

                  <div className="flex items-center mb-2">
                    <div className="w-full max-w-xs bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#2478ff] h-full"
                        style={{
                          width: `${(mockUserData.imagesGenerated / (mockUserData.imagesGenerated + mockUserData.imagesRemaining)) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-300">
                      {mockUserData.imagesGenerated}/{mockUserData.imagesGenerated + mockUserData.imagesRemaining}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    <T id="subscription.imagesRemaining" />: {mockUserData.imagesRemaining}
                  </p>
                </div>

                <div className="mt-6 md:mt-0">
                  {mockUserData.paymentMethod ? (
                    <div className="flex items-center">
                      <CreditCard className="mr-2 text-gray-400" size={18} />
                      <span className="text-sm text-gray-300">•••• •••• •••• 4242</span>
                      <button className="ml-3 text-[#2478ff] text-sm hover:underline">
                        <T id="subscription.updatePayment" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-400 text-sm">
                      <AlertCircle className="mr-2" size={18} />
                      <T id="subscription.noPaymentMethod" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planos disponíveis */}
        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-8">
              <T id="subscription.availablePlans" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col bg-[#181818] rounded-lg p-6 transition-all duration-300 hover:bg-[#1c1c1c] ${
                    tier.key === mockUserData.currentPlan ? "border-2 border-[#2478ff]" : ""
                  }`}
                >
                  {tier.isBestChoice && (
                    <div className="absolute top-0 right-0 bg-[#2478ff] text-white text-xs font-bold px-4 py-1 transform translate-x-2 -translate-y-2 rounded-md">
                      <T id="pricing.bestValue" />
                    </div>
                  )}

                  {tier.key === mockUserData.currentPlan && (
                    <div className="absolute top-0 left-0 bg-[#2478ff] text-white text-xs font-bold px-4 py-1 transform -translate-x-2 -translate-y-2 rounded-md">
                      <T id="subscription.currentPlan" />
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white">
                      <T id={tier.name} />
                    </h3>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <div className="text-2xl text-white font-bold">
                        <T id={tier.price} />
                      </div>
                      {tier.period && (
                        <div className="text-sm text-gray-400 ml-1">
                          <T id={tier.period} />
                        </div>
                      )}
                    </div>
                    {tier.name === "pricing.free.name" ? (
                      <div className="text-sm text-gray-400 mt-1">
                        <T id={tier.originalPrice} />
                      </div>
                    ) : (
                      <div className="text-sm text-gray-400 line-through mt-1">
                        <T id={tier.originalPrice} />
                      </div>
                    )}
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {pricingFeatures.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="text-[#2478ff] mr-2 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-gray-300">
                            {feature[tier.key as keyof typeof feature] === "✓" ? (
                              <T id={feature.name} />
                            ) : feature[tier.key as keyof typeof feature] === "X" ? (
                              <span className="text-gray-500">
                                <T id={feature.name} />
                              </span>
                            ) : (
                              <>
                                <T id={feature.name} />:{" "}
                                <span className="text-white font-medium">
                                  <T id={feature[tier.key as keyof typeof feature]} />
                                </span>
                              </>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleUpgrade(tier.key)}
                    disabled={tier.key === mockUserData.currentPlan}
                    className={`w-full py-2 rounded-md text-sm font-medium transition-colors ${
                      tier.key === mockUserData.currentPlan
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-[#2478ff] text-white hover:bg-[#1c68e3]"
                    }`}
                  >
                    {tier.key === mockUserData.currentPlan ? (
                      <T id="subscription.currentPlanButton" />
                    ) : tier.key === "free" ? (
                      <T id="subscription.downgradeToPlan" />
                    ) : (
                      <T id="subscription.upgradeToPlan" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal de confirmação */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#181818] rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              <T id="subscription.confirmDowngrade" />
            </h3>
            <p className="text-gray-300 mb-6">
              <T id="subscription.confirmDowngradeMessage" />
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelUpgrade}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600"
              >
                <T id="cancel" />
              </button>
              <button
                onClick={handleConfirmUpgrade}
                className="px-4 py-2 text-sm font-medium text-white bg-[#2478ff] rounded-md hover:bg-[#1c68e3]"
              >
                <T id="confirm" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de pagamento */}
      {showPaymentForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#181818] rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              <T id="subscription.paymentDetails" />
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <T id="subscription.cardNumber" />
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-[#222222] border border-gray-700 rounded-md text-white"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  <T id="subscription.expiryDate" />
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-[#222222] border border-gray-700 rounded-md text-white"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  <T id="subscription.cvv" />
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-[#222222] border border-gray-700 rounded-md text-white"
                  placeholder="123"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <T id="subscription.cardholderName" />
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-[#222222] border border-gray-700 rounded-md text-white"
                placeholder="Nome no cartão"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelUpgrade}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600"
              >
                <T id="cancel" />
              </button>
              <button
                onClick={handleConfirmUpgrade}
                className="px-4 py-2 text-sm font-medium text-white bg-[#2478ff] rounded-md hover:bg-[#1c68e3]"
              >
                <T id="subscription.completeUpgrade" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={32}
                height={11}
                className="object-contain"
                priority
              />
              <span className="text-lg font-bold ml-2 text-white">Neurart.io</span>
            </Link>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/neurart.io/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/neurart-io/?viewAsMember=true"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <OffCanvasMenu isOpen={isOffCanvasOpen} onClose={() => setIsOffCanvasOpen(false)} />
    </div>
  )
}

