"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Twitter,
  CheckCircle,
  CreditCard,
  AlertCircle,
  User,
} from "lucide-react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Work_Sans } from "next/font/google";
import { T } from "../components/T";
import OffCanvasMenu from "../components/OffCanvasMenu";
import { useLocalization } from "../contexts/LocalizationContext";
import AuthenticatedHeader from "../components/AuthenticatedHeader";

const workSans = Work_Sans({ subsets: ["latin"] });

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
];

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
];

// Simulando dados do usuário
const mockUserData = {
  currentPlan: "free",
  nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias a partir de hoje
  imagesGenerated: 42,
  imagesRemaining: 58,
  paymentMethod: null,
};

export default function SubscriptionPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const { language } = useLocalization();
  useScrollToTop();

  // Formatar data para exibição
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleUpgrade = (planKey: string) => {
    if (planKey === mockUserData.currentPlan) {
      return; // Já está no plano atual
    }

    setSelectedTier(planKey);

    if (planKey === "free") {
      // Downgrade para plano gratuito não precisa de pagamento
      setShowConfirmation(true);
    } else {
      // Upgrade para plano pago precisa de pagamento
      setShowPaymentForm(true);
    }
  };

  const handleConfirmUpgrade = () => {
    // Simulação de upgrade
    alert(`Plano alterado com sucesso para: ${selectedTier}`);
    setShowConfirmation(false);
    setShowPaymentForm(false);
  };

  const handleCancelUpgrade = () => {
    setShowConfirmation(false);
    setShowPaymentForm(false);
    setSelectedTier(null);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#101010]"
      style={{ fontFamily: "'Kode Mono', monospace" }}
    >
      {/* Header simplificado para usuário logado */}
      <AuthenticatedHeader
        onOpenOffCanvas={() => setIsOffCanvasOpen(true)}
        isOffCanvasOpen={isOffCanvasOpen}
      />

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
                    <T id="subscription.nextBilling" />{" "}
                    {formatDate(mockUserData.nextBillingDate)}
                  </p>

                  <div className="flex items-center mb-2">
                    <div className="w-full max-w-xs bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#2478ff] h-full"
                        style={{
                          width: `${
                            (mockUserData.imagesGenerated /
                              (mockUserData.imagesGenerated +
                                mockUserData.imagesRemaining)) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-300">
                      {mockUserData.imagesGenerated}/
                      {mockUserData.imagesGenerated +
                        mockUserData.imagesRemaining}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    <T id="subscription.imagesRemaining" />:{" "}
                    {mockUserData.imagesRemaining}
                  </p>
                </div>

                <div className="mt-6 md:mt-0">
                  {mockUserData.paymentMethod ? (
                    <div className="flex items-center">
                      <CreditCard className="mr-2 text-gray-400" size={18} />
                      <span className="text-sm text-gray-300">
                        •••• •••• •••• 4242
                      </span>
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
                    tier.key === mockUserData.currentPlan
                      ? "border-2 border-[#2478ff]"
                      : ""
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
                          <CheckCircle
                            className="text-[#2478ff] mr-2 flex-shrink-0 mt-0.5"
                            size={16}
                          />
                          <span className="text-gray-300">
                            {feature[tier.key as keyof typeof feature] ===
                            "✓" ? (
                              <T id={feature.name} />
                            ) : feature[tier.key as keyof typeof feature] ===
                              "X" ? (
                              <span className="text-gray-500">
                                <T id={feature.name} />
                              </span>
                            ) : (
                              <>
                                <T id={feature.name} />:{" "}
                                <span className="text-white font-medium">
                                  <T
                                    id={
                                      feature[tier.key as keyof typeof feature]
                                    }
                                  />
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
              <span className="text-lg font-bold ml-2 text-white">
                Neurart.io
              </span>
            </Link>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
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
      <OffCanvasMenu
        isOpen={isOffCanvasOpen}
        onClose={() => setIsOffCanvasOpen(false)}
      />
    </div>
  );
}
