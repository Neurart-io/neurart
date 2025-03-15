"use client"

import Image from "next/image"
import { Linkedin, Instagram, Twitter } from "lucide-react"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { T } from "../components/T"
import { useLocalization } from "../contexts/LocalizationContext"
import Link from "next/link"
import { useState } from "react"

export default function DocumentationPage() {
  useScrollToTop()
  const { language } = useLocalization()
  const [selectedPage, setSelectedPage] = useState("introduction")

  const termsOfServiceContent =
    language === "pt" ? (
      <div className="text-gray-300 space-y-6">
        <h3 className="text-xl font-bold mt-6 mb-4 text-white">Termos de Uso</h3>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">1. Introdução</h4>
        <p className="mb-6">
          Bem-vindo ao Neurart ("Serviço"). Estes Termos de Uso ("Termos") regem o seu acesso e utilização do nosso
          Serviço. Ao acessar ou utilizar o Serviço, você declara que leu, compreendeu e concorda em cumprir estes
          Termos. Caso não concorde com qualquer parte destes Termos, por favor, não utilize o Serviço.
        </p>
        <p className="mb-6">
          O Neurart é uma plataforma web que utiliza inteligência artificial para a criação de imagens, incluindo
          conteúdos artísticos, e opera globalmente, em conformidade com as leis e regulamentações vigentes em diversas
          jurisdições.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">2. Uso do Serviço</h4>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">a. Elegibilidade</h5>
        <p className="mb-6">
          Você deve ter pelo menos 18 anos de idade para utilizar o Serviço. Ao acessar ou usar o Serviço, você declara
          e garante que atende a esse requisito.
        </p>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">b. Licença de Uso</h5>
        <p className="mb-6">
          Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar o Serviço
          exclusivamente para uso pessoal e não comercial, salvo disposição em contrário acordada por escrito.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">3. Conteúdo Gerado pelo Usuário e Responsabilidade</h4>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">3.1. Responsabilidade pelo Conteúdo</h5>
        <p className="mb-6">
          <strong>Conteúdo Gerado:</strong> Todo o conteúdo (imagens, textos, dados e demais materiais) criado,
          armazenado ou distribuído por meio do Serviço é de responsabilidade exclusiva do usuário que o gerou.
        </p>
        <p className="mb-6">
          <strong>Autonomia na Criação:</strong> Embora o Serviço ofereça ferramentas, presets e, em alguns casos,
          acesso a bancos de dados de modelos públicos, a criação e a personalização do conteúdo dependem unicamente das
          escolhas do usuário.
        </p>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">3.2. Conteúdo Permitido e Proibido</h5>
        <p className="mb-6">
          Apesar de o Serviço permitir a criação de conteúdos com natureza adulta, violenta ou gráfica, o usuário
          concorda em não utilizar o Serviço para gerar ou distribuir material que:
        </p>
        <ul className="list-disc list-inside ml-4 mb-6">
          <li>Seja ilegal, abusivo, difamatório ou que infrinja direitos de terceiros;</li>
          <li>Incite violência, discriminação ou ódio;</li>
          <li>Contenha pornografia infantil ou quaisquer outros conteúdos expressamente proibidos por lei.</li>
        </ul>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">3.3. Isenção de Responsabilidade</h5>
        <p className="mb-6">
          <strong>Uso Indevido:</strong> Você é o único responsável por qualquer uso inadequado do Serviço e por
          quaisquer consequências decorrentes da criação e divulgação de conteúdo, mesmo que este seja permitido pela
          plataforma.
        </p>
        <p className="mb-6">
          <strong>Má-fé:</strong> Neurart não se responsabiliza por ações judiciais ou danos resultantes do uso
          mal-intencionado ou inadequado do Serviço.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">4. Propriedade Intelectual</h4>
        <p className="mb-6">
          <strong>Direitos do Usuário:</strong> O usuário mantém todos os direitos de propriedade intelectual sobre o
          conteúdo gerado por meio do Serviço.
        </p>
        <p className="mb-6">
          <strong>Uso pela Neurart:</strong> Ao utilizar o Serviço, o usuário concede à Neurart uma licença mundial, não
          exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir, distribuir, preparar
          trabalhos derivados, exibir e executar o conteúdo gerado em conexão com o Serviço e os negócios da Neurart,
          incluindo, sem limitação, para fins de promoção e redistribuição do Serviço.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">5. Pagamentos e Assinaturas</h4>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">5.1. Assinaturas</h5>
        <p className="mb-6">
          O acesso a certos recursos do Serviço pode exigir uma assinatura paga. Ao adquirir uma assinatura, você
          concorda em pagar as taxas aplicáveis e renová-la automaticamente, a menos que cancele sua assinatura antes da
          data de renovação.
        </p>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">5.2. Cancelamento</h5>
        <p className="mb-6">
          Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. O cancelamento
          entrará em vigor no final do período de faturamento atual.
        </p>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">5.3. Reembolsos</h5>
        <p className="mb-6">
          As taxas de assinatura não são reembolsáveis, salvo disposição em contrário na política de reembolso da
          Neurart.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">6. Limitação de Responsabilidade</h4>
        <p className="mb-6">
          O Serviço é fornecido "como está" e "conforme disponível". A Neurart não garante que o Serviço será
          ininterrupto, seguro ou livre de erros. Em nenhuma circunstância, a Neurart será responsável por quaisquer
          danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou da
          incapacidade de usar o Serviço.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">7. Alterações ao Serviço</h4>
        <p className="mb-6">
          A Neurart reserva-se o direito de modificar ou descontinuar o Serviço, ou qualquer parte dele, a qualquer
          momento, com ou sem aviso prévio.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">8. Rescisão</h4>
        <p className="mb-6">
          A Neurart pode rescindir seu acesso ao Serviço a qualquer momento, com ou sem justa causa, incluindo, sem
          limitação, se você violar estes Termos.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">9. Lei Aplicável</h4>
        <p className="mb-6">
          Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem consideração aos seus
          conflitos de disposições legais.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">10. Resolução de Disputas</h4>
        <p className="mb-6">
          Qualquer disputa decorrente ou relacionada a estes Termos será resolvida exclusivamente por meio de arbitragem
          vinculativa de acordo com as regras da Câmara de Mediação e Arbitragem do Brasil (CAMARB).
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">11. Disposições Gerais</h4>
        <p className="mb-6">
          Estes Termos constituem o acordo integral entre você e a Neurart em relação ao Serviço e substituem todos os
          acordos anteriores ou contemporâneos, escritos ou orais.
        </p>
        <p className="mb-6">
          A falha da Neurart em exercer ou fazer cumprir qualquer direito ou disposição destes Termos não constituirá
          uma renúncia a tal direito ou disposição.
        </p>
        <p className="mb-6">
          Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições
          permanecerão em pleno vigor e efeito.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">12. Contato</h4>
        <p className="mb-6">
          Se você tiver quaisquer dúvidas ou questões sobre estes Termos, entre em contato conosco através do e-mail:
          comercial@neurart.io
        </p>

        <p className="mt-4 italic">Data da última revisão: 15/fev/2025</p>
      </div>
    ) : (
      <div className="text-gray-300 space-y-6">
        <h3 className="text-xl font-bold mt-6 mb-4 text-white">Terms of Service</h3>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">1. Introduction</h4>
        <p className="mb-6">
          Welcome to Neurart ("Service"). These Terms of Service ("Terms") govern your access and use of our Service. By
          accessing or using the Service, you declare that you have read, understood, and agree to comply with these
          Terms. If you do not agree with any part of these Terms, please do not use the Service.
        </p>
        <p className="mb-6">
          Neurart is a web platform that uses artificial intelligence for image creation, including artistic content,
          and operates globally in compliance with laws and regulations in various jurisdictions.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">2. Use of the Service</h4>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">a. Eligibility</h5>
        <p className="mb-6">
          You must be at least 18 years old to use the Service. By accessing or using the Service, you represent and
          warrant that you meet this requirement.
        </p>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">b. License to Use</h5>
        <p className="mb-6">
          We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Service solely for
          personal and non-commercial use, unless otherwise agreed in writing.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">3. User-Generated Content and Responsibility</h4>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">3.1. Content Responsibility</h5>
        <p className="mb-6">
          <strong>Generated Content:</strong> All content (images, texts, data, and other materials) created, stored, or
          distributed through the Service is the sole responsibility of the user who generated it.
        </p>
        <p className="mb-6">
          <strong>Creation Autonomy:</strong> Although the Service offers tools, presets, and, in some cases, access to
          public model databases, the creation and customization of content depend solely on the user's choices.
        </p>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">3.2. Allowed and Prohibited Content</h5>
        <p className="mb-6">
          Although the Service allows the creation of content with adult, violent, or graphic nature, the user agrees
          not to use the Service to generate or distribute material that:
        </p>
        <ul className="list-disc list-inside ml-4 mb-6">
          <li>Is illegal, abusive, defamatory, or infringes on third-party rights;</li>
          <li>Incites violence, discrimination, or hatred;</li>
          <li>Contains child pornography or any other content expressly prohibited by law.</li>
        </ul>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">3.3. Disclaimer of Liability</h5>
        <p className="mb-6">
          <strong>Misuse:</strong> You are solely responsible for any inappropriate use of the Service and for any
          consequences arising from the creation and dissemination of content, even if it is allowed by the platform.
        </p>
        <p className="mb-6">
          <strong>Bad Faith:</strong> Neurart is not responsible for legal actions or damages resulting from malicious
          or inappropriate use of the Service.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">4. Intellectual Property</h4>
        <p className="mb-6">
          <strong>User Rights:</strong> The user retains all intellectual property rights to the content generated
          through the Service.
        </p>
        <p className="mb-6">
          <strong>Use by Neurart:</strong> By using the Service, the user grants Neurart a worldwide, non-exclusive,
          royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works
          of, display, and perform the generated content in connection with the Service and Neurart's business,
          including, without limitation, for purposes of promoting and redistributing the Service.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">5. Payments and Subscriptions</h4>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">5.1. Subscriptions</h5>
        <p className="mb-6">
          Access to certain features of the Service may require a paid subscription. By purchasing a subscription, you
          agree to pay the applicable fees and renew it automatically unless you cancel your subscription before the
          renewal date.
        </p>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">5.2. Cancellation</h5>
        <p className="mb-6">
          You can cancel your subscription at any time through your account settings. Cancellation will take effect at
          the end of the current billing period.
        </p>
        <h5 className="text-base font-semibold mt-2 mb-1 text-white">5.3. Refunds</h5>
        <p className="mb-6">Subscription fees are non-refundable unless otherwise stated in Neurart's refund policy.</p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">6. Limitation of Liability</h4>
        <p className="mb-6">
          The Service is provided "as is" and "as available." Neurart does not warrant that the Service will be
          uninterrupted, secure, or error-free. In no event shall Neurart be liable for any direct, indirect,
          incidental, special, consequential, or punitive damages arising out of the use of or inability to use the
          Service.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">7. Changes to the Service</h4>
        <p className="mb-6">
          Neurart reserves the right to modify or discontinue the Service, or any part thereof, at any time, with or
          without notice.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">8. Termination</h4>
        <p className="mb-6">
          Neurart may terminate your access to the Service at any time, with or without cause, including, without
          limitation, if you violate these Terms.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">9. Governing Law</h4>
        <p className="mb-6">
          These Terms shall be governed by and construed in accordance with the laws of Brazil, without regard to its
          conflict of law provisions.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">10. Dispute Resolution</h4>
        <p className="mb-6">
          Any dispute arising out of or relating to these Terms shall be resolved exclusively through binding
          arbitration in accordance with the rules of the Brazil Mediation and Arbitration Chamber (CAMARB).
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">11. General Provisions</h4>
        <p className="mb-6">
          These Terms constitute the entire agreement between you and Neurart regarding the Service and supersede all
          prior or contemporaneous agreements, written or oral.
        </p>
        <p className="mb-6">
          Neurart's failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver
          of such right or provision.
        </p>
        <p className="mb-6">
          If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain
          in full force and effect.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-3 text-white">12. Contact</h4>
        <p className="mb-6">
          If you have any questions or concerns about these Terms, please contact us at: comercial@neurart.io
        </p>

        <p className="mt-4 italic">Last revised: February 15, 2025</p>
      </div>
    )

  return (
    <div className="min-h-screen flex flex-col bg-[#101010]" style={{ fontFamily: "'Kode Mono', monospace" }}>
      {/* Header */}
      <header className="py-4 bg-[#101010]/80 backdrop-blur-sm">
        <div className="flex justify-between items-center px-[5%]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={46}
                height={16}
                className="object-contain"
                priority
              />
              <span className="ml-3 text-white text-lg">Neurart.io</span>
              <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-[#2478ff] rounded-full">Beta</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
            <nav className="space-y-8 md:sticky md:top-20 bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 shadow-md">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  <T id="docs.gettingStarted" />
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setSelectedPage("introduction")}
                      className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                        selectedPage === "introduction"
                          ? "bg-gray-700 text-white font-medium shadow-inner"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700 active:scale-[0.98]"
                      }`}
                    >
                      <T id="docs.introduction" />
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Presets</h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setSelectedPage("presets-overview")}
                      className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                        selectedPage === "presets-overview"
                          ? "bg-gray-700 text-white font-medium shadow-inner"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700 active:scale-[0.98]"
                      }`}
                    >
                      {language === "pt" ? "O Que São" : "What Are They"}
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Prompt</h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setSelectedPage("prompt-basics")}
                      className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                        selectedPage === "prompt-basics"
                          ? "bg-gray-700 text-white font-medium shadow-inner"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700 active:scale-[0.98]"
                      }`}
                    >
                      {language === "pt" ? "Prompt Básico" : "Prompt Basics"}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedPage("prompt-weights")}
                      className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                        selectedPage === "prompt-weights"
                          ? "bg-gray-700 text-white font-medium shadow-inner"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700 active:scale-[0.98]"
                      }`}
                    >
                      {language === "pt" ? "Pesos e Ênfase" : "Weights & Emphasis"}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedPage("visual-templates")}
                      className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                        selectedPage === "visual-templates"
                          ? "bg-gray-700 text-white font-medium shadow-inner"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700 active:scale-[0.98]"
                      }`}
                    >
                      {language === "pt" ? "Padrões Visuais" : "Visual Templates"}
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            <h1
              className="text-4xl font-bold mb-8 text-white tracking-wide"
              style={{
                textShadow: "0 0 1px #fff, 0 0 2px #fff",
                letterSpacing: "0.025em",
              }}
            >
              Neurart Overview
            </h1>

            {selectedPage === "introduction" && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  <T id="docs.introduction" />
                </h2>
                <p className="text-gray-300 mb-6">
                  <T id="docs.introText" />
                </p>
              </section>
            )}

            {selectedPage === "quickstart" && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  <T id="docs.quickstart" />
                </h2>
                <p className="text-gray-300 mb-6">
                  <T id="docs.quickstartText" />
                </p>
              </section>
            )}

            {selectedPage === "advanced-features" && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  <T id="docs.advancedFeatures" />
                </h2>
                <p className="text-gray-300 mb-6">
                  <T id="docs.advancedFeaturesText" />
                </p>
              </section>
            )}

            {selectedPage === "presets-overview" && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-white">Presets</h2>
                <div className="text-gray-300 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mt-6 mb-4 text-white">
                      {language === "pt" ? "O Que São?" : "What Are They?"}
                    </h3>
                    <p className="mb-6">
                      {language === "pt"
                        ? "Demos o nome de 'preset' a uma combinação de modelos e configuração de parâmetros que realizam uma determinada função, ou que têm um determinado estilo."
                        : "We named 'preset' a combination of models and parameter configuration that perform a specific function or have a specific style."}
                    </p>
                    <p className="mb-6">
                      {language === "pt"
                        ? 'Para o nosso Preset "Design - Arte Digital", combinamos 1 modelo base + 2 modelos de estilo com configuração de diversos outros parâmetros para que você atinja sem problemas um estilo de imagem épico para arte digital com apenas uma frase escrita, como por exemplo:'
                        : 'For our "Design - Digital Art" Preset, we combine 1 base model + 2 style models with various other parameter configurations to achieve an epic digital art style with just a written phrase, such as:'}
                    </p>
                    <blockquote className="border-l-4 border-gray-500 pl-4 italic my-6">
                      {language === "pt"
                        ? "1 garota, vestindo uma armadura dourada, segurando um cajado de ouro, em um castelo de tijolos brancos, magia de ouro por toda parte, pó de ouro, partículas de ouro"
                        : "1 girl, wearing golden armor, holding a golden staff, in a white brick castle, golden magic everywhere, golden dust, golden particles"}
                    </blockquote>
                    <p className="mb-6">
                      {language === "pt"
                        ? "Desenvolveremos mais presets com o tempo, focados em diversas áreas: Design, Arte, Anime, Realismo, etc!"
                        : "We will develop more presets over time, focusing on various areas: Design, Art, Anime, Realism, etc!"}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {selectedPage === "prompt-basics" && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  {language === "pt" ? "Prompt: O Básico" : "Prompt: The Basics"}
                </h2>
                <div className="text-gray-300 space-y-8">
                  <div>
                    <p className="italic mb-6">
                      {language === "pt"
                        ? "Em resumo: descreva com palavras-chave o que você deseja, e quando a IA fizer algo que você não pediu, reescreva o prompt positivo."
                        : "In summary: describe what you want with keywords, and when the AI does something you didn't ask for, rewrite the positive prompt."}
                    </p>
                    <p className="mb-6">
                      {language === "pt"
                        ? 'Prompt é como você se comunica com a IA, suas palavras são transformadas em uma espécie de "código" para que seu contexto seja compreendido. A nossa ferramenta não é um formato de conversa, você deve detalhar e descrever a imagem para que ela seja feita.'
                        : 'A prompt is how you communicate with the AI; your words are transformed into a kind of "code" so that your context is understood. Our tool is not a conversational format; you must detail and describe the image for it to be created.'}
                    </p>
                    <p className="mb-6">
                      {language === "pt"
                        ? "É sempre necessário que você escreva e detalhe o que você quer e como você quer, da maneira mais sucinta e simples possível. Coisas que não foram claras darão brecha para que a IA faça da maneira que ela entendeu o que você escreveu. Isso se dá pois máquinas são binárias."
                        : "It is always necessary for you to write and detail what you want and how you want it, as succinctly and simply as possible. Things that were not clear will leave room for the AI to do as it understood what you wrote. This happens because machines are binary."}
                    </p>
                    <p className="mb-6">
                      {language === "pt"
                        ? "Separamos prompts em positivo (coisas que você quer) e negativo (coisas não desejadas)"
                        : "We separate prompts into positive (things you want, inside parenthesis) and negative (things not desired, inside brackets)"}
                    </p>
                    <div className="bg-gray-800 p-3 rounded-md my-6">
                      <p className="text-gray-300">
                        {language === "pt" ? '("Eu quero isso, isso e aquilo")' : '("I want this, this, and that")'}
                      </p>
                      <p className="text-gray-300">
                        {language === "pt" ? '["Não quero isso, e isso"]' : '["I don\'t want this, and this"]'}
                      </p>
                    </div>
                    <p className="mb-6">
                      {language === "pt"
                        ? "Para facilitar o uso da nossa plataforma, criamos o 'Modo Fácil', no qual apenas o prompt positivo é usado, então você pode escrever coisas como:"
                        : "To make it easier to use our platform, we created 'Easy Mode', in which only the positive prompt is used, so you can write things like:"}
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-6">
                      <li>{language === "pt" ? "Foto realista de um cachorrinho" : "Realistic photo of a puppy"}</li>
                      <li>
                        {language === "pt"
                          ? "Pintura de uma flor, raios de sol, no meio do oceano"
                          : "Painting of a flower, sun rays, in the middle of the ocean"}
                      </li>
                      <li>{language === "pt" ? "Uma tartaruga com uma ((cerveja))" : "A turtle with a ((beer))"}</li>
                    </ul>
                    <p className="mb-6">
                      {language === "pt"
                        ? "Note que eu usei parênteses no prompt positivo, e isso nos leva ao próximo tópico..."
                        : "Note that I used parentheses in the positive prompt, and this leads us to the next topic..."}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {selectedPage === "prompt-weights" && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  {language === "pt" ? "Pesos, Ênfase na Palavra" : "Weights, Emphasis on the Word"}
                </h2>
                <div className="text-gray-300 space-y-8">
                  <div>
                    <p className="italic mb-6">
                      {language === "pt"
                        ? "Em resumo: para o Modo Fácil, foque apenas no prompt positivo e use pesos com parênteses para guiar o que é mais relevante."
                        : "In summary: for Easy Mode, focus only on the positive prompt and use weights with parentheses to guide what is most relevant."}
                    </p>
                    <p className="mb-6">
                      {language === "pt"
                        ? "Para ajudar a IA a entender o que é mais relevante no seu texto, podemos introduzir o conceito de pesos, que é bem simples; quanto mais peso, maior ênfase será dada àquela palavra, frase ou conceito na sua imagem, exemplo:"
                        : "To help the AI understand what is most relevant in your text, we can introduce the concept of weights, which is quite simple; the more weight, the more emphasis will be given to that word, phrase, or concept in your image, example:"}
                    </p>
                    <div className="bg-gray-800 p-3 rounded-md my-6">
                      <p className="text-gray-300">
                        {language === "pt"
                          ? '"Um palhaço triste bebendo uma cerveja" é lateralmente diferente de "Um palhaço (((triste))) bebendo uma cerveja"'
                          : '"A sad clown drinking a beer" is pretty different from "A clown (((sad))) drinking a beer"'}
                      </p>
                      <p className="text-gray-300 mt-2">
                        {language === "pt"
                          ? "O primeiro fará um palhaço triste, o segundo um palhaço BEM deprimido."
                          : "The first will create a sad clown, the second a VERY depressed clown."}
                      </p>
                    </div>

                    <h4 className="text-lg font-semibold mt-6 mb-3 text-white">
                      {language === "pt" ? "Melhores Práticas Com Pesos:" : "Best Practices With Weights"}
                    </h4>
                    <ul className="list-disc list-inside ml-4 mb-6">
                      <li>
                        {language === "pt"
                          ? "Não use pesos muito fortes, como -2 ou 2"
                          : "Do not use very strong weights, such as -2 or 2"}
                      </li>
                      <li>
                        {language === "pt"
                          ? "Use um peso entre 0.4 e 0.8 de maneira geral"
                          : "Use a weight between 0.4 and 0.8 in general"}
                      </li>
                      <li>
                        {language === "pt"
                          ? "Não introduza pesos negativos em um prompt positivo, e vice versa"
                          : "Do not introduce negative weights in a positive prompt, and vice versa"}
                      </li>
                      <li>
                        {language === "pt"
                          ? "No Modo Fácil, utilize apenas o prompt positivo para guiar a imagem como voce quer"
                          : "In Easy Mode, use only the positive prompt to guide the image as you want it"}
                      </li>
                      <li>
                        {language === "pt"
                          ? 'Não use os pesos com números (:0.5, :0.8, :1.2, etc), SE estiver escrevendo um termo composto. Exemplo seria "sobrancelha fina". Não confunda a IA com sobrancelha fina:0.5, pois ela só colocará ênfase menor na palavra "fina". Ao invés, escreva entre parênteses esses termos compostos de 2 ou mais palavras, até mesmo frases inteiras como (sobrancelha fina, cabelo curto).'
                          : 'Do not use weights with numbers (:0.5, :0.8, :1.2, etc.) if you are writing a compound term. An example would be "thin eyebrow". Don\'t confuse the AI with thin eyebrow:0.5, as it will only put less emphasis on the word "thin". Instead, write these compound terms of 2 or more words, even entire phrases in parentheses, like (thin eyebrow, short hair).'}
                      </li>
                    </ul>

                    <p className="mb-6">
                      {language === "pt"
                        ? 'Se a IA está "halucinando" e criando coisas que não deveriam estar ali ou se ela não obedece, tente consertar no prompt positivo usando pesos e siga gerando outras imagens. Exemplo:'
                        : "If the AI is \"hallucinating\" and creating things that shouldn't be there or if it doesn't comply, try to fix it in the positive prompt using weights and keep generating other images. Example:"}
                    </p>
                    <div className="bg-gray-800 p-3 rounded-md my-6">
                      <p className="text-gray-300">
                        {language === "pt"
                          ? "Digamos que este prompt esteja fazendo laranjas no chão:"
                          : "Suppose this prompt is making oranges on the ground:"}
                      </p>
                      <p className="text-gray-300 mt-2 italic">
                        {language === "pt" ? '"Arvore, laranjeira, com laranjas"' : '"Tree, orange tree, with oranges"'}
                      </p>
                      <p className="text-gray-300 mt-2">
                        {language === "pt" ? "Tente coisas como:" : "Try things like:"}
                      </p>
                      <p className="text-gray-300 mt-2 italic">
                        {language === "pt"
                          ? '"Arvore, laranjeira, com (laranjas na arvore)", ou "Arvore, laranjeira, com (fruta laranja no galho), galho com folhas e laranja"'
                          : '"Tree, orange tree, with (oranges on the tree)", or "Tree, orange tree, with (orange fruit on the branch), branch with leaves and orange"'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {selectedPage === "visual-templates" && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  {language === "pt" ? "Criando Padrão Visual" : "Creating Visual Templates"}
                </h2>
                <div className="text-gray-300 space-y-8">
                  <div>
                    <p className="italic mb-6">
                      {language === "pt"
                        ? 'Em resumo: use palavras-chave, estilos que você deseja e mescle tudo isso com pesos! Combine estilos de pintores, etnias raciais para criar as mesmas pessoas, e descreva a finalidade como "pôster" ou "carta de baralho".'
                        : 'In summary: use keywords, styles you want, and mix all that with weights! Combine painter styles, racial ethnicities to create the same people, and describe the purpose as "poster" or "playing card".'}
                    </p>
                    <p className="mb-6">
                      {language === "pt"
                        ? "Uma grande diferenciação nossa para outras plataformas é a facilidade de criar padrões visuais através da customização de modelos, ou da seleção de presets no modo fácil. Com meras palavras-chave você pode criar um tipo de arte único que te atenda!"
                        : "A major differentiation of ours from other platforms is the ease of creating visual templates through model customization or preset selection in easy mode. With mere keywords, you can create a unique type of art that suits you!"}
                    </p>

                    <h4 className="text-lg font-semibold mt-6 mb-3 text-white">
                      {language === "pt" ? "Para o Modo Fácil" : "For Easy Mode"}
                    </h4>
                    <ol className="list-decimal list-inside ml-4 mb-6 space-y-4">
                      <li>
                        <strong>
                          {language === "pt"
                            ? "Escolha um preset parecido com o que você já quer"
                            : "Choose a preset similar to what you want"}
                        </strong>
                        <p className="ml-6 mt-2">
                          {language === "pt"
                            ? 'Como por exemplo, o "Cartoon - Anos 90 Dark". Vamos imaginar que ele se aproxime do que eu necessito e desejo, porém não está 100% fiel à minha visão.'
                            : 'For example, the "Cartoon - 90s Dark". Let\'s imagine it closely matches what I need and desire but is not 100% true to my vision.'}
                        </p>
                      </li>
                      <li>
                        <strong>{language === "pt" ? "Introduza palavras-chave" : "Introduce keywords"}</strong>
                        <p className="ml-6 mt-2">
                          {language === "pt"
                            ? "Digamos que eu queira um personagem parecido com o Kaiba, do Yu-Gi-Oh. Eu posso escrever algo como:"
                            : "Let's say I want a character similar to Kaiba from Yu-Gi-Oh. I can write something like:"}
                        </p>
                        <div className="bg-gray-800 p-2 rounded-md ml-6 mt-2">
                          <p className="text-gray-300 italic">
                            {language === "pt"
                              ? '"Yugioh, Kaiba, sobretudo branco, cabelo loiro"'
                              : '"Yugioh, Kaiba, white coat, blonde hair"'}
                          </p>
                        </div>
                      </li>
                      <li>
                        <strong>{language === "pt" ? "Analise a resposta" : "Analyze the response"}</strong>
                        <p className="ml-6 mt-2">
                          {language === "pt"
                            ? "O que a imagem necessita agora? Falta algum detalhe? Saiu igual idêntico ao Kaiba, ou parecido como queríamos?"
                            : "What does the image need now? Is there a missing detail? Did it come out identical to Kaiba, or similar as we wanted?"}
                        </p>
                      </li>
                      <li>
                        <strong>
                          {language === "pt"
                            ? "Altere o prompt com ênfase e peso"
                            : "Modify the prompt with emphasis and weight"}
                        </strong>
                        <p className="ml-6 mt-2">
                          {language === "pt"
                            ? "Vamos supor agora, que a imagem fez idêntico ao Kaiba e que eu queria apenas que fosse parecido, porém com olhos pretos e loiro. Eu posso escrever:"
                            : "Let's suppose now the image came out identical to Kaiba, and I wanted it just to be similar but with black eyes and blonde hair. I can write:"}
                        </p>
                        <div className="bg-gray-800 p-2 rounded-md ml-6 mt-2">
                          <p className="text-gray-300 italic">
                            {language === "pt"
                              ? '"Yugioh, Kaiba:0.6, sobretudo branco, ((cabelo loiro))"'
                              : '"Yugioh, Kaiba:0.6, white coat, ((blonde hair))"'}
                          </p>
                        </div>
                      </li>
                      <li>
                        <strong>
                          {language === "pt"
                            ? "Reitere o prompt até chegar no resultado final"
                            : "Iterate the prompt until you reach the final result"}
                        </strong>
                        <p className="ml-6 mt-2">
                          {language === "pt"
                            ? "Vá fazendo alterações no que foi escrito até que chegue em uma etapa de apresentar consistência no personagem. Este passo a passo também é válido para estilo visual, e qualquer outro tipo de consistência que você queira introduzir!"
                            : "Keep making adjustments to what was written until you reach a stage where the character is consistently presented. This step-by-step also applies to visual style and any other type of consistency you want to introduce!"}
                        </p>
                      </li>
                    </ol>

                    <h4 className="text-lg font-semibold mt-6 mb-3 text-white">
                      {language === "pt" ? "Mais exemplos:" : "More examples:"}
                    </h4>
                    <div className="space-y-4 ml-4">
                      <div>
                        <p className="font-medium">
                          {language === "pt"
                            ? "Ângulos dinâmicos, diferentes, com visões por cima e por baixo"
                            : "Dynamic angles, different, with top and bottom views"}
                        </p>
                        <p className="ml-4 mt-2">
                          <strong>Preset Anime - Ultra</strong> +{" "}
                          <span className="italic">
                            {language === "pt"
                              ? '"1 garota, vestido longo, castelo ao fundo, ((ângulos dinâmicos))"'
                              : '"1 girl, long dress, castle in the background, ((dynamic angles))"'}
                          </span>
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">
                          {language === "pt"
                            ? "A Fera, do filme A Bela e a Fera"
                            : "The Beast from the movie Beauty and the Beast"}
                        </p>
                        <p className="ml-4 mt-2">
                          <strong>Preset Cartoon - Anos 90</strong> +{" "}
                          <span className="italic">
                            {language === "pt"
                              ? '"besta, criatura, lobisomem, (filme a bela e a fera), dançando feliz e sorridente"'
                              : '"beast, creature, werewolf, (Beauty and the Beast movie), dancing happily and smiling"'}
                          </span>
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">
                          {language === "pt"
                            ? "Criando a mesma pessoa quase sempre"
                            : "Creating almost the same person every time"}
                        </p>
                        <p className="ml-4 mt-2">
                          <strong>Preset Hiperrealista - Pessoas 2</strong> +{" "}
                          <span className="italic">
                            {language === "pt"
                              ? '"brasileira:0.5, japonesa:0.7, ((labios finos)), olhos azuis, nariz fino, sobrancelha fina, pele bronzeada, (marca de biquíni), corpo esbelto, na praia, bola de futebol no braço, embaixo do braço"'
                              : '"Brazilian:0.5, Japanese:0.7, ((thin lips)), blue eyes, thin nose, thin eyebrow, tanned skin, (bikini mark), slender body, on the beach, soccer ball on the arm, under the arm"'}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4" style={{ fontFamily: "'Kode Mono', monospace" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={32}
                height={11}
                className="object-contain"
                priority
              />
              <span className="text-lg font-bold ml-2 text-white">Neurart.io</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/neurart.io/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/neurart-io/?viewAsMember=true"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

